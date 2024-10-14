import { Layout } from "../layout/Layout";
import { ThemeContextProvider } from "../theme-context/themeContext";
import { UserContextProvider } from "../user-context/userContext";
import { RestaurantsPage } from "../restaurant/RestaurantsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "../restaurantPage/RestaurantPage";
import { HomePage } from "../homePage/HomePage";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { Dish } from "../dish/Dish";
import { DishInfo } from "../dish/DishInfo";
import { DishPage } from "../dish/DishPage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/homepage", element: <HomePage /> },
        // {
        //   path: '/dish',
        //   element:<div></div>,
        //   children:[{
        //     path: ":dishId",
        //     element: <div>DishInfo</div>
        //   }]
        // },
        {
          path: "/dish",
          element: <DishInfo />,
          children: [{ path: ":dishId", element: <DishPage /> }],
        },
        {
          path: "/restaurantspage",
          element: (
            <div>
              <RestaurantsPage title={"Restaurants"} />
            </div>
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
