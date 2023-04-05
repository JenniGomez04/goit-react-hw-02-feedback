import React from 'react';
import PropTypes from 'prop-types';

import {TitleH2} from './Section.styled';

function Section({ title, children }) {
  return (
    <div>
      <TitleH2>{title}</TitleH2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
