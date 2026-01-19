import { login } from "./actions";


export default function LoginPage() {
  return (
    <form>
        <button type="submit" formAction={login}>Sign Up</button>
    </form>
    )
}    
