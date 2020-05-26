import React from 'react';

export default () => (
    <form>
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Find Movies & TV Shows" 
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    </form>
); 