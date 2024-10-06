'use client'

import { useState } from 'react'
import { Typography, Input, Button, Table, Select, Space, Modal } from 'antd'
import {
  UserAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CollaborationManagementPage() {
  const router = useRouter()
  const params = useParams<{ projectId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [email, setEmail] = useState('')
  const [selectedCollaborator, setSelectedCollaborator] = useState<any>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: project, refetch } = Api.project.findUnique.useQuery({
    where: { id: params.projectId },
    include: { projectCollaborators: { include: { user: true } } },
  })

  const { mutateAsync: inviteCollaborator } =
    Api.invitation.create.useMutation()
  const { mutateAsync: updateCollaborator } =
    Api.projectCollaborator.update.useMutation()
  const { mutateAsync: removeCollaborator } =
    Api.projectCollaborator.delete.useMutation()

  const handleInvite = async () => {
    try {
      await inviteCollaborator({
        data: {
          inviteeEmail: email,
          status: 'PENDING',
          project: { connect: { id: params.projectId } },
          inviterUser: { connect: { id: user?.id } },
        },
      })
      enqueueSnackbar('Invitation sent successfully', { variant: 'success' })
      setEmail('')
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to send invitation', { variant: 'error' })
    }
  }

  const handleUpdatePermission = async (
    collaboratorId: string,
    newRole: string,
  ) => {
    try {
      await updateCollaborator({
        where: { id: collaboratorId },
        data: { role: newRole },
      })
      enqueueSnackbar('Collaborator permission updated', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update permission', { variant: 'error' })
    }
  }

  const handleRemoveCollaborator = async () => {
    if (!selectedCollaborator) return

    try {
      await removeCollaborator({
        where: { id: selectedCollaborator.id },
      })
      enqueueSnackbar('Collaborator removed successfully', {
        variant: 'success',
      })
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to remove collaborator', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: ['user', 'name'],
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: ['user', 'email'],
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string, record: any) => (
        <Select
          defaultValue={role}
          style={{ width: 120 }}
          onChange={value => handleUpdatePermission(record.id, value)}
        >
          <Select.Option value="VIEW">View</Select.Option>
          <Select.Option value="EDIT">Edit</Select.Option>
        </Select>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Button
          icon={<DeleteOutlined />}
          onClick={() => {
            setSelectedCollaborator(record)
            setIsModalVisible(true)
          }}
          danger
        >
          Remove
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Collaboration Management</Title>
        <Text>
          Invite collaborators and manage their permissions for this project.
        </Text>

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Space>
            <Input
              placeholder="Enter collaborator's email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: 300 }}
            />
            <Button
              type="primary"
              icon={<UserAddOutlined />}
              onClick={handleInvite}
            >
              Invite Collaborator
            </Button>
          </Space>
        </div>

        <Table
          columns={columns}
          dataSource={project?.projectCollaborators}
          rowKey="id"
        />

        <Modal
          title="Remove Collaborator"
          visible={isModalVisible}
          onOk={handleRemoveCollaborator}
          onCancel={() => setIsModalVisible(false)}
        >
          <p>Are you sure you want to remove this collaborator?</p>
        </Modal>
      </div>
    </PageLayout>
  )
}
