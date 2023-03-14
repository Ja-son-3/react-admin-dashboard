import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom'
import UserList from "./pages/userList/UserList";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<UserList />} />
        {/* <Route path="/post/:id" element={<Single />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings/> : <Login />} />
        <Route path="/register" element={user ? <Home/> : <Register />} /> */}
      </Route>
    )
  )


  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <RouterProvider  router={router}/>   
      </div>
    </>
  );
}

const Root = () => {

  return (
    <> 
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
