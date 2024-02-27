import PropTypes from "prop-types";

function PreparationListItem(props) {
  return (
    <li>
      <span style={{ fontWeight: "bolder" }}>{props.bold}</span>&nbsp;
      {props.normal}
    </li>
  );
}

PreparationListItem.propTypes = {
  bold: PropTypes.string.isRequired,
  normal: PropTypes.string.isRequired,
};

export default PreparationListItem;
