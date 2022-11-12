// import logo from './logo.svg'
import './App.css'
import SignIn from './components/SignIn'
import StaticDatePickerLandscape from './components/StaticDatePickerLandscape'
import { Route, Routes } from 'react-router-dom'
import UploadButton from './components/UploadButton'
import BasicTable from './components/BasicTable'
import { Container } from '@mui/system'

function App() {
    return (
        <div className="App">
            {/* <style>{'body { background-color: #2e2b3d; }'}</style>   */}

            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route
                    path="/dashboard"
                    element={
                        <>
                            <Container maxWidth='sm'>
                                <StaticDatePickerLandscape />
                                <UploadButton />
                                <BasicTable />
                            </Container>
                        </>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
