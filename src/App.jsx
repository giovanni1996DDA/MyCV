import HeaderPage from './Pages/HeaderPage';
import MainPage from './Pages/MainPage';
import { ScrollProvider } from './Hooks/ScrollContext'; // Ajusta esta línea

function App() {
  return (
    <ScrollProvider>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4 page_container'>
          <HeaderPage />
          <MainPage />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default App;
