import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Partnership from './pages/Partnership/Partnership';
import Portfolio from './pages/Portfolio/Portfolio';
import Layout from './layout/Layout.jsx';
import AddedServices from './pages/AddedServices/AddedServices';
import CatalogLayout from './layout/CatalogLayout';
import CatalogDefault from './pages/Catalog/CatalogDefault/CatalogDefault';
import Kansas from './pages/Catalog/Kansas/Kansas';
import Dakota from './pages/Catalog/Dakota/Dakota';
import Arizona from './pages/Catalog/Arizona/Arizona';
import Indigo from './pages/Catalog/Indigo/Indigo';
import Travertine from './pages/Catalog/Travertine/Travertine';
import Kansas3 from './pages/Catalog/Kansas/Kansas3';
import Kansas63 from './pages/Catalog/Kansas/Kansas63';
import Kansas68 from './pages/Catalog/Kansas/Kansas68';
import Kansas69 from './pages/Catalog/Kansas/Kansas69';
import Dakota3 from './pages/Catalog/Dakota/Dakota3';
import Dakota61 from './pages/Catalog/Dakota/Dakota61';
import Dakota62 from './pages/Catalog/Dakota/Dakota62';
import Dakota63 from './pages/Catalog/Dakota/Dakota63';
import Dakota77 from './pages/Catalog/Dakota/Dakota77';
import Arizona3 from './pages/Catalog/Arizona/Arizona3';
import Arizona63 from './pages/Catalog/Arizona/Arizona63';
import Arizona68 from './pages/Catalog/Arizona/Arizona68';
import Arizona69 from './pages/Catalog/Arizona/Arizona69';
import Indigo3 from './pages/Catalog/Indigo/Indigo3';
import Indigo68 from './pages/Catalog/Indigo/Indigo68';
import Indigo69 from './pages/Catalog/Indigo/Indigo69';
import Travertine3 from './pages/Catalog/Travertine/Travertine3';
import Travertine7 from './pages/Catalog/Travertine/Travertine7';
import Travertine11 from './pages/Catalog/Travertine/Travertine11';
import Travertine20 from './pages/Catalog/Travertine/Travertine20';
import AboutCompany from './pages/AboutCompany/AboutCompany';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        {/* здесь в Layout находится навигация */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogLayout />}>
            <Route index element={<CatalogDefault />} />
            <Route path="kansas" element={<Kansas />} />
            <Route path="dakota" element={<Dakota />} />
            <Route path="arizona" element={<Arizona />} />
            <Route path="indigo" element={<Indigo />} />
            <Route path="travertine" element={<Travertine />} />
          </Route>
          <Route path="catalog/kansas/3" element={<Kansas3 />} />
          <Route path="catalog/kansas/63" element={<Kansas63 />} />
          <Route path="catalog/kansas/68" element={<Kansas68 />} />
          <Route path="catalog/kansas/69" element={<Kansas69 />} />

          <Route path="catalog/dakota/3" element={<Dakota3 />} />
          <Route path="catalog/dakota/61" element={<Dakota61 />} />
          <Route path="catalog/dakota/62" element={<Dakota62 />} />
          <Route path="catalog/dakota/63" element={<Dakota63 />} />
          <Route path="catalog/dakota/77" element={<Dakota77 />} />

          <Route path="catalog/arizona/3" element={<Arizona3 />} />
          <Route path="catalog/arizona/63" element={<Arizona63 />} />
          <Route path="catalog/arizona/68" element={<Arizona68 />} />
          <Route path="catalog/arizona/69" element={<Arizona69 />} />

          <Route path="catalog/indigo/3" element={<Indigo3 />} />
          <Route path="catalog/indigo/68" element={<Indigo68 />} />
          <Route path="catalog/indigo/69" element={<Indigo69 />} />

          <Route path="catalog/travertine/3" element={<Travertine3 />} />
          <Route path="catalog/travertine/7" element={<Travertine7 />} />
          <Route path="catalog/travertine/11" element={<Travertine11 />} />
          <Route path="catalog/travertine/20" element={<Travertine20 />} />
          {/* <Route path="catalog" element={<Catalog />} /> */}
          <Route path="about" element={<AboutCompany />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="added-services" element={<AddedServices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
