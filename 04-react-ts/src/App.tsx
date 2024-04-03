import "./App.css";
import BarraFerramentas from "../../04-react-ts/src/components/BotaoFerramentas";
import Contador from "../../04-react-ts/src/components/Contador";
import ContadorIntervalo from "../../04-react-ts/src/components/ContadorIntervalo";
import Counter from "../../04-react-ts/src/components/Counter";
import Exercicios from "../../04-react-ts/src/components/Exercicios";
import ExibirPostagens from "../../04-react-ts/src/components/ExibirPostagem";
import Greeting from "../../04-react-ts/src/components/Greeting";
import TextInput from "../../04-react-ts/src/components/TextInput";
import { TemaProvider } from "../../04-react-ts/src/context/TemaContext";

function App() {
  return (
    <>
      {/* 1 - Componentes funcionais com TS */}
      <Greeting name="Matheus" />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom hook com TS */}
      <ContadorIntervalo />
      {/* 5 - Exercícios */}
      <Exercicios />
      {/* 6 - useReducer e TypeScript */}
      <Contador />
      {/* 7 - Context API com TypeScript  */}
      <TemaProvider>
        <div>
          <BarraFerramentas />
          {/* Outros componentes que consomem o contexto TemaContext também viriam aqui */}
        </div>
      </TemaProvider>
      {/* 8 - Axios com TS */}
      <ExibirPostagens />
    </>
  );
}

export default App;
