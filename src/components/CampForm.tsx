// interface to indicate the properties that will be passed
interface CompFormProps {
  label: string;
  state: any;
  funcState: any;
}

function CampForm(props: CompFormProps) {
  return (
    <div className='flex mx-2'>
      <label className='w-[60px]'>{props.label}</label>

      {/*Input for capture the value of height and weight */}
      <input
        className='border p-1 w-full text-center rounded-lg'
        value={props.state}
        onChange={e => props.funcState(e.target.value)}
      />
    </div>
  );
}

export default CampForm;
