import React, { HtmlHTMLAttributes } from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string,
}
const Button = (props: ButtonProps) => {
  const {title, ...rest} = props
  return (
    <button {...rest}>{title}</button>
  )
}

export default Button