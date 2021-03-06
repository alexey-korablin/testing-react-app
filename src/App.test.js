import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, testStore } from '../utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  // Wthout .childAt(0).dive() just will be returned HOC as here:
  // <ContextProvider value={{...}}>
  // <App store={{...}} posts={{...}} fetchPosts={[Function]} />
  // </ContextProvider>
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App component', () => {
  let component;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title',
          body: 'Some text',
        },
        {
          title: 'Example title',
          body: 'Some text',
        },
        {
          title: 'Example title',
          body: 'Some text',
        },
      ],
    };

    component = setUp(initialState);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'appComponent');
    expect(wrapper.length).toBe(1);
  });

  it('exmplMethod_updState method should update state as expected', () => {
    const classInstance = component.instance();
    classInstance.exmplMethod_updState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('exmplMethod_returnValue method should return value as expected', () => {
    const classInstance = component.instance();
    const value = classInstance.exmplMethod_returnValue(6);
    expect(value).toBe(7);
  });
});
