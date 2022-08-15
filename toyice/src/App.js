import { RecoilRoot, atom } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GNB from "./components/organisms/GNB";
import ProjectMain from "./pages/project_main/templates";
import ProjectAdd from "./pages/project_add";
import ProjectInfo from "./pages/project_info";

import './App.css';

export const toyId = atom({key: 'toyId', default: 0})

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GNB />
        <div className="App-contents">
        <Router>
          <Routes>
            <Route path="/" element={<ProjectMain/>} />
          </Routes>
          
          <Routes>
            <Route path="/create-toy" element={<ProjectAdd/>} />
          </Routes>

          <Routes>
            <Route path="/edit-toy/:id" element={<ProjectAdd edit={true} />} />
          </Routes>
          
          <Routes>
            <Route path="/toy/:id" element={<ProjectInfo/>} />
          </Routes>
        </Router>
        </div>
        </RecoilRoot>
    </div>
  );
}

export default App;
