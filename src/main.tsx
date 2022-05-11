import 'simplebar/src/simplebar.css';
import '@/locales/i18n';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from '@/App';
import LoadingScreen from '@/components/LoadingScreen';
import { CollapseDrawerProvider } from '@/contexts/CollapseDrawerContext';
import { AuthProvider } from '@/contexts/JWTContext';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { persistor, store } from '@/redux/store';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <CollapseDrawerProvider>
                <BrowserRouter>
                  <AuthProvider>
                    <App />
                  </AuthProvider>
                </BrowserRouter>
              </CollapseDrawerProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);