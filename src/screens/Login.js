import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import ButtomBox from "../components/auth/ButtonBox";
import FacebookLogin from "../components/auth/FaceBook";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Seperator from "../components/auth/Seperator";
import PageTitle from "../components/pageTitle";
import routes from "../routes";
import FormError from "../components/auth/FormError";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: { username, password },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
  };

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username must be longer than 5",
              },
            })}
            onChange={clearLoginError}
            name="username"
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message}></FormError>
          <Input
            ref={register({
              required: "Password is required",
            })}
            onChange={clearLoginError}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message}></FormError>
          <Button
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={errors?.result?.message}></FormError>
        </form>
        <Seperator />
        <FacebookLogin ctx="Login With FaceBook"></FacebookLogin>
      </FormBox>
      <ButtomBox
        ctx="Don't have an account?"
        link={routes.signUp}
        linkText="Sign Up"
      ></ButtomBox>
    </AuthLayout>
  );
}
export default Login;
