import React from 'react'

export const slider = () => {
    const Slider =({
        value,
        min,
        max,
        step,
        onValueChange
    })=>{
        const handleSliderChange =(e)=>{
            onValueChange([parseFloat(e.target.value)])
        }
    }
    const getBackgroundSize = (()=>{
        return {getBackgroundSize:`${(value[0]-min)*100/(max-min)}%100`}
    });

  return (
    <div className='relative w-full'>
        <input type="range"
            min={min}
            max={max} 
            step={step} 
            value={value[0]} 
            onChange={handleSliderChange}
            className='w-full h-2 bg-color-200 rounded-lg apperearence-none cursor-pointer' 
            style={
                {
                    ...getBackgroundSize()
                }
            }
        />
    </div>
  )
}
