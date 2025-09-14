import Heading from "../ui/Heading";
import SignUpForm from "../features/authentication/SignupForm";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as='h1'>Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
