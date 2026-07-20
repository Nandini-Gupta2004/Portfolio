import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.text_primary};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Nandini Gupta</Logo>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          © 2026 Nandini Gupta. All Rights Reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;