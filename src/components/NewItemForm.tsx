import { useState } from "react";
import useFocus from "./hooks/useFocus";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></NewItemInput>
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
