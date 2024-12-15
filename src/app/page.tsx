"use client";
import { Hero } from "@/components/Hero";
import { Button, Fade } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const handleClick3 = () => {
    router.push("/fenomeno3");
  };

  const handleClick2 = () => {
    router.push("/fenomeno2");
  };

  const handleClick1 = () => {
    router.push("/fenomeno1");
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show} timeout={1000}>
      <div>
        <Hero />
        <div style={{ marginBottom: "50px", backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#404040",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                marginBottom: "20px",
                color: "white",
                textAlign: "center",
              }}
            >
              Animazione del fenomeno metereologico con stile minimal
            </div>
            <div
              style={{
                fontSize: "110px",
                color: "gray",
                fontWeight: 600,
                lineHeight: "90px",
              }}
            >
              32:9
            </div>
            <div
              style={{ fontSize: "30px", color: "white", lineHeight: "30px" }}
            >
              Fenomeno climatico #1
            </div>
          </div>
          <div
            className="titoloHolder"
            style={{
              height: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
            }}
          >
            <div
              className="pageCnt1"
              style={{
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                Galleria immagini fenomeno climatico specifico
              </div>
              <div
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "64px",
                  textAlign: "center",
                  marginBottom: "0px",
                }}
              >
                3:2
              </div>
            </div>
            <div
              className="pageCnt2"
              style={{
                backgroundColor: "white",
                paddingLeft: "40px",
                display: "flex",
                flexDirection: "column",
                paddingTop: "16px",
              }}
            >
              <p
                style={{
                  marginBottom: "16px",
                  fontSize: "9px",
                  color: "black",
                }}
              >
                NOME SPECIALE
              </p>
              <div
                style={{
                  fontSize: "20px",
                  marginBottom: "32px",
                  fontWeight: 700,
                  color: "black",
                }}
              >
                Titolo ingaggiante #1
              </div>
              <div
                style={{
                  fontSize: "12px",
                  marginBottom: "50px",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                quibusdam laudantium eos ipsam modi, delectus, quae nobis
                commodi quis, consectetur magni minima.
              </div>
              <Button
                onClick={handleClick1}
                sx={{
                  color: "black",
                  fontWeight: 600,
                  backgroundColor: "lightgray",
                  fontSize: "10px",
                  width: "70%",
                  "&:hover": {
                    backgroundColor: "#1e1e1e", // Dark background color like VSCode
                    color: "white", // Change text color to white
                    "& .MuiSvgIcon-root": {
                      // Target the icon color
                      color: "white",
                    },
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Approfondisci nella pagina dedicata
              </Button>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#404040",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                marginBottom: "20px",
                color: "white",
                textAlign: "center",
              }}
            >
              Animazione del fenomeno metereologico con stile minimal
            </div>
            <div
              style={{
                fontSize: "110px",
                color: "gray",
                fontWeight: 600,
                lineHeight: "90px",
              }}
            >
              32:9
            </div>
            <div
              style={{ fontSize: "30px", color: "white", lineHeight: "30px" }}
            >
              Fenomeno climatico #2
            </div>
          </div>
          <div
            className="titoloHolder"
            style={{
              height: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
            }}
          >
            <div
              className="pageCnt1"
              style={{
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                Galleria immagini fenomeno climatico specifico
              </div>
              <div
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "64px",
                  textAlign: "center",
                  marginBottom: "0px",
                }}
              >
                3:2
              </div>
            </div>
            <div
              className="pageCnt2"
              style={{
                backgroundColor: "white",
                paddingLeft: "40px",
                display: "flex",
                flexDirection: "column",
                paddingTop: "16px",
              }}
            >
              <p
                style={{
                  marginBottom: "16px",
                  fontSize: "9px",
                  color: "black",
                }}
              >
                NOME SPECIALE
              </p>
              <div
                style={{
                  fontSize: "20px",
                  marginBottom: "32px",
                  fontWeight: 700,
                  color: "black",
                }}
              >
                Titolo ingaggiante #2
              </div>
              <div
                style={{
                  fontSize: "12px",
                  marginBottom: "50px",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                quibusdam laudantium eos ipsam modi, delectus, quae nobis
                commodi quis, consectetur magni minima.
              </div>
              <Button
                onClick={handleClick2}
                sx={{
                  color: "black",
                  fontWeight: 600,
                  backgroundColor: "lightgray",
                  fontSize: "10px",
                  width: "70%",
                  "&:hover": {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Approfondisci nella pagina dedicata
              </Button>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#404040",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              marginBottom: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            Animazione del fenomeno metereologico con stile minimal
          </div>
          <div
            style={{
              fontSize: "110px",
              color: "gray",
              fontWeight: 600,
              lineHeight: "90px",
            }}
          >
            32:9
          </div>
          <div style={{ fontSize: "30px", color: "white", lineHeight: "30px" }}>
            Fenomeno climatico #3
          </div>
        </div>
        <div
          className="titoloHolder"
          style={{
            height: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >
          <div
            className="pageCnt1"
            style={{
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: "white",
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Galleria immagini fenomeno climatico specifico
            </div>
            <div
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "64px",
                textAlign: "center",
                marginBottom: "0px",
              }}
            >
              3:2
            </div>
          </div>
          <div
            className="pageCnt2"
            style={{
              backgroundColor: "white",
              paddingLeft: "40px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "16px",
            }}
          >
            <p
              style={{ marginBottom: "16px", fontSize: "9px", color: "black" }}
            >
              NOME SPECIALE
            </p>
            <div
              style={{
                fontSize: "20px",
                marginBottom: "32px",
                fontWeight: 700,
              }}
            >
              Titolo ingaggiante #3
            </div>
            <div
              style={{
                fontSize: "12px",
                marginBottom: "50px",
                fontWeight: 400,
                color: "black",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              quibusdam laudantium eos ipsam modi, delectus, quae nobis commodi
              quis, consectetur magni minima.
            </div>
            <Button
              onClick={handleClick3}
              sx={{
                color: "black",
                fontWeight: 600,
                backgroundColor: "lightgray",
                fontSize: "10px",
                width: "70%",
                "&:hover": {
                  backgroundColor: "#1e1e1e", // Dark background color like VSCode
                  color: "white", // Change text color to white
                  "& .MuiSvgIcon-root": {
                    // Target the icon color
                    color: "white",
                  },
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Approfondisci nella pagina dedicata
            </Button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
