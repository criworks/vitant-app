import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DesignSystemPage from './pages/DesignSystemPage';
import ComponentPage from './pages/design-system/ComponentPage';
import ButtonPage from './pages/design-system/components/general/ButtonPage';
import TestPage from './pages/TestPage';
import AntThemeProvider from './AntThemeProvider';
import SettingsPage from './pages/SettingsPage';
import ReportsPage from './pages/ReportsPage';
import ManagePage from './pages/ManagePage';
import CalendarPage from './pages/CalendarPage';

const App = () => {
  return (
    <AntThemeProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="manage" element={<ManagePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="tests" element={<TestPage />} />
          <Route path="design-system" element={<DesignSystemPage />} />
          <Route path="design-system/:category" element={<ComponentPage />} />
          <Route path="design-system/:category/:subcategory" element={<ComponentPage />} />
          <Route path="design-system/components/general/button" element={<ButtonPage />} />
          <Route path="design-system/:category/:subcategory/:component" element={<ComponentPage />} />
          </Route>
      </Routes>
    </AntThemeProvider>
  );
}

export default App;
