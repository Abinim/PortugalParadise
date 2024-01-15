import { useState } from 'react';

function AddPlaces(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setHasType] = useState('');
  const [image, setHasImage] = useState('');
  const [city, setHasCity] = useState('');

  // ./src/components/AddMovie.jsx

  // ...

  return (
    <div className='AddMovie'>
      <h4>Add a Movie</h4>

      <form>
        <label>Name: </label>
        <input type='text' name='city' value={title} />

        <label>Description: </label>
        <input type='text' name='director' value={director} />

        <label>Location: </label>
        <input type='string' name='Places' />

        <label>Type: </label>
        <input type='checkbox' name='hasOscars' />

        <label>Image: </label>
        <input type='Image' name='Image' />

        <label>City: </label>
        <input type='text' name='Places' />

        <button type='submit'>Add Places</button>
      </form>
    </div>
  );
}

export default AddPlaces;
