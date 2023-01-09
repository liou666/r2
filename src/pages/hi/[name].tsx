const HiPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { t } = useTranslation(['page', 'common'])

  return (
    <div>
      {/* <div i-carbon-pedestrian text-4xl inline-block /> */}
      <p>
        {t('page:hi.hi')}
      </p>
      <p>
        <em>
          { params.name }
        </em>
      </p>
      <div>
        <button
          className='btn' onClick={() => navigate(-1)}
        >
          {t('common:button.back')}
        </button>
      </div>
    </div>
  )
}

export default HiPage
