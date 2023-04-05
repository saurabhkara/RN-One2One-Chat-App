import { AuthenticatedUserProvider } from "./context/AuthContext";
import RootNavigation from "./navigation/RootNavigation";

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigation />
    </AuthenticatedUserProvider>
  );
}
