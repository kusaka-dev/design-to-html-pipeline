function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="mb-3 text-sm text-gray-500">
          &copy; 2026 Design to HTML Pipeline. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-500 hover:text-gray-700 transition-colors">
            Terms of Service
          </a>
          <a href="#github" className="text-gray-500 hover:text-gray-700 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
