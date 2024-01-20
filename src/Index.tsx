import { Outlet } from "react-router-dom"
import FooterBar from "./components/FooterBar"
import NavigationBar from "./components/NavigationBar"

function Index() {
  return (
    <section>
      <header>
        <NavigationBar />
      </header>      
        <Outlet />      
      <footer>
        <FooterBar />
      </footer>
    </section>
  )
}

export default Index