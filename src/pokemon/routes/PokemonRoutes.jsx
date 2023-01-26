import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "../../ui/components/Header"
import { HomePage, PokemonPage } from "../pages"

export const PokemonRoutes = () => {
  return (
    <>
        <Header />

        <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />

            <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>
    </>
  )
}
