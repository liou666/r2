import type { KeyboardEvent } from 'react'

const IndexPage = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleKeyDownEnter = useMemoizedFn((e: KeyboardEvent) => {
    if (e && e.code === 'Enter' && name)
      navigate(`/hi/${encodeURIComponent(name)}`)
  })

  const handleClickEnter = useMemoizedFn(() => {
    if (name)
      navigate(`/hi/${encodeURIComponent(name)}`)
  })

  return (
    <div>
      <div
        i-carbon-cookie text-4xl inline-block
        hover:op75
      />
      <p>
        <em text-sm op75>Opinionated Vite Starter Template</em>
      </p>
      <div py-4 />
      <input
        id='input'
        placeholder="What's your name?"
        type='text'
        autoComplete='false'
        p='x-4 y-2'
        w='250px'
        text='center'
        bg='transparent'
        border='~ rounded gray-200 dark:gray-700'
        outline='none active:none'
        onKeyDown={handleKeyDownEnter}
        onChange={e => setName(e.target.value)}
      />
      <div>
        <button
          className='btn  m-3 text-sm'
          onClick={handleClickEnter}
          disabled={!name}
        >
          Go
        </button>
      </div>
    </div>
  )
}

export default IndexPage
