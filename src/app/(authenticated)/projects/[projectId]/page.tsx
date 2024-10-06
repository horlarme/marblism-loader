'use client'

import { Typography, Button, Space, Card, List, Modal, Form, Input } from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isCreateTrackModalVisible, setIsCreateTrackModalVisible] =
    useState(false)
  const [form] = Form.useForm()

  const {
    data: project,
    isLoading,
    refetch,
  } = Api.project.findFirst.useQuery({
    where: { id: params.projectId },
    include: { tracks: true },
  })

  const { mutateAsync: updateProject } = Api.project.update.useMutation()
  const { mutateAsync: deleteProject } = Api.project.delete.useMutation()
  const { mutateAsync: createTrack } = Api.track.create.useMutation()

  const handleEdit = async (values: any) => {
    try {
      await updateProject({
        where: { id: params.projectId },
        data: values,
      })
      enqueueSnackbar('Project updated successfully', { variant: 'success' })
      setIsEditModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update project', { variant: 'error' })
    }
  }

  const handleDelete = async () => {
    try {
      await deleteProject({ where: { id: params.projectId } })
      enqueueSnackbar('Project deleted successfully', { variant: 'success' })
      router.push('/projects')
    } catch (error) {
      enqueueSnackbar('Failed to delete project', { variant: 'error' })
    }
  }

  const handleCreateTrack = async (values: any) => {
    try {
      await createTrack({
        data: {
          ...values,
          projectId: params.projectId,
        },
      })
      enqueueSnackbar('Track created successfully', { variant: 'success' })
      setIsCreateTrackModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create track', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>Project Details</Title>
        <Paragraph>
          View and manage your project information and associated tracks.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={3}>{project?.name}</Title>
            <Paragraph>{project?.description}</Paragraph>
            <Text>
              Created on: {dayjs(project?.dateCreated).format('MMMM D, YYYY')}
            </Text>
            <Space>
              <Button
                icon={<EditOutlined />}
                onClick={() => setIsEditModalVisible(true)}
              >
                Edit Project
              </Button>
              <Button
                icon={<DeleteOutlined />}
                danger
                onClick={() => setIsDeleteModalVisible(true)}
              >
                Delete Project
              </Button>
            </Space>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={4}>Tracks</Title>
            <Button
              icon={<PlusOutlined />}
              onClick={() => setIsCreateTrackModalVisible(true)}
            >
              Create New Track
            </Button>
            <List
              dataSource={project?.tracks}
              renderItem={(track: any) => (
                <List.Item>
                  <List.Item.Meta
                    title={track.name}
                    description={track.description}
                  />
                  <Button
                    onClick={() =>
                      router.push(
                        `/projects/${params.projectId}/tracks/${track.id}`,
                      )
                    }
                  >
                    View Details
                  </Button>
                </List.Item>
              )}
            />
          </Space>
        </Card>
      </Space>

      <Modal
        title="Edit Project"
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleEdit} initialValues={project}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete Project"
        visible={isDeleteModalVisible}
        onOk={handleDelete}
        onCancel={() => setIsDeleteModalVisible(false)}
      >
        <p>
          Are you sure you want to delete this project? This action cannot be
          undone.
        </p>
      </Modal>

      <Modal
        title="Create New Track"
        visible={isCreateTrackModalVisible}
        onCancel={() => setIsCreateTrackModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleCreateTrack}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Track
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
