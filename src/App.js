import './App.css';
import Login from './Login';
import Register from './Register';

function App() {

  return (
    <>
      <div className="App">
        <div class="container">
      

          <div class="row">
              <div class="col">
                <Register />
              </div>
              <div class="col">
                <Login />
              </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
