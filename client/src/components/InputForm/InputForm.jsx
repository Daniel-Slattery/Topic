import { useState } from "react";

const InputForm = ({ createTopic }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await createTopic({ title });
      setTitle("");
    } else {
      setError(true);
    }
  };

  const onChangehandler = (e) => {
    setTitle(e.target.value);
    error && setError(false);
  };

  return (
    <form className="InputForm" onSubmit={submitHandler}>
      <input
        className={error ? "error" : ""}
        type="text"
        placeholder="Title"
        value={title}
        onChange={onChangehandler}
      />
      <button type="submit" className="plus-symbol">
        ➕
      </button>
    </form>
  );
};

export default InputForm;
