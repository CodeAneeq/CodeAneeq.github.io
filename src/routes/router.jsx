// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home/Home";
// import Projects from "../pages/projects/Projects";
// import Services from "../pages/services/Services";
// import Blogs from "../pages/blog/Blogs";
// import Error from "../pages/error/Error";
// import Contact from "../pages/contact/Contact";

// const publicRoutes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/projects',
//     element: <Projects/>
//   },
//   {
//     path: '/services',
//     element: <Services/>
//   },
//   {
//     path: '/blog/:title',
//     element: <Blogs/>
//   },
//   {
//     path: '/contact',
//     element: <Contact/>
//   },
//   {
//     path: "*",
//     element: <Error/>
//   }
// ])

// export default publicRoutes

import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/loader/loader";
import About from "../pages/about/about";

const HomePage = lazy(() => import("../pages/home/Home"));
const ProjectsPage = lazy(() => import("../pages/projects/Projects"));
const ServicesPage = lazy(() => import("../pages/services/Services"));
const BlogsPage = lazy(() => import("../pages/blog/Blogs"));
const ContactPage = lazy(() => import("../pages/contact/Contact"));
const ErrorPage = lazy(() => import("../pages/error/Error"));

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense fallback={<Loader />}>
        <ProjectsPage />
      </Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <Suspense fallback={<Loader />}>
        <ServicesPage />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense fallback={<Loader />}>
        <BlogsPage />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loader />}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: "/about-me",
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

export default publicRoutes;
