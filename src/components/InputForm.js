import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function InputForm(props) {
  const { addDataHandler } = props;
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState({
    nim: "",
    nama: "",
    alamat: "",
    jk: "",
    hobi: "",
    geolocation: "None"
  });

  const submitHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    addDataHandler(input);
    setLoading(false);
  };

  const resetText = (e) => {
    e.preventDefault();
    setInput({
      nim: "",
      nama: "",
      alamat: "",
      jk: "",
      hobi: "",
    });
    alert("Input di reset");
  };

  const changeHandler = (e) => {
    const { name, value, file } = e.target;
    if (!(value || file)) console.log(e.target);
    setInput((prevData) => ({
      ...prevData,
      [name]: value ?? file,
    }));
  };

  return (
    <Form className="col-sm-12 col-md-4 py-2" onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="form.ControlNIM">
        <Form.Label>NIM</Form.Label>
        <Form.Control
          type="text"
          placeholder="12345"
          name="nim"
          value={input.nim}
          disabled={isLoading}
          onChange={changeHandler}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.ControlNama">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          placeholder="John Doe"
          name="nama"
          value={input.nama}
          disabled={isLoading}
          onChange={changeHandler}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={input.alamat}
          name="alamat"
          disabled={isLoading}
          onChange={changeHandler}
        />
      </Form.Group>
      <div className="mb-3">
        <Form.Check
          name="jk"
          value="pria"
          type="radio"
          id={`pria`}
          label={`Pria`}
          disabled={isLoading}
          checked={input.jk === "pria"}
          onChange={changeHandler}
          required
        />
        <Form.Check
          name="jk"
          value="wanita"
          type="radio"
          id={`wanita`}
          label={`Wanita`}
          disabled={isLoading}
          checked={input.jk === "wanita"}
          onChange={changeHandler}
          required
        />
        <Form.Check
          name="jk"
          value="other"
          type="radio"
          id={`other`}
          label={`Other`}
          disabled={isLoading}
          checked={input.jk === "other"}
          onChange={changeHandler}
          required
        />
      </div>
      <Form.Select
        className="mb-3"
        aria-label="Hobi"
        name="hobi"
        id="hobi"
        required
        disabled={isLoading}
        onChange={changeHandler}
        value={input.hobi}
      >
        <option value="" hidden>
          Pilih Hobi
        </option>
        <option value="game">Main Game</option>
        <option value="buku">Baca Buku</option>
        <option value="hiking">Hiking</option>
      </Form.Select>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" disabled={isLoading}>
          <b>SUBMIT</b>
        </Button>
        <Button variant="warning" onClick={resetText} disabled={isLoading}>
          <b>RESET</b>
        </Button>
      </div>
    </Form>
  );
}

export default InputForm;
