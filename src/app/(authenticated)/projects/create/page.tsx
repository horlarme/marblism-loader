'use client'

import { useState, useEffect } from 'react'
import { Typography, Form, Input, Button, Spin } from 'antd'
import { ProjectOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateEditProjectPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const projectId = params.projectId
  const isEditing = !!projectId

  const { data: project, isLoading } = Api.project.findUnique.useQuery(
    { where: { id: projectId } },
    { enabled: isEditing },
  )

  const createProject = Api.project.create.useMutation()
  const updateProject = Api.project.update.useMutation()

  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        name: project.name,
        description: project.description,
      })
    }
  }, [project, form])

  const onFinish = async (values: { name: string; description: string }) => {
    try {
      if (isEditing) {
        await updateProject.mutateAsync({
          where: { id: projectId },
          data: values,
        })
        enqueueSnackbar('Project updated successfully', { variant: 'success' })
      } else {
        const newProject = await createProject.mutateAsync({
          data: {
            ...values,
            ownerUserId: user?.id || '',
          },
        })
        enqueueSnackbar('Project created successfully', { variant: 'success' })
        router.push(`/projects/${newProject.id}`)
      }
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          {isEditing ? <EditOutlined /> : <ProjectOutlined />}{' '}
          {isEditing ? 'Edit Project' : 'Create New Project'}
        </Title>
        <Paragraph>
          {isEditing
            ? 'Update your project details below.'
            : 'Fill in the details below to create a new project.'}
        </Paragraph>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Project Name"
            rules={[
              { required: true, message: 'Please input the project name!' },
            ]}
          >
            <Input placeholder="Enter project name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Project Description"
            rules={[
              {
                required: true,
                message: 'Please input the project description!',
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Enter project description" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditing ? 'Update Project' : 'Create Project'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
