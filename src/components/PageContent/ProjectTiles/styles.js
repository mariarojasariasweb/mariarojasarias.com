const styles = {
  container: {
    flexDirection: { base: "column", lg: "row" },
    gap: "30px",
    flexWrap: { lg: "wrap" },
  },
  tileContainer: {
    transition: "all 0.1s ease",
    alignItems: "center",
    justifyContent: "center",
    height: { base: "50vw", lg: "300px" },
    backgroundSize: "150%",
    backgroundPosition: "center",
    color: "white",
    width: { lg: "calc(50% - 15px)" },
    _hover: {
      color: "firebrick",
      backgroundSize: "160%",
      cursor: "pointer",
    },
    padding: "20px",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "16px",
    textAlign: "center",
  },
};

export default styles;
