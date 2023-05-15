import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { ContainerLayout } from './styles'

export function DefaultLayout() {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
    </ContainerLayout>
  )
}
