import ShareButton from '@shared/pure-css-components/ShareButton'


function App() {
  return (
    <div>
      <h1 className="text-3xl bg-green-700 font-bold underline">
        React 19 with Tailwind CSS v4
      </h1>
      <ShareButton size="small" variant={'primary'} label="Share"   />
      <ShareButton size="small" variant={'secondary'} label="Share" />
      <ShareButton size="large" variant={'primary'} label="Share" />
      <ShareButton size="large" variant={'secondary'} label="Share" />
      <ShareButton size="large" variant={'none'} label="Share" />
      <button className='font-semibold rounded transition-colors cursor-pointer duration-200 px-6 py-3 text-lg bg-gray-200 text-[red] hover:bg-sky-700 hover:text-white'>inline tailwind css</button>

    </div>
  )
}

export default App