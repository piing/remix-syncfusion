import type { MetaFunction } from "@remix-run/cloudflare";
import type {
  GroupSettingsModel,
  EditSettingsModel,
  ContextMenuItem,
} from "@syncfusion/ej2-react-grids";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  ContextMenu,
  Edit,
  Filter,
  Group,
  Inject,
  Page,
  Sort,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";
import { data } from "../datasource";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function App() {
  const groupOptions: GroupSettingsModel = { showGroupedColumn: true };
  const contextMenuItems: ContextMenuItem[] = [
    "AutoFit",
    "AutoFitAll",
    "SortAscending",
    "SortDescending",
    "Copy",
    "Edit",
    "Delete",
    "Save",
    "Cancel",
    "PdfExport",
    "ExcelExport",
    "CsvExport",
    "FirstPage",
    "PrevPage",
    "LastPage",
    "NextPage",
  ];
  const editing: EditSettingsModel = {
    allowDeleting: true,
    allowEditing: true,
  };
  return (
    <div>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        allowSorting={true}
        allowExcelExport={true}
        allowPdfExport={true}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        allowGrouping={true}
        groupSettings={groupOptions}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            width="140"
            textAlign="Right"
            isPrimaryKey={true}
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer Name"
            width="140"
          />
          <ColumnDirective
            field="Freight"
            headerText="Freight"
            format="C2"
            textAlign="Right"
            editType="numericedit"
            width="140"
          />
          <ColumnDirective
            field="ShipName"
            headerText="Ship Name"
            width="200"
          />
        </ColumnsDirective>
        <Inject
          services={[
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Group,
          ]}
        />
      </GridComponent>
    </div>
  );
}
export default App;
/*
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
*/
