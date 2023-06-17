import CardList from "./components/card-list/CardList";
import BaseForm from "./components/base-form/BaseForm";
import MainLayout from "./layout/main/MainLayout";

const App = () => (
    <div>
        <MainLayout titulo="Página actual">
            <BaseForm />
            <h2>Cards</h2>
            <CardList />
        </MainLayout>
    </div>
)

export default App;
