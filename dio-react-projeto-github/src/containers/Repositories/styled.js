import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 15px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 5px;
  display: flex;
  margin: 0;
`
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  background-color: #444;
  color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #eee;
  border-radius: 15px;

  margin: 0px 5px;
  padding: 15px;
  
  user-select: none;
  cursor: pointer;

  z-index: 9;

  &:focus{
    outline: none;
  }

  &.is-selected{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #777;
    background-color: #777;
  }
`
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  background-color: #777;
  color: #eee;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: -5px 5px 0px 5px;
  padding: 15px;

  &.is-selected{
    display:block;
  }
`
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`