const styles = {
  accordionItem: {
    border: "0",
  },
  menuHeader: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionButton: {
    background: "white",
    padding: "4px",
    maxWidth: "20px",
    maxHeight: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px",
    borderColor: "crimson",
    fontSize: "14px",
    color: "crimson",
    _expanded: {
      background: "crimson",
      color: "white",
    },
    _hover: {
      background: "crimson",
      color: "white",
    },
  },
  heading: {
    color: "crimson",
    letterSpacing: "2px",
    fontSize: "16px",
    fontWeight: "400",
  },
  accordionPanel: {
    p: "0",
  },
  linksPanel: {
    flexDirection: "column",
    marginTop: "18px",
  },
  menuLink: {
    textTransform: "uppercase",
    color: "crimson",
    fontSize: "11px",
    marginBottom: "13px",
    letterSpacing: "2px",
  },
};

export default styles;
