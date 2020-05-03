import React from 'react';
import './ImageRecognition.css';

const ImageRecognition =({imageUrl,box}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" alt="" src={imageUrl} width="500px" height="auto" />
                <div className="bounding-box" style={{top:box.topRow, bottom:box.bottomRow, left:box.leftCol, right:box.rightCol}}></div>
            </div>
        </div>
    );
}

export default ImageRecognition;