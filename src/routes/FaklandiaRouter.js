import { Routes, Route } from 'react-router-dom'
import Confess from './Confess'
import FaklandiaHome from './FaklandiaHome'
import InvalidPath from './InvalidPath'
import Misdemeaners from './Misdemeanours'

const FaklandiaRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FaklandiaHome />} />
            <Route path="/Misdemeanours" element={<Misdemeaners />} />
            <Route path="/Confess" element={<Confess />} />
            <Route path="*" element={<InvalidPath />} />
        </Routes>
    )
}

export default FaklandiaRouter