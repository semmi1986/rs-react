import { Route, Routes } from 'react-router-dom';
import AboutUs from './page/AboutUs';
import HomePage from './page/HomePage';
import NotFound from './page/NotFound';
import Layout from './page/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
