const ErrorMessage = ({ error }) => {
  if (!error) return null
  return (
    error && <p
      style={{
        color: 'red'
      }}>{error}</p>
  )
}

export default ErrorMessage