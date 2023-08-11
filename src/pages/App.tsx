import Sidebar from "@app/components/Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 h-full bg-gray-100 p-8">
        <Main />
      </div>
    </div>
  );
};

export default App;
