import React from 'react';
import '../styles/title.css';
const Title = ({ title }) => {
    return (
        <div>
            <div className="titleGlobal">
                <div className="titleText">
                    <h1 className='textTitle'>{title}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Title;
