
import { Route , Routes ,BrowserRouter} from 'react-router-dom';
import './App.css';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/builder-app'  />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
