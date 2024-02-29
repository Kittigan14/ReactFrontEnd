import PropTypes from 'prop-types';

export default function Contact({email, phone}) {
    return (
        <div>
            <h2>{email} {phone}</h2>
            <p>Send Me a Message</p>
        </div>
    )
}

Contact.propTypes = {
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired
};