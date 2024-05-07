import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignForm = () => {
  const iniatialState = { username: "", email: "" };
  const [formValues, setFormValues] = useState(iniatialState);
  const Navigate = useNavigate();
  const [formErrors, setFormErrors] = useState(
    {} as { username?: string; email?: string }
  );
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form Submitted Successfully");
      Navigate("/redirecting");
    }
  }, [formErrors, isSubmit]);

  const validate = (values: { username: string; email: string }) => {
    const errors: { username?: string; email?: string } = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 3) {
      errors.username = "Username must be more than 3 character!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a Valid Email!";
    }

    return errors;
  };

  return (
    <div className="flex-col  max-w-[600px] ">
      <div>
        <h2 className="text-3xl font-Grace text-green-600">
          {" "}
          Registration Form
        </h2>
      </div>
      <div className="py-2">
        <h1 className="text-6xl font-semibold">
          Start your success <br /> Journey here!
        </h1>
      </div>

      <div className="py-4 mt-3   ">
        <Inputfield
          type="text"
          name="username"
          placeholder="Enter your name"
          onChange={handleChange}
          value={formValues.username}
        />
        <p className="text-red-500 text-left pl-[4rem] pt-[0.3rem] flex items-center gap-x-2">
          {formErrors.username && (
            <svg
              className="w-[1.2rem]"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z"
                fill="#FF0808"
              />
            </svg>
          )}

          {formErrors.username}
        </p>
        <Inputfield
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formValues.email}
        />
        <p className="text-red-500 text-left pl-[4rem] pt-[0.3rem] flex items-center gap-x-2">
          {formErrors.username && (
            <svg
              className="w-[1.2rem]"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z"
                fill="#FF0808"
              />
            </svg>
          )}

          {formErrors.email}
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className=" w-4/5 bg-green-600 hover:bg-green-800 text-white py-4 mt-6  rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

function Inputfield({
  type,
  placeholder,
  value,
  name,
  onChange,
}: {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <div className="mt-3">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="border-2 border-gray-300 py-4 px-5 rounded-full bg-gray-200  w-4/5 "
      />
    </div>
  );
}
export default SignForm;
