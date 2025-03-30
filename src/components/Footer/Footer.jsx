import S from "./styles/footer.module.scss";

import IconFacebook from "../../assets/icons/icons-social/facebook.png";
import IconTwitter from "../../assets/icons/icons-social/twitter.png";
import IconYoutube from "../../assets/icons/icons-social/youtube.png";
import IconLinkeding from "../../assets/icons/icons-social/linkeding.png";
import IconInstagram from "../../assets/icons/icons-social/instagram.png";

export function Footer() {
  return (
    <footer className={S.rodape}>
      <section className={S.secaoContato}>
        <p className={S.numeroContato}>4002-8922</p>
        <section className={S.containerIcons}>
          <img src={IconFacebook} alt="Ícone de Contato" />

          <img src={IconTwitter} alt="Ícone de Contato" />

          <img className={S.icon} src={IconYoutube} alt="Ícone de contato" />

          <img className={S.icon} src={IconLinkeding} alt="Ícone de contato" />

          <img className={S.icon} src={IconInstagram} alt="Ícone de contato" />
        </section>
      </section>
      
      <section className={S.secaoInfovnw}>
        <p className={S.textoInformativo}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
