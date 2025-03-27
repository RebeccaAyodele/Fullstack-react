import { AppContainer } from "./styles";
import Card from "./Card";
import Column from "./Column";
import AddNewItem from "./AddNewItem";
import Apps from "./use-reducer/App";
import { useAppState } from "./AppStateContext";

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
      </Column>

      <Column text="In Progress">
        <Card text="Learn Typescript"></Card>
      </Column>

      <Column text="Done">
        <Card text="Begin to use static typing"></Card>
      </Column>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      <Apps></Apps>
    </AppContainer>
  );
};

export default App;
