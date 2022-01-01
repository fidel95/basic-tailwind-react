import NavBar from './NavBar';

const SideBar = () => {
    return (
        <div className="flex flex-col w-60 dark:bg-slate-50">


        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-gray-800 dark:text-black">Dashboard</span>
          </div>
        </div>

        <NavBar />



        </div>
    );
}

export default SideBar;
