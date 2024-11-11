import { useContext } from 'react'
import { AuthContext } from '../provaders/AuthProvader'


export const withAuth = Component => props => {
  const { user } = useContext(AuthContext)

  if (!user) return <p>You are not authorized</p>

  return <Component {...props} />;
}