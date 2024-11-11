import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css'
import Router from './components/Router';
import AuthProvader from './provaders/AuthProvader';
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient({})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvader>
        <Router />
      </AuthProvader>  
    </QueryClientProvider>
  </React.StrictMode>
);


