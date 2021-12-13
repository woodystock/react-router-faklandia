import { Routes, Route } from 'react-router-dom'
import Confess from './Confess'
import FaklandiaHome from './FaklandiaHome'
import InvalidPath from './InvalidPath'
import Misdemeaners from './Misdemeanours'
import FaklandiaLayout from '../layouts/FaklandiaLayout'

const FaklandiaRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FaklandiaLayout />} >
                <Route index element={<FaklandiaHome />} />
                <Route path="/Misdemeanours" element={<Misdemeaners />} />
                <Route path="/Confess" element={<Confess />} />
                <Route path="*" element={<InvalidPath />} />
            </Route>
        </Routes>
    )
}

export default FaklandiaRouter