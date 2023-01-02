import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-100">
      <SignIn
        path="/sign-in"
        routing="virtual"
        signUpUrl="/sign-up"
        redirectUrl="/home"
        appearance={{
          elements: {
            formButtonPrimary:
              'font-sans bg-primary text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:bg-secondary normal-case text-sm',
            socialButtonsIconButton:
              'transition-all duration-300 hover:bg-slate-50',
          },
        }}
      />
    </div>
  );
};

export default SignInPage;
