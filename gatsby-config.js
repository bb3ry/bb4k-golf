module.exports = {
  siteMetadata: {
    title: `Building Blocks For Kids Golf Outing`,
    tagline: `Join our golf outing`,
    eventdate: `October 20th, 2022 10:00 AM`,
    course: `TPC Sawgrass`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "b30EYVZYu6l7KPw32kn6eGzZLp2CvOeCK56X_v1eiWw",
      "spaceId": "tjg81vhn2m1s"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};