import { shallow } from "enzyme";
import CashRequestCard from "../index";
import { testData } from "../../../_data";
describe("<CashRequestCard /> renders ", () => {
  const component = shallow(
    <CashRequestCard cashRequestData={testData.loan} />
  );
  const crCard = component.find(".cash-request-card");

  it("<CashRequestCard /> matches snapshot", () => {
    expect(component).toMatchSnapshot();
    expect(component.hasClass("cash-request-card")).toEqual(true);
  });
});
