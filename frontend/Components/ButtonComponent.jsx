import React, {useState} from 'react';

const ButtonComponent = () => {
    const size =8;
    const [count,setcount] = useState(100);
    const HandleCountDecrement = () => {
        console.log("Count decrement is listened");
        setcount(count-1);
    };
    const HandleCountIncrement = () => {
        console.log("Count increment is listened");
        setcount(count+1);
    };

  return (
    <div className='bg-slate-900 h-screen'>
        <div className='grid grid-cols-4 p-10'>
            <div className='bg-white size-82 relative'>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer'
                >-
                </button>
                <div className='bg-transparent border border-blue-500 rounded-2xl size-10 px-14 py-2 absolute bottom-8 left-28'>
                    {count}
                </div>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer'
                >+
                </button>
                <button className='bg-green-200 px-5 py-2 cursor-pointer absolute '>Add to Cart</button>
                
            </div>
            <div className='bg-white size-82 relative'>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer'
                >-
                </button>
                <div className='bg-transparent border border-blue-500 rounded-2xl size-10 px-14 py-2 absolute bottom-8 left-28'>
                    {count}
                </div>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer'
                >+
                </button>
                 
                
            </div>
            <div className='bg-white size-82 relative'>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer'
                >-
                </button>
                <div className='bg-transparent border border-blue-500 rounded-2xl size-10 px-14 py-2 absolute bottom-8 left-28'>
                    {count}
                </div>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer'
                >+
                </button>
                <button className='bg-green-200 px-5 py-2 cursor-pointer absolute '>Add to Cart</button>
                
            </div>
            <div className='bg-white size-82 relative'>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 left-20 text-2xl font-semibold cursor-pointer'
                >-
                </button>
                <div className='bg-transparent border border-blue-500 rounded-2xl size-10 px-14 py-2 absolute bottom-8 left-28'>
                    {count}
                </div>
                <button
                    onClick={HandleCountDecrement}
                    className='absolute bottom-10 right-20 text-2xl font-semibold cursor-pointer'
                >+
                </button>
                <button className='bg-green-200 px-5 py-2 cursor-pointer absolute '>Add to Cart</button>
                
            </div>
        </div>
      
    </div>
  )
}

export default ButtonComponent ;

