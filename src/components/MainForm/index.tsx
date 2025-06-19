import { DefaultInput } from '../DefaultInput';
import Cycles from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircle } from 'lucide-react';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='num'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircle />} color='green' />
      </div>
    </form>
  );
}
