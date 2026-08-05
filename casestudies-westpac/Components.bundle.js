// Components bundle — 2 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 5:22 cta-button (4 variants)
const __venc_CtaButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CtaButton = p => "style2=" + __venc_CtaButton(p.style2) + '|' + "state=" + __venc_CtaButton(p.state);
function CtaButton(_p = {}) {
  const props = {
    ..._p,
    leftIcon: _p.leftIcon ?? false,
    style2: _p.style2 ?? "primary",
    rightIcon: _p.rightIcon ?? false,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(97,85,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(255,255,255,0.4)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(255,255,255,0.4)"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(77,64,217)",
      boxShadow: "0px 4px 12px 0px rgba(97,85,245,0.35)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(255,255,255,0.4)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(255,255,255,0.4)"
    }
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1.500px rgb(97,85,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(97,85,245,0.4)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(97,85,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(97,85,245,0.4)"
    }
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(97,85,245,0.08)",
      boxShadow: "inset 0 0 0 1.500px rgb(97,85,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(97,85,245,0.4)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(97,85,245)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgba(97,85,245,0.4)"
    }
  })));
  const __impls = {
    // figma: Style=Primary, State=Default
    "style2=primary|state=default": __body0,
    // figma: Style=Primary, State=Hover
    "style2=primary|state=hover": __body1,
    // figma: Style=Secondary, State=Default
    "style2=secondary|state=default": __body2,
    // figma: Style=Secondary, State=Hover
    "style2=secondary|state=hover": __body3
  };
  return (__impls[__vkey_CtaButton(props)] ?? __body0)();
}

// figma node: 72:5503 Westpac
function Westpac(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 7094,
      overflow: "hidden",
      backgroundColor: "rgb(250,245,237)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 164,
      width: 1164,
      overflow: "hidden",
      borderRadius: 38,
      background: "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sheet-bottom-radius) * 1px)",
      padding: "62px 68px 62px 68px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 132,
      height: 62,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "casestudies-westpac/assets/westpac-logo.png",
    style: { display: "block", width: "100%", height: "100%", objectFit: "contain", objectPosition: "left center" }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--liquid-glass-frost-large) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 64,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Westpac GEL: Australia's first banking Design System")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Overview"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Westpac, one of Australia's largest financial institutions, operates over 100 digital touchpoints, which poses a challenge of inconsistency in their design assets. To address this, the Westpac Design Team aimed to create a design language that is scalable, reusable, user-friendly and consistent throughout the entire organization.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Role"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Interaction, UX and UI")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Timeline"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "2015 Q4 -  9 months")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Team"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Me, Lead PD, PM, 2x FE"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 57,
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 20px 8px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "var(--accents-indigo)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 20px 10px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--grays-black)",
      flexShrink: 0
    }
  }, "Home")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 20px 10px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Case studies")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 20px 10px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--grays-black)",
      flexShrink: 0
    }
  }, "Other stuff")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 20px 10px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--grays-black)",
      flexShrink: 0
    }
  }, "About"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 975,
      top: 59,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    style: {
      position: "relative",
      width: 153,
      flexShrink: 0
    },
    text1: "Download CV",
    style2: "secondary",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(97,85,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Connect on "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-120d568f333f982c-153811eb",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 206,
      top: 877,
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-043dea0774f39386",
    style: {
      position: "relative",
      height: 584,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 156,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 107,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--liquid-glass-frost-large) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "42px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "In a large financial institution like Westpac, how might we as a design cohort empower our digital delivery teams to speak the same language? ")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "The Westpac core site underwent a redesign utilising a systemic approach, designed to function as a multi-brand solution. To fulfil this purpose, Westpac GEL was established as the company's \"single source of truth.\" The GEL prioritizes customer-centric design, ensuring consistent delivery of the Westpac brand across all digital interfaces.\r", "\n", "\r", "\n", "The benefits of the GEL were evident from the start, with the team establishing a unified goal for successful implementation, including:\r", "\n", "\r", "\n", "• ", "Alignment with the Westpac brand\r", "\n", "• ", "Faster time-to-market and cost savings on projects\r", "\n", "• ", "An easy-to-use content management system\r", "\n", "• ", "Reduced accessibility risk in Westpac digital applications\r", "\n", "• ", "Scalable and reusable assets for increased design efficiency\r", "\n", "• ", "Cross-device compatibility."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "42px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Laying the foundational components that can facilitate all essential UI interactions across Westpac\u2019s customer facings experiences"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-810f9c1bf21cc396",
    style: {
      position: "relative",
      height: 786,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "As a outcome, we had developed, constructed, and established governance for our components, making them accessible, understandable, and reusable. This leads to a familiar and user-friendly experience for our customers and provides significant efficiency improvements for our development teams and their stakeholders, allowing for the delivery of consistent, high-quality results and ready-to-code user solutions.\r", "\n", "\r", "\n", "Some of the key features of our design approach include:\r", "\n", "\r", "\n", "• ", "A fully accessible graphical user interface (GUI) library\r", "\n", "• ", "Easily understandable components for both internal and external applications\r", "\n", "• ", "Detailed governance documentation, including usage guidelines, specification-ready Sketch files with templates and organized symbols\r", "\n", "• ", "An easily accessible GEL space for both internal and external designers, accessible through a public-facing site.\r", "\n", "\r", "\n", "By adopting the Atomic Design methodology - consistency in our design and establishing hierarchy through the level of our pages was achieved. As the designer on the team. I looked at the most basic interactions and common foundational elements that needed to be included as 'building blocks' - the elements that met the basic criteria of a function interface for both the user and satisfy the needs of a digital application.\r", "\n", "\n", "• ", "Brand and GUI colour palette\r", "\n", "• ", "Typography and font hierarchy classing\r", "\n", "• ", "Pre-defined spacing \r", "\n", "• ", "Buttons and inputs\r", "\n", "• ", "Form elements incl. validation stylings\r", "\n", "• ", "Foundational patterns i.e. Modals, Alerts and Accordions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "42px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Monitoring, continuous improvement and iteration"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "With the introduction of the GUI, there may be instances where components and experiences are inconsistent. It is our responsibility to continuously improve the usability of our extensive collection of components.\r\n\r\nTo ensure the success of the GEL design system, governance has been thoroughly documented and its usage rules have been established. However, what sets us apart is our commitment to constant improvement. The GEL is not the final solution for the interface, but rather a starting point for teams to experiment and explore new permutations and enhancements that suit their specific needs. We recognize the limitations of a design system that may limit creativity, and therefore encourage our designers to push the boundaries of the Westpac GUI to add to our growing pattern library."), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e7ece86cd3a61dd9-9f7139aa",
    style: {
      position: "relative",
      height: 580,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "casestudies-westpac/assets/wpc-quote.png",
    style: { display: "block", width: "88%", maxWidth: 900, height: "auto", objectFit: "contain" }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "42px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Federating the design system to allow teams to contribute "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "To ensure the components and patterns, both I and the Lead Designer introduced an ingestion process. The aim of this process is to not only ensure the quality of the components and patterns but also to make the process effortless and engaging for teams to contribute, rather than feeling like a burden.\r\nIntroducing this process keeps the GEL team accountable but also opens up collaboration with the teams that are delivering within their streams. "), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-099764270f592563",
    style: {
      position: "relative",
      height: 569,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 206,
      top: 6203,
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 32,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Impact of solution"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 40,
      lineHeight: "56px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Within a span of a year, Westpac GEL's assets covered more than 62% of Westpac's currently existing digital touchpoints. Providing consistent journeys for ours customers and paving the way for more efficient delivery of projects for the business")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 197,
      top: 6625,
      width: 1028,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.6)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 62,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--liquid-glass-frost-large) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      textAlign: "center",
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Reach out for a detailed walk-through")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 24,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "You can also view this more detailed case study via Figma\rin your own time.\nWhilst you’re here, check out my other case studies. "))), /*#__PURE__*/React.createElement(CtaButton, {
    style: {
      position: "relative",
      width: 183,
      flexShrink: 0
    },
    text1: "View recent work",
    style2: "secondary",
    state: "default"
  })));
}

// Globals for scripts loaded after this file.
window.CtaButton = CtaButton;
window.Westpac = Westpac;