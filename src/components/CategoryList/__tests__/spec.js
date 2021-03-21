import { shallow } from "enzyme";
import CategoryList from "../index";

describe("<CategoryList /> renders ", () => {
  const component = shallow(<CategoryList />);
  const catList = component.find(".category-icons-card");
  it("<CategoryList /> matches snapshot", () => {
    expect(component).toMatchSnapshot();
    expect(catList.length).toEqual(1);
  });
});
