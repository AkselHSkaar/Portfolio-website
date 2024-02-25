'use client'

const AIchat = () => {
  return (
    <div className='my-13'>
      <div className='border border-gray-200 px-7 py-5 h-[60svh] overflow-auto flex flex-col'>
        <div className='grow flex flex-col gap-4'>
          <div className='h-full'>Not available in prod</div>
          <form>
            <div className='flex w-full gap-4'>
              <input
                className='bg-primary-light border border-gray-900 grow p-4 text-small-thin focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
                placeholder='What is Aksels favourite food?'
              />
              <input
                type='submit'
                value='Send'
                className='bg-primary-light border border-gray-900 p-4 text-small-thin hover:bg-gray-800 hover:text-gray-50 transition-all duration-300 ease-in-out'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AIchat
