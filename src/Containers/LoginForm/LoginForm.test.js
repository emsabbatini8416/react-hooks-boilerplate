import React from 'react';
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import LoginForm from './';

const mockStore = configureMockStore([thunk]);
const mockState = {}

describe('LoginForm component tests', () => {
    let store = mockStore(mockState)

    const wrapper = mount(
        <Provider store={store}>
            <LoginForm />
        </Provider>);

    it('should have a LogIn btn component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should have a LogIn btn component', () => {
        //There should be only one button
        expect(wrapper.find('input#btnLogIn')).toHaveLength(1);

        //Button should be of type button
        expect(wrapper.find('input#btnLogIn')
        .prop('type'))
        .toEqual('submit');

        //Button should have matching text
        expect(wrapper.find('input#btnLogIn')
        .prop('value'))
        .toEqual('LogIn');
    });

    it('should have a SignUp btn component', ()=> {
        //There should be only one button
        expect(wrapper.find('input#btnSignUp')).toHaveLength(1);

        //Button should be of type button
        expect(wrapper.find('input#btnSignUp')
        .prop('type'))
        .toEqual('button');

        //Button should have matching text
        expect(wrapper.find('input#btnSignUp')
        .prop('value'))
        .toEqual('SignUp');
    });

    it('should have input for email and password', ()=> {
        //Email and password input field should be present
        expect(wrapper.find('LabelInput')).toHaveLength(2);
    });
});
