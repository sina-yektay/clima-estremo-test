"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLink1 = () => {
    setIsOpen(false);
    router.push("/fenomeno1");
  };

  const handleLink2 = () => {
    setIsOpen(false);
    router.push("/fenomeno2");
  };

  const handleLink3 = () => {
    setIsOpen(false);
    router.push("/fenomeno3");
  };

  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "white" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ zIndex: 200 }}>
          <AppBar
            style={{
              boxShadow: "none",
              border: "none",
              zIndex: 200,
              position: "fixed",
              top: "0px",
            }}
          >
            <Toolbar
              sx={{
                // height: isOpen ? "140px" : "100px",
                height: "100px",
                backgroundColor: "white",
                margin: 0,
                boxShadow: "none",
                border: "none",
              }}
              className="p-0"
            >
              <div className="grid grid-cols-12 w-full items-center">
                <div className="col-start-2 col-span-6">
                  <LogoRai />
                </div>

                <div className="appbarMenu">
                  <Button
                    onClick={handleClick}
                    sx={{ color: "black", fontWeight: 400 }}
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    }
                  >
                    Menu
                  </Button>
                </div>
              </div>
            </Toolbar>
            <div
              style={{
                top: "100px",
                overflow: "hidden",
                marginTop: 0,

                backgroundColor: "white",
                justifyContent: "center",
                zIndex: 300,
              }}
              className={`absolute flex w-full mt-3 transition-all duration-1000 ease-in-out ${
                isOpen ? "h-[90px]" : "h-2"
              }`}
            >
              <div
                style={{ display: isOpen ? "grid" : "none", width: "100%" }}
                className="grid-cols-12 mt-0 w-full"
              >
                <div style={{}} className="appbarContainer">
                  <Button
                    onClick={handleLink1}
                    sx={{ color: "black", fontWeight: 400 }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Fenomeno#1
                  </Button>
                  <Button
                    onClick={handleLink2}
                    sx={{ color: "black", fontWeight: 400 }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Fenomeno#2
                  </Button>
                  <Button
                    onClick={handleLink3}
                    sx={{ color: "black", fontWeight: 400 }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Fenomeno#3
                  </Button>
                </div>
              </div>
            </div>
          </AppBar>
        </div>
        {children}
      </body>
    </html>
  );
}

const LogoRai = ({ fill = "black" }) => {
  return (
    <svg
      className="header__logo"
      width="130"
      height="50"
      viewBox="0 0 130 50"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.395 19.1641H10.8956V24.0463H11.395C13.0664 24.0463 14.9529 23.7364 14.9529 21.6017C14.9529 19.467 13.0664 19.1641 11.395 19.1641Z" />
      <path d="M0 0V49.9999H50.3585V0H0ZM15.7852 34.8505L10.9303 27.3171H10.8748V34.8505H5.7495V15.2665H13.3785C17.2763 15.2665 20.2308 17.1119 20.2308 21.2918C20.2308 23.9912 18.7189 26.3324 15.9169 26.8007L22.1935 34.8505H15.7852ZM36.9869 34.8505H32.2223V33.37H32.1737C31.711 33.9993 31.0979 34.5044 30.3896 34.8398C29.6814 35.1752 28.9001 35.3303 28.1164 35.2913C24.1424 35.2913 21.3405 31.9928 21.3405 28.171C21.3405 24.3493 24.1146 21.0852 28.0679 21.0852C28.8458 21.0645 29.6193 21.2085 30.3368 21.5077C31.0544 21.8069 31.6994 22.2545 32.2292 22.8205V21.5259H36.9939L36.9869 34.8505ZM44.4842 34.8505H39.7265V21.5259H44.4842V34.8505ZM42.1053 19.0607C41.5772 19.0607 41.0609 18.9053 40.6218 18.6139C40.1827 18.3226 39.8405 17.9086 39.6384 17.4241C39.4363 16.9397 39.3834 16.4066 39.4864 15.8924C39.5895 15.3781 39.8438 14.9057 40.2172 14.5349C40.5906 14.1642 41.0664 13.9117 41.5844 13.8094C42.1024 13.7071 42.6392 13.7596 43.1271 13.9602C43.6151 14.1609 44.032 14.5007 44.3254 14.9367C44.6188 15.3726 44.7755 15.8852 44.7755 16.4096C44.7718 17.1116 44.4893 17.7838 43.9894 18.2802C43.4894 18.7766 42.8124 19.0571 42.1053 19.0607Z" />
      <path d="M29.3233 25.1893C28.9182 25.1689 28.5134 25.2325 28.1344 25.376C27.7555 25.5196 27.4109 25.7399 27.1225 26.023C26.8341 26.3061 26.6083 26.6458 26.4594 27.0203C26.3105 27.3949 26.2418 27.7962 26.2577 28.1985C26.2952 28.9798 26.6342 29.7168 27.2043 30.2565C27.7744 30.7963 28.532 31.0975 29.3198 31.0975C30.1076 31.0975 30.8651 30.7963 31.4352 30.2565C32.0054 29.7168 32.3443 28.9798 32.3818 28.1985C32.3987 27.7965 32.331 27.3954 32.1829 27.0209C32.0348 26.6463 31.8096 26.3065 31.5218 26.0233C31.2339 25.7401 30.8897 25.5196 30.5111 25.376C30.1325 25.2324 29.728 25.1688 29.3233 25.1893Z" />
      <path d="M64.611 30.9525V35.0566H55.9277V30.9525H57.8697V19.2943H55.9277V15.2246H62.2806L69.6392 26.2424V19.2943H67.6695V15.2246H76.325V19.2943H74.5287V35.0566H70.2287L62.7869 24.0113V30.9525H64.611Z" />
      <path d="M84.2175 35.4157C82.5992 35.4419 81.01 34.9875 79.6536 34.1106C78.2973 33.2338 77.2357 31.9746 76.6052 30.4946C75.9746 29.0146 75.8038 27.3812 76.1148 25.8042C76.4257 24.2271 77.2041 22.7782 78.3501 21.6435C79.2296 20.8069 80.2812 20.1694 81.4325 19.7748C82.5838 19.3802 83.8075 19.2378 85.0195 19.3576C86.2315 19.4773 87.403 19.8563 88.4534 20.4684C89.5038 21.0806 90.4082 21.9114 91.1044 22.9037C91.997 24.2307 92.457 25.7981 92.4222 27.3934C92.4165 27.9743 92.3702 28.5541 92.2835 29.1287H80.9024C81.1222 29.8183 81.5678 30.4152 82.1685 30.8244C82.7692 31.2337 83.4904 31.4318 84.2175 31.3874C85.0671 31.3928 85.8881 31.0834 86.5201 30.5197H91.8327C91.208 32.0064 90.1451 33.2709 88.7836 34.1471C87.4221 35.0233 85.8256 35.4704 84.2036 35.4295L84.2175 35.4157ZM87.6714 25.8647C87.5033 25.0908 87.0606 24.4027 86.4239 23.9261C85.7873 23.4495 84.9992 23.2162 84.2036 23.2686C83.4213 23.2541 82.6571 23.5027 82.0351 23.974C81.4131 24.4453 80.9698 25.1116 80.7775 25.8647H87.6714Z" />
      <path d="M97.2215 35.0569L93.5943 23.7637H92.2488V19.7422H99.1357V23.7637H97.8943L99.5518 29.7546L102.222 19.7422H105.988L108.658 29.7546L110.316 23.7637H109.074V19.7422H115.961V23.7637H114.616L110.988 35.0569H106.661L104.102 26.2427L101.549 35.0569H97.2215Z" />
      <path d="M120.74 30.3404C120.724 30.5714 120.76 30.8031 120.844 31.0189C120.929 31.2347 121.06 31.4293 121.229 31.589C121.398 31.7488 121.6 31.8696 121.821 31.943C122.042 32.0164 122.277 32.0406 122.508 32.0137C123.576 32.0137 124.138 31.5386 124.138 30.6778C124.138 29.4452 122.848 29.5072 120.795 28.915C117.931 28.1093 116.551 26.6288 116.551 24.1774C116.551 21.3058 118.631 19.3571 121.891 19.3571C123.031 19.3142 124.152 19.6592 125.068 20.3349V19.6945H128.306V24.0465H124.228C124.062 23.0411 123.667 22.6693 122.8 22.6693C121.933 22.6693 121.336 23.1995 121.336 23.8124C121.336 24.928 122.266 25.1896 123.979 25.5959C127.377 26.4635 129.035 27.524 129.035 30.4162C129.035 33.3083 126.732 35.4362 123.389 35.4362C122.148 35.4732 120.936 35.0566 119.984 34.2655V35.0436H116.62V30.3404H120.74Z" />
    </svg>
  );
};
