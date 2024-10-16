import { Layout } from "../layout/Layout";
import { ThemeContextProvider } from "../theme-context/themeContext";
import { UserContextProvider } from "../user-context/userContext";
import { RestaurantsPage } from "../restaurant/RestaurantsPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "../restaurantPage/RestaurantPage";
import { HomePage } from "../homePage/HomePage";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { DishPage } from "../dish/DishPage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/homepage", element: <HomePage /> },
        {
          path: "/dish",
          element: <Outlet />,
          children: [{ path: ":dishId", element: <DishPage /> }],
        },
        {
          path: "/restaurantspage",
          element: (
              <RestaurantsPage title={"Restaurants"} />
          ),
          children: [
            {
              path: ":restaurantId",
              element: <RestaurantPage />,
              children: [
                { path: "menu", element: <Menu /> },
                {
                  path: "reviews",
                  element: <Reviews />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <RouterProvider router={router}>
          <Layout></Layout>
        </RouterProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
