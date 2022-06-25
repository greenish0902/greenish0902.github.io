/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Dev Sh",
  description: `Sohui's Blog`,
  author: "Sohui",
  siteUrl: "https://gatsby-starter-apple.netlify.app",
  lang: "ko",
  utterances: "sungik-choi/gatsby-starter-apple-comment",
  links: {
    github: "https://github.com/greenish0902",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
