import { Routes, Route } from 'react-router-dom'
import Confess from './Confess'
import Home from './Home'
import InvalidPath from './InvalidPath'
import Misdemeaners from './Misdemeanours'
import MainLayout from '../layouts/MainLayout'

const FaklandiaRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="/Misdemeanours" element={<Misdemeaners />} />
                <Route path="/Confess" element={<Confess />} />
                <Route path="*" element={<InvalidPath />} />
            </Route>
        </Routes>
    )
}

export default FaklandiaRouter