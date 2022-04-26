
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
      <div className="uc-ip-actions-grp">
        <div className="uc-ip-actions">
          Resize
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/300x300/`)}>300x300</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/400x400/`)}>400x400</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/`)}>600x600</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/`)}>800x800</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Corp
          <button onClick={() => setImageSrc(`${CDN_URI}-/scale_crop/400x800/smart/`)}>Smart Corp</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Filter
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/-/filter/vevera/`)}>Vevera</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/-/filter/namala/`)}>Namala</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/600x600/`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Rotate & Flip
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/rotate/90/`)}>Rotate 90 degree</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/rotate/180/`)}>Rotate 180 degree</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/flip/`)}>Flip It</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/mirror/`)}>Mirror It</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Blur & Sharpen
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/blur_region/faces/`)}>Blur Face</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/sharp/10/`)}>Sharp 10</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/-/sharp/20/`)}>Sharp 20</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/preview/800x800/`)}>Set Original</button>
        </div>
      </div>
    </div>  
  )
}

export default React.memo(ProcessImage);