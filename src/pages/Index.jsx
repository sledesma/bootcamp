import { useSearchParams } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import CardList from "../components/card-list/CardList";

/**
 * Contextos: RouterProvider
 */
export default function Index()
{
    const [searchParams, setSearchParams] = useSearchParams();

    const busqueda = searchParams.get('q');

    return (
        <MainLayout>
            <div>Index página {busqueda} </div>
            <input type="search" onInput={
                (e) =>
                {
                    searchParams.set('q', e.target.value);
                    searchParams.set('d', Date.now());
                    setSearchParams(searchParams);
                }
            } />
            <CardList />
        </MainLayout>
    )
}
