import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
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
        <Outlet />
    </>
  )
}

export default App;
