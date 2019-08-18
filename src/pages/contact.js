import React, { useState } from "react"
import { Link } from "gatsby"
import PageCover from "../components/pageCover"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mssg, setMssg] = useState("")

  return (
    <Layout headerClass={"header-area header-white"}>
      <SEO title="Contact" />
      <section className="page">
        <PageCover
          img=""
          h1="Contact Us"
          breadCrumbs={[
            {
              text: "Home",
              link: "/",
              active: false,
            },
            {
              text: "Contact Us",
              link: "/contact",
              active: true,
            },
          ]}
        />
        <div className="page-bottom">
          <div className="map-wrapper">
            {/*          <div
            data-zoom="12"
            data-lat="-37.811085"
            data-lng="144.955631"
            data-type="roadmap"
            data-hue="#ffc400"
            data-title="Gaus"
            data-icon-path="assets/images/marker-blue.png"
            data-content="455 West Orchard Street<br>Kings Mountain, NC 28086<br><br><Link to='mailto:support@yourbrand.com'>support@yourbrand.com</Link>"
          /> */}
            <div className="mapouter">
              <div className="map-canvas">
                <iframe
                  title="Opinta Solutions"
                  style={{ width: "100%", height: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=opinta%20solutions&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-info">
                    <div className="row">
                      {/* <div className="col-lg-4 col-md-4 col-sm-12">
                      //   <div className="item">
                      //     <i className="fa fa-location-arrow" />
                      //     <div className="txt" style={{ fontSize: "12px" }}>
                      //       GAT NO-123 H.NO-3131, 01,
                      //       <br />
                      //       Moshi - Alandi Rd, Tal Haveli, Alandi, Pune,
                      //       Maharashtra 412105
                      //     </div>
                      //   </div>
                            // </div> */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="item">
                          <a
                            style={{ color: "inherit" }}
                            href="mailto:support@yourbrand.com"
                          >
                            <i
                              style={{ fontSize: "33px" }}
                              className="fa fa-envelope"
                            />
                            <div className="txt">
                              <span>mail@opintasolutions.com</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a
                          style={{ color: "inherit" }}
                          href="tel:+919096887733"
                        >
                          <div className="item">
                            <i
                              style={{ fontSize: "33px" }}
                              className="fa fa-phone"
                            />
                            <div className="txt">
                              <span>+91 90968 87733</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h5 className="mbottom-30">Get in touch</h5>
                <div className="contact-text">
                  <p>
                    Got stuck contact us. What do you think let’s start now ?
                    Get in touch with our team to find out how our services can
                    help you transform and perform, and to discuss your business
                    needs in detail.
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="contact-form">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <input
                        id="form-name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name, surname"
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <input
                        id="form-email"
                        value={email}
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-Mail"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        id="form-message"
                        value={mssg}
                        onChange={e => setMssg(e.target.value)}
                        placeholder="Your message"
                      />
                    </div>
                    <div className="col-lg-12">
                      <button
                        onClick={() => {
                          contactSend({ name, email, mssg })
                          setName("")
                          setEmail("")
                          setMssg("")
                        }}
                        className="btn-primary-line"
                      >
                        SEND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const contactSend = ({ name, email, mssg }) => {
  if (name.length && email.length && mssg.length) {
    console.log(name, email, mssg)
    console.log(typeof name, typeof email, typeof mssg)
    const content = `<h2>Message</h2><b>Name: ${name}</b><br /><b>Email: ${email}</b><br /><p>${mssg}</p>`

    const bodyEncoded = new URLSearchParams()
    bodyEncoded.append("from_email", email)
    bodyEncoded.append("to_email", "mail@opintasolutions.com")
    bodyEncoded.append("subject", "contact from website")
    bodyEncoded.append("content", content)

    fetch(
      "https://wt-4896982400a54bf82243b9417c45f1ea-0.sandbox.auth0-extend.com/sendgrid_Patanjali",
      {
        method: "POST",
        body: bodyEncoded,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then(res => {
        console.log(res)
        // res.statusText === "OK" ? alert("mail was sent succesfully") : null
        alertRes(res)
      })
      .catch(err => console.log(err))
  } else {
    alert("please fill every field")
  }
}

const alertRes = res =>
  res.statusText === "OK" ? alert("Hurray!\nmessage sent succesfully") : null

export default ContactPage
