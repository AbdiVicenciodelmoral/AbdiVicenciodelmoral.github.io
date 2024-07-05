import React, { useState } from 'react';

const IrisDemo = () => {
  const [irisData, setIrisData] = useState({
    sepalLength: '',
    sepalWidth: '',
    petalLength: '',
    petalWidth: ''
  });
  const [irisPrediction, setIrisPrediction] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIrisData({ ...irisData, [name]: value });
  };

  const handleIrisSubmit = async (event) => {
    event.preventDefault();
    const prediction = await getIrisPrediction(irisData);
    setIrisPrediction(prediction);
  };

  const getIrisPrediction = async (data) => {
    return 'setosa';
  };

  console.log('IrisDemo rendered');

  return (
    <div className='demo-content'>
      <h2>Iris Flower Classification</h2>
      {/*<img src='path-to-iris-image.jpg' alt='Iris Types' />*/}
      <form onSubmit={handleIrisSubmit}>
        <label>
          Sepal Length:
          <input type='number' name='sepalLength' value={irisData.sepalLength} onChange={handleInputChange} />
        </label>
        <label>
          Sepal Width:
          <input type='number' name='sepalWidth' value={irisData.sepalWidth} onChange={handleInputChange} />
        </label>
        <label>
          Petal Length:
          <input type='number' name='petalLength' value={irisData.petalLength} onChange={handleInputChange} />
        </label>
        <label>
          Petal Width:
          <input type='number' name='petalWidth' value={irisData.petalWidth} onChange={handleInputChange} />
        </label>
        <button type='submit'>Predict</button>
      </form>
      {irisPrediction && <p>Predicted Iris Type: {irisPrediction}</p>}
    </div>
  );
};

export default IrisDemo;
