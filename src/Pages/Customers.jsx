import React from 'react'
import { GridComponent,
ColumnsDirective,ColumnDirective,
Page,Selection,Inject,Search,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids'


import { customersData,customersGrid } from '../data/dummy';
import { Header } from '../Components';
import { filter } from '@syncfusion/ej2/maps';
const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
editSettings={{allowDeleting:true,allowEditing:true }}
        allowSorting
        toolbar={[ 'Delete']}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => 
          <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Sort,Selection,Edit,Filter, Toolbar,Page]} />
      </GridComponent>
    </div>
  );
};

export default Customers