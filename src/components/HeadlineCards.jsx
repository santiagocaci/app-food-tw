export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-xl px-2 pt-2 lg:text-2xl'>
            Sun&lsquo;s Out, BOGO&lsquo;s Out
          </p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white hover:border-black duration-500'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl'
          src='https://images.pexels.com/photos/588776/pexels-photo-588776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='eggs snacks'
        />
      </div>

      {/* Card  */}
      <div className='rounded-xl relative'>
        {/* Overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-xl px-2 pt-2 lg:text-2xl'>
            Sun&lsquo;s Out, BOGO&lsquo;s Out
          </p>
          <p className='px-2'>
            Aliquip cillum minim do voluptate amet amet ex velit.
          </p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white hover:border-black duration-500'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='eggs snacks'
        />
      </div>

      {/* Card  */}
      <div className='rounded-xl relative'>
        {/* Overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-xl px-2 pt-2 lg:text-2xl'>
            Sun&lsquo;s Out, BOGO&lsquo;s Out
          </p>
          <p className='px-2'>
            Cillum cupidatat incididunt officia consectetur.
          </p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white hover:border-black duration-500'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/4057738/pexels-photo-4057738.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='eggs snacks'
        />
      </div>
    </div>
  );
};
