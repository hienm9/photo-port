import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


afterEach(cleanup);

describe('Nav component', () => {
    // Baseline test, to verify that the component is rendering
    it('renders', () => {
        render(<Nav />);
      });


    // Snapshot test, test case, we'll compare snapshot versions of the DOM node structure. 
    //A snapshot is a serialized version of the DOM node structure, enabled by Jest.
    it('matches snapshot DOM node structure', () => {
      // render Nav
      const { asFragment } = render(<Nav />);
      expect(asFragment()).toMatchSnapshot();
    });

  })

  //test if the camera emoji is visible
  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // query to return the element containing the emoji
    const { getByLabelText } = render(<Nav />);
    // test the emoji's accessibility features by querying the element by its aria-label
    expect(getByLabelText('camera')).toHaveTextContent('📸');


    })
  })

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })