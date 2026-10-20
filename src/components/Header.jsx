import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex text-black">
      <h1 className="">Cafeteria <span className="">Dev</span></h1>
      <nav>
        <ul className="">
          <li>
            <Link to={"/"} className="">Home</Link>
          </li>
          <li>
            <Link to={"/produtos"} className="">Produtos</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header