import React from 'react'
import { RepositoryItem } from '../../containers'
import * as S from "./styled"

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
      >
        <S.WrapperTabList>
          <S.WrapperTab>Repositories</S.WrapperTab>
          <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <RepositoryItem 
            name='DIO_HTML' 
            linkToRepo='https://github.com/lucassantos251/DIO_HTML' 
            fullName='lucassantos251/DIO_HTML'/>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <RepositoryItem
            name="DIO_JavaScript"
            linkToRepo='https://github.com/lucassantos251/DIO_JavaScript'
            fullName='lucassantos251/DIO_JavaScript'/>
        </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories