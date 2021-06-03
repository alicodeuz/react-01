import React from 'react'

export default function UniversalComponent({ title, children }) {
  return (
    <article>
      <h3>{title}</h3>
      {children}
    </article>
  )
}
