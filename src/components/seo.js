/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/*
<script type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "Organization",
	"name": "Opinta Solutions Pvt. Ltd.",
	"image": "https://sulcdn.azureedge.net/biz-live/img/opinta-solutions-10562704-45ac2719.jpeg",
	"logo": "https://sulcdn.azureedge.net/biz-live/img/opinta-solutions-10562704-45ac2719.jpeg",
	"url": "https://opintasolutions.com",
	"telephone": "9096887733",
	"sameAs": ["https://twitter.com/opintasolutions","https://in.linkedin.com/company/opintasolutions","https://www.facebook.com/opintasolutions/","https://www.youtube.com/channel/UCB96elYiZB7EeOU1CPkngTw","https://www.instagram.com/opintasolutions/"],
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Alandi",
		"addressLocality": "pune",
		"postalCode": "412105",
		"addressCountry": "India"
	}
}
</script>
*/

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `organisation`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Opinta Solutions Pvt. Ltd.",
          "image": "https://sulcdn.azureedge.net/biz-live/img/opinta-solutions-10562704-45ac2719.jpeg",
          "logo": "https://sulcdn.azureedge.net/biz-live/img/opinta-solutions-10562704-45ac2719.jpeg",
          "url": "https://opintasolutions.com",
          "telephone": "9096887733",
          "sameAs": ["https://twitter.com/opintasolutions","https://in.linkedin.com/company/opintasolutions","https://www.facebook.com/opintasolutions/","https://www.youtube.com/channel/UCB96elYiZB7EeOU1CPkngTw","https://www.instagram.com/opintasolutions/"],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alandi",
            "addressLocality": "pune",
            "postalCode": "412105",
            "addressCountry": "India"
          }
        }
      `}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
