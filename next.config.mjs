
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },

  async redirects() {
    return [
      {
        source: "/how-many-times-does-a-check-have-to-be-bounced-to-file-a-cheque-bounce-case",
        destination: "/blog/how-many-times-does-a-check-have-to-be-bounced-to-file-a-cheque-bounce-case",
        permanent: true,
      },
      {
        source: "/cheque-bounce-case-expert",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/corporate-cheque-bounce-solution",
        destination: "/service/business",
        permanent: true,
      },
      {
        source: "/are-emi-dishonour-cases-like-cheque-bounce-cases",
        destination: "/blog/are-emi-dishonour-cases-like-cheque-bounce-cases",
        permanent: true,
      },
      {
        source: "/contact-cheque-bounce-advisor-now",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/best-cheque-bounce-lawyer-in-delhi",
        destination: "/blog/best-cheque-bounce-lawyer-in-delhi",
        permanent: true,
      },
      {
        source: "/testemonials",
        destination: "/#testimonials",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/cheque-bounce-in-india-complete-legal-guide-to-recover-your-money-under-ni-act-138",
        destination: "/blog/cheque-bounce-in-india-complete-legal-guide-to-recover-your-money-under-ni-act-138",
        permanent: true,
      },
      {
        source: "/how-to-reply-respond-to-a-cheque-bounce-case",
        destination: "/blog/how-to-reply-respond-to-a-cheque-bounce-case",
        permanent: true,
      },
      {
        source: "/corporate-cheque-bounce-risk-management-training",
        destination: "/service/business",
        permanent: true,
      },
      {
        source: "/can-compromise-be-reached-in-cheque-bounce-case-even-after-conviction",
        destination: "/blog/compromise-in-cheque-bounce-case-after-conviction",
        permanent: true,
      },
      {
        source: "/how-to-file-a-cheque-bounce-case-2",
        destination: "/blog/how-to-file-a-cheque-bounce-case",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
