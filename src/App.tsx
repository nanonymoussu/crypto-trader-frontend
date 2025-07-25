import { HashRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from './components/ui/toaster'
import { Toaster as Sonner } from './components/ui/sonner'
import { TooltipProvider } from './components/ui/tooltip'

import Home from './pages/Home'

const queryClient = new QueryClient()

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className='min-h-screen bg-background'>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </HashRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </>
)

export default App
