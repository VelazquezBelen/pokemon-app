import { Navigate, Route, Routes } from "react-router-dom"
import { FavoritesPage } from "../../favorites"
import { Header } from "../../ui/components/Header"
import { HomePage, PokemonPage } from "../pages"

export const PokemonRoutes = () => {
  return (
    <>
        <Header />

        <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />

            <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>
    </>
  )
}
