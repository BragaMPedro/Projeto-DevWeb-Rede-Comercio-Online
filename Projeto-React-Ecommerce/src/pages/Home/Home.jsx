import { useContext } from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import AuthContext from "../../context/Auth"
import { Perfil } from "../Perfil/perfil"
import NavBar from "../../components/NavBar/NavBar"
import Card from "../../components/Card/Card"

export function Home() {
   const { signOut, user } = useContext(AuthContext)

   return (
      <>
      <NavBar />
      <Hero />
      <Card />
         <Link to="/perfil" >
            <h1>Seu Perfil Aqui</h1>
         </Link>
      <Footer />
      </>
   )
}
