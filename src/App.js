import { useState } from "react";
import InputForm from "./components/InputForm";
import ListData from "./components/ListData";

function App() {
  const [data, setData] = useState([
    {
      nim: 123456,
      nama: "Farel",
      alamat: "Bogor Ciomas",
      jk: "pria",
      hobi: "game",
      geo: "None",
    },
  ]);

  const addDataHandler = (data) => {
    console.log(data);
    setData((state) => [...state, data]);
  };

  return (
    <div className="row m-4 bg-light p-2">
      <InputForm addDataHandler={addDataHandler} />
      <ListData data={data} />
    </div>
  );
}

export default App;
