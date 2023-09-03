import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { LoginPage } from './pages/LoginPage';
import { ConversationsPage } from './pages/ConversationsPage';
import { ConversationChannelPage } from './pages/ConversationChannelPage';

export function App() {
  return (
    <Routes>
      <Route path="/register" element={<AuthenticationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="conversations"
        element={
          <ConversationsPage />
        }
      >
        <Route path=":id" element={
          <ConversationChannelPage />
        } />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
