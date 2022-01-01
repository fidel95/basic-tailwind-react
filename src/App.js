import Footer from "./components/Footer";
import SideBar from "./components/SideBar";


function App() {
  return (
    <>
    <div className="flex mt-8">

    <SideBar />

    {/* Main body */}
    <div className="p-4 grid grid-cols-3 gap-4 bg-slate-50 w-full">
    <div className="bg-red-500 w-full"></div>
    <div className="bg-red-500 w-full"></div>
    <div className="bg-red-500 w-full"></div>
    <div className="bg-red-500 w-full"></div>
    <div className="bg-red-500 w-full"></div>
    <div className="bg-red-500 w-full"></div>


    </div>
    {/* End main body */}

    </div>
     <Footer />
    </>
  );
}

export default App;
