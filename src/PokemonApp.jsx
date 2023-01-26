import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const PokemonApp = () => {
    return (
        <AuthProvider>
            <AppRouter />        
        </AuthProvider>
    )
}
