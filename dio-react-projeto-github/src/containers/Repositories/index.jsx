import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import './index.css'

const Repositories = () => {
  return (
    <Tabs className='repositories-wrapper-tabs'
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
      >
        <TabList className='repositories-wrapper-tab-list'>
          <Tab className='repositories-wrapper-tab'>Repositories</Tab>
          <Tab className='repositories-wrapper-tab'>Starred</Tab>
        </TabList>
        <TabPanel className='repositories-wrapper-tab-panel'>panel Repositories</TabPanel>
        <TabPanel className='repositories-wrapper-tab-panel'>panel Starred</TabPanel>
    </Tabs>
  )
}

export default Repositories