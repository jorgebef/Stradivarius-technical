// /* eslint-disable testing-library/await-async-query */
// /* eslint-disable testing-library/no-debugging-utils */
import { shallow } from 'enzyme'
import App from './App'

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
// const wrapper = shallow(<App />)
// const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test]='${val}'`)

describe('testing main App component', () => {
  test('renders App without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBeTruthy()
  })
})
