"use client";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import "./index.css"

export default function Fenomeno1() {
  const router = useRouter();
  const handleClick3 = () => {
    router.push("/fenomeno2/fenomeno2-1");
  };
  return (
    <div style={{ marginTop: "150px", backgroundColor: "white" }}>
      <BreadCrumbs />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div style={{ fontSize: "50px",  color: "black"  }}>Pagina di fenomeno2</div>
        <div style={{ fontSize: "12px", marginTop: "30px",  color: "black"  }}>
          (*Clicking the button below we get redirected to the nested page
          inside fenomeno2, we can track the routes on the top of the page and
          go backward in any route by clicking on them. we can create as many
          nested pages as we need. )
        </div>
        <Button className="buttonHolder"
          onClick={handleClick3}
          sx={{
            color: "black",
            fontWeight: 600,
            backgroundColor: "lightgray",
            fontSize: "10px",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "#1e1e1e",
              color: "white",
              "& .MuiSvgIcon-root": { color: "white" },
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Going to the nested page
        </Button>
      </div>
    </div>
  );
}
