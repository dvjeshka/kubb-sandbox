import { lazy } from 'react'

const CaseApiComponent = lazy(() => import('./components/CaseApiComponent')) ;
const CaseHooksComponent = lazy(() => import('./components/CaseHooksComponent')) ;

function App() {
    return (
    <>
        <CaseApiComponent/>
        <CaseHooksComponent/>
    </>
  )
}

export default App
