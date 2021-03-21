import { shallow } from "enzyme";
import PaymentOptions from "../index";
const paymentChannelsCount = 6;
describe("<PaymentOptions /> renders correctly", () => {
  const component = shallow(<PaymentOptions />);
  const paymentOpts = component.find(".payment-icons li");
  const introText = component.find(".p-intro");
  it("<PaymentOptions /> matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("<PaymentOptions /> shows all payment channels", () => {
    expect(paymentOpts.length).toEqual(paymentChannelsCount);
  });
  it("Should contain MAKE PAYMENT element", () => {
    expect(introText).toBeTruthy();
  });
});
