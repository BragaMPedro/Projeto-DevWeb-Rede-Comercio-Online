import { useContext } from "react"
import AuthContext from "../context/Auth"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Login } from "../pages/Login/Login"
import { Cadastro } from "../pages/Cadastro/Cadastro"
import { Perfil } from "../pages/Perfil/perfil"
import { PageNotFound } from "../pages/PageNotFound/404"

export function Router() {
   const { isAuthenticated } = useContext(AuthContext)

   if (!isAuthenticated) {
      return (
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
         </Routes>
      )
   }

   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/perfil" element={<Perfil />} />
         <Route path=" * " element={<PageNotFound />} />
      </Routes>
   )
}
