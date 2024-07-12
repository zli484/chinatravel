import Logo from "./logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <div className="flex">
          <Logo />
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="/member"
              className="inline-flex items-center border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Members
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center"></div>
      </div>
    </nav>
  );
}
export default Navbar;
