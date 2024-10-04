import { Inter } from 'next/font/google';
import CalcImc from './calcimc/CalcImc';

// Source that will be used in the project
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex w-full h-screen justify-start items-start '>
      {/*Component for calculate the BMI*/}
      <CalcImc />
    </div>
  );
}
