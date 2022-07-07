import { render, screen } from "@testing-library/react";
import { Char} from "./componentes/Char";

test("renders learn react link", () => {
  render(<Char  characters={[]}/>);
});
