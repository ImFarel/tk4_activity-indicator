import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <>
      <div>
        <label htmlFor="nim">NIM</label>
        <input type="text" name="nim" id="nim" />
        <label htmlFor="nama">Nama</label>
        <input type="text" name="nama" id="nama" />
        <label htmlFor="alamat">Alamat</label>
        <textarea name="alamat" rows="4" id="alamat" />
        <label htmlFor="pria">Pria</label>
        <input type="radio" name="jk" value="pria" id="pria" />
        <label htmlFor="wanita">Wanita</label>
        <input type="radio" name="jk" value="wanita" id="wanita" />
        <label htmlFor="wanita">Hobi</label>
        <select name="hobi" id="hobi">
          <option selected hidden>
            Pilih Hobi
          </option>
          <option value="game">Main Game</option>
          <option value="buku">Baca Buku</option>
          <option value="hiking">Hiking</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>JK</th>
            <th>Hobi</th>
            <th>Geolocations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123123</td>
            <td>Farel</td>
            <td>Assssssssssssss</td>
            <td>Laki</td>
            <td>Game</td>
            <td>Bogor</td>
            <td>Hapus|Edit</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
