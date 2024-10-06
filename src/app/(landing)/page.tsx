'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  BarChartOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  FlagOutlined,
  RocketOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Versatile Progress Tracking`,
      description: `Track any goal with our flexible count-based, time-based, task-based, and milestone-based options.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Intuitive Dashboard`,
      description: `Visualize your progress with our user-friendly interface, keeping you motivated and on track.`,
      icon: <BarChartOutlined />,
    },
    {
      heading: `Team Collaboration`,
      description: `Share progress and collaborate seamlessly with team members on complex projects.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Real-time Updates`,
      description: `Stay informed with instant progress updates and notifications to keep you engaged.`,
      icon: <ClockCircleOutlined />,
    },
    {
      heading: `Customizable Milestones`,
      description: `Set and celebrate key achievements along your journey to success.`,
      icon: <FlagOutlined />,
    },
    {
      heading: `Powerful API Integration`,
      description: `Easily integrate LoadingLoader with your existing workflows and applications.`,
      icon: <RocketOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Fitness Enthusiast`,
      content: `LoadingLoader transformed my fitness journey. I can now track my workouts, nutrition, and progress all in one place. It's like having a personal coach cheering me on!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Mark Thompson`,
      designation: `Project Manager`,
      content: `As a project manager, LoadingLoader has been a game-changer. It's incredibly easy to track multiple projects and keep my team aligned. Our productivity has skyrocketed!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Chen`,
      designation: `Aspiring Author`,
      content: `LoadingLoader helped me finish my first novel! Being able to visualize my daily word count progress kept me motivated throughout the entire writing process.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Rodriguez`,
      designation: `Software Developer`,
      content: `The API integration is fantastic! We've incorporated LoadingLoader into our development workflow, and it's made our sprints much more manageable and transparent.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Small Business Owner`,
      content: `LoadingLoader has been instrumental in helping me achieve my business goals. It's simple yet powerful, perfect for tracking sales, inventory, and growth targets.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Alex Novak`,
      designation: `Student`,
      content: `As a student juggling multiple courses, LoadingLoader has been a lifesaver. I can track my study hours, assignment progress, and exam preparation all at once!`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Personal`,
      description: `Perfect for individual goal-setters`,
      monthly: 9,
      yearly: 89,
      features: [`Up to 10 active tracks`, `Basic analytics`, `Email support`],
    },
    {
      title: `Professional`,
      description: `Ideal for small teams and businesses`,
      monthly: 29,
      yearly: 289,
      features: [
        `Unlimited tracks`,
        `Advanced analytics`,
        `Team collaboration`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large organizations`,
      monthly: 99,
      yearly: 989,
      features: [
        `Custom integrations`,
        `Dedicated account manager`,
        `On-premise deployment options`,
        `24/7 support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does LoadingLoader differ from traditional to-do list apps?`,
      answer: `LoadingLoader goes beyond simple task management by offering versatile progress tracking options, visual analytics, and team collaboration features. It's designed to help you see your progress over time, keeping you motivated and on track for long-term goals and complex projects.`,
    },
    {
      question: `Can I use LoadingLoader for both personal and professional goals?`,
      answer: `Absolutely! LoadingLoader is versatile enough to handle a wide range of goals, from personal fitness and reading challenges to complex work projects and team collaborations. Our flexible tracking options cater to various needs.`,
    },
    {
      question: `Is my data secure with LoadingLoader?`,
      answer: `Yes, we take data security very seriously. LoadingLoader uses industry-standard encryption and security practices to protect your information. We never share or sell your data to third parties.`,
    },
    {
      question: `How easy is it to integrate LoadingLoader with other tools I use?`,
      answer: `LoadingLoader offers a powerful API that makes integration with other tools and workflows straightforward. Whether you're a developer looking to incorporate progress tracking into your app or a business wanting to connect LoadingLoader with your existing systems, our documentation and support team are here to help.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Create Your Project`,
      description: `Set up your goal or project in minutes with our intuitive interface.`,
    },
    {
      heading: `Choose Your Track Type`,
      description: `Select from count-based, time-based, task-based, or milestone-based tracking.`,
    },
    {
      heading: `Update Your Progress`,
      description: `Log your progress regularly through our dashboard or API.`,
    },
    {
      heading: `Visualize and Achieve`,
      description: `Watch your progress bar fill up as you get closer to your goals!`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Feeling overwhelmed by untracked goals`,
    },
    {
      emoji: `😞`,
      title: `Losing motivation due to lack of visible progress`,
    },
    {
      emoji: `😖`,
      title: `Struggling to manage multiple projects efficiently`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Turn Your Dreams into Measurable Progress`}
        subtitle={`LoadingLoader: The ultimate progress tracking tool that transforms your goals into visual, achievable milestones.`}
        buttonText={`Start Your Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/hdqh2U-loadingloader-TYtS`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy goal achievers`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Organizations`}
      />
      <LandingPainPoints
        title={`Don't Let Your Goals Slip Away: 92% of People Fail to Achieve Their New Year's Resolutions`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Achieve More with LoadingLoader's Simple 4-Step Process`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Journey to Success`}
        subtitle={`Discover how LoadingLoader's powerful features can transform your goal-setting and achievement process.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real People, Real Progress`}
        subtitle={`See how LoadingLoader has helped individuals and teams turn their aspirations into reality.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Success`}
        subtitle={`Choose the plan that fits your ambition and watch your progress soar.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how LoadingLoader can help you achieve your goals.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Goals into Reality?`}
        subtitle={`Join thousands of achievers who are making measurable progress every day.`}
        buttonText={`Start Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
