import { useEffect, useState } from "react";
import { phrases } from "../../data/frases.js";
import S from "./style/loadingAnimation.module.scss";

import bookGif from "../../assets/gifs/gatinho-lendo.gif";

export const LoadingAnimation = ({ progress }) => {
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  }, []);

  return (
    <div className={S.loadingOverlay}>
      <img src={bookGif} alt="Gatinho lendo livro" className={S.loadingGif} />
      <p className={S.loadingText}>{randomPhrase}</p>
      <div className={S.progressBar}>
        <div className={S.progress} style={{ width: `${progress}%`}}></div>
      </div>
    </div>
  );
};
