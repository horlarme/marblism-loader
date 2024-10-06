'use client'

import { useState } from 'react'
import { Typography, Select, Input, Button, Space, Row, Col, Card } from 'antd'
import { ColorPicker } from 'antd'
import { ReloadOutlined, SaveOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CustomizationThemesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedTheme, setSelectedTheme] = useState('default')
  const [customStyles, setCustomStyles] = useState({
    primaryColor: '#1890ff',
    secondaryColor: '#52c41a',
    fontFamily: 'Arial, sans-serif',
  })
  const [previewStyles, setPreviewStyles] = useState(customStyles)

  const { data: userPreference, refetch } =
    Api.userPreference.findFirst.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: updateUserPreference } =
    Api.userPreference.update.useMutation()

  const handleThemeChange = (value: string) => {
    setSelectedTheme(value)
    if (value === 'default') {
      setCustomStyles({
        primaryColor: '#1890ff',
        secondaryColor: '#52c41a',
        fontFamily: 'Arial, sans-serif',
      })
    }
  }

  const handleStyleChange = (key: string, value: string) => {
    setCustomStyles(prev => ({ ...prev, [key]: value }))
  }

  const handlePreview = () => {
    setPreviewStyles(customStyles)
  }

  const handleSave = async () => {
    try {
      await updateUserPreference({
        where: { id: userPreference?.id },
        data: {
          themeName: selectedTheme,
          customStyles: JSON.stringify(customStyles),
        },
      })
      enqueueSnackbar('Theme settings saved successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to save theme settings', { variant: 'error' })
    }
  }

  const handleReset = () => {
    setSelectedTheme('default')
    setCustomStyles({
      primaryColor: '#1890ff',
      secondaryColor: '#52c41a',
      fontFamily: 'Arial, sans-serif',
    })
    setPreviewStyles({
      primaryColor: '#1890ff',
      secondaryColor: '#52c41a',
      fontFamily: 'Arial, sans-serif',
    })
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Customization Themes</Title>
          <Text>
            Personalize your dashboard appearance and preview changes before
            applying them.
          </Text>

          <Card style={{ marginTop: 24 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select
                style={{ width: '100%' }}
                value={selectedTheme}
                onChange={handleThemeChange}
              >
                <Option value="default">Default Theme</Option>
                <Option value="custom">Custom Theme</Option>
              </Select>

              {selectedTheme === 'custom' && (
                <>
                  <Space>
                    <Text>Primary Color:</Text>
                    <ColorPicker
                      value={customStyles.primaryColor}
                      onChange={color =>
                        handleStyleChange('primaryColor', color.toHexString())
                      }
                    />
                  </Space>
                  <Space>
                    <Text>Secondary Color:</Text>
                    <ColorPicker
                      value={customStyles.secondaryColor}
                      onChange={color =>
                        handleStyleChange('secondaryColor', color.toHexString())
                      }
                    />
                  </Space>
                  <Space>
                    <Text>Font Family:</Text>
                    <Input
                      value={customStyles.fontFamily}
                      onChange={e =>
                        handleStyleChange('fontFamily', e.target.value)
                      }
                    />
                  </Space>
                </>
              )}

              <Space>
                <Button icon={<EyeOutlined />} onClick={handlePreview}>
                  Preview
                </Button>
                <Button
                  icon={<SaveOutlined />}
                  type="primary"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
                <Button icon={<ReloadOutlined />} onClick={handleReset}>
                  Reset to Default
                </Button>
              </Space>
            </Space>
          </Card>

          <Card style={{ marginTop: 24 }}>
            <Title level={3}>Preview</Title>
            <div
              style={{
                backgroundColor: previewStyles.primaryColor,
                color: 'white',
                padding: 16,
                fontFamily: previewStyles.fontFamily,
              }}
            >
              <h3>Primary Color Sample</h3>
              <p>This is how your primary color will look.</p>
            </div>
            <div
              style={{
                backgroundColor: previewStyles.secondaryColor,
                color: 'white',
                padding: 16,
                marginTop: 16,
                fontFamily: previewStyles.fontFamily,
              }}
            >
              <h3>Secondary Color Sample</h3>
              <p>This is how your secondary color will look.</p>
            </div>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
