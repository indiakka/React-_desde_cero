import { render, screen } from "@testing-library/react";
import Characters from "./componentes/Characters";

test("renders learn react link", () => {
  render(<Characters characters={[]} />);
});
