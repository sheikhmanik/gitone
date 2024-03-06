import { useState } from 'react';

import carImgOne from './assets/car-img-1.jpg';
import carImgTwo from './assets/car-img-2.jpg';
import carImgThree from './assets/car-img-3.jpg';
import carImgFour from './assets/car-img-4.jpg';
import carImgFive from './assets/car-img-5.jpg';

function App() {

  const allCarImg = [carImgOne, carImgTwo, carImgThree, carImgFour, carImgFive];

  const [carImgIndex, setCarImgIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);

  function handleImgChange(amount) {
    let newIndex = carImgIndex + amount;
    if (newIndex < 0) {
      newIndex = allCarImg.length - 1
    } else if (newIndex >= allCarImg.length) {
      newIndex = 0
    }
    setCarImgIndex(newIndex)
    setSelectedButton(newIndex)
  }

  function handleSelectedButton(index) {
    setCarImgIndex(index)
    setSelectedButton(index)
  }

  return (
    <>
      <div className='container mx-auto mt-10 flex flex-col items-center justify-center space-y-3'>
        <div className='relative flex items-center justify-between'>
          <button
            className='absolute h-full bg-gray-800/70 p-4 hover:bg-gray-900/70 transition-all'
            onClick={() => handleImgChange(-1)}
          >
            prev
          </button>
          <img src={allCarImg[carImgIndex]} className='w-[700px] h-[400px]' />
          <button
            className='absolute right-0 h-full bg-gray-800/70 p-4 hover:bg-gray-900/70 transition-all'
            onClick={() => handleImgChange(1)}
          >
            next
          </button>
        </div>
        <div className='flex gap-2'>
          {allCarImg.map((img, index) => (
            <button
              key={index}
              className={`w-3 h-3 ${selectedButton === index ? 'bg-gray-300' : 'bg-gray-400'} rounded-full`}
              onClick={() => handleSelectedButton(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
