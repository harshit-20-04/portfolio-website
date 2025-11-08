import React from 'react'

const getDelayClass = (index) => {
  // Use a mix of Tailwind's existing delay utilities
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-500', 'delay-700', 'delay-1000'];
  return delays[index % delays.length];
};


export default getDelayClass;
