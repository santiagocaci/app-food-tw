import { categories } from '../data';

export const Category = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
      <h1 className='text-orange-500 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map(item => (
          <div
            className='bg-gray-100 rounded-lg p-4 flex justify-around sm:justify-between md:justify-around items-center'
            key={item.id}
          >
            <h2 className='font-bold text-xl'>{item.name}</h2>
            <img className='w-20' src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
