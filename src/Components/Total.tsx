import React from 'react';

interface props {
  total: number;
}
const Total:React.FC<props> = ({total}) => {
  return (
    <div className={'total'}>
   <strong>Total Price: {total}</strong>
    </div>
  );
};

export default Total;