import {
  VisitedCountryListItem,
  VDCImg,
  VDCDesCont,
  VDCPara,
  VDCDesBtn,
} from './styledComponents'

const VisitedCountries = props => {
  const {eachobj, onChanged} = props
  const {name, imageUrl, id} = eachobj
  const onChangedStat = () => {
    onChanged(id)
  }
  return (
    <VisitedCountryListItem>
      <VDCImg src={imageUrl} alt="thumbnail" />
      <VDCDesCont>
        <VDCPara>{name}</VDCPara>
        <VDCDesBtn type="button" onClick={onChangedStat}>
          Remove
        </VDCDesBtn>
      </VDCDesCont>
    </VisitedCountryListItem>
  )
}

export default VisitedCountries
