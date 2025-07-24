import { ArrowUpDown, BarChart3, ShieldCheck, Wallet } from 'lucide-react'

export const features = [
  {
    title: 'Advanced Trading Interface',
    description:
      'Professional-grade trading tools with real-time market data and advanced charting capabilities.',
    icon: <BarChart3 className='w-6 h-6' />,
    image: './assets/features/feature-1.png',
  },
  {
    title: 'Portfolio Management',
    description:
      'Track your investments and monitor your gains with our comprehensive portfolio dashboard.',
    icon: <Wallet className='w-6 h-6' />,
    image: './assets/features/feature-2.png',
  },
  {
    title: 'Security & Verification',
    description:
      'Industry-leading security measures with KYC verification process to protect your assets.',
    icon: <ShieldCheck className='w-6 h-6' />,
    image: './assets/features/feature-3.png',
  },
  {
    title: 'Performance Analytics',
    description:
      'Detailed analytics and credit scoring system to help you make informed decisions.',
    icon: <ArrowUpDown className='w-6 h-6' />,
    image: './assets/features/feature-4.png',
  },
]
