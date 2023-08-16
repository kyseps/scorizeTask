import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import Achievements from "../../pages/achievements/AchievementsPage";
import BookingPage from "../../pages/bookConsultation/BookingPage.jsx";
import BlogPage from "../../pages/blog/BlogPage.jsx";
import AboutUs from "../../pages/aboutus/AboutUsPage.jsx";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookingPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "achievements",
        element: <Achievements />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);
