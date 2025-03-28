import { ColumnContainer, ColumnTitle } from "../styles"

interface ColumnProps {
    text: string;
    children?: React.ReactNode;
}

// type React.PropsWithChildren<P> = P & {
//     children?: React.ReactNode;
// }

const Column = ({text, children}: ColumnProps) => {
  return (
    <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
    </ColumnContainer>
  )
}

export default Column