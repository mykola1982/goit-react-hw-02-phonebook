import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
