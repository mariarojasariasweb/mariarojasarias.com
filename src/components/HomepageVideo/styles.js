const styles = {
  videoContainer: {
    maxHeight: "100vh",
    ratio: { base: 9 / 16 },
    overflow: "hidden",
  },
  textContainer: {
    flexDirection: "column",
  },
  languageContainer: {
    flexDirection: "column",
  },
  heading: {
    color: "white",
    letterSpacing: "2px",
    fontSize: { base: "16px", lg: "24px" },
    fontWeight: "400",
    marginBottom: "30px",
    // _hover: {
    //   cursor: "pointer",
    //   color: "firebrick",
    // },
  },
  menuLink: {
    fontSize: { base: "11px", lg: "16px" },
    marginBottom: "20px",
    letterSpacing: "2px",
    color: "white",
    _hover: {
      cursor: "pointer",
      color: "firebrick",
    },
  },
};

export default styles;
