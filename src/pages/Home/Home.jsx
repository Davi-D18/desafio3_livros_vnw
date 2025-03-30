import S from "./styles/home.module.scss";

// Imagens
import Icon1 from "../../assets/icons/grupo-pessoas.png";
import Icon2 from "../../assets/icons/pessoa-lendo.png";
import Icon3 from "../../assets/icons/mao-fechada.png";
import Icon4 from "../../assets/icons/balanca.png";
import { CardMotivosDoar } from "../../components/CardMotivosDoar/CardMotivosDoar";

export function Home() {
  const data = [
    {
      id: 1,
      iconeCard: Icon1,
      descricao:
        "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
    },
    {
      id: 2,
      iconeCard: Icon2,
      descricao: "Estimula o hábito da leitura e o aprendizado contínuo.",
    },
    {
      id: 3,
      iconeCard: Icon3,
      descricao:
        "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
    },
    {
      id: 4,
      iconeCard: Icon4,
      descricao:
        "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
    },
  ];

  return (
    <main>
      <section className={S.sectionContainer}>
        <h2 className={S.title}>Venha Fazer Parte Da Maior Rede De Doação</h2>
      </section>

      <section className={S.containerDoar}>
        <div className={S.containerAlinhamento}>
          <h2 className={S.textPorqueDoar}>Por que devo doar?</h2>
          <div className={S.containerCards}>
            {data.map((card) => (
              <CardMotivosDoar
                key={card.id}
                iconeCard={card.iconeCard}
                descricao={card.descricao}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
