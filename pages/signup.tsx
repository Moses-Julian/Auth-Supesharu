import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-100">
      <SignUp
        path="/signup"
        routing="path"
        signInUrl="/signin"
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

export default SignUpPage;
