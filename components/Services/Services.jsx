import { Row, ServiceStyle } from "./serviceStyle";
import { Wrapper } from "../../styles/GlobalStyle";
import bgService from "../../assets/img/SEO-BG.jpg";
import Typography from "../Typography/Typography";
import CardList from "../CardList/CardList";
import { useSelector } from "react-redux";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
const Services = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  if (!languageData) {
    return <h1>Loading...</h1>;
  }

  const items = [
    {
      id: "1",
      icon: (
        <HiOutlineLocationMarker
          color="#fff"
          style={{ fontWeight: "bold" }}
          size={20}
        />
      ),
      title: languageData.service_one_pannel,
      desc: "IT Consultancy for your company is great the support all time 24/7, easy composition for install and all image included",
    },
    {
      id: "2",
      icon: (
        <HiOutlineMail color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_two_pannel,
      desc: "IT Consultancy for your company is great the support all time 24/7, easy composition for install and all image included",
    },
    {
      id: "3",
      icon: (
        <HiOutlinePhone color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_three_pannel,
      desc: "IT Consultancy for your company is great the support all time 24/7, easy composition for install and all image included",
    },
    {
      id: "4",
      icon: (
        <HiOutlineLocationMarker
          color="#fff"
          style={{ fontWeight: "bold" }}
          size={20}
        />
      ),
      title: languageData.service_four_pannel,
      desc: "IT Consultancy for your company is great the support all time 24/7, easy composition for install and all image included",
    },
    {
      id: "5",
      icon: (
        <HiOutlineMail color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_five_pannel,
      desc: "IT Consultancy for your company is great the support all time 24/7, easy composition for install and all image included",
    },
    {
      id: "6",
      icon: (
        <HiOutlinePhone color="#fff" style={{ fontWeight: "bold" }} size={20} />
      ),
      title: languageData.service_six_pannel,
      desc: "IT Consultancy for your company is great the support all time 24/7, easy composition for install and all image included",
    },
  ];

  return (
    <ServiceStyle img={bgService} id="service">
      <Row>
        <Typography size="44px" color="#fff" className="services-title">
          {languageData.title_pannel_management}
        </Typography>
        <Typography color="#fff" size="16px" className="service-description">
          {languageData.desc_pannel_management}
        </Typography>
      </Row>
      <Wrapper postion="space-between" className="container">
        <CardList bgColor="#FFFFFF" items={items} color="#1e1666" />
      </Wrapper>
    </ServiceStyle>
  );
};
export default Services;
