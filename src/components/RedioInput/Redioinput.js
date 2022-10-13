import React from 'react';

const Redioinput = ({ans}) => {
   
    return (
        <div> 
            <input type="radio" value="Male" name="gender" /> {ans}
        </div>
    );
};

export default Redioinput;

