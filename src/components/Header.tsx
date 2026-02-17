import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Design to HTML Pipeline
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
