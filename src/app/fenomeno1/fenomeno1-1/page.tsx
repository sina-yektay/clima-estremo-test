import BreadCrumbs from "@/components/BreadCrumbs";

export default function Fenomeno1uno() {
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
        <div style={{ fontSize: "50px" }}>Pagina di fenomeno1-1</div>{" "}
      </div>
    </div>
  );
}