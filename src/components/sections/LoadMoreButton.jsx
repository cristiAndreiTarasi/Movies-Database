import React from 'react';
import { PAGE } from '../../assets/api_bits';

export default ({addNextPage}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='load-container'>
                    <a href='#'>
                        <button className='load' onClick={addNextPage}>
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}; 