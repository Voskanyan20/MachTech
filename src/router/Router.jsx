import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
// import Employees from "../components/main/employees/Employees";
// import EmpDetail from "../components/main/employees/EmpDetail";
// import Clients from "../components/main/client/Clients"
import Layout from '../layout/Layout'
import RightSide from '../pages/RightSide'
import Main from '../pages/Main'
import FolderInfo from '../components/rightSide/FolderInfo'
import ProductInfo from '../components/rightSide/ProductInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route exact path='/' element={<Layout />}>
          <Route path='rightSide' element={<RightSide />}/>
          {/* <Route path='rightSide' element={<RightSide />} /> */}
          {/* <Route path='rightSide' element={<RightSideLayout />}>
            <Route path={'folderInfo'} element={<FolderInfo />} />
            <Route path={'productInfo'} element={<ProductInfo />} />
          </Route> */}
          {/* <Route path={'employees'} element={<Employees />} />
            <Route path='detail/:id' element={<EmpDetail />}></Route>
            <Route path="clients" element={<Clients />} /> */}
        </Route>
      </Route>
    </>
  )
)
export default router
