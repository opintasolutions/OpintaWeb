import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  // ButtonBack,
  // ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import testimonials from "../data/testimonials"
const Testimonials = () => (
  <React.Fragment>
    <CarouselProvider totalSlides={5} interval={2500} isPlaying>
      <Slider>
        {testimonials.map((testi, i) => (
          <Slide index={i} style={{ height: "570px" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="item"
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                <div className="team-item testimonial">
                  <div className="header text-center mt-10">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${testi.url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "130px",
                          height: "130px",
                          overflow: "hidden",
                          borderRadius: "50%",
                          margin: "1.2rem 0 0 0",
                        }}
                      />
                    </div>
                    <div className="info">
                      <strong>{testi.name}</strong>
                      <span>{testi.projectName}</span>
                    </div>
                  </div>
                  <div className="body">
                    <i className="fa fa-quote-left" />
                    <p>{testi.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </Slider>
      {/*<div className="carousel-button-wrapper">
        <ButtonBack>‹</ButtonBack>
        <ButtonNext>›</ButtonNext>
      </div>*/}
    </CarouselProvider>
  </React.Fragment>
)

export default Testimonials
