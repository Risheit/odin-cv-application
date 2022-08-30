import './styles/App.css';

import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/Info';


export default function App() {
  return (
    <main className='App'>
      <h1>CV Application</h1>
      <Info></Info>
      <Education></Education>
      <Experience></Experience>
    </main>
  );
}
