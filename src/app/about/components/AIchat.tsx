'use client'

// import { useChat } from 'ai/react'

const AIchat = () => {
  // const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div className='my-13'>
      <div className='border border-gray-200 px-7 py-5 h-[60svh] overflow-auto flex flex-col'>
        <div className='grow flex flex-col gap-4'>
          <div>Not available in prod</div>
          {/* {messages.map((m) => (
            <div
              key={m.id}
              className={`p-4 flex flex-col gap-4 max-w-prose bg-gray-0 border border-gray-800 rounded-l-lg rounded-tr-lg ${
                m.role === 'user' && 'self-end'
              }`}
            >
              {m.role === 'user' ? (
                <>
                  <p className='text-small-regular'>You:</p>
                  <p className='text-regular-thin'>{m.content}</p>
                </>
              ) : (
                <>
                  <p className='text-small-regular'>Kjartan:</p>
                  <p className='text-regular-thin'>{m.content}</p>
                </>
              )}
            </div>
          ))} */}
        </div>
        {/* For production */}
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
        {/* for development */}
        {/* <form onSubmit={handleSubmit}>
          <div className='flex w-full gap-4'>
            <input
              className='bg-primary-light border border-gray-900 grow p-4 text-small-thin focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out'
              value={input}
              placeholder='What is Aksels favourite food?'
              onChange={handleInputChange}
            />
            <input
              type='submit'
              value='Send'
              className='bg-primary-light border border-gray-900 p-4 text-small-thin hover:bg-gray-800 hover:text-gray-50 transition-all duration-300 ease-in-out'
            />
          </div>
        </form> */}
      </div>
    </div>
  )
}
export default AIchat
