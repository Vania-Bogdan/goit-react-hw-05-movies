import Header from "./modules/Header/Header";

import UserRoutes from "./UserRoutes";

import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <UserRoutes />
    </div>
  );
};

export default App