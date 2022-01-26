import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchField from './components/SearchField';
import HelperField from './components/HelperField';
import Result from './components/Result';
import PackageDetail from './components/PackageDetail';
function App() {
  return (
    <Router>
      <div className="App max-w-screen min-h-screen bg-default-primary">
            <Routes>
              <Route exact path="/" element={<SearchField />} />
              <Route exact path="/query/:term" element={<Result />} />
              <Route exact path="/package/:packageName" element={<PackageDetail />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
