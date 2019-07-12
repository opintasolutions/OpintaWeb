/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
  ;(function(d, w, c) {
    w.ChatraID = "duQxLzP2FMBkmQkam"
    var s = d.createElement("script")
    w[c] =
      w[c] ||
      function() {
        ;(w[c].q = w[c].q || []).push(arguments)
      }
    s.async = true
    s.src = "https://call.chatra.io/chatra.js"
    if (d.head) d.head.appendChild(s)
  })(document, window, "Chatra")
}
