// Components bundle — 3 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 21:8999 Badge 🛑 (6 variants)
const __venc_Badge = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Badge = p => "size=" + __venc_Badge(p.size) + '|' + "kind=" + __venc_Badge(p.kind) + '|' + "state=" + __venc_Badge(p.state);
function Badge(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Label",
    size: _p.size ?? "m",
    kind: _p.kind ?? "default",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 46,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-accent-gold-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      color: "var(--mq-color-text-secondary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 46,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-background-info-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      color: "var(--mq-color-text-secondary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 46,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-background-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      color: "var(--mq-color-text-secondary)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 46,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-accent-gold-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      color: "var(--mq-color-text-primary-static)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 46,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-background-info)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      color: "var(--mq-color-text-primary-inverse)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 46,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-background-inverse)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      color: "var(--mq-color-text-primary-inverse)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.label));
  const __impls = {
    // figma: Size=M, Kind=Subtle, State=Gold
    "size=m|kind=subtle|state=gold": __body0,
    // figma: Size=M, Kind=Subtle, State=Blue
    "size=m|kind=subtle|state=blue": __body1,
    // figma: Size=M, Kind=Subtle, State=Default
    "size=m|kind=subtle|state=default": __body2,
    // figma: Size=M, Kind=Default, State=Gold
    "size=m|kind=default|state=gold": __body3,
    // figma: Size=M, Kind=Default, State=Blue
    "size=m|kind=default|state=blue": __body4,
    // figma: Size=M, Kind=Default, State=Default
    "size=m|kind=default|state=default": __body5
  };
  return (__impls[__vkey_Badge(props)] ?? __body5)();
}

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

// figma node: 33:5319 CBA
function CBA(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 18640,
      overflow: "hidden",
      backgroundColor: "rgb(250,245,237)",
      position: "relative",
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
    className: "fig-asset-368d9e615416ac99-290d1953",
    style: {
      position: "relative",
      width: 236,
      height: 62,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
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
  }, "Digitisation: Onboarding your business with CommBank")), /*#__PURE__*/React.createElement("div", {
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
  }, "An Australian banking first digital application that allows business customers to 'onboard' their business, directors and beneficial owners as well as originate their product with CommBank. All through a seamless and intuitive digital application known as Project Path.")), /*#__PURE__*/React.createElement("div", {
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
  }, "User research,  UI and UX")), /*#__PURE__*/React.createElement("div", {
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
  }, "2018 Q1 - 3 months")), /*#__PURE__*/React.createElement("div", {
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
  }, "Me, PM, BA, 2x BE, 4x FE")))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b4197ba9ffc7a221-2d990f8f",
    style: {
      position: "relative",
      height: 634,
      borderRadius: 10,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
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
      top: 1576,
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "The current landscape of starting a business transaction account with CommBank")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Complex paper-based applications (up to 50 pages) and business rules often lead to rework from human error and miscommunication.", "\n", "• ", "Lost or misplaced documentation forces a full rework, requiring customers to return to the branch.", "\n", "• ", "Reaching customers at the right time for verification is difficult.", "\n", "• ", "Frontline staff have uneven knowledge/experience and lack enough Business Branch Specialists to confidently serve business customers.", "\n", "• ", "Complex entity structures (multiple directors/BOs) require specialists to coordinate with contacts and complete documentation.", "\n", "• ", "Manual data entry introduces errors, triggering resubmissions and rework across multiple team hand-offs."), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c79e402b7ff1af81",
    style: {
      position: "relative",
      height: 543,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 300,
      fontSize: 20,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Journey mapping to help stakeholders understand how cumbersome and slow, opening a business account with CBA is currently - businesses\u2019 shouldn\u2019t need to wait up to a week to start transacting with their customers.")), /*#__PURE__*/React.createElement("span", {
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
  }, "How our customers feel about CommBank Business services, using existing feedback loops "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "42px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "No digital self-service"), "\n", "A branch only visit is required to kick-off the business banking relationship.", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "Time-consuming"), "\n", "Business Customers take a long time to ‘onboard’ and set up their business profile with CBA and be product-ready, i.e. transact, send and receive payments.", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "Miscommunication"), "\n", "There was frustration and effort to verify details with CVS (Customer Verification Staff) due to constant rework and rigorous cross-team handling.", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "More customer effort"), "\n", "Customers are required to manually submit their involved parties applications and ensure they are completed correctly."), /*#__PURE__*/React.createElement("span", {
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
  }, "... as well as from our frontline branch staff who process business customer requests everyday"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "42px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "Error-prone processes"), "\n", "Errors and adjustments require resubmission and rework of paper-based applications", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "Duplicated process"), "\n", "A digital and manual entry of documented applications requires phone communication between CVS staff and the applicant.", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 20
    }
  }, "Hindrance"), "\n", "Hand-offs between multiple teams - often cause blockers and prolong the processing time."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
  }, "Our bet"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "By digitising the onboarding application for businesses, both staff and customers will be provided with a guided and easy streamlined onboarding experience. Ensuring that data collection is simple, complete, accurate and compliant - will allow business customers to be product-ready sooner for them to focus on their running their business. "))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 193,
      top: 10430,
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "Creating a robust origination pattern ...")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "We identified the need to link customers' business accounts to other CBA products and provide a seamless and intuitive origination experience. However, the existing origination UI framework was inadequate to handle a lengthy and intricate flow.\r\n\r\nTherefore, there was a pressing design requirement to create a new, advanced origination framework, now referred to as \"Path\" by CommBank product teams. The framework is characterized by its modular design that allows for easy modification, addition, and customization of flows based on the product chosen by the business customer."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ff6fdd9ea0d247fa-062ccee6",
    style: {
      position: "relative",
      width: 598,
      height: 736,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "The BCO project was able to pave the way for a complex origination  pattern that the CBA design library was missing. A whole new pattern was documented and created for the wider \u2028design team to utilise in their project. e.g. Home Loans applications and insurance applications."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 193,
      top: 11502,
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "... and differentiating between simple and complex application flows")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "The current CommBank origination process utilized a conversational interaction framework known as Typeform, which presented questions one at a time, allowing customers to progress through simple questions in a single session.", "\n", "However, for Business Customer Onboarding, a more robust origination application was needed to meet customers' needs. The Typeform experience was not an optimal or time-efficient solution for BCO and required an application with the following features:", "\n", ":", "\n", "• ", "The ability to capture information quickly and efficiently.", "\n", "• ", "The option to save and return to the application at a later time.", "\n", "• ", "The ability to complete the application in multiple sessions.", "\n", "• ", "The capacity for collaboration between customers and branch staff.", "\n", "• ", "A design that enables users and staff to input answers quickly and efficiently, such as a long-form design, as opposed to Typeform's one question at a time interaction.", "\n", "• ", "The ability for users to review and modify their information during the application process."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9e9ba9867889d10c-f852322a",
    style: {
      position: "relative",
      height: 912,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-afd19bb897f95343",
    style: {
      position: "relative",
      height: 523.239,
      borderRadius: 10,
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
  }, "Bringing Path into CBA Design Ecosystem")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "The Path origination pattern was introduced not only as a new onboarding solution for the bank, but also as a comprehensive design that was integrated into CBA's design system, Honeycomb. This made it possible for other teams to easily incorporate the pattern into their own experiences, such as Home Loans and Lending.\r\n\r\nAs the designer of the Path UI framework, sharing this new capability with other product teams across the business opened up new opportunities for streamlining their own experiences but also having more consistent experiences across the bank ever-growing digital channels.\r\n\r\nActions: Design speccing on interaction, creating playbook, Figma componentisation, Front-end QA, Capability roadshow."), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-70366c75c5c007c3",
    style: {
      position: "relative",
      height: 879,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-75702473bfc05f73",
    style: {
      position: "relative",
      height: 736,
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
  }, "Iterations and visual improvements for added customer delight")))), /*#__PURE__*/React.createElement("span", {
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
  }, "The Path Origination pattern underwent constant iterations and improvements to make it both visually appealing and intuitive. As a result, it evolved into a robust and stronger interaction pattern. "), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-335f9c1e79c25394",
    style: {
      position: "relative",
      height: 585,
      borderRadius: 20,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-26c8b96cd2352bde",
    style: {
      position: "relative",
      height: 390,
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
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "I also conceptualised how Path would be able to accommodate complex  application experiences like CBA's new proposed Home Loan origination  products i.e. capturing expenses, property details, digital assistants  with lending specialists")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 206,
      top: 3914,
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
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
  }, "My design process")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Through the process we focused heavily on aligning stakeholders and conceptualizing our ideas effectively. Starting from understanding the problem, gathering information, and defining the project scope. We conducted ideation sessions with our stakeholders and SMEs during this crucial stage of the design process to understand their perspectives and ideas that can be incorporated, leading to a solution that is more closely aligned with their needs and expectations.\r\n\r\nGoing down a more structured design process helps to break down complex problems into manageable parts and provides a clear framework for thinking through different solutions. \r\n\r\nEducating and also creating transparency on the design roadmap was key to building effective relationships within the encompassing product teams.")), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-879b772c8f5beb86",
    style: {
      position: "relative",
      height: 457,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
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
  }, "Immerse and ideate")))), /*#__PURE__*/React.createElement("span", {
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
  }, "At the start of our discovery phase, our team came together to determine the critical elements of our business and establish a clear direction for our efforts. During this time, each team member recorded their insights in the form of \"How Might We\" statements. These statements were then grouped into overarching themes, providing us with a set of key opportunity areas to explore further during the ideation phase. The process of refining and categorizing our observations allowed us to focus our efforts and provided a solid foundation for our creative problem-solving efforts."), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ee4a680f5f541b7a",
    style: {
      position: "relative",
      height: 438,
      borderRadius: 10,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, "To further refine our solution, we provided the team with an opportunity to vote on the idea they believed would offer the most impactful solution. This approach allowed us to narrow down our options and focus on the most promising ideas, ensuring that our efforts are directed towards creating a solution that will have the greatest impact for our customers.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Top ideas generated")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 14,
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
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Empower our frontline"), /*#__PURE__*/React.createElement("span", {
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
  }, "Guide the branch conversation - \"Triage\" empower our banking staff with the ability to guide the conversation with potential business customers. i.e. early training, involving them in early piloting.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Utilise our digital assistants"), /*#__PURE__*/React.createElement("span", {
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
  }, "Leverage existing Digital Assistant channels, i.e. Chatbot, Online chat with a business banker where are potential roadblocks in the application process. ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Automated onboarding experience for involved parties"), /*#__PURE__*/React.createElement("span", {
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
  }, "Nudging involved parties who haven't been identified and the capability to speed up the KYC (Know Your Customer) process."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 14,
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
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Consistent experience for both our end users"), /*#__PURE__*/React.createElement("span", {
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
  }, "Consistent UI for Customer Verification Staff (Internal team) to have a similar UI application as a customer for easy walkthrough and communication")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
  }, "Meaningful cross-sell"), /*#__PURE__*/React.createElement("span", {
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
  }, "Provide meaningful cross-sell during end-to-end application by bundling merchant terminals and branch transactions.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
  }, "Set expectations and timeframes"), /*#__PURE__*/React.createElement("span", {
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
  }, "Always provide the next steps with a status tracker that allows customers to leave the application and then returned to guide them where they left off.")))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-29f41c1d2c2b01c5-19f11e2d",
    style: {
      position: "relative",
      height: 713,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "As the sprint team, we refined our top ideas and ended the day by building end-to-end customer journeys utilising the top ideas/concepts generated in the ideation workshops. We formed individual groups to construct what this might look like as a holistic service journey.\r\n\r\nFrom a business perspective, we refined the data requirements for both customers and the Customer Verification Staff. During the customer onboarding process, we streamlined the verification process by eliminating the need for duplicate data capture over the phone."))), /*#__PURE__*/React.createElement("div", {
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
  }, "Research planning and concept testing")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 14,
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
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "The design team worked closely with the research team to develop a research plan for the product team's upcoming customer testing. We also finalised the scenario that would be used as a basis for the testing, making sure all relevant ideas and concepts were integrated into a coherent narrative.\r", "\n", "\r", "\n", "The research was conducted by our researcher, along with 8 participants who are small business owners with either a CBA business account or with another financial institution. The visual stimulus was a paper-based concept that placed the participant in the shoes of Sam Yu, a fictional business owner who recently opened a burger shop and wants to do his banking with CBA. The concept walked Sam through various stages of the onboarding process, including:\r", "\n", "\n", "• ", "Providing personal information about the primary contact (Sam Yu)\r", "\n", "\r", "\n", "• Providing information about his business\r", "\n", "\r", "\n", "• Pre-filling data that we can pull from ASIC (Business registration)\r", "\n", "\r", "\n", "• Providing information about these co-owners and beneficial owners and their expectations on how they would accomplish this\r", "\n", "\r", "\n", "• A application tracker\r", "\n", "\r", "\n", "• Cross-selling products that are relevant to the current business entity (Merchant terminal)"))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ca39d1982e1becb2",
    style: {
      position: "relative",
      height: 521,
      borderRadius: 10,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, "Storybook concept tested with 8 business banking customers. Despite initial preference for in-person account opening (due to document sighting requirements), participants preferred applying online after experiencing the prototype. The process was perceived as easy, straightforward, and seamless.")), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-685a071e916e8a13",
    style: {
      position: "relative",
      height: 656,
      borderRadius: 10,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, "During cadence testing, we invited the scrum to attend viewing sessions throughout the day. This allowed our team and stakeholders to see customer feedback firsthand on features proposed during BCO ideation workshops. We also facilitated active listening sessions where they could contribute observations to our testing hypotheses.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 9112,
      width: 1164,
      overflow: "hidden",
      borderRadius: 38,
      background: "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)), linear-gradient(rgba(255,255,255,0.49),rgba(255,255,255,0.49))",
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
      display: "flex",
      flexDirection: "column",
      gap: 34,
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
      fontSize: 48,
      whiteSpace: "nowrap",
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "How was the concepts received"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
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
      gap: 8,
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
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, "User testing generated strongly positive reactions across all participants. Common themes were the simplicity of completing the process independently, the straightforward questions, and surprise at how fast the experience felt. Several participants were also open to bundling the application with other business tools for a more complete origination experience. Key insights that shaped our content and interaction design:"), /*#__PURE__*/React.createElement("span", {
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
  }, "Terminology and language - Language felt too \"banky\"; needed a more customer-friendly tone for new business owners."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Navigation - ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Could the timeline side panel double as a way to navigate between sections ")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Saving progress - ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Users wanted a clear way to return to an in-progress application.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Finance sector questions —", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, " Appetite for contextual tooltips, including surfacing CEBA (digital assistant) where relevant.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Transparency — ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Users wanted to know when accounts would be active, and an upfront checklist of what's needed before starting.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "A \"last check\" step —", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, " Given the application's length, participants wanted to review their details before submitting.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
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
      fontSize: 24,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexGrow: 1,
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Interactions and cadence testing"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 16
    }
  }, "After conducting several rounds of testing with business customers, we emphasized the following key areas:"), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 16
    }
  }, "Streamlining language and minimising the use of banking jargon, as well as providing clarification when uncertainty arises."), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 16
    }
  }, "Improving the ease of navigation and reducing the number of errors by simplifying interface elements."), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 16
    }
  }, "Ensuring that digital assistance is readily available when needed and that it is provided by a human, as customers expressed a preference for chatbots, which they felt were not intelligent enough."), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      fontSize: 16
    }
  }, "Provide an avenue for staff to be able to access to acquire information readily i.e. help centre, application experts")), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-769ab5573c0fe0f9-ca9bc6b2",
    style: {
      position: "relative",
      width: 532,
      height: 620,
      borderRadius: 10,
      flexShrink: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 193,
      top: 16952,
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
      width: 871,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 40,
      lineHeight: "56px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "The Business Customer Onboarding initiative resulted in a more positive experience for both customers and internal processing staff, leading to increased sales. It also introduced a new interaction pattern that provides a digital-wide efficiency gain for the entire design team and its associated product teams."), /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "relative",
      width: 155,
      height: 36,
      flexShrink: 0
    },
    label: "Project measure",
    size: "m",
    kind: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1005,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 27,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 319,
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 26px 20px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-61bf9c4565856d06",
    style: {
      position: "relative",
      width: 26,
      height: 26,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "24%+ Completed Business Transactions Account registrations and creations")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 27,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 319,
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 26px 20px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-61bf9c4565856d06",
    style: {
      position: "relative",
      width: 26,
      height: 26,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "32% Increase in cross-sell and bundled business product applications (e.g. merchant terminals, business credit cards)")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 27,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 319,
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 26px 20px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-61bf9c4565856d06",
    style: {
      position: "relative",
      width: 26,
      height: 26,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "~17 Minutes Average time to complete and onboard business and set up a business profile with CBA"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 319,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 27,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 319,
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 26px 20px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-61bf9c4565856d06",
    style: {
      position: "relative",
      width: 26,
      height: 26,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "~10 Minutes Average time for directors and beneficial owners to onboard and complete profiles \n12% of click-throughs to cross-app objects (Jira, Confluence, Loom)")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 193,
      top: 18140,
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
window.Badge = Badge;
window.CtaButton = CtaButton;
window.CBA = CBA;