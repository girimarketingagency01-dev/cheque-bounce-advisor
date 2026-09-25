import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050d18] text-white">

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.9fr_1fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Cheque Bounce Advisor"
                className="h-[62px] w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/60">
              Professional assistance for cheque bounce, cheque recovery and
              cheque misuse matters.
            </p>

            <Link
              href="/talk-to-cba/"
              className="mt-7 inline-flex rounded-full bg-[#e50909] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff1717]"
            >
              Talk To CBA
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/service/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Service
              </Link>

              <Link
                href="/about-us/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/blog/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/faq/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Assistance */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              Assistance
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <span className="text-sm text-white/60">
                Cheque Bounce Assistance
              </span>

              <span className="text-sm text-white/60">
                Cheque Recovery Assistance
              </span>

              <span className="text-sm text-white/60">
                Cheque Misuse Assistance
              </span>

              <span className="text-sm text-white/60">
                Notice Assistance
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              Contact
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/60">
              Have a cheque-related matter or payment issue? Get in touch with
              Cheque Bounce Advisor.
            </p>

            <Link
              href="/talk-to-cba/"
              className="mt-5 inline-block text-sm font-bold text-[#ff3333] transition hover:text-white"
            >
              Get in touch →
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-6 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p>
            © {new Date().getFullYear()} Cheque Bounce Advisor. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy/"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions/"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer/"
              className="transition hover:text-white"
            >
              Disclaimer
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}