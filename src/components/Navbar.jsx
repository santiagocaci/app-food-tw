import { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSave2Fill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet, FaUserFriends } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNavbar = () => setIsNavOpen(!isNavOpen);

  console.log(isNavOpen);

  return (
    <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={handleToggleNavbar} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-2xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-52 sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 focus:outline-none w-full'
          type='text'
          placeholder='Search foods'
        />
      </div>

      <button className='bg-black text-white hidden md:flex md:items-center md:gap-0.5 md:py-2 md:rounded-full'>
        <BsFillCartFill size={20} />
        Cart
      </button>

      {isNavOpen && (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-700'></div>
      )}

      <div
        className={
          isNavOpen
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300'
            : 'fixed top-0 -left-full w-[300px] h-screen bg-white z-20 duration-1000'
        }
      >
        <AiOutlineClose
          onClick={handleToggleNavbar}
          size={30}
          className='absolute top-4 right-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex text-xl py-4 gap-3'>
              <TbTruckDelivery size={25} /> Orders
            </li>
            <li className='flex text-xl py-4 gap-3'>
              <MdFavorite size={25} /> Favorites
            </li>
            <li className='flex text-xl py-4 gap-3'>
              <FaWallet size={25} /> Wallet
            </li>
            <li className='flex text-xl py-4 gap-3'>
              <MdHelp size={25} /> Help
            </li>
            <li className='flex text-xl py-4 gap-3'>
              <AiFillTag size={25} /> Promotions
            </li>
            <li className='flex text-xl py-4 gap-3'>
              <BsFillSave2Fill size={25} /> Best Ones
            </li>
            <li className='flex text-xl py-4 gap-3'>
              <FaUserFriends size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
