import {CountryListItem, CountryItemPara, CouItemBtn} from './styledComponents'

const CountriesList = props => {
  const {eachobj, onChanged} = props
  const {name, isVisited, id} = eachobj
  const onChangedStat = () => {
    onChanged(id)
  }
  return (
    <CountryListItem>
      <CountryItemPara color="#ffffff">{name}</CountryItemPara>
      {isVisited ? (
        <CountryItemPara color="#94a3b8">visited</CountryItemPara>
      ) : (
        <CouItemBtn type="button" onClick={onChangedStat}>
          visit
        </CouItemBtn>
      )}
    </CountryListItem>
  )
}

export default CountriesList
