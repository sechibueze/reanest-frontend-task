import { shallow } from "enzyme";
import App from "./App";

describe("<App /> component", () => {
  it("App component renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
