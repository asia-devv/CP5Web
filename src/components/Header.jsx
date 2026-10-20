import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between text-black px-30 py-10 bg-[#F9E0BB]">
      <h1 className="text-3xl font-bold">Cafeteria<span className="text-[#884A39]">Dev</span></h1>
      <nav>
        <ul className="flex justify-between gap-5 text-2xl font-medium">
          <li>
            <Link to={"/"} className="hover:text-[#C38154]">Home</Link>
          </li>
          <li>
            <Link to={"/produtos"} className="hover:text-[#C38154]">Produtos</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header