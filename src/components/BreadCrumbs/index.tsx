"use client";
import NextLink from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./index.css";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pathSegments = useMemo(() => {
    return pathname.split("/").filter((segment) => segment);
  }, [pathname]);

  return (
    <Breadcrumbs className="breadClass"
      aria-label="breadcrumb"
      separator={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
    >
      <Link
        component={NextLink}
        href="/"
        color="inherit"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <HomeIcon sx={{ marginRight: "5px" }} />
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const route = "/" + pathSegments.slice(0, index + 1).join("/");

        const isLast = index === pathSegments.length - 1;

        return isLast ? (
          <Typography
            key={route}
            sx={{
              backgroundColor: "gray",
              color: "white",
              fontWeight: "bold",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {segment}
          </Typography>
        ) : (
          <Link
            key={route}
            component={NextLink}
            href={route}
            color="inherit"
            sx={{
              textDecoration: "none",
            }}
          >
            {segment}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
