import AddNewItem from "../AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";
import Card from "./Card";
import { useAppState } from "./hooks/AppStateContext";

interface ColumnProps {
  text: string;
  index: number;
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={text =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
