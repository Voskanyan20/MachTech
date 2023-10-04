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
// import Main from '../pages/Main'
import FolderInfo from '../components/rightSide/FolderInfo'
import ProductInfo from '../components/rightSide/PasswordInfo'
import MainComponent from '../components/main/MainComponent'
import PasswordInfo from '../components/rightSide/PasswordInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route exact path='/' element={<Layout />}>
          <Route index='rightSide' element={<RightSide />}/>
          <Route path='rightSide/:folderId/:active' element={<FolderInfo />} />
          <Route path='rightSide/:folderId/:active' element={<MainComponent />} />
          <Route path='passwordInfo/:folderId/:passwordId/:active' element={<PasswordInfo />} />
          {/* <Route path={'folderInfo'} element={<FolderInfo />} />
          <Route path={'productInfo'} element={<ProductInfo />} /> */}
          {/* <Route path='rightSide' element={<RightSide />} /> */}
          {/* <Route path='rightSide' element={<RightSideLayout />}>
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
