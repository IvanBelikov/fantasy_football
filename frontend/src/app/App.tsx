import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@base/lib'

import { AppRouter } from './router'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}
