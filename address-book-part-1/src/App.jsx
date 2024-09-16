import './App.css';

function App() {
  return (
    <div>
      <h2>Menu</h2>
      <li>
        Contacts
      </li>
      <li>Add new contacts</li>
      <h3>Contacts</h3>
      <li>
        Rick Sanchez<button>View</button>
      </li>
      <li>
        Christopher Roob<button>View</button>
      </li>
      <li>
        Pablo Wiza<button>View</button>
      </li>
      <h3>Pablo Wiza (endpoint is /view/id)</h3>
      <p>Pablo Wiza</p>
      <p>Street: Jakubowski Underpass</p>
      <p>City: East Connorview</p>
      <h3>Add new contact</h3>
      <label>Firstname
        <input type="text" name="firstname" placeholder="Tim" />
      </label>
      <label>Lastname
        <input type="text" name="lastname" placeholder="Bun" />
      </label>
      <label>Street
        <input type="text" name="street" placeholder="Mainstreet" />
      </label>
      <label>Lastname
        <input type="text" name="city" placeholder="Cool city" />
      </label>
      <button>Submit!</button>
    </div>
  );
}

export default App;
