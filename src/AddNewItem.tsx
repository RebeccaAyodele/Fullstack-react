import { useState } from "react";
import NewItemForm from "./components/NewItemForm";
import { AddItemButton } from "./styles";

interface AddNewItemProps {
  onAdd: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem: React.FC<AddNewItemProps> = ({ onAdd, toggleButtonText, dark }) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton style={{ color: dark ? "#000" : "#fff" }} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
