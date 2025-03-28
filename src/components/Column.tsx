import AddNewItem from "../AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";

interface ColumnProps {
  text: string;
  children?: React.ReactNode;
}

// type React.PropsWithChildren<P> = P & {
//     children?: React.ReactNode;
// }

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
