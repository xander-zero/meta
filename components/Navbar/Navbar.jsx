import React from "react";
import { NavbarWrapper } from "./NavbarWrapper";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Typography from "../Typography/Typography";
import SimpleSelect from "../Select/Select";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NavbarCont = ({ image, fix }) => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  const router = useRouter();
  const type = router.locale;
  console.log(type);
  const languages = [
    {
      id: "1",
      label: "فارسی",
      value: "fa",
    },
    {
      id: "2",
      label: "English",
      value: "en",
    },
    {
      id: "3",
      label: "عربی",
      value: "ar",
    },
  ];

  const onChange = (event) => {
    const lng = event.target.value;
    console.log(lng);
    router.push("/", "/", { locale: lng });
  };

  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="lg" fixed={fix}>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className={
                type === "fa"
                  ? "ms-auto"
                  : type === "en"
                  ? "me-auto"
                  : "ms-auto"
              }
            >
              <Nav.Link>
                <SimpleSelect
                  placeholder="انتخاب زبان"
                  options={languages}
                  onChange={onChange}
                />
              </Nav.Link>
              <Link href="/login" passHref>
                <Nav.Link>
                  <Typography color="#fff">
                    {languageData.menu_item_auth}
                  </Typography>
                </Nav.Link>
              </Link>
              <Nav.Link href="#memes">
                <Typography color="#fff">
                  {languageData.menu_item_home}
                </Typography>
              </Nav.Link>
              <Nav.Link href="#memes">
                <Typography color="#fff">
                  {languageData.menu_item_about}
                </Typography>
              </Nav.Link>
              <Nav.Link href="#memes">
                <Typography color="#fff">
                  {languageData.menu_item_contact}
                </Typography>
              </Nav.Link>
              <Nav.Link href="#memes">
                <Typography color="#fff">
                  {languageData.menu_item_service}
                </Typography>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">
            <Image
              src={image}
              alt="Picture of the author"
              width="40px"
              height="40px"
              layout="responsive"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
};

export default NavbarCont;
