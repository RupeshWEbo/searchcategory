import './App.css';
import {Routes, Route} from 'react-router-dom'
import SearchSentance from './components/SearchSentance';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< SearchSentance/>} />
      </Routes>
    </div>
  );
}
export default App;
