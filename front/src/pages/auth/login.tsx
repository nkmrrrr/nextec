import LoginForm from "@/features/auth/components/LoginForm";
import { AuthLoader } from "@/lib/auth";


export default function LoginPage() {
  return (
    <AuthLoader
      renderLoading={() => <div>Loading</div>}
      renderUnauthenticated={() => <LoginForm />}
    >
      認証済-
    </AuthLoader>
  );
}
