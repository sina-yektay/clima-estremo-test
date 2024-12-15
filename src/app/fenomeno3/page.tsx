"use client";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function Fenomeno1() {
  const router = useRouter();
  const handleClick3 = () => {
    router.push("/fenomeno3/fenomeno3-1");
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <BreadCrumbs />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "50px" }}>Pagina di fenomeno3</div>
        <div style={{ fontSize: "12px", marginTop: "30px" }}>
          (*Clicking the button below we get redirected to the nested page
          inside fenomeno3, we can track the routes on the top of the page and
          go backward in any route by clicking on them. we can create as many
          nested pages as we need. )
        </div>
        <Button
          onClick={handleClick3}
          sx={{
            color: "black",
            fontWeight: 600,
            backgroundColor: "lightgray",
            fontSize: "10px",
            width: "20%",
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
