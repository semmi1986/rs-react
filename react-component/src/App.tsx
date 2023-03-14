import { Route, Routes } from 'react-router-dom';
import AboutUs from './page/AboutUs';
import MainPage from './page/MainPage';
import NotFound from './page/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
