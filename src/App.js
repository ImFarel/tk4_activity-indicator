import { useState } from "react";
import InputForm from "./components/InputForm";
import ListData from "./components/ListData";

function App() {
  const [isLoading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      setData((state) => [...state, data]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="row m-4 bg-light p-2">
      <InputForm addDataHandler={addDataHandler} isLoading={isLoading} />
      <ListData data={data} />
    </div>
  );
}

export default App;
