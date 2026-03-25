import PanelsProvider from "./app/providers/PanelsProvider";
import MainPage from "./pages/ui/MainPage";

function App() {
    return (
        <PanelsProvider>
            <MainPage />
        </PanelsProvider>
    );
}

export default App;
