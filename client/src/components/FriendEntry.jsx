/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React, {
  useState, useEffect, createContext, useContext,
} from 'react';

const FriendEntry = ({ friendName }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="eachFriend">

      <input
        type="checkbox"
        onChange={(e) => {
          // console.log(`${friendName} 's box was selected`);
          if (active) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
        className={active ? 'active' : 'hide'}
        value={friendName}
      />
      {friendName}

    </div>
  );
};

export default FriendEntry;
