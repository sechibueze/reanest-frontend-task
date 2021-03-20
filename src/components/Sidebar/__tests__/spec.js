import { shallow } from "enzyme";
import Sidebar, { links } from "../index";
describe("<Sidebar /> renders correctly", () => {
  const component = shallow(<Sidebar />);
  const sidebarWrapper = component.find(".sidebar");
  const sidebarLinks = component.find(".sidebar-link");
  it("<Sidebar /> matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("<Sidebar /> was rendered correctly", () => {
    expect(sidebarWrapper.length).toEqual(1);
  });
  it("Menu items rendered correct count", () => {
    expect(sidebarLinks.length).toEqual(links.length);
  });
});
