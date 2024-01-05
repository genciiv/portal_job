import React from 'react'

const PageHeader = ({title, path}) => {
  return (
    <div className='py-24 mt-3 bg-gray-50 rounded flex items-center justify-center'>
      <div>
        <h2 className='text-3xl text-blue font-medium mb-1 text-center'>{title}</h2>
        <p className='text-sm text-center'><a href="/">Kryefaqe</a>/ {path}</p>
      </div>
    </div>
  )
}

export default PageHeader
