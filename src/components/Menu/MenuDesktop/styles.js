const styles = {
  menuContainer: {
    flexDirection: "column",
    position: "fixed",
  },
  heading: {
    color: "crimson",
    letterSpacing: "2px",
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "30px",
    _hover: {
      cursor: "pointer",
      color: "firebrick",
    },
  },
  accordionItem: {
    border: "0",
  },
  accordionButton: {
    padding: "0",
    _expanded: {
      background: "white",
      color: "crimson",
    },
    _hover: {
      background: "white",
    },
    textTransform: "uppercase",
    fontSize: "11px",
    letterSpacing: "2px",
  },
  accordionPanel: {
    padding: "0",
  },
  menuLink: {
    textTransform: "uppercase",
    fontSize: "11px",
    marginBottom: "20px",
    letterSpacing: "2px",
    _hover: {
      cursor: "pointer",
      color: "firebrick",
    },
    currentPage: {
      textTransform: "uppercase",
      fontSize: "11px",
      marginBottom: "20px",
      letterSpacing: "2px",
      color: "crimson",
      _hover: {
        cursor: "pointer",
        color: "firebrick",
      },
    },
  },
};

export default styles;
