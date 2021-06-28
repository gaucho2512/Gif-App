import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../Components/GifGridItem'


describe('pruebas en <GifGridItem />' , () => {

    const title = 'un titulo'
    const url = 'http://localhost/algo.jpg'

    test('debe de mostrar el componente correctamente' , () => {

        const wrapper = shallow( <GifGridItem title={title} url={url}/>)

        expect( wrapper).toMatchSnapshot();

      })   


})