
const NavBar = () => {
    return (
        <nav class="flex flex-col px-4 mt-10 text-center">
        <a href="/about" className="py-2 text-sm text-gray-700 bg-gray-200 rounded dark:text-gray-100 dark:bg-gray-800">About</a>
        <a href="/" className="py-2 mt-3 text-sm text-gray-600 rounded dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800">Tickets</a>
        <a href="/" className="py-2 mt-3 text-sm text-gray-600 rounded dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800">Ideas</a>
        <a href="/" className="py-2 mt-3 text-sm text-gray-600 rounded dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800">Contacts</a>
        <a href="/" className="py-2 mt-3 text-sm text-gray-600 rounded dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800">Settings</a>
      </nav>
    );
}

export default NavBar;
