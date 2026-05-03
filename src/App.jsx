import { Home } from './pages/Home';
import Header from './components/common/Header';

export default function App() {
  return (
    <main className="relative w-full">
      <Header />
      <Home />
    </main>
  );
}