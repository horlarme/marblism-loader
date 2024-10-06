'use client'

import { useState } from 'react'
import { Typography, List, Card, Button, Modal, Form, Input, Space } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProjectsDashboardPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: projects,
    isLoading,
    refetch,
  } = Api.project.findMany.useQuery({
    where: { ownerUserId: user?.id },
  })

  const { mutateAsync: createProject } = Api.project.create.useMutation()
  const { mutateAsync: deleteProject } = Api.project.delete.useMutation()

  const handleCreateProject = async (values: {
    name: string
    description: string
  }) => {
    try {
      await createProject({
        data: {
          name: values.name,
          description: values.description,
          ownerUserId: user?.id || '',
        },
      })
      enqueueSnackbar('Project created successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create project', { variant: 'error' })
    }
  }

  const handleDeleteProject = async (projectId: string) => {
    try {
      await deleteProject({ where: { id: projectId } })
      enqueueSnackbar('Project deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete project', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Projects Dashboard</Title>
        <Paragraph>Manage and organize your projects effectively.</Paragraph>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
          style={{ marginBottom: 16 }}
        >
          Create New Project
        </Button>

        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
          dataSource={projects}
          loading={isLoading}
          renderItem={project => (
            <List.Item>
              <Card
                title={project.name}
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => router.push(`/projects/${project.id}`)}
                  />,
                  <DeleteOutlined
                    key="delete"
                    onClick={() => handleDeleteProject(project.id)}
                  />,
                ]}
              >
                <Paragraph ellipsis={{ rows: 2 }}>
                  {project.description}
                </Paragraph>
              </Card>
            </List.Item>
          )}
        />

        <Modal
          title="Create New Project"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateProject} layout="vertical">
            <Form.Item
              name="name"
              label="Project Name"
              rules={[
                { required: true, message: 'Please enter a project name' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
                <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
