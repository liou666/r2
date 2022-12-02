const HiPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { t } = useTranslation(['page', 'common'])

  return (
    <div>
      <div i-carbon-pedestrian text-4xl inline-block />
      <p>
        {t('page:hi.hi')}
      </p>
      <p text-sm op50>
        <em>
          { params.name }
        </em>
      </p>
      <div>
        <button
          className='btn' m-3 text-sm
          mt-8 onClick={() => navigate(-1)}
        >
          {t('common:button.back')}
        </button>
      </div>
    </div>
  )
}

export default HiPage
