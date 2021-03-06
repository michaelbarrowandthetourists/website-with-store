import React from 'react';

export default function Media() {
    return (
        <div className='container'>
            <div className='card u-full-width'>
                <ul className='grid'>
                    <li className='grid-block'>
                        <iframe className='u-full-width' height='150' src="https://www.youtube.com/embed/oBbGqUaFtW0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <li className='grid-block'>
                        <img className="grid-image" alt="Band Photo" src={require('../../../images/1.jpg')}/>
                    </li>
                    <li className='grid-block'>
                        <img className="grid-image" alt="Band Photo" src={require('../../../images/2.jpg')}/>
                    </li>
                    <li className='grid-block'>
                        <img className="grid-image" alt="Band Photo" src={require('../../../images/3.jpg')}/>
                    </li>
                    <li className='grid-block'>
                        <img className="grid-image" alt="Band Photo" src={require('../../../images/9.jpg')}/>
                    </li>
                    <li className='grid-block'>
                        <img className="grid-image" alt="Band Photo" src={require('../../../images/5.jpg')}/>
                    </li>
                    <li className='grid-block'>
                        <iframe className='u-full-width' height='150' src="https://www.youtube.com/embed/OuXMLdMrv88" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <li className='grid-block'>
                        <iframe className='u-full-width' height='150' src="https://www.youtube.com/embed/oCHFJ1tJpjg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </li>
                    <li className='grid-block'>
                        <img className="grid-image" alt="Band Photo" src={require('../../../images/7.jpg')}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}













