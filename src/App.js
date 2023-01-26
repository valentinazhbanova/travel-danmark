import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
    const [trip, setTrip] = useState(0);
    const {id, name, image, description} = data[trip];

const perviousTrip = () => {
    setTrip((trip => {
    trip --;
    if(trip < 0) {
        return data.length -1;
        }
        return trip;
    }))
}

    const nextTrip = () => {
    setTrip((trip => {
        trip ++;
        if (trip > data.length -1){
        trip = 0;
        }
        return trip;
    }))
  }

  return (
    <div>
      <div className='container'>
        <h2>Города Дании</h2>
      </div>
      <div className='container'>
        <img src={image} width='550px' alt='Города Дании'/>
      </div>
      <div className='container btn'> 
        <button onClick={perviousTrip}>Previous</button>
        <button onClick={nextTrip}>Next</button>
      </div>
      <div className='container'>
        <h2>{name}</h2>
      </div>
      <div className='container'>
        <h3 className='description'>{description}</h3>
      </div>
    </div>
  );
}

export default App;
