import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import MenuButton from './components/menuButton';
import About from './sections/about';
import Landing from './sections/landing';
import Projects from './sections/projects';

const App = () => {
  return (
    <main className='text-lg'>
      <MenuButton/>
      <Header/>
      <Landing/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  )
};

export default App;