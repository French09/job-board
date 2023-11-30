import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../Components";
import customFetch from "../../../back-end/utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="firstName" labelText="first name"/>
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <div className="form-group" style={{ marginTop: "1em" }}>
          <div>
            <label>
              <input
                type="radio"
                name="role"
                value="candidate"
                className="radio-label"
                defaultChecked
              />
              Candidate
            </label>
            <label>
              <input
                type="radio"
                name="role"
                className="radio-label"
                value="recruiter"
              />
              Recruiter
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
