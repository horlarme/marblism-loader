'use client'

import { Typography, Row, Col, Card, List, Button } from 'antd'
import {
  ProjectOutlined,
  LineChartOutlined,
  BellOutlined,
  SettingOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: projects, isLoading: isLoadingProjects } =
    Api.project.findMany.useQuery({
      where: { ownerUserId: user?.id },
      include: { tracks: true },
    })

  const { data: recentActivity, isLoading: isLoadingActivity } =
    Api.trackProgress.findMany.useQuery({
      where: { track: { project: { ownerUserId: user?.id } } },
      orderBy: { dateCreated: 'desc' },
      take: 5,
      include: { track: { include: { project: true } } },
    })

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16}>
          <Title level={2}>Welcome to Your Dashboard</Title>
          <Text>Here's an overview of your projects and recent activity.</Text>

          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col xs={24} md={12}>
              <Card
                title={
                  <>
                    <ProjectOutlined /> Your Projects
                  </>
                }
                extra={
                  <Button onClick={() => navigateTo('/projects')}>
                    View All
                  </Button>
                }
                loading={isLoadingProjects}
              >
                <List
                  dataSource={projects?.slice(0, 5)}
                  renderItem={project => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <a
                            onClick={() =>
                              navigateTo(`/projects/${project.id}`)
                            }
                          >
                            {project.name}
                          </a>
                        }
                        description={`${project.tracks?.length || 0} tracks`}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                title={
                  <>
                    <LineChartOutlined /> Recent Activity
                  </>
                }
                loading={isLoadingActivity}
              >
                <List
                  dataSource={recentActivity}
                  renderItem={activity => (
                    <List.Item>
                      <List.Item.Meta
                        title={`Updated ${activity.track?.name} in ${activity.track?.project?.name}`}
                        description={`Progress: ${activity.progressValue?.toString()} on ${dayjs(activity.dateRecorded).format('MMM D, YYYY')}`}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col xs={24} sm={12}>
              <Button
                icon={<BellOutlined />}
                onClick={() => navigateTo('/settings/notifications')}
                block
              >
                Notification Settings
              </Button>
            </Col>
            <Col xs={24} sm={12}>
              <Button
                icon={<SettingOutlined />}
                onClick={() => navigateTo('/settings/customization')}
                block
              >
                Customize Theme
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
