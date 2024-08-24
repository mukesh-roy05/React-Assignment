import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

export const apiUrl = "https://65decdeeff5e305f32a07e6e.mockapi.io/Users"; // Example API endpoint

const DataTable = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [editing, setEditing] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
      setIsError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(apiUrl, form);
      setData([...data, response.data]);
      setForm({
        id: "",
        name: "",
        email: "",
        phone: "",
        website: "",
      });
    } catch (error) {
      console.error("Error creating data", error);
      setIsError(error.message);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditing(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${apiUrl}/${form.id}`, form);
      setData(data.map((item) => (item.id === form.id ? response.data : item)));
      setEditing(false);
      setForm({
        id: "",
        name: "",
        email: "",
        phone: "",
        website: "",
      });
    } catch (error) {
      console.error("Error updating data", error);
      setIsError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data", error);
      setIsError(error.message);
    }
  };

  return (
    <div className="mt-3">
      {isError !== "" && <h2>{isError}</h2>}

      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editing ? handleUpdate() : handleCreate();
          }}
        >
          <input
            type="hidden"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
            required
          />
          <button type="submit">{editing ? "Update" : "Create"}</button>
        </form>
      </div>

      <div className="container m-2">
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
