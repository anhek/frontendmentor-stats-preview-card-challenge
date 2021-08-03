import React from 'react';
import PropTypes from 'prop-types';

const StatsItemContainer = ({ children }) => {
  return (
    <div className="flex flex-col mt-6 md:mt-20 md:flex-row">{children}</div>
  );
};

StatsItemContainer.propTypes = {
  children: PropTypes.node,
};

export default StatsItemContainer;
