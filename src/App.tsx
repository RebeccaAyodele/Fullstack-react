import {  } from "./styles";
import Column from "./components/Column";
// import Card from "./components/Card";
import AddNewItem from "./AddNewItem";
import UseReducer from "./components/hooks/UseReducer";
import { useAppState } from "./components/hooks/AppStateContext";

const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch({type: "ADD_LIST", payload: text})} />
      <Column text="Use Reducer">
        <UseReducer />
      </Column>
    </AppContainer>
  );
};

export default App;
