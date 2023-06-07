import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, index, weight, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexColor = `#${hex}`;

  const copyHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      onClick={copyHandler}
      className={`color ${index >= 10 ? 'color-light' : null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>Copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
