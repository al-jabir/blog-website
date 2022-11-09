import Image from 'next/image';
import Link from 'next/link';

const author = () => {
  return (
    <div className='author flex py-5'>
      <Image
        src={'/images/author/author1.jpg'}
        alt='author'
        className='rounded-full'
        width={70}
        height={50}
      />
      <div className='flex flex-col justify-center px-4'>
        <Link href={'/'}>
          <a className='text-md font-bold text-gray-800 hover:text-gray-600'>
            Fyling High
          </a>
        </Link>
        <span className='text-sm font-normal'>
          CEO and Director at softTech
        </span>
      </div>
    </div>
  );
};

export default author;
