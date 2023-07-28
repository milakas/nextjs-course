import { GoogleButton, SignInForm } from "@/components/auth/ui";

export default function Signin() {
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  )
}