import { useState } from "react";

const Name = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("anon1899");

  return (
    <div>
      {editing ? (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
        />
      ) : (
        <span onClick={() => setEditing(true)} className="cursor-pointer">
          @{name}
        </span>
      )}
    </div>
  );
};

export default Name;
