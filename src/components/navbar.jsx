export default function NavBar() {
  return (
    <nav className="navbar bg-black navbar-expand-lg">
      <div className="container-fluid">
        <a className=" text-white navbar-brand p-3 m-3 bg-primary   " href="#">
          Michelangelo Calori Personal Porfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav bg-secondary m-2">
            <li className="p-3 border-end border-dark shadow-sm me-2  nav-item ">
              <a
                className=" text-white nav-link active"
                aria-current="page"
                href="#"
              >
                About Me
              </a>
            </li>
            <li className="p-3 border-end border-dark me-2 nav-item">
              <a className=" text-white nav-link" href="#">
                Projects / Experience
              </a>
            </li>
            <li className="p-3 me-2 nav-item">
              <a className="text-white nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
