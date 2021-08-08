import { Table } from "react-bootstrap";

const ListData = ({ data }) => {
  return (
    <Table responsive="sm col-md-8 py-2" striped bordered hover>
      <thead>
        <tr>
          <th>NIM</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>JK</th>
          <th>Hobi</th>
          <th>Geolocation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((i) => (
            <tr key={i.nim}>
              <td>{i.nim}</td>
              <td>{i.nama}</td>
              <td>{i.alamat}</td>
              <td>{i.jk}</td>
              <td>{i.hobi}</td>
              <td>{i.geo}</td>
              <td>Hapus</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              None
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ListData;
