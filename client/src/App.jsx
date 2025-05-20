import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import JobPost from './components/JobPost';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/job/add" element={<JobPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App