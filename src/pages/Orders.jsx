import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* header */}
      <Header category="Page" title="Orders" />
      {/* table */}
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}  //data source
        allowPaging //allows paging of items
        allowSorting  //allows sort of data
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index) => (
            <ColumnDirective key = {index} {...item} />
          ))}
        </ColumnsDirective>
        {/* pagination for next page */}
        <Inject services={[Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Orders