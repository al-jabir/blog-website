import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';

const Section = () => {
  return (
    <section
      className='py-16'
      style={{
        background: `url('/images/banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
        {Slide()}
      </div>
    </section>
  );
};

export default Section;

const Slide = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='images'>
        <Link href={'/'}>
          <a>
            {' '}
            <Image
              src={'/images/img1.jpg'}
              alt='pic'
              width={500}
              height={500}
            />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={'/'}>
            <a className='text-orange-500 hover:text-orange-800'>
              Business, Travel
            </a>
          </Link>
          <Link href={'/'}>
            <a className='text-gray-500 hover:text-gray-700'> Nov 9, 2022</a>
          </Link>
        </div>
        <div className='title'>
          <Link href={'/'}>
            <a className='text-3xl md:text-6xl font-bold text-gray-700 hover:text-gray-400'>
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className='py-3 text-gray-500'>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author />
      </div>
    </div>
  );
};
