 import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./CertificationStyle";

import { certifications } from "../../data/constants";

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Achievements & Certifications</Title>

        <Desc>
Academic achievements, internships, workshops, hackathons, and professional certifications.
</Desc>

        <CardContainer>
          {certifications.map((certificate) => (
            <div
              key={certificate.id}
              style={{
                width: "330px",
                background: "#171721",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(133,76,230,0.3)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                transition: "0.3s",
              }}
            >
             <img
  src={certificate.image}
  alt={certificate.title}
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    objectPosition: "top",
  }}
/>

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  {certificate.title}
                </h3>

                <p
                  style={{
                    color: "#b1b2b3",
                  }}
                >
                  {certificate.issuer}
                </p>

                <p
                  style={{
                    color: "#854CE6",
                    marginBottom: "15px",
                  }}
                >
                  {certificate.year}
                </p>

                <a
                  href={certificate.certificate}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    background: "#854CE6",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;