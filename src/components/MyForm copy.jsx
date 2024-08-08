import React, { useState } from "react";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [cards, setCards] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (input1 !== "" && input2 !== "") {
      setShowCard(true);
      const newCard = {
        input1,
        input2,
        status: "Not Complete", // Initialize status as 'Not Complete'
      };
      setCards([...cards, newCard]);
      setInput1("");
      setInput2("");
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedCards = [...cards];
    updatedCards[index].status = newStatus;
    setCards(updatedCards);
  };

  const handleDelete = (index) => {
    // Remove the card at the specified index
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const updateStaus = () => {};

  return (
    <div>
      <form className="row g-3 m-5 ">
        <h2 className="header">My ToDo</h2>
        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Todo Name"
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Todo Description"
          />
        </div>

        <div className="col-auto">
          <button onClick={handleButtonClick} className="btn btn-primary mb-3 ">
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

      {cards.map((card, index) => (
        <div key={index} className="cardBody col-3">
          <div className="card">
            {/* <h3>Card {index + 1}:</h3> */}
            <p>Name : {card.input1}</p>
            <p>Description : {card.input2}</p>
            <p>Status :{card.status}</p>
            {/* <select>
              <option value="completed"> Completed</option>
              <option value="Not Completed" selected>
                Not Completed
              </option>
            </select> */}

            <select
              value={card.status}
              onChange={(e) => handleStatusChange(index, e.target.value)}
            >
              <option value="Not Complete">Not Complete</option>
              <option value="Complete">Complete</option>
            </select>
            <div class="card-body">
              <a
                href="#"
                class="card-link btn btn-success"
                onClick={handleStatusChange}
              >
                Update
              </a>
              <a
                href="#"
                class="card-link btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
