import './App.css';
import Mainpage from './pages/mainpage'
import Addexpensepage from './pages/addexpensepage';
import Showexpensespage from './pages/showexpense';
import Teampage from './pages/teampage';
import Loginpage from './pages/loginpage';
import Signup from './pages/signuppage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Showexpenses from './components/Showexpense';
import Forgotpasswordpage from './pages/forgotpasswordpage';
function App() {
  const router = createBrowserRouter([
    { path:'/', element: <Mainpage/>},
    { path:'login', element: <Loginpage/>},
    { path:'signup', element: <Signup/>},
    { path: 'teampage', element: <Teampage/>},
    { path:'showexpenses', element: <Showexpensespage/>},
    { path:'addexpenses', element: <Addexpensepage/>},
    { path: 'forgotpassword', element:<Forgotpasswordpage/>}
  ]);
  return (
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  );
}

export default App;
