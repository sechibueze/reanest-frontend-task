import { shallow } from "enzyme";
import Navbar from "../index";

describe("<Navbar /> renders correctly", () => {
  const component = shallow(<Navbar />);
  const header = component.find(".header");
  const menuToggler = component.find(".menu-toggler");
  it("Navbar matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("Navbar has a header", () => {
    expect(header.length).toEqual(1);
  });
  it("Navbar has a pseudo checkbox for opening sidebar", () => {
    expect(menuToggler.length).toEqual(1);
  });
});
