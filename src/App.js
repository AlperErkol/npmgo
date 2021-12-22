import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchField from './components/SearchField';
import HelperField from './components/HelperField';
import Result from './components/Result';
function App() {
  return (
    <Router>
      <div className="App w-screen h-screen bg-default-primary">
        <div className="flex">
            <Routes>
              <Route exact path="/" element={<SearchField />} />
              <Route exact path="/q/:term" element={<Result />} />
            </Routes>
            <HelperField/>
        </div>
      </div>
    </Router>
  );
}

export default App;
