import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import logo from "../assets/eigenlab-icon.svg";

/* Google "G" logo (inline SVG, koi extra package nahi chahiye) */
function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

const fieldWrap =
  "flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-[#111514] px-4 transition-colors focus-within:border-[#4cc04c]/60";

const fieldInput =
  "w-full bg-transparent text-[15px] text-white outline-none placeholder:text-gray-500";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      // TODO: yaha baad mein backend (FastAPI) ka login API call lagana
      await new Promise((resolve) => setTimeout(resolve, 800));
      setError("Login service is not connected yet (demo only).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-4 py-12">
      {/* Dotted background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      {/* Halka green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4cc04c]/10 blur-3xl"
      />

      {/* Wrapper: card + neeche wali line ek saath */}
      <div className="relative w-full max-w-[504px]">
        {/* Card (gradient border: bahar wala div 1px padding ke saath) */}
        <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(0,184,244,0.45),rgba(76,192,76,0.12)_45%,rgba(76,192,76,0.4))] p-px">
          <div className="rounded-[27px] bg-[#0a0e0d] px-6 py-10 sm:px-11">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4cc04c]/30 bg-[#0e2a20]">
              <img src={logo} alt="Eigenlab.ai" className="h-8 w-8" />
            </div>

            <h1 className="mt-6 text-center text-[34px] font-bold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="mt-2 text-center text-base text-gray-400">
              Sign in to your Eigenlab.ai account
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-9">
              {/* Email */}
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
                Email
              </label>
              <div className={fieldWrap}>
                <Mail className="h-5 w-5 shrink-0 text-gray-500" strokeWidth={1.5} />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldInput}
                />
              </div>

              {/* Password */}
              <div className="mb-2 mt-6 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-white">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-[#2ecc71] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className={fieldWrap}>
                <Lock className="h-5 w-5 shrink-0 text-gray-500" strokeWidth={1.5} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={fieldInput}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-gray-500 transition-colors hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                  ) : (
                    <Eye className="h-5 w-5" strokeWidth={1.5} />
                  )}
                </button>
              </div>

              {/* Keep me signed in */}
              <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-[18px] w-[18px] cursor-pointer rounded accent-[#4cc04c]"
                />
                Keep me signed in
              </label>

              {/* Error message */}
              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </p>
              )}

              {/* Sign in button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 flex h-[58px] w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#00aeff,#2ed3b7_50%,#6cc04a)] text-base font-semibold text-slate-950 shadow-[0_8px_30px_rgba(76,192,76,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>

            {/* OR divider */}
            <div className="my-6 flex items-center gap-4 text-xs tracking-[0.2em] text-gray-500">
              <span className="h-px flex-1 bg-white/10" />
              OR
              <span className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google button (abhi sirf UI) */}
            <button
              type="button"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#0e1211] text-[15px] font-semibold text-white transition hover:border-white/25 hover:bg-white/5"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <p className="mt-7 text-center text-[13px] text-gray-400">
              Don&apos;t have an account?{" "}
              <Link to="/contact" className="text-[#4cc04c] hover:underline">
                Contact us for access
              </Link>
            </p>
          </div>
        </div>

        {/* Card ke bahar, neeche wali line */}
        <p className="mt-6 text-center text-[13px] text-gray-500">
          By signing in you agree to our{" "}
          <Link to="/terms" className="underline underline-offset-2 hover:text-gray-300">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-gray-300">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}