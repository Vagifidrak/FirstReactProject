import React from 'react'
import propTypes from 'prop-types';

function Navbar(props) {
    return (
        <div>
            <h3 style={{ color: 'red' }}>{props.title}</h3>
        </div>
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired //Navbar başqa yerdə istifade olunacaqsa title adinda type string olan type gonderilmelidir
}

Navbar.defaultProps = {
    title: "User App" // və ya App.js-da Navbar+title="User App" əlavə olunur
}

export default Navbar;
