import { Counter } from './styles/components/Counter'
import { RepositoryItem } from './styles/components/RepositoryItem'
import { RepositoryList } from './styles/components/RepositoryList'
import './styles/global.scss'

export function App() {
    // return <RepositoryList />
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}