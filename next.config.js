module.exports = {
  env: {
    USER: process.env.NEXT_PUBLIC_USER,
    PASS: process.env.NEXT_PUBLIC_PASS,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};
