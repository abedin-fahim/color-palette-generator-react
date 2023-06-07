import { Fragment, useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f14024').all(10));

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Fragment>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          {/* Future Idea */}
          {/* <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          /> */}
          <input
            className={error ? 'error' : null}
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type='submit'
            className='btn'
          >
            save
          </button>
        </form>
      </section>

      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            hex={color.hex}
            index={index}
          />
        ))}
      </section>
    </Fragment>
  );
}

export default App;
