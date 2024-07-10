import image from "../../../public/images/sofa.png"
import image2 from "../../../public/images/dinner chair.png"
import image3 from "../../../public/images/Tv stand.png"
import image4 from "../../../public/images/image5.png"
import image5 from "../../../public/images/Group 30.png"
import image6 from "../../../public/images/image6.png"
import image7 from "../../../public/images/image4.png"
import image8 from "../../../public/images/Group 30 (4).png"


const Services = () => {
  const images = [image,image2,image3,image4,image5,image6, image7,image8];

    return (
      <>
      <div className="flex gap-3 object-fit sticky">
       {
          images.map(function (imageSource){
           return <img className="pt-2" key={imageSource} src={imageSource} alt="image"/>
          })
       }
      </div>
      <br/>
      </>
    )
  }
  
  export default Services;
  
  