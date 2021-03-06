import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils';
import Headline from './index';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline component', () => {
  describe('Check propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'TestHeader',
        description: 'Test description',
        tempProps: [
          {
            age: 12,
            email: 'test_email@example.com',
            fName: 'testFName',
            lName: 'testLName',
            onlineStatus: false,
          },
        ],
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        description: 'Test description',
      };
      component = setUp(props);
    });
    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'HeadlineComponent');
      expect(wrapper.length).toBe(1);
    });
    it('Should render a H1', () => {
      const header = findByTestAttr(component, 'header');
      expect(header.length).toBe(1);
    });
    it('Should render a description', () => {
      const description = findByTestAttr(component, 'description');
      expect(description.length).toBe(1);
    });
  });
  describe('Have no props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it('Should render without props', () => {
      const wrapper = findByTestAttr(component, 'HeadlineComponent');
      expect(wrapper.length).toBe(1);
    });
    it('Should render a H1', () => {
      const header = findByTestAttr(component, 'header');
      expect(header.length).toBe(1);
    });
    it('Should render a description', () => {
      const description = findByTestAttr(component, 'description');
      expect(description.length).toBe(1);
    });
  });
});
