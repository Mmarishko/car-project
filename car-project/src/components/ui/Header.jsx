import { useAuth } from '../../hooks/useAuth'

const Header = () => {
  const { user, setUser } = useAuth()

  return (
    !!user ? (
      <>
        <h2>Hello, {user.name}</h2>
        <button onClick={() => setUser(null)}>Logout</button>
      </>
    ) : (
      <>
        <h2>You do not autorized!!!</h2>
        <button onClick={() =>
          setUser({
            name: 'Max'
          })
        }>Login</button>
      </>
    )
  )
}

export default Header