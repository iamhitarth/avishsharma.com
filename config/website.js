const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Avish Sharma Music', // Navigation and Site Title
  siteTitleAlt: 'Avish Sharma', // Alternative Site title for SEO
  siteTitleShort: 'Avish', // short_name for manifest
  siteHeadline: 'Singer, Song Writer, YouTuber, Performing Artist', // Headline for schema.org JSONLD
  siteUrl: 'https://avishsharma.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: `Singer, Performing Artist and YouTube sensation Avish Sharma's official website.`,
  author: 'Hitarth Sharma', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@avishsharma_', // Twitter Username
  ogSiteName: 'avishsharmamusic', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
