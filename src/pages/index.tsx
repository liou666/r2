import { Button, DatePicker, Table } from 'antd'
const IndexPage = () => {
  const [name] = useState('')
  const { t } = useTranslation(['common', 'page'])
  const navigate = useNavigate()

  const handleClickEnter = useMemoizedFn(() => {
    if (name)
      navigate(`/hi/${encodeURIComponent(name)}`)
  })
  console.log(t('page:home.hed', { name: 'xxxxx' }))
  return (
    <div>
      <Button type='primary' className='m-1'>lang</Button>
      <DatePicker />
      <Table />
      {/* <div
        className='i-carbon-cookie text-4xl inline-block hover:op75'
      /> */}
      <div>
        <button
          className='btn  m-3 text-sm'
          onClick={handleClickEnter}
          disabled={!name}
        >
          {t('common:button.go')}
        </button>
      </div>
    </div>
  )
}

export default IndexPage
