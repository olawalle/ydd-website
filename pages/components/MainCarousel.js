import React from "react";
import { Carousel } from "antd";

export default function MainCarousel({ pictures }) {
  return (
    <Carousel autoplay>
      {pictures &&
        pictures.map((pic) => (
          <div className="carousel">
            <div className="slide">
              <img
                src={pic}
                alt=""
                style={{
                  width: "110%",
                  // height: "110%",
                  // objectPosition: "center",
                  // objectFit: "cover",
                }}
              />
            </div>
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
