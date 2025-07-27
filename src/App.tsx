import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DesignSystemPage from './pages/DesignSystemPage';
import ComponentPage from './pages/design-system/ComponentPage';
import ButtonPage from './pages/design-system/components/general/ButtonPage';
import { ConfigProvider } from 'antd';
import themeConfig from './theme/themeConfig.tsx';
import './index.css';

const App = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="page" element={<AboutPage />} />
          <Route path="design-system" element={<DesignSystemPage />} />
          <Route path="design-system/:category" element={<ComponentPage />} />
          <Route path="design-system/:category/:subcategory" element={<ComponentPage />} />
          <Route path="design-system/components/general/button" element={<ButtonPage />} />
          <Route path="design-system/:category/:subcategory/:component" element={<ComponentPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
