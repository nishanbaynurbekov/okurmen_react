import React, { useState, useEffect } from 'react';

function Api({ data }) {
  // 1. Сактагычты текшерип стейтке алабыз

    const [books, setBooks] = useState(() => {
    try {
      const saved = localStorage.getItem("local");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });


  // 2. Бул китеп тизмеде (books) бар же жок экенин текшеребиз
  const isFavorite = books.some((item) => item.id === data.id);

  // 3. Маалымат өзгөргөндө сактагычка жазабыз
  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(books));
  },[books]);

  // 4. Тандоо же кайра өчүрүү (Toggle) функциясы
  const handleFavoriteClick = () => {
    if (isFavorite) {
      // Эгер мурда кошулган болсо — тизмеден өчүрөбүз
      setBooks(books.filter((item) => item.id !== data.id));
    } else {
      // Эгер жок болсо — тизмеге кошобуз
      setBooks([...books, data]);
      window.location.reload(); // Браузердин баракчасын толугу менен жаңылайт
      localStorage.removeItem("loko")
    
    }
  };

  const deleteObj = () => {
    localStorage.removeItem("local");
    setBooks([]); // Стейтти да дароо бошотобуз
  };

  return (
    <div className="card">
      <div className="card__images">
        <img src={data.image} alt={data.name || data.title} />
      </div>
      <h3>{data.name || data.title}</h3>

      <div className="select">
        <button className="select__read">окуу</button>
        
        {/* Баскычтын стили isFavorite'ке карап өзгөрөт */}
        <button
          className={`select__like ${isFavorite ? "select__like--active" : ""}`}
          onClick={handleFavoriteClick}
          style={{
            backgroundColor: isFavorite ? "#e74c3c" : "#f1f1f1",
            color: isFavorite ? "#ffffff" : "#000000",
            border: "1px solid #ccc",
            padding: "8px 16px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
        >
          {isFavorite ? "🤍 Тандалды" : "❤️ Тандоо"}
        </button>
      </div>
    </div>
  );
}

export default Api;