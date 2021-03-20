import { shallow } from "enzyme";
import ProductLayout from "../index";
const productCount = 2;
describe("<Navbar /> renders correctly", () => {
  const component = shallow(<ProductLayout />);
  const productLayoutWrapper = component.find(".product-layout-wrapper");
  const productItems = component.find(".product-item");
  it("Navbar matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("<ProductLayout /> was rendered correctly", () => {
    expect(productLayoutWrapper.length).toEqual(1);
  });
  it("Product items rendered correctly", () => {
    expect(productItems.length).toEqual(productCount);
  });
});
