import React from 'react'
import { Handle } from 'reactflow'

function MessageNodes() {
  return (
    <div className='bg-white border border-black rounded-md'>
        <div className='bg-blue-400 text-white text-lg p-2'>Send Message</div>
        <p className='text-gray-800 text-sm'>text message</p>
        <Handle type='source' position='bottom'/>
    </div>
  )
}

export default MessageNodes