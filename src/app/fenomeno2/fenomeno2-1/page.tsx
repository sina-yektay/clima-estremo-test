import BreadCrumbs from "@/components/BreadCrumbs";

export default function Fenomeno2due() {
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
        <div style={{ fontSize: "50px",  color: "black"  }}>Pagina di fenomeno2-1</div>{" "}
      </div>
    </div>
  );
}
