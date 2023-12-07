import styled from 'styled-components'

export const CountryListItem = styled.li`
  border-bottom: 1px solid #ffffff;
  border-right: none;
  border-left: none;
  border-top: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #334155;
  padding-left: 20px;
  padding-right: 20px;
`
export const CountryItemPara = styled.p`
  color: ${props => props.color};
`

export const CouItemBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  padding: 7px;
  border-radius: 7px;
  width: 70px;
`
