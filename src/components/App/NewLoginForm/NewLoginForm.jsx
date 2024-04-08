import { useState } from "react";

const NewLoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  //   const handleLoginChange = (evt) => {
  //     setValues({
  //       ...values,
  //       login: evt.target.value,
  //     });
  //   };

  //   const handlePasswordChange = (evt) => {
  //     setValues({
  //       ...values,
  //       password: evt.target.value,
  //     });
  //   };

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Значення полів
    console.log(values);

    // Очищаємо форму
    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        // onChange={handleLoginChange}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        // onChange={handlePasswordChange}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default NewLoginForm;
