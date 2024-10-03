import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [grocery, setGrocery] = useState([]);
  const [groceryList, setGroceryList] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true); 

  const handleGroceryData = () => {
    if (groceryList.trim() === "") {
      toast.error("Please enter a valid item.");
      return;
    }

    const newData = [...grocery, { value: groceryList, checked: false }];
    setGrocery(newData);
    setGroceryList(""); 
    toast.success("Item added successfully!");
  };

  const handleDelete = (index) => {
    const newData = grocery.filter((_, idx) => idx !== index);
    setGrocery(newData);
    toast.info("Item deleted.");
  };

  const handleCheckbox = (index) => {
    const newData = grocery.map((item, idx) => 
      idx === index ? { ...item, checked: !item.checked } : item
    );
    setGrocery(newData);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("grocery"));
    if (storedData) {
      setGrocery(storedData);
    }
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("grocery", JSON.stringify(grocery));
    }
  }, [grocery, isInitialLoad]);

  return (
    <>
      <ToastContainer /> {/* To show toast notifications */}
      <div className='main-container'>
        <div className='grocery'>
          <h1>Grocery Bud</h1>
          <div className='input-container'>
            <input
              type="text"
              value={groceryList}
              onChange={(event) => setGroceryList(event.target.value)}
            />
            <button onClick={handleGroceryData}>Add Item</button>
          </div>
        </div>

        <div className='grocery-data'>
          <h1>Grocery List</h1>
          <ul>
            {grocery.map((item, index) => (
              <div key={index} className='grocery-item'>
                <div>
                  <input 
                    type="checkbox" 
                    checked={item.checked} 
                    onChange={() => handleCheckbox(index)} 
                  />
                  <p 
                    className='data' 
                    style={{ textDecoration: item.checked ? "line-through" : "none" }}
                  >
                    {item.value}
                  </p>
                </div>
                
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
