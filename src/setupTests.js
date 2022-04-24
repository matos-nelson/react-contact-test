import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const { replace } = window.location;

function mockWindow() {
  Object.defineProperty(window.location, "replace", {
    configurable: true,
  });
  window.history.replaceState(null, null, "/");
  window.location.replace = jest.fn();
}

function clearMockWindow() {
  window.history.replaceState(null, null, "/");
  window.location.replace = replace;
}

beforeEach(() => {
  jest.restoreAllMocks();
  mockWindow();
});

afterEach(() => {
  jest.restoreAllMocks();
  clearMockWindow();
});
