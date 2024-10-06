'use client'

import {
  Typography,
  Switch,
  InputNumber,
  Form,
  Button,
  Space,
  Card,
} from 'antd'
import { BellOutlined, SettingOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NotificationSettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: notificationSettings,
    isLoading,
    refetch,
  } = Api.notificationSetting.findMany.useQuery({
    where: { userId: user?.id },
    include: { project: true, track: true },
  })

  const { mutateAsync: updateNotificationSetting } =
    Api.notificationSetting.update.useMutation()
  const { mutateAsync: createNotificationSetting } =
    Api.notificationSetting.create.useMutation()

  const handleToggle = async (settingId: string, isEnabled: boolean) => {
    try {
      await updateNotificationSetting({
        where: { id: settingId },
        data: { isEnabled },
      })
      enqueueSnackbar('Notification setting updated successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update notification setting', {
        variant: 'error',
      })
    }
  }

  const handleThresholdChange = async (
    settingId: string,
    thresholdPercentage: number,
  ) => {
    try {
      await updateNotificationSetting({
        where: { id: settingId },
        data: { thresholdPercentage },
      })
      enqueueSnackbar('Threshold updated successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update threshold', { variant: 'error' })
    }
  }

  const handleCreateSetting = async (values: any) => {
    try {
      await createNotificationSetting({
        data: {
          ...values,
          userId: user?.id,
          isEnabled: true,
        },
      })
      enqueueSnackbar('New notification setting created successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create new notification setting', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>
            <BellOutlined /> Notification Settings
          </Title>
          <Text>
            Configure your notification preferences for tracks and projects.
          </Text>

          {isLoading ? (
            <Text>Loading notification settings...</Text>
          ) : (
            <>
              {notificationSettings?.map(setting => (
                <Card
                  key={setting.id}
                  title={`${setting.notificationType} Notification`}
                  extra={<SettingOutlined />}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space>
                      <Switch
                        checked={setting.isEnabled}
                        onChange={checked => handleToggle(setting.id, checked)}
                      />
                      <Text>{setting.isEnabled ? 'Enabled' : 'Disabled'}</Text>
                    </Space>
                    {setting.project && (
                      <Text>Project: {setting.project.name}</Text>
                    )}
                    {setting.track && <Text>Track: {setting.track.name}</Text>}
                    <Space>
                      <Text>Threshold:</Text>
                      <InputNumber
                        min={0}
                        max={100}
                        value={setting.thresholdPercentage}
                        onChange={value =>
                          handleThresholdChange(setting.id, value as number)
                        }
                        formatter={value => `${value}%`}
                        parser={value => value!.replace('%', '')}
                      />
                    </Space>
                  </Space>
                </Card>
              ))}

              <Card title="Create New Notification Setting">
                <Form onFinish={handleCreateSetting} layout="vertical">
                  <Form.Item
                    name="notificationType"
                    label="Notification Type"
                    rules={[{ required: true }]}
                  >
                    <InputNumber
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => value!.replace('%', '')}
                    />
                  </Form.Item>
                  <Form.Item
                    name="thresholdPercentage"
                    label="Threshold Percentage"
                    rules={[{ required: true }]}
                  >
                    <InputNumber
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => value!.replace('%', '')}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Create Notification Setting
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </>
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
