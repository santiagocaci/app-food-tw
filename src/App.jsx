import { Category, Food, HeadlineCards, Hero, Navbar } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr className='bg-black/50 w-4/5 h-1 my-4 text-center mx-auto rounded-full' />
      <HeadlineCards />
      <hr className='bg-black/50 w-4/5 h-1 my-4 text-center mx-auto rounded-full' />
      <Food />
      <hr className='bg-black/50 w-4/5 h-1 my-4 text-center mx-auto rounded-full' />
      <Category />
    </div>
  );
}

export default App;
