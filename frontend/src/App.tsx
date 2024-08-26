import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

/* Routes */
import Root from './routes/Root'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import Blog from './routes/Blog'
import Todo from './routes/Todo'
import ErrorPage from './routes/ErrorPage'

/* Broswer Router */
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);


export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
