import './ChooseLevel.css';

export default function ChooseLevel({ setValueDif}) {
  const handleValue = (value) => {
    setValueDif(value);
  }
  return (
    <div className='containerLevel'>
      <button onClick={() => handleValue('beginner')}>Beginner</button>
      <button onClick={() => handleValue('medium')}>Medium</button>
      <button onClick={() => handleValue('hard')}>Hard</button>
    </div>
  )
}
