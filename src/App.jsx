import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import SignUp from './Pages/SignUp/SignUp';
import Layout from './Pages/Layout/Layout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    </>
  )
  )

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;