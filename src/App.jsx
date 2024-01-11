import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({})

  const handleInput = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!formData.username.trim()) {
      validationErrors.username = "username is required"
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required"
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
      validationErrors.email = "email is not valid"

    }


    if (!formData.password.trim()) {
      validationErrors.password = "password is required"
    }
    else if (formData.password.length < 6) {
      validationErrors.password = "password should atleast be 6 char"

    }

    else if (!/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(formData.password)) {
      validationErrors.email = "password is not strong"

    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert("form submitted successfully")
    }
  }

  return (
    <section>
      <div className="  p-8 mt-[190px] mx-auto flex justify-center justify-items-center rounded-md w-[35%] border">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">USERNAME:</label>
          <input
            className="rounded-md border  p-3 mt-1 mb-2 w-[550px]"
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            onChange={handleInput}
          />
          {errors.username && <span className="text-[red] font-bold" >{errors.username}</span>}
          <br />
          <label className="" htmlFor="username">EMAIL:</label>
          <input
            className="rounded-md border p-3  mt-1  mb-2 w-[550px]"
            type="text"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            onChange={handleInput}
          />
          {errors.email && <span className="text-[red] font-bold">{errors.email}</span>}
          <br />
          <label htmlFor="username">PASSWORD:</label>
          <input
            className="rounded-md border p-3  mt-1  mb-2 w-[550px]"
            type="text"
            name="password"
            placeholder="******"
            autoComplete="off"
            onChange={handleInput}
          />
          {errors.password && <span className="text-[red] font-bold">{errors.password}</span>}
          <br />
          <label htmlFor="username">CONFIRM PASSWORD:</label>
          <input
            className="rounded-md border p-3  mt-1  mb-2 w-[550px]"
            type="text"
            name="confirmPassword"
            placeholder="******"
            autoComplete="off"
            onChange={handleInput}
          />
          {errors.confirmPassword && <span className="text-[red] font-bold">{errors.confirmPassword}</span>}
          <br />
          <button type="submit" className="rounded-xl text-[#FFFF] font-bold  bg-[blue] w-[200px] h-[40px]">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default App;
