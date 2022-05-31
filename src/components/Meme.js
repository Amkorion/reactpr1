import React, { useState, useEffect } from "react";

const handleSubmit = async (event) => {
  event.preventDefault();
};

const Meme = () => {
  // const [memeImg, setMemeImg] = useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function memeTextHandler(event) {
    const { name, value } = event.target;
    setMeme((prevMemeText) => {
      return {
        ...prevMemeText,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form--inputs"
          type="text"
          placeholder="Введіть верхній текст"
          name="topText"
          onChange={memeTextHandler}
        />
        <input
          className="form--inputs"
          type="text"
          placeholder="Введіть нижній текст"
          name="bottomText"
          onChange={memeTextHandler}
        />
        <button onClick={getMemeImage} className="form--button">
          Отримати свіженький Мемчик 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="mems" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
