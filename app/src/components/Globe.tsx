import React from 'react'

interface globeProps {
  setGlobe: any
  setCurrency?: any
}

const Globe = (props: globeProps) => {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-stone-700/75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex">
              <div className='cursor-pointer' onClick={() => props.setGlobe(false)}>X</div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900" id="modal-title">Currency</h3>
            </div>
            <hr />
            <div className='grid grid-cols-4 p-8 text-gray-500'>
              <div onClick={() => props.setCurrency('PEN')} className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
              <div className='mt-3 ml-3 cursor-pointer'>
                <h1>Peruvian Sol</h1>
                <h1>PEN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Globe