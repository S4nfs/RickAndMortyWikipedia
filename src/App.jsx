import { Route, Routes } from 'react-router-dom';
import { Discover } from './pages';

const App = () => (

  <div className="w-full h-100vh overflow-y-scroll bg-gray-800">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </section>
  </div>
);

export default App;
