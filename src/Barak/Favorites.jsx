// src/pages/Favorites.jsx
import { useSelector } from 'react-redux';
import Api from '../Component/API/Api';
import '../styles/style1.css'; // Ошол эле сулуу стилди колдонобуз
import List from '../Component/list/List';

function Favorites() {
  // Redux'тан сакталган китептерди алабыз
  const favoriteBooks = useSelector((state) => state.favorites.favoriteBooks);

  return (
    <div>
    <List />

    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'purple' }}>Менин тандалган китептерим (Избранные)</h1>
      
      {favoriteBooks.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '5px' }}>
          Азырынча эч кандай китеп тандала элек 💔
        </p>
      ) : (
        <div className="cara">
          {favoriteBooks.map((book) => (
            <Api key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Favorites;