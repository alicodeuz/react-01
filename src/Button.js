import React from 'react'

export default function Button({ title, color, className, backgroundColor, ...rest }) {
  return (
    <button {...rest} className={className} style={{ color, backgroundColor }}>
      {title}
    </button>
  )
}
