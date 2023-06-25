import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = { email: "", password: "" };

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
        <div className="w-[45%] h-[100vh] flex justify-center items-center">
          <img
            className="w-[600px] h-[320px] overflow-hidden"
            alt=""
            src="/image.svg"
          />
        </div>

        <div className="w-[55%] pt-32 flex justify-center bg-gray-600">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="text-left">
                <h2 className="text-center text-7xl text-pink font-semibold">
                  Welcome Back!!
                </h2>
                <div className="pt-8">
                  <label htmlFor="email" className="text-gray-500 text-xs">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-white  text-gray-100 text-sm block w-60 p-2.5 focus:outline-none"
                    placeholder="xyz@example.com"
                    required
                  />
                </div>
                <div className="pt-4 ">
                  <label htmlFor="password" className="text-gray-500 text-xs">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="h-[40px] bg-white text-gray-100 text-sm block w-60 p-2.5 focus:outline-none"
                    placeholder="•••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="pt-1 text-gray-700 text-xs font-medium flex w-[247px]"
                  >
                    Forget Password?
                  </button>
                </div>
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="pt-2 flex justify-center w-[247px] h-10 font-semibold text-white text-3xl cursor-pointer border-none bg-pink"
                  >
                    Login
                  </button>

                  <h3 className="justify-center text-gray-500 text-3xl mt-8">
                    New to Digital Stories?
                    <Link to="/signup">
                      <span>
                        <button className="ml-2 font-medium text-pink ">
                          Sign Up
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

export default Login;
