'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  Space,
} from 'antd'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateEditTrackPage() {
  const router = useRouter()
  const params = useParams<{ projectId: string; trackId?: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [isEditing, setIsEditing] = useState(false)

  const { data: track, isLoading: isLoadingTrack } =
    Api.track.findUnique.useQuery(
      { where: { id: params.trackId } },
      { enabled: !!params.trackId },
    )

  const { mutateAsync: createTrack } = Api.track.create.useMutation()
  const { mutateAsync: updateTrack } = Api.track.update.useMutation()

  useEffect(() => {
    if (track) {
      setIsEditing(true)
      form.setFieldsValue({
        ...track,
        startDate: track.startDate ? dayjs(track.startDate) : undefined,
        endDate: track.endDate ? dayjs(track.endDate) : undefined,
      })
    }
  }, [track, form])

  const onFinish = async (values: any) => {
    try {
      const trackData = {
        ...values,
        projectId: params.projectId,
        startDate: values.startDate?.format('YYYY-MM-DD'),
        endDate: values.endDate?.format('YYYY-MM-DD'),
      }

      if (isEditing) {
        await updateTrack({ where: { id: params.trackId }, data: trackData })
        enqueueSnackbar('Track updated successfully', { variant: 'success' })
      } else {
        await createTrack({ data: trackData })
        enqueueSnackbar('Track created successfully', { variant: 'success' })
      }

      router.push(`/projects/${params.projectId}`)
    } catch (error) {
      enqueueSnackbar('Error saving track', { variant: 'error' })
    }
  }

  if (isLoadingTrack) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>{isEditing ? 'Edit Track' : 'Create New Track'}</Title>
        <Text>
          {isEditing
            ? 'Update the track attributes and settings.'
            : 'Create a new track by selecting a track type and entering required attributes.'}
        </Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: 24 }}
        >
          <Form.Item
            name="name"
            label="Track Name"
            rules={[{ required: true, message: 'Please enter a track name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="trackType"
            label="Track Type"
            rules={[{ required: true, message: 'Please select a track type' }]}
          >
            <Select>
              <Option value="Count-Based">Count-Based</Option>
              <Option value="Time-Based">Time-Based</Option>
              <Option value="Task-Based">Task-Based</Option>
              <Option value="Milestone">Milestone</Option>
            </Select>
          </Form.Item>

          <Form.Item name="targetValue" label="Target Value">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="currentValue" label="Current Value">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="startDate" label="Start Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="endDate" label="End Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={isEditing ? <EditOutlined /> : <PlusOutlined />}
              >
                {isEditing ? 'Update Track' : 'Create Track'}
              </Button>
              <Button
                onClick={() => router.push(`/projects/${params.projectId}`)}
              >
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
