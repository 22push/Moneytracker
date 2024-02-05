import './App.css';
import Mainpage from './pages/mainpage'
import Addexpensepage from './pages/addexpensepage';
import Showexpensespage from './pages/showexpense';
import Teampage from './pages/teampage';
import Loginpage from './pages/loginpage';
import Signup from './pages/signuppage'
import { RouterProvider, createBrowserRouter ,useNavigate} from 'react-router-dom';
import Showexpenses from './components/Showexpense';
import Forgotpasswordpage from './pages/forgotpasswordpage';
function App() {
  const token = localStorage.getItem('token');
  const teampageroute = token ? { path: 'teampage', element: <Teampage/>} : { path:'teampage', element: <Loginpage/>}
  const showexpense = token ? { path: 'showexpenses', element:<Showexpensespage/>} : { path: 'showexpenses', element: <Loginpage/>}
  const addexpensepage = token ? { path: 'addexpensepage', element:<Addexpensepage/>} : { path: 'addexpensepage', element: <Loginpage/>}
  const router = createBrowserRouter([
    { path:'/', element: <Mainpage/>},
    { path:'login', element: <Loginpage/>},
    { path:'signup', element: <Signup/>},
    teampageroute,
    showexpense,
    addexpensepage,
    { path: 'forgotpassword', element:<Forgotpasswordpage/>}
  ]);
  return (
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  );
}

export default App;
