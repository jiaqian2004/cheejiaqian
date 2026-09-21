import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { scrollToHash, usePathname } from './lib/router'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  const pathname = usePathname()

  // The browser tries to scroll to a URL hash before React has rendered the
  // page, so a shared link like /projects#smart-home-iot needs a second pass.
  useEffect(() => {
    if (window.location.hash) requestAnimationFrame(scrollToHash)
  }, [])

  return (
    <>
      <Navbar />
      <Sidebar />
      {pathname === '/projects' ? <ProjectsPage /> : <HomePage />}
    </>
  )
}

export default App
