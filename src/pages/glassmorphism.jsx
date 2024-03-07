import React from 'react'

export default function GlassmorphismPage() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 to-orange-500 p-8'>
        <p className='w-3/4 mx-auto text-7xl leading-10 text-white text-center -rotate-45 scale-110'>GLASSMORPHISM</p>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 rounded-3xl overflow-clip shadow-xl shadow-white/5 bg-white/20 backdrop-blur border border-white/60'></div>
    </div>
  )
}