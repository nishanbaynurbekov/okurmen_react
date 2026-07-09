// src/Component/API/Api.jsx
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favoritesSlice'; // жолун тууралап ал

function Api({ data }) {
  const dispatch = useDispatch();
  
  // Китеп тандалгандардын ичинде барбы же жокпу текшеребиз
  const favoriteBooks = useSelector((state) => state.favorites.favoriteBooks);
  const isFavorite = favoriteBooks.some(book => book.id === data.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(data.id));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  return (
    <div className="sabr">
      <div className="image">
        <img src={data.image} alt=''/>
      </div>
      <h3>{data.name || data.title}</h3>
      
      <div className="sabr-buttons">
        <button id="ok_btn">Окуу</button>
        <button 
          id="iz_btn" 
          onClick={handleFavoriteClick}
          style={{ backgroundColor: isFavorite ? '#ffacc7' : 'red', color: isFavorite ? 'black' : 'white' }}
        >
          {isFavorite ? 'Тандалды ❤️' : 'Избранные'}
        </button>
      </div>
    </div>
  );
}

export default Api;