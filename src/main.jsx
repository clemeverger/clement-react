import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Card from './components/Card';
import Exchange from './components/Exchange';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exchange/:exchangeId" element={<Exchange />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
