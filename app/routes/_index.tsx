import type { MetaFunction } from "@remix-run/cloudflare";
import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group
} from '@syncfusion/ej2-react-grids';
import { data } from "../datasource";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: 'Excel' };
  return (
    <>
      <h2>Syncfusion React Grid Component</h2>
      <GridComponent
        dataSource={data}
        allowGrouping={true}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        height={180}
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </>
  )
}