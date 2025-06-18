import Cards from "./Cards.jsx";
import Carrossel from "./Carrossel.jsx";


const Main = () => {
    return (
        <main>
            <Carrossel />

            <section className="descricao">
                <h2 style={{ fontWeight: "bold"}}> Apresentação </h2>
                <p>
                    O Censo Escolar é a principal fonte de informações sobre a educação básica no Brasil. 
                    Realizado pelo Inep em colaboração com estados e municípios, ele coleta dados sobre alunos, professores, escolas e rendimento escolar. 
                    Os dados servem de base para a formulação de políticas públicas, distribuição de recursos e acompanhamento da qualidade da educação em todo o país.
                </p>
            </section>

            <br /> 

            <Cards />

        </main>
    );
};

export default Main;
