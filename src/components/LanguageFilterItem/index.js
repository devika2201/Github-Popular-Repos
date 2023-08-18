// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, setActiveLanguageFilterId} = props
  const {language, id} = languageDetails
  const activeClassName = isActive ? 'active-language-btn' : ''

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
