import {Route , Routes} from 'react-router-dom';

import NewMeetupPage from './pages/NewMeetup';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>} exact />
        <Route path='/favorites' element={<FavouritesPage/>} />
        <Route path='/new-meetup' element={<NewMeetupPage/>} />
      </Routes>
    </Layout>
    )
}
export default App;