import React, { FC, useState } from "react";

const AddTreeMember: FC<{ onSubmit: (newMember: string) => void }> = ({
  onSubmit,
}) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Add Family member</p>

      <label>
        <span>name</span>
        <input type="text" value={name} onChange={handleChange} />
      </label>

      <button type="submit" disabled={!name}>
        submit
      </button>
    </form>
  );
};

export default AddTreeMember;
