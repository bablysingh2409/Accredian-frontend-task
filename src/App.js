import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { createBrowserRouter,RouterProvider } from "react-router-dom";



function App() {

   const router=createBrowserRouter([
    {
      path:'/',
      element:<LoginForm/>
    },
    {
      path:'/login',
      element:<LoginForm/>
    },
    {
      path:'/signup',
      element:<SignupForm/>         
    }
   ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
