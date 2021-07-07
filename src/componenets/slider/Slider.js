import React, { useEffect, useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  DropdownItem,
} from "reactstrap";
import MapSection from "../map/Map";
import "./slider.css";
const Slider = ({ data }) => {
  const [pageData, setPageData] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const history = useHistory();

  //////////////////////////////////////////////////////
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const isSmall = useMediaQuery({ query: "(min-width: 576px)" });

  const getTotalPages = (listSize, pageSize) => {
    return Math.ceil(listSize / pageSize) - 1;
  };

  const getNextPageData = (data, pageNumber, pageSize) => {
    const startSlice = pageNumber * pageSize;
    let newPageSize =
      data.length - startSlice < 3 ? data.length - startSlice : pageSize;

    const endSlice =
      startSlice + newPageSize <= data.length ? startSlice + newPageSize : 0;
    return data.slice(startSlice, endSlice);
  };
  const getPrevPageData = (data, pageNumber, pageSize) => {

    const startSlice = pageNumber * pageSize <= 0 ? 0 : pageNumber * pageSize;

    let newPageSize =
      data.length - (startSlice + pageSize) < 3
        ? data.length - (startSlice + pageSize)
        : pageSize;

    const endSlice =
      startSlice + pageSize <= data.length
        ? startSlice + pageSize
        : data.length;
    return data.slice(startSlice, endSlice);
  };
  useEffect(() => {
    const totalPages = getTotalPages(data.length, 3);
    setTotalPageNumber(totalPages);
  }, [data]);

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const currentPageData = getNextPageData(data, 0, 3);
      setPageData(currentPageData);
    } else if (isTabletOrMobile) {
      const currentPageData = getNextPageData(data, 0, 2);
      setPageData(currentPageData);
    } else if (isSmall) {
      const currentPageData = getNextPageData(data, 0, 1);
      setPageData(currentPageData);
    }
  }, [isDesktopOrLaptop, isTabletOrMobile, isSmall]);
  const nextSlide = () => {
    getNextPageNumber();
    function getNextPageNumber() {
      const newPageNumber =
        pageNumber < totalPageNumber ? pageNumber + 1 : totalPageNumber;
      const nextPage = getNextPageData(data, newPageNumber, 3);
      setPageData(nextPage);
      setPageNumber(newPageNumber);
      if (isDesktopOrLaptop) {
      const currentPageData = getNextPageData(data, newPageNumber, 3);
      setPageData(currentPageData);
    } else if (isTabletOrMobile) {
      const currentPageData = getNextPageData(data, newPageNumber, 2);
      setPageData(currentPageData);
    } else if (isSmall) {
      const currentPageData = getNextPageData(data, newPageNumber, 1);
      setPageData(currentPageData);
    }
    }
    
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  //////////////////////////////////////////////////////
  const prevSlide = (e) => {
    getPrevPageNumber();
    function getPrevPageNumber() {
      const newPageNumber = pageNumber > 0 ? pageNumber - 1 : 0;

      const prevPage = getPrevPageData(data, newPageNumber, 3);
      setPageData(prevPage);
      setPageNumber(newPageNumber);
      if (isDesktopOrLaptop) {
      const currentPageData = getNextPageData(data, newPageNumber, 3);
      setPageData(currentPageData);
    } else if (isTabletOrMobile) {
      const currentPageData = getNextPageData(data, newPageNumber, 2);
      setPageData(currentPageData);
    } else if (isSmall) {
      const currentPageData = getNextPageData(data, newPageNumber, 1);
      setPageData(currentPageData);
    }
    }
   
  };



  return (
    <>
      <h1 className="App__schoolSection__card-container__card-row__card-col__card-title py-5">
        Featured schools
      </h1>

      <div className="App__schoolSection__card-container d-flex justify-content-center " >
        <IoIosArrowDropright
          className="  App__schoolSection__card-container__right-arrow"
          onClick={(e) => nextSlide(e)}
        />

        <IoIosArrowDropleft
          className="App__schoolSection__card-container__left-arrow"
          onClick={(e) => prevSlide(e)}
        />

        {pageData &&
          pageData.map((school, index) => {
            return (
              <div
                className=" col-lg-4 col-md-6 col-sm-12  text-center App__schoolSection__card-container__card-row__card-col p-0 " 
                key={index}
                onClick={()=>{
                   history.push({pathname: `/${school.name}`,state:{params:`${school.name}`}});
                }}
              >  
                <Card className="App__schoolSection__card-container__card-row__card-col__card  ">
                  <MapSection
                    latitude={school.latitude}
                    longitude={school.longitude}
                    boundaries={school.boundaries.secondary}
                    schoolData={school}
                  />

                  <CardBody className="App__schoolSection__card-container__card-row__card-col__card__card-body text-left p-0 text-left  ">
                    <CardTitle
                      tag="h6"
                      className="text-dark App__schoolSection__card-container__card-col__card__card-body__card-title px-3 py-3"
                    >
                      {school.name}
                    </CardTitle>
                

                    

                    <CardText className="text-warning  App__schoolSection__card-container__card-row__card-col__card__card-body__card-text px-3 ">
                      {school.level}
                    </CardText>

                    <CardText className=" App__schoolSection__card-container__card-row__card-col__card__card-body__card-text px-3">
                      {school.type} | {school.language}
                    </CardText>
                    <DropdownItem divider className="mx-2 App__schoolSection__card-container__card-row__card-col__card__card-body__card-text__card-line" />

                    <CardText className=" App__schoolSection__card-container__card-row__card-col__card__card-body__card-text-street px-3 text-secondary">
                      {school.street}
                    </CardText>
             
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Slider;
