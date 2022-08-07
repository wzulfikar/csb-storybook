import { Button } from "./Button";

export default {
  component: Button
};

export const Basic = () => (
  <Button onClick={() => console.log("clicked!")}>My Button</Button>
);
