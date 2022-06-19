import React from "react";
import Typography from "../Typography/Typography";
import { SupportWrapper } from "./SupportStyle";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image from "next/image";
import seo from "../../assets/img/web-marketing.jpg";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const Support = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <SupportWrapper>
      <Container>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex justify-content-center">
            <Image layout="fixed" src={seo} alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <Typography color="#2513d1" className="mb-1">
              {languageData.support_title}
            </Typography>
            <Typography size="34px" color="#1e1666">
              {languageData.support_subTitle}
            </Typography>
            <Typography color="#6a7c92" className="mt-3">
              {languageData.support_desc}
            </Typography>
            <div className="d-flex justify-content-evenly w-100">
              <div>
                <Typography size="20px" color="#1E1666">
                  2451 M
                </Typography>
                <Typography size="14px" color="#1E1666">
                  Happy Client
                </Typography>
              </div>
              <div>
                <Typography size="20px" color="#1E1666">
                  124 M
                </Typography>
                <Typography size="14px" color="#1E1666">
                  Project Finished
                </Typography>
              </div>
              <div>
                <Typography size="20px" color="#1E1666">
                  1240 K
                </Typography>
                <Typography size="14px" color="#1E1666">
                  Win Award
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SupportWrapper>
  );
};

export default Support;
