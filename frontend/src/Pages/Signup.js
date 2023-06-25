import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
const Signup = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Submit logic here
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex">
        <div className="w-[45%] h-[100vh] flex flex-col justify-center items-center">
          <h2 className="text-center text-7xl text-pink font-semibold">
            Welcome
          </h2>
          <img
            className="pt-4 w-[600px] h-[320px] overflow-hidden"
            alt=""
            src="/image.svg"
          />
          <h2 className="pt-24 text-center text-4xl text-pink font-medium">
            Stay Connected
          </h2>
        </div>

        <div className="w-[55%] pt-28 flex justify-center bg-gray-600">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="text-left">
                <h2 className="text-center text-7xl text-pink font-semibold">
                  Create an account
                </h2>
                <div className="pt-8">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-white  text-gray-100 text-sm block w-60 p-2.5 focus:outline-none"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="pt-3">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="bg-white  text-gray-100 text-sm block w-60 p-2.5 focus:outline-none"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="pt-3 ">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="h-[40px] bg-white text-gray-100 text-sm block w-60 p-2.5 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="pt-3">
                  <Field
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    className="h-[40px] bg-white text-gray-100 text-sm block w-60 p-2.5 focus:outline-none"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="pt-8 text-center">
                  <Link to="/">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="pt-2 flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer border-none bg-pink"
                    >
                      Create
                    </button>
                  </Link>
                  <h3 className="justify-center text-gray-500 text-3xl mt-8">
                    Already have an account?
                    <Link to="/">
                      <span>
                        <button className="ml-2 font-medium text-pink ">
                          Login
                        </button>
                      </span>
                    </Link>
                  </h3>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
