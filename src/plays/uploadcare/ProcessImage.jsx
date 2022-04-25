
import React, { useState, useEffect } from 'react';

const ProcessImage = ({file}) => {
  console.log(file);
  const CDN_URI = `https://ucarecdn.com/${file.uuid}/`;
  const [imageSrc, setImageSrc] = useState(CDN_URI);

  
  
  return(
    <div>
      <div className="uc-ip-preview">
        <img src={imageSrc} alt={file.original_filename} />
      </div>
      <div className="uc-ip-actions">
        <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        <button onClick={() => setImageSrc(`${CDN_URI}-/preview/300x300/`)}>300x300</button>
        <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/`)}>600x600</button>
        <button onClick={() => setImageSrc(`${CDN_URI}-/scale_crop/400x800/smart/`)}>Smart Corp</button>
        <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/-/filter/vevera/`)}>Vevera</button>
        <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/-/filter/namala/`)}>Namala</button>
      </div>
    </div>  
  )
}

export default React.memo(ProcessImage);