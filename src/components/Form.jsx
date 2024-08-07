import React, { useState } from "react";
import MyTodos from "./MyTodos";

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [cards, setCards] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleAddTodo = () => {
    if (input1.trim() !== "" && input2.trim() !== "") {
      setCards([...cards, { input1, input2 }]);
      setInput1("");
      setInput2("");
      setShowCard(true);
    }
  };

  return (
    <div>
      <form className="row g-3 m-5 ">
        <h2 className="header">My ToDo</h2>
        <div className="col-auto">
          <input
            type="text"
            className="form-control "
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Todo Name"
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control "
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Todo Description"
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3 "
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </form>

      <div>
        <div className="todos-conatainer m-5">
          <div>
            <h5>My Todos</h5>
          </div>
          <div>
            <span>Status Filter : </span>
            <select>
              <option value="All">All</option>
              <option value="NotCompleted">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" container col-4">
        {cards.map((card, index) => (
          <div key={index} className="card" style={cardStyle}>
            <h3>Card {index + 1}:</h3>
            <p>First Value: {card.input1}</p>
            <p>Second Value: {card.input2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  width: "18rem",
};

export default Form;
