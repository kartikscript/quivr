import React from 'react'

const Title = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className="text-center text-5xl capitalize leading-[1.3] font-medium tracking-wide">
      {children}
    </h2>

  )
}

export default Title