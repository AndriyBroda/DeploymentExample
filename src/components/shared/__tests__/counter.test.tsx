import { shallow } from "enzyme";
import { Counter } from "../counter/Counter"


describe('Counter component', () => {
    it('should render component with 2 btns', () => {
        const wrapper = shallow(<Counter />);

        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(2)
    })

    it('should change table on click', () => {
        const wrapper = shallow(<Counter />);
        const addBtn = wrapper.find('button:first-child')

        addBtn.simulate('click')

        const resultBlock = wrapper.find('div[role="result"]');
        expect(resultBlock.text()).toBe('1')
    })


})