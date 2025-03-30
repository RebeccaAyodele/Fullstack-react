import { AppContainer } from "./styles";
import Column from "./components/Column";
import Card from "./components/Card";
import AddNewItem from "./AddNewItem";
import UseReducer from "./components/hooks/UseReducer";
import { useAppState } from "./components/hooks/AppStateContext";

const App = () => {
  const {state} = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      {/* <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column> */}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      <Column text="Use Reducer">
        <UseReducer />
      </Column>
    </AppContainer>
  );
};

export default App;
