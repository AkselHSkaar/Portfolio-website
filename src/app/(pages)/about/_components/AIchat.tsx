'use client'

import { useChat } from 'ai/react'
import TextInput from '@/components/Input/TextInput'
import SendIcon from '@/components/icons/SendIcon'

const AIchat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const noMessages = true

  return (
    <section className='h-[90svh] mb-7'>
      <div className='h-full flex grow'>
        {noMessages && (
          <div className='flex flex-col grow justify-between pb-4'>
            <div className='flex grow justify-center'>
              <p className='text-center self-center text-gray-500 max-w-[70%]'>
                Skip the boring bio— Ive programmed an AI model with the
                essentials about me. Ask whatever you want!
              </p>
            </div>
            <div className='flex gap-3 text-left'>
              <button className='p-3 border border-gray-200 text-xsmall-thin'>
                What projects has Aksel worked on the last year?
              </button>
              <button className='p-3 border border-gray-200 text-xsmall-thin'>
                What projects has Aksel worked on the last year?
              </button>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex w-full gap-4'>
          <TextInput
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
      </form>
    </section>
  )
}
export default AIchat

{
  /*
      <div className='px-7 py-5 h-[60svh] overflow-auto flex flex-col'>
         <div className='grow flex flex-col gap-4'>
          {messages.map((m) => (
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
          ))}
        </div> */
}
