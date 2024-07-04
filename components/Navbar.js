const Navbar = () => {
  return (
    <nav className="flex justify-between py-14 text-2xl">
      <div className="text-3xl">Deepanshu</div>
      <div>
        <ul className="flex justify-between gap-8">
          <li>About</li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
