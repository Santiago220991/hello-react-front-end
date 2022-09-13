import React from "react"
import PropTypes from "prop-types"


function Greeting() {

  return (
    <React.Fragment>
      Message: 
    </React.Fragment> 
  );
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting