import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />

        <Toaster richColors />
      </HelmetProvider>
    </ThemeProvider>
  )
}
