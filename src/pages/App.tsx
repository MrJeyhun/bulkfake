import Sidebar from "@app/components/Sidebar";

const App = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 h-full bg-gray-100 p-8">App</div>
    </div>
  );
};

export default App;
