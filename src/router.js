// import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom"
//   import App from "./App"
//   import Index from "./pages/Index"
//   import Show from "./pages/Show"
//   import Update from "./pages/Update"
//   import Header from "./components/Header"
//   import { createAction,deleteAction, updateAction } from "./action"
//   import { travelBlogLoader, showLoader } from "./loaders"
  
  
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route path="" element={<Index/>} component={Header} loader={travelBlogLoader} />
//       <Route path=":id" element={<Show/>} loader={showLoader}/>
//       <Route path=":id/edit" element={<Update/>} loader={showLoader}/>
//       <Route path="create" action={createAction}/>
//       <Route path="update/:id" action={updateAction}/>
//       <Route path="delete/:id" action={deleteAction}/>
//     </Route>)
//   )

// export default router