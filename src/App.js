import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn/SignIn';

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='/signin' element={<SignIn/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
