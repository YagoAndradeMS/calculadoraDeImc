import CampForm from '@/components/CampForm';
import TabelaImc from '@/components/TabelaImc';
import Link from 'next/link';
import { useState } from 'react';

function CalcImc() {
  // Variables for capture weight and height
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  // Function for calculate the BMI
  function calcular() {
    let res = peso / (altura * altura);

    setImc(res);
  }

  return (
    <div className='flex flex-col border border-black w-[300px] gap-5'>
      <p className='w-full text-center bg-zinc-400 font-bold text-lg'>
        Cálculo do IMC
      </p>
      {/*Component for capture weight and height */}
      <CampForm label='peso' state={peso} funcState={setPeso} />
      <CampForm label='altura' state={altura} funcState={setAltura} />

      {/*Button for calculate the BMI */}
      <button
        className='bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer'
        onClick={calcular}
      >
        Calcular
      </button>

      {/*Button for save the BMI result */}
      <Link
        className='bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer text-center'
        href={{
          pathname: '/dadosImc/DadosImc',
          query: {
            p_peso: peso,
            p_altura: altura,
            p_imc: imc,
          },
        }}
      >
        Dados IMC
      </Link>

      <p className='bg-zinc-100 p-1'>Resultado: {imc.toFixed(1)}</p>
      {/*Table to check BMI classification */}
      <TabelaImc imc={imc} />
    </div>
  );
}

export default CalcImc;
