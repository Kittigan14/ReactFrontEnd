const Hello = ({name, message}) => {

console.log({message, name});

    return (
        <div>
            <h1> 
                {message} {name}
            </h1>
        </div>
    );
};

import PropTypes from 'prop-types';

Hello.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string
};

Hello.defaultProps = {
    name: "Guest",
    message: "Good morning"
};

export default Hello;