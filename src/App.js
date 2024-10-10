import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { DarkModeProvider } from "./utils/DarkModeContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login"; // Import Login component

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const data = {
      name: "Manish Kumar",
    };
    setUserInfo(data.name);
  }, []);

  // Define the handleLoginToggle function
  const handleLoginToggle = () => {
    setIsLoginOpen((prev) => !prev); // Toggle login visibility
  };

  return (
    <Provider store={appStore}>
      <div className="app">
        <Header onLoginClick={handleLoginToggle} /> {/* Pass toggle function */}
        <Outlet />
        {isLoginOpen && <Login closeLogin={handleLoginToggle} />}
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DarkModeProvider>
    <RouterProvider router={appRouter} />
  </DarkModeProvider>
);
