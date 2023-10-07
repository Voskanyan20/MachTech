import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from '../layout/Layout'
import RightSide from '../pages/RightSide'
import FolderInfo from '../components/rightSide/FolderInfo'
import MainComponent from '../components/main/MainComponent'
import PasswordInfo from '../components/rightSide/PasswordInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route exact path='/' element={<Layout />}>
          <Route index='rightSide' element={<RightSide />} />
          <Route path='rightSide/:folderId/:active' element={<FolderInfo />} />
          <Route
            path='rightSide/:folderId/:active'
            element={<MainComponent />}
          />
          <Route
            path='passwordInfo/:folderId/:passwordId/:active'
            element={<PasswordInfo />}
          />
        </Route>
      </Route>
    </>
  )
)
export default router
