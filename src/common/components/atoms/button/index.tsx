import { ReactNode } from 'react'

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}

type ButtonProps = {
  children: ReactNode
}

export default Button
