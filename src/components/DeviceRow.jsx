import React, { useState } from 'react';
import './DeviceRow.css';

function DeviceRow() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <React.Fragment onClick={toggleVisibility}>
      <tr>
        <td>Column 1</td>
        <td>Column 2</td>
        <td>Column 3</td>
      </tr>
      {!isHidden && (
        <tr>
          <td colSpan={3}>Row 2, Column 1 (colspan 3)</td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default DeviceRow;
