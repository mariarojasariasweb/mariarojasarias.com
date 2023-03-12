const styles = {
  topMenuContainer: {
    gap: "65px",
    justifyContent: "flex-end",
    display: { base: "none", lg: "flex" },
  },
  menuLink: {
    textTransform: "uppercase",
    fontSize: "14px",
    color: "black",
    currentPath: {
      textTransform: "uppercase",
      color: "crimson",
      fontSize: "14px",
      _hover: {
        cursor: "pointer",
      },
    },
    _hover: {
      color: "firebrick",
      cursor: "pointer",
    },
  },
};

export default styles;
