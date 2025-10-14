import React from 'react'
import { cn } from '@/lib/utils'



const Container = ({children, className}:{
    children: React.ReactNode, className?: string;
}) => {
  return (
    // max-w-screen-xl mx-auto px-4
    <div className={cn("max-w-11/12 mx-auto ", className)}>
      {children}
    </div>
  )
}

export default Container
