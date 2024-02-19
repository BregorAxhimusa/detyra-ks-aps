import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

interface ITableProps {
    columns: any;
    data: any;
}

function CustomTable({ columns, data }: ITableProps) {
  const navigate = useNavigate();
  return (
    <DatatableWrapper body={data} headers={columns} 

    paginationOptionsProps={{
      initialState: {
        rowsPerPage: 15,
        options: [15, 30, 40, 50]
      }
    }}>

      <Row className="mb-4 justify-content-end">

        <Col xs={12} sm={6} lg={2} className="mt-1">
          <PaginationOptions />
        </Col>

        <Col xs={12} sm={6} lg={2} className="mt-1">
          <Filter />
        </Col>

      </Row>

      <Table>
        <TableHeader />
        <TableBody    onRowClick={(row, event) => {
          navigate(`/user/${row.id}`, { state: { user: row } })
          }} />
      </Table>


        <Col className="d-flex justify-content-end">
          <Pagination />
        </Col>

   
    </DatatableWrapper>
  );
};

export default CustomTable;
