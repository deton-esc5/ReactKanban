import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskItem({ id, title, taskState }) {
  const { isEditing, setIsEditing } = useState(false);

  if (isEditing) {
    return <input type="text" value={title} />;
  } else {
    return <div onClick={(event) => setIsEditing(true)}>{title}</div>;
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
