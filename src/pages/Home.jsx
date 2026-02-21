import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="home-react">
    <h1>Mening Loyihalarim</h1>
    </div>
    <header className="home-header">
    <div className="Todo">
    <h1>Todo App</h1>
    </div>
    <div className="input-class1">
    <div className="homme">
    <input className="input-class" type="text" placeholder="Vazifa yozig...." />
    <button className="button">add</button> 
    </div>
    </div>
    </header>
      <div className="home-container">
      
        <div className="count-container">
          <div>
            <button onClick={() => setCount(count - 1)} className="decrement">
              -
            </button>
          </div>
          <div className="count"> {count} </div>
          <div>
            <button onClick={() => setCount(count + 1)} className="increment">
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
    
export default Home;