import {shallow} from 'enzyme'
import React from 'react'
import App from '../App'
import CommentBox from '../CommentBox'

it('shows a comment box',()=>{
    const wrapped = shallow(<App/>); // wrapped = component
    expect(wrapped.find(CommentBox).length).toEqual(2) // find 1 occurence of component
});