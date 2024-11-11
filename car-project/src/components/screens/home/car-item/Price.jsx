import React from "react"

const Price = ({ price }) => {
  console.log('price')

  return (
    <p>{new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'USD',

    }).format(price)}</p>
  )
}

export default React.memo(Price)
// export default Price