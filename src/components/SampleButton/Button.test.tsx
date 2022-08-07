import { render } from "@test";
import { Button } from ".";

describe("Button", () => {
  const props = {
    label: "My Button",
  };

  it("renders without error", () => {
    const { getByText } = render(<Button>{props.label}</Button>);
    expect(getByText(props.label)).toBeInTheDocument();
  });
});
