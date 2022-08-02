import { useState } from 'react';
import { data } from '../data';

export const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = category =>
    setFoods(data.filter(item => item.category === category));

  const filterPrice = price =>
    setFoods(data.filter(item => item.price === price));

  return (
    <div className='max-w-[1640px] m-auto p-4'>
      <h1 className='text-orange-500 text-4xl font-bold text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter row */}
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        {/* Filter Type */}
        <div className='pb-2'>
          <p className='font-bold text-gray-800 text-xl'>Filter Type</p>
          <div className='flex flex-wrap gap-3'>
            <button
              onClick={() => setFoods(data)}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-800 text-xl'>Filter Price</p>
          <div className='flex flex-wrap gap-3'>
            <button
              onClick={() => filterPrice('$')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='bg-orange-500 border-orange-500 text-white font-semibold tracking-wide hover:bg-white hover:text-orange-500 hover:border-orange-500 duration-300'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map(food => (
          <div
            key={food.id}
            className='border shadow-md rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={food.image}
              alt={food.name}
              loading='lazy'
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{food.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full px-2'>
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
