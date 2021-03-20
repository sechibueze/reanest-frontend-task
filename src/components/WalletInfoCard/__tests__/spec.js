import { shallow } from "enzyme";
import WalletInfoCard from "../index";
const featureCount = 3;
describe("<WalletInfoCard /> renders correctly", () => {
  const component = shallow(<WalletInfoCard />);
  const wrapper = component.find(".wallet-info");
  const features = component.find(".wallet-actions li");
  it("<WalletInfoCard /> matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("<WalletInfoCard /> was rendered correctly", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("Feature items rendered correctly", () => {
    expect(features.length).toEqual(featureCount);
  });
});
