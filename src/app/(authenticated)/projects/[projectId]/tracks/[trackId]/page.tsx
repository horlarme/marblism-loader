'use client'

import {
  Typography,
  Card,
  Space,
  Progress,
  Button,
  Input,
  InputNumber,
  Modal,
  Checkbox,
} from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CheckOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TrackDetailPage() {
  const router = useRouter()
  const params = useParams<{ projectId: string; trackId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editTargetValue, setEditTargetValue] = useState<number | null>(null)
  const [newProgressValue, setNewProgressValue] = useState<number | null>(null)

  const {
    data: track,
    isLoading,
    refetch,
  } = Api.track.findUnique.useQuery({
    where: { id: params.trackId },
    include: { tasks: true, trackProgresss: true },
  })

  const { mutateAsync: updateTrack } = Api.track.update.useMutation()
  const { mutateAsync: deleteTrack } = Api.track.delete.useMutation()
  const { mutateAsync: createTask } = Api.task.create.useMutation()
  const { mutateAsync: updateTask } = Api.task.update.useMutation()
  const { mutateAsync: createTrackProgress } =
    Api.trackProgress.create.useMutation()

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  if (!track) {
    return <PageLayout layout="full-width">Track not found</PageLayout>
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditName(track.name || '')
    setEditDescription(track.description || '')
    setEditTargetValue(track.targetValue || null)
  }

  const handleSave = async () => {
    try {
      await updateTrack({
        where: { id: track.id },
        data: {
          name: editName,
          description: editDescription,
          targetValue: editTargetValue,
        },
      })
      setIsEditing(false)
      refetch()
      enqueueSnackbar('Track updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update track', { variant: 'error' })
    }
  }

  const handleDelete = async () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this track?',
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteTrack({ where: { id: track.id } })
          enqueueSnackbar('Track deleted successfully', { variant: 'success' })
          router.push(`/projects/${params.projectId}`)
        } catch (error) {
          enqueueSnackbar('Failed to delete track', { variant: 'error' })
        }
      },
    })
  }

  const handleAddTask = async () => {
    try {
      await createTask({
        data: {
          description: 'New Task',
          isCompleted: false,
          trackId: track.id,
        },
      })
      refetch()
      enqueueSnackbar('Task added successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add task', { variant: 'error' })
    }
  }

  const handleToggleTask = async (taskId: string, isCompleted: boolean) => {
    try {
      await updateTask({
        where: { id: taskId },
        data: { isCompleted: !isCompleted },
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update task', { variant: 'error' })
    }
  }

  const handleAddProgress = async () => {
    if (newProgressValue === null) {
      enqueueSnackbar('Please enter a progress value', { variant: 'error' })
      return
    }
    try {
      await createTrackProgress({
        data: {
          progressValue: newProgressValue,
          dateRecorded: dayjs().format('YYYY-MM-DD'),
          trackId: track.id,
        },
      })
      setNewProgressValue(null)
      refetch()
      enqueueSnackbar('Progress added successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add progress', { variant: 'error' })
    }
  }

  const progressPercentage = track.targetValue
    ? Math.min(100, ((track.currentValue || 0) / track.targetValue) * 100)
    : 0

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>Track Details</Title>
        <Card>
          {isEditing ? (
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input
                value={editName}
                onChange={e => setEditName(e.target.value)}
                placeholder="Track Name"
              />
              <Input.TextArea
                value={editDescription}
                onChange={e => setEditDescription(e.target.value)}
                placeholder="Description"
              />
              <InputNumber
                value={editTargetValue}
                onChange={value => setEditTargetValue(value)}
                placeholder="Target Value"
              />
              <Space>
                <Button onClick={handleSave} type="primary">
                  Save
                </Button>
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
              </Space>
            </Space>
          ) : (
            <>
              <Title level={3}>{track.name}</Title>
              <Paragraph>{track.description}</Paragraph>
              <Text strong>Target: {track.targetValue?.toString()}</Text>
              <Text strong> Current: {track.currentValue?.toString()}</Text>
              <Progress percent={progressPercentage} status="active" />
              <Space>
                <Button icon={<EditOutlined />} onClick={handleEdit}>
                  Edit
                </Button>
                <Button icon={<DeleteOutlined />} onClick={handleDelete} danger>
                  Delete
                </Button>
              </Space>
            </>
          )}
        </Card>

        <Card title="Tasks">
          {track.tasks?.map(task => (
            <div key={task.id}>
              <Checkbox
                checked={task.isCompleted}
                onChange={() =>
                  handleToggleTask(task.id, task.isCompleted || false)
                }
              >
                {task.description}
              </Checkbox>
            </div>
          ))}
          <Button icon={<PlusOutlined />} onClick={handleAddTask}>
            Add Task
          </Button>
        </Card>

        <Card title="Progress">
          {track.trackProgresss?.map(progress => (
            <div key={progress.id}>
              <Text>
                {progress.progressValue?.toString()} on {progress.dateRecorded}
              </Text>
            </div>
          ))}
          <Space>
            <InputNumber
              value={newProgressValue}
              onChange={value => setNewProgressValue(value)}
              placeholder="Progress Value"
            />
            <Button icon={<PlusOutlined />} onClick={handleAddProgress}>
              Add Progress
            </Button>
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
