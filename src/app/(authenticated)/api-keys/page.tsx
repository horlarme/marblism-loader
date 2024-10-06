'use client'

import { useState } from 'react'
import { Typography, Table, Button, Modal, Input, Space } from 'antd'
import {
  KeyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function APIKeysManagementPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newKeyName, setNewKeyName] = useState('')

  const {
    data: apiKeys,
    isLoading,
    refetch,
  } = Api.apiKey.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: createApiKey } = Api.apiKey.create.useMutation()
  const { mutateAsync: deleteApiKey } = Api.apiKey.delete.useMutation()

  const handleCreateApiKey = async () => {
    try {
      await createApiKey({
        data: {
          apiKeyValue: `ak_${Math.random().toString(36).substr(2, 9)}`,
          isRevoked: false,
          userId: user?.id || '',
        },
      })
      enqueueSnackbar('API key created successfully', { variant: 'success' })
      refetch()
      setIsModalVisible(false)
      setNewKeyName('')
    } catch (error) {
      enqueueSnackbar('Failed to create API key', { variant: 'error' })
    }
  }

  const handleDeleteApiKey = async (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this API key?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteApiKey({ where: { id } })
          enqueueSnackbar('API key deleted successfully', {
            variant: 'success',
          })
          refetch()
        } catch (error) {
          enqueueSnackbar('Failed to delete API key', { variant: 'error' })
        }
      },
    })
  }

  const columns = [
    {
      title: 'API Key',
      dataIndex: 'apiKeyValue',
      key: 'apiKeyValue',
      render: (text: string) => <Text copyable>{text}</Text>,
    },
    {
      title: 'Status',
      dataIndex: 'isRevoked',
      key: 'isRevoked',
      render: (isRevoked: boolean) => (
        <Text type={isRevoked ? 'danger' : 'success'}>
          {isRevoked ? 'Revoked' : 'Active'}
        </Text>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteApiKey(record.id)}
        >
          Delete
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>API Keys Management</Title>
        <Text>
          Manage your API keys to securely integrate with external applications.
        </Text>

        <div style={{ marginTop: '24px', marginBottom: '24px' }}>
          <Button
            type="primary"
            icon={<KeyOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            Generate New API Key
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={apiKeys}
          loading={isLoading}
          rowKey="id"
          pagination={false}
        />

        <Modal
          title="Generate New API Key"
          visible={isModalVisible}
          onOk={handleCreateApiKey}
          onCancel={() => setIsModalVisible(false)}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text>Enter a name for your new API key (optional):</Text>
            <Input
              placeholder="API Key Name"
              value={newKeyName}
              onChange={e => setNewKeyName(e.target.value)}
            />
          </Space>
        </Modal>
      </div>
    </PageLayout>
  )
}
