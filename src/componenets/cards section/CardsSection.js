import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg,DropdownItem } from 'reactstrap';
 import img1 from "../../images/hamburger.svg";
 import img2 from "../../images/diamond.svg";
 import img3 from "../../images/puzzle.svg";

const CardsSection = () => {
 const  cardsElemts = [
    {
      img: img1,
      title: "Hamburger",
      paragraph:
        "Spicy jalapeno bacon ipsum dolor amet dolore jowl tempor consequat flank ribeye. Voluptate tri-tip ex exercitation nisi rump ball tip short ribs labore ipsum.",
    },
    {
        img:img2,
        title: "Diamonds",
        paragraph:
          "Id ex pariatur sausage eu boudin nulla, tempor lorem do jowl swine. Excepteur corned beef proident kevin sirloin do. In non tri-tip ham shankle bone picanhavelit.",
      },
      {
        img:img3,
        title: "Extreme Puzzling",
        paragraph:
          "Bacon tail ribeye esse shank short ribs, rump ut elit. Beef filet mignon tongue brisket. Do short ribs magna culpa frankfurter fugiat.",
      },
  ];
  return (
    <>
     { cardsElemts.map ((school,index)=>{
      return( 
        <div className=" col-lg-4 col-md-4 col-sm-12  text-center App__cardSection__card-container__card-row__card-col py-2" key={index} >
          <Card className="App__cardSection__card-container__card-row__card-col__card border-0 align-items-center h-100">
            <div className="App__cardSection__card-container__card-row__card-col__card__img-container">
              <CardImg
                width="100%"
                src={school.img}
                alt="diamond-hamburger-puzzle-img"
                className="App__cardSection__card-container__card-row__card-col__card__img-container__img py-2"
              />
            </div>
            <CardBody className="App__cardSection__card-container__card-row__card-col__card__card-body p-0">
              <CardTitle tag="h6"  className="text-info App__cardSection__card-container__card-col__card__card-body__card-title pb-3">{school.title}</CardTitle>
              <DropdownItem divider className="mx-4"/>
              <div className="App__cardSection__card-container__card-row__card-col__card-paragraph-container d-flex justify-content-center">

              <CardText className=" py-2 App__cardSection__card-container__card-row__card-col__card__card-body__card-text ">
                 {school.paragraph}
              </CardText>
              </div>
             </CardBody>
          </Card>
        </div>
        )
      }
      )
    }
    </>
  );
};

export default CardsSection;
