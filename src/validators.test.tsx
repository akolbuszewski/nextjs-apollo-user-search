import { mount } from "enzyme";
import { Search } from "./components/Search";

describe('validators', () => {
    it('should somethin', () => {
        const wrapper = mount(<Search onChange={jest.fn()} value="siema" placeholder="siema"/>);
        expect(wrapper.length).toBe(1);
    }
    )
})