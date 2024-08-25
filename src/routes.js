import Home from "./pages/home/Home";
import UsersList from "./pages/Users/UsersList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./components/Product/Product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: '/product/:productID', element: <Product/>}
];

export default routes;
