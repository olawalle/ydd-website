import React from "react";
import { Carousel } from "antd";
import { useEffect } from "react";
import "../pages/styles/carousel.scss";

const Slide = ({ pic, i }) => {
  return (
    <>
      <div className='slide'>
        <style jsx>
          {`
            .slide {
              width: 100%;
              height: 100%;
              background-image: url("${pic}");
              background-size: cover;
              background-position: center;
            }

            @media (max-width: 767px) {
              .slide {
                background-size: 125% 100%;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default function MainCarousel({ pictures }) {
  return (
    <Carousel autoplay={true}>
      {pictures &&
        pictures.map((pic, i) => (
          <div className='carousel' key={`item${i}`}>
            <Slide pic={pic} key={i} i={i} />
          </div>
        ))}
    </Carousel>
  );
}

// import React from "react";
// import { Carousel } from "antd";

// export default function MainCarousel({ pictures }) {
//   return (
//     <Carousel autoplay>
//       {pictures &&
//         pictures.map((pic) => (
//           <div className="carousel" key={pic}>
//             <div className="slide">
//               <p>{pic}</p>
//               <style JSX>
//                 {`
//               .slide {
//                   width:100%;
//                   height:100%;
//                   position:absolute;
//                   background-size: cover;
//                   background-repeat: no-repeat;
//                   background-image: url('` +
//                   pic +
//                   `');
//               }
//           `}
//               </style>
//             </div>
//           </div>
//         ))}
//     </Carousel>
//   );
// }
