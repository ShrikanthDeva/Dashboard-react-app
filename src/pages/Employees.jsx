import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* header */}
      <Header category="Page" title="Employees" />
      {/* table */}
      <GridComponent
        dataSource={employeesData}  //data source
        allowPaging //allows paging of items
        allowSorting  //allows sort of data
        toolbar={['Search']}  //allows to search need to import Toolbar
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => (
            <ColumnDirective key = {index} {...item} />
          ))}
        </ColumnsDirective>
        {/* pagination for next page */}
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees