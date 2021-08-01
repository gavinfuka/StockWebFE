const KHeaderStyle = (theme) => ({
  grow: {
    flexGrow: 1,
  },

  nav: {
    position: "fixed",
    top: 0,
    padding: "0px",
    height: "8%",
    width: "100%",
    zIndex: 3,
    display: "flex",
    justifyContent: "space-between",
    /* Animations */
    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
    backgroundColor: "#111",
  },
  navShow: {
    backgroundColor: "#111",
  },

  navLink: {
    textDecoration: "none",
    color: "#ffffff",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  option: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "contents",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

export default KHeaderStyle;
