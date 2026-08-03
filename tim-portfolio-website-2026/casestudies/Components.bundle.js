// Components bundle — 29 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 19:1750 Arrow (4 variants)
const __venc_Arrow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Arrow = p => "property1=" + __venc_Arrow(p.property1);
function Arrow(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 272.46,
      height: 71.555,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 272.460,
    height: 71.555,
    viewBox: "0 0 272.460 71.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 272.46,
      height: 71.555
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 265.26 59.523 C 265.56 57.523 265.86 56.023 266.16 54.423 C 266.66 51.623 267.26 48.923 267.86 46.223 C 268.06 45.323 268.46 44.523 268.86 43.823 C 269.26 43.123 269.96 42.723 270.76 42.923 C 271.66 43.123 272.26 43.723 272.36 44.623 C 272.46 45.323 272.46 46.023 272.46 46.623 C 271.76 54.023 270.56 61.323 268.36 68.423 C 268.16 69.123 267.86 69.823 267.46 70.523 C 266.76 71.623 265.86 71.823 264.66 71.223 C 263.96 70.923 263.36 70.623 262.56 70.423 C 257.96 69.323 253.36 68.323 248.76 67.223 C 248.16 67.123 247.56 66.823 247.06 66.523 C 246.26 66.123 245.86 65.423 245.86 64.523 C 245.96 63.623 246.46 62.923 247.36 62.723 C 248.16 62.523 249.16 62.423 249.96 62.523 C 252.96 62.923 256.06 63.523 259.06 64.023 C 259.56 64.123 260.06 64.123 260.86 64.223 C 260.26 63.323 259.96 62.723 259.56 62.123 C 248.96 46.323 235.16 34.123 218.26 25.323 C 204.46 17.823 189.76 12.823 174.46 9.923 C 160.76 7.323 146.96 5.723 132.96 5.923 C 112.86 6.123 93.06 8.723 73.86 14.823 C 55.56 20.623 38.96 29.423 24.46 42.023 C 16.26 49.123 9.46 57.223 4.06 66.523 C 3.76 67.123 3.36 67.723 2.86 68.223 C 1.86 69.223 0.26 68.723 0.06 67.323 C -0.04 66.523 -0.04 65.623 0.26 64.923 C 0.96 63.123 1.66 61.323 2.66 59.723 C 6.76 52.323 12.26 45.923 18.46 40.123 C 30.96 28.323 45.46 19.723 61.16 13.223 C 72.66 8.423 84.46 5.423 96.56 3.323 C 110.06 0.923 123.56 -0.177 137.26 0.023 C 146.96 0.123 156.56 1.123 166.16 2.523 C 178.06 4.323 189.66 7.023 201.06 11.123 C 214.76 16.123 227.76 22.623 239.36 31.623 C 248.86 39.023 257.06 47.723 263.96 57.723 C 264.26 58.123 264.66 58.623 265.26 59.523 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 272.46,
      height: 71.555,
      position: "relative",
      color: "rgb(85,81,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 272.460,
    height: 71.555,
    viewBox: "0 0 272.460 71.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 272.46,
      height: 71.555
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 265.26 59.523 C 265.56 57.523 265.86 56.023 266.16 54.423 C 266.66 51.623 267.26 48.923 267.86 46.223 C 268.06 45.323 268.46 44.523 268.86 43.823 C 269.26 43.123 269.96 42.723 270.76 42.923 C 271.66 43.123 272.26 43.723 272.36 44.623 C 272.46 45.323 272.46 46.023 272.46 46.623 C 271.76 54.023 270.56 61.323 268.36 68.423 C 268.16 69.123 267.86 69.823 267.46 70.523 C 266.76 71.623 265.86 71.823 264.66 71.223 C 263.96 70.923 263.36 70.623 262.56 70.423 C 257.96 69.323 253.36 68.323 248.76 67.223 C 248.16 67.123 247.56 66.823 247.06 66.523 C 246.26 66.123 245.86 65.423 245.86 64.523 C 245.96 63.623 246.46 62.923 247.36 62.723 C 248.16 62.523 249.16 62.423 249.96 62.523 C 252.96 62.923 256.06 63.523 259.06 64.023 C 259.56 64.123 260.06 64.123 260.86 64.223 C 260.26 63.323 259.96 62.723 259.56 62.123 C 248.96 46.323 235.16 34.123 218.26 25.323 C 204.46 17.823 189.76 12.823 174.46 9.923 C 160.76 7.323 146.96 5.723 132.96 5.923 C 112.86 6.123 93.06 8.723 73.86 14.823 C 55.56 20.623 38.96 29.423 24.46 42.023 C 16.26 49.123 9.46 57.223 4.06 66.523 C 3.76 67.123 3.36 67.723 2.86 68.223 C 1.86 69.223 0.26 68.723 0.06 67.323 C -0.04 66.523 -0.04 65.623 0.26 64.923 C 0.96 63.123 1.66 61.323 2.66 59.723 C 6.76 52.323 12.26 45.923 18.46 40.123 C 30.96 28.323 45.46 19.723 61.16 13.223 C 72.66 8.423 84.46 5.423 96.56 3.323 C 110.06 0.923 123.56 -0.177 137.26 0.023 C 146.96 0.123 156.56 1.123 166.16 2.523 C 178.06 4.323 189.66 7.023 201.06 11.123 C 214.76 16.123 227.76 22.623 239.36 31.623 C 248.86 39.023 257.06 47.723 263.96 57.723 C 264.26 58.123 264.66 58.623 265.26 59.523 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 272.46,
      height: 71.555,
      position: "relative",
      color: "rgb(242,78,30)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 272.460,
    height: 71.555,
    viewBox: "0 0 272.460 71.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 272.46,
      height: 71.555
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 265.26 59.523 C 265.56 57.523 265.86 56.023 266.16 54.423 C 266.66 51.623 267.26 48.923 267.86 46.223 C 268.06 45.323 268.46 44.523 268.86 43.823 C 269.26 43.123 269.96 42.723 270.76 42.923 C 271.66 43.123 272.26 43.723 272.36 44.623 C 272.46 45.323 272.46 46.023 272.46 46.623 C 271.76 54.023 270.56 61.323 268.36 68.423 C 268.16 69.123 267.86 69.823 267.46 70.523 C 266.76 71.623 265.86 71.823 264.66 71.223 C 263.96 70.923 263.36 70.623 262.56 70.423 C 257.96 69.323 253.36 68.323 248.76 67.223 C 248.16 67.123 247.56 66.823 247.06 66.523 C 246.26 66.123 245.86 65.423 245.86 64.523 C 245.96 63.623 246.46 62.923 247.36 62.723 C 248.16 62.523 249.16 62.423 249.96 62.523 C 252.96 62.923 256.06 63.523 259.06 64.023 C 259.56 64.123 260.06 64.123 260.86 64.223 C 260.26 63.323 259.96 62.723 259.56 62.123 C 248.96 46.323 235.16 34.123 218.26 25.323 C 204.46 17.823 189.76 12.823 174.46 9.923 C 160.76 7.323 146.96 5.723 132.96 5.923 C 112.86 6.123 93.06 8.723 73.86 14.823 C 55.56 20.623 38.96 29.423 24.46 42.023 C 16.26 49.123 9.46 57.223 4.06 66.523 C 3.76 67.123 3.36 67.723 2.86 68.223 C 1.86 69.223 0.26 68.723 0.06 67.323 C -0.04 66.523 -0.04 65.623 0.26 64.923 C 0.96 63.123 1.66 61.323 2.66 59.723 C 6.76 52.323 12.26 45.923 18.46 40.123 C 30.96 28.323 45.46 19.723 61.16 13.223 C 72.66 8.423 84.46 5.423 96.56 3.323 C 110.06 0.923 123.56 -0.177 137.26 0.023 C 146.96 0.123 156.56 1.123 166.16 2.523 C 178.06 4.323 189.66 7.023 201.06 11.123 C 214.76 16.123 227.76 22.623 239.36 31.623 C 248.86 39.023 257.06 47.723 263.96 57.723 C 264.26 58.123 264.66 58.623 265.26 59.523 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 272.46,
      height: 71.555,
      position: "relative",
      color: "rgb(15,169,88)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 272.460,
    height: 71.555,
    viewBox: "0 0 272.460 71.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 272.46,
      height: 71.555
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 265.26 59.523 C 265.56 57.523 265.86 56.023 266.16 54.423 C 266.66 51.623 267.26 48.923 267.86 46.223 C 268.06 45.323 268.46 44.523 268.86 43.823 C 269.26 43.123 269.96 42.723 270.76 42.923 C 271.66 43.123 272.26 43.723 272.36 44.623 C 272.46 45.323 272.46 46.023 272.46 46.623 C 271.76 54.023 270.56 61.323 268.36 68.423 C 268.16 69.123 267.86 69.823 267.46 70.523 C 266.76 71.623 265.86 71.823 264.66 71.223 C 263.96 70.923 263.36 70.623 262.56 70.423 C 257.96 69.323 253.36 68.323 248.76 67.223 C 248.16 67.123 247.56 66.823 247.06 66.523 C 246.26 66.123 245.86 65.423 245.86 64.523 C 245.96 63.623 246.46 62.923 247.36 62.723 C 248.16 62.523 249.16 62.423 249.96 62.523 C 252.96 62.923 256.06 63.523 259.06 64.023 C 259.56 64.123 260.06 64.123 260.86 64.223 C 260.26 63.323 259.96 62.723 259.56 62.123 C 248.96 46.323 235.16 34.123 218.26 25.323 C 204.46 17.823 189.76 12.823 174.46 9.923 C 160.76 7.323 146.96 5.723 132.96 5.923 C 112.86 6.123 93.06 8.723 73.86 14.823 C 55.56 20.623 38.96 29.423 24.46 42.023 C 16.26 49.123 9.46 57.223 4.06 66.523 C 3.76 67.123 3.36 67.723 2.86 68.223 C 1.86 69.223 0.26 68.723 0.06 67.323 C -0.04 66.523 -0.04 65.623 0.26 64.923 C 0.96 63.123 1.66 61.323 2.66 59.723 C 6.76 52.323 12.26 45.923 18.46 40.123 C 30.96 28.323 45.46 19.723 61.16 13.223 C 72.66 8.423 84.46 5.423 96.56 3.323 C 110.06 0.923 123.56 -0.177 137.26 0.023 C 146.96 0.123 156.56 1.123 166.16 2.523 C 178.06 4.323 189.66 7.023 201.06 11.123 C 214.76 16.123 227.76 22.623 239.36 31.623 C 248.86 39.023 257.06 47.723 263.96 57.723 C 264.26 58.123 264.66 58.623 265.26 59.523 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Blue
    "property1=blue": __body1,
    // figma: Property 1=Red
    "property1=red": __body2,
    // figma: Property 1=Green
    "property1=green": __body3
  };
  return (__impls[__vkey_Arrow(props)] ?? __body0)();
}

// figma node: 16:229 Arrow
function Arrow2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 240,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.87,
      top: 54.14,
      width: 213.965,
      height: 131.757,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 213.965,
    height: 131.757,
    viewBox: "0 0 213.965 131.757",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 213.965,
      height: 131.757
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200.505 12.527 C 183.047 22.694 165.589 32.819 148.214 43.152 C 147.005 43.861 146.172 46.027 146.047 47.569 C 143.297 84.361 125.089 111.152 92.755 128.194 C 87.38 131.027 81.047 132.194 74.005 131.611 C 64.714 130.861 58.839 123.486 59.797 114.194 C 60.63 106.069 64.714 99.486 69.547 93.277 C 80.297 79.569 93.839 68.819 107.714 58.569 C 116.505 52.069 125.672 46.111 134.922 39.694 C 132.63 35.194 127.047 31.986 122.214 32.402 C 113.047 33.152 108.672 35.236 101.755 37.986 C 80.047 46.611 61.297 60.111 44.672 76.236 C 32.297 88.236 20.797 101.111 8.922 113.611 C 7.88 114.694 6.922 115.902 5.88 116.861 C 4.255 118.361 2.63 118.944 1.089 117.902 C -0.578 117.152 0.047 114.444 0.505 113.027 C 1.255 110.694 2.505 108.444 4.005 106.527 C 27.38 76.069 54.297 49.569 89.214 32.444 C 96.88 28.694 105.214 26.069 113.505 23.986 C 125.422 21.027 135.964 23.486 143.047 34.944 C 160.005 25.861 176.714 16.902 193.714 7.777 C 187.464 7.777 181.547 7.777 175.589 7.777 C 174.589 7.777 173.589 7.902 172.589 7.819 C 169.88 7.611 166.297 8.152 166.047 4.236 C 165.797 0.402 169.422 0.361 171.797 0.319 C 183.839 0.027 195.922 -0.139 207.964 0.152 C 212.88 0.277 215.255 3.527 213.255 7.944 C 207.589 20.777 201.297 33.402 194.964 45.944 C 194.38 47.111 192.255 48.902 189.88 47.736 C 188.13 46.652 188.172 43.819 188.714 42.444 C 192.005 34.152 195.672 25.986 199.255 17.777 C 199.88 16.319 200.589 14.861 201.255 13.402 C 202.755 11.152 201.88 11.736 200.505 12.527 Z M 138.38 50.194 C 138.505 48.694 136.255 50.652 135.88 50.902 C 116.255 63.986 97.089 77.652 81.214 95.277 C 76.964 99.986 73.38 105.611 70.755 111.402 C 67.297 119.111 71.672 124.486 80.047 122.944 C 85.464 121.944 91.089 120.152 95.797 117.319 C 115.839 105.361 131.797 82.069 135.88 65.527 C 137.38 59.194 137.38 57.444 138.38 50.194 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
}

// figma node: 16:232 Arrow
function Arrow3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 240,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Arrow2, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 240,
      height: 240
    }
  }));
}

// figma node: 21:8712 Icon/Default/16/Tick
function IconDefault16Tick(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 10,
      height: 8.003,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 8.003,
    viewBox: "0 0 10 8.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 8.003
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 L 4 8.003 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 21:8716 _Assets/Check (10 variants)
const __venc_AssetsCheck = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AssetsCheck = p => "state=" + __venc_AssetsCheck(p.state) + '|' + "filled=" + __venc_AssetsCheck(p.filled);
function AssetsCheck(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "disabled",
    filled: _p.filled ?? "off"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(208,209,210)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(208,209,210)",
      boxShadow: "inset 0 0 0 1px rgb(208,209,210)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16Tick, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(15,118,222)",
      boxShadow: "inset 0 0 0 1px rgb(15,118,222)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16Tick, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(15,118,222)"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(249,155,66)"
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(249,155,66)",
      boxShadow: "inset 0 0 0 1px rgb(249,155,66)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16Tick, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(220,56,50)"
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(220,56,50)",
      boxShadow: "inset 0 0 0 1px rgb(220,56,50)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16Tick, null)));
  const __impls = {
    // figma: State=Disabled, Filled=Off
    "state=disabled|filled=off": __body0,
    // figma: State=Disabled, Filled=On
    "state=disabled|filled=on": __body1,
    // figma: State=Default, Filled=Off
    "state=default|filled=off": __body2,
    // figma: State=Default, Filled=On
    "state=default|filled=on": __body3,
    // figma: State=Hover/Focused, Filled=Off
    "state=hover/focused|filled=off": __body4,
    // figma: State=Hover/Focused, Filled=On
    "state=hover/focused|filled=on": __body3,
    // figma: State=Warning, Filled=Off
    "state=warning|filled=off": __body5,
    // figma: State=Warning, Filled=On
    "state=warning|filled=on": __body6,
    // figma: State=Error, Filled=Off
    "state=error|filled=off": __body7,
    // figma: State=Error, Filled=On
    "state=error|filled=on": __body8
  };
  return (__impls[__vkey_AssetsCheck(props)] ?? __body0)();
}

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

// figma node: 21:9022 Badge 🛑 (6 variants)
const __venc_Badge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Badge2 = p => "size=" + __venc_Badge2(p.size) + '|' + "kind=" + __venc_Badge2(p.kind) + '|' + "state=" + __venc_Badge2(p.state);
function Badge2(_p = {}) {
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
  return (__impls[__vkey_Badge2(props)] ?? __body5)();
}

// figma node: 21:8509 Icon/Default/24/Accounts
function IconDefault24Accounts(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.391,
      top: 6,
      width: 17.609,
      height: 12.913,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.609,
    height: 12.522,
    viewBox: "0 0 8.609 12.522",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.304,
      top: 0,
      width: 8.609,
      height: 12.522,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.13 0 L 8.609 0 L 5.478 3.128 L 5.478 12.522 L 0 12.522 L 0 3.13 L 3.13 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.696,
    height: 0.783,
    viewBox: "0 0 4.696 0.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 5.87,
      width: 4.696,
      height: 0.783
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.391 0.391 L 4.304 0.391 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.043,
    height: 2.348,
    viewBox: "0 0 7.043 2.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.565,
      top: 3.913,
      width: 7.043,
      height: 2.348
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.348 L 4.696 2.348 L 7.043 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.043,
    height: 2.348,
    viewBox: "0 0 7.043 2.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.565,
      top: 7.043,
      width: 7.043,
      height: 2.348
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.348 L 4.696 2.348 L 7.043 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.826,
    height: 2.348,
    viewBox: "0 0 7.826 2.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.783,
      top: 10.174,
      width: 7.826,
      height: 2.348
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.348 L 5.478 2.348 L 7.826 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.696,
    height: 0.783,
    viewBox: "0 0 4.696 0.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 9,
      width: 4.696,
      height: 0.783
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.391 0.391 L 4.304 0.391 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.696,
    height: 0.783,
    viewBox: "0 0 4.696 0.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12.13,
      width: 4.696,
      height: 0.783
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.391 0.391 L 4.304 0.391 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.826,
    height: 2.348,
    viewBox: "0 0 7.826 2.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.783,
      top: 0.783,
      width: 7.826,
      height: 2.348,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.348 0 L 7.826 0 L 5.478 2.346 L 0 2.348 L 2.348 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.261,
    height: 2.348,
    viewBox: "0 0 6.261 2.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.391,
      top: 0.783,
      width: 6.261,
      height: 2.348,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.348 0 L 6.261 0 L 3.913 2.346 L 0 2.348 L 2.348 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 21:8522 🟢 Button  - v1.1 (48 variants)
const __venc_ButtonV11 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ButtonV11 = p => "buttonType=" + __venc_ButtonV11(p.buttonType) + '|' + "state=" + __venc_ButtonV11(p.state) + '|' + "icon=" + __venc_ButtonV11(p.icon);
function ButtonV11(_p = {}) {
  const props = {
    ..._p,
    buttonType: _p.buttonType ?? "outline",
    state: _p.state ?? "enabled",
    icon: _p.icon ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(15,118,222)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(15,118,222)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(13,101,191)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(12,94,178)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(190,190,192)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(15,118,222)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(13,101,191)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(12,94,178)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(190,190,192)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(13,101,191)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(12,94,178)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(190,190,192)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(229,229,229)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(229,229,229)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(229,229,229)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(208,209,210)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(208,209,210)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(190,190,192)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(102,104,112)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button")));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(190,190,192)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "10.500px 16px 10.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(102,104,112)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault24Accounts, null))));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(208,209,210)",
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(15,118,222)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(190,190,192)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(102,104,112)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __impls = {
    // figma: Button type=Primary, State=Enabled, Icon=Default
    "buttonType=primary|state=enabled|icon=default": __body0,
    // figma: Button type=Primary, State=Enabled, Icon=Left
    "buttonType=primary|state=enabled|icon=left": __body1,
    // figma: Button type=Primary, State=Hover, Icon=Left
    "buttonType=primary|state=hover|icon=left": __body2,
    // figma: Button type=Primary, State=Pressed, Icon=Left
    "buttonType=primary|state=pressed|icon=left": __body3,
    // figma: Button type=Primary, State=Disabled, Icon=Left
    "buttonType=primary|state=disabled|icon=left": __body4,
    // figma: Button type=Primary, State=Enabled, Icon=Right
    "buttonType=primary|state=enabled|icon=right": __body5,
    // figma: Button type=Primary, State=Hover, Icon=Right
    "buttonType=primary|state=hover|icon=right": __body6,
    // figma: Button type=Primary, State=Pressed, Icon=Right
    "buttonType=primary|state=pressed|icon=right": __body7,
    // figma: Button type=Primary, State=Disabled, Icon=Right
    "buttonType=primary|state=disabled|icon=right": __body8,
    // figma: Button type=Primary, State=Hover, Icon=Default
    "buttonType=primary|state=hover|icon=default": __body9,
    // figma: Button type=Primary, State=Pressed, Icon=Default
    "buttonType=primary|state=pressed|icon=default": __body10,
    // figma: Button type=Primary, State=Disabled, Icon=Default
    "buttonType=primary|state=disabled|icon=default": __body11,
    // figma: Button type=Secondary, State=Enabled, Icon=Default
    "buttonType=secondary|state=enabled|icon=default": __body12,
    // figma: Button type=Secondary, State=Enabled, Icon=Left
    "buttonType=secondary|state=enabled|icon=left": __body13,
    // figma: Button type=Secondary, State=Enabled, Icon=Right
    "buttonType=secondary|state=enabled|icon=right": __body14,
    // figma: Button type=Secondary, State=Hover, Icon=Left
    "buttonType=secondary|state=hover|icon=left": __body15,
    // figma: Button type=Secondary, State=Hover, Icon=Right
    "buttonType=secondary|state=hover|icon=right": __body16,
    // figma: Button type=Secondary, State=Pressed, Icon=Left
    "buttonType=secondary|state=pressed|icon=left": __body17,
    // figma: Button type=Secondary, State=Pressed, Icon=Right
    "buttonType=secondary|state=pressed|icon=right": __body18,
    // figma: Button type=Secondary, State=Disabled, Icon=Left
    "buttonType=secondary|state=disabled|icon=left": __body4,
    // figma: Button type=Secondary, State=Disabled, Icon=Right
    "buttonType=secondary|state=disabled|icon=right": __body8,
    // figma: Button type=Secondary, State=Hover, Icon=Default
    "buttonType=secondary|state=hover|icon=default": __body19,
    // figma: Button type=Secondary, State=Pressed, Icon=Default
    "buttonType=secondary|state=pressed|icon=default": __body20,
    // figma: Button type=Secondary, State=Disabled, Icon=Default
    "buttonType=secondary|state=disabled|icon=default": __body11,
    // figma: Button type=Outline, State=Enabled, Icon=Default
    "buttonType=outline|state=enabled|icon=default": __body21,
    // figma: Button type=Tertiary, State=Enabled, Icon=Default
    "buttonType=tertiary|state=enabled|icon=default": __body22,
    // figma: Button type=Outline, State=Enabled, Icon=Left
    "buttonType=outline|state=enabled|icon=left": __body23,
    // figma: Button type=Tertiary, State=Enabled, Icon=Left
    "buttonType=tertiary|state=enabled|icon=left": __body24,
    // figma: Button type=Outline, State=Enabled, Icon=Right
    "buttonType=outline|state=enabled|icon=right": __body25,
    // figma: Button type=Tertiary, State=Enabled, Icon=Right
    "buttonType=tertiary|state=enabled|icon=right": __body26,
    // figma: Button type=Outline, State=Hover, Icon=Left
    "buttonType=outline|state=hover|icon=left": __body27,
    // figma: Button type=Tertiary, State=Hover, Icon=Left
    "buttonType=tertiary|state=hover|icon=left": __body28,
    // figma: Button type=Outline, State=Hover, Icon=Right
    "buttonType=outline|state=hover|icon=right": __body29,
    // figma: Button type=Tertiary, State=Hover, Icon=Right
    "buttonType=tertiary|state=hover|icon=right": __body30,
    // figma: Button type=Outline, State=Pressed, Icon=Left
    "buttonType=outline|state=pressed|icon=left": __body23,
    // figma: Button type=Tertiary, State=Pressed, Icon=Left
    "buttonType=tertiary|state=pressed|icon=left": __body31,
    // figma: Button type=Outline, State=Pressed, Icon=Right
    "buttonType=outline|state=pressed|icon=right": __body25,
    // figma: Button type=Tertiary, State=Pressed, Icon=Right
    "buttonType=tertiary|state=pressed|icon=right": __body32,
    // figma: Button type=Outline, State=Disabled, Icon=Left
    "buttonType=outline|state=disabled|icon=left": __body33,
    // figma: Button type=Tertiary, State=Disabled, Icon=Left
    "buttonType=tertiary|state=disabled|icon=left": __body34,
    // figma: Button type=Outline, State=Disabled, Icon=Right
    "buttonType=outline|state=disabled|icon=right": __body35,
    // figma: Button type=Tertiary, State=Disabled, Icon=Right
    "buttonType=tertiary|state=disabled|icon=right": __body36,
    // figma: Button type=Outline, State=Hover, Icon=Default
    "buttonType=outline|state=hover|icon=default": __body37,
    // figma: Button type=Tertiary, State=Hover, Icon=Default
    "buttonType=tertiary|state=hover|icon=default": __body38,
    // figma: Button type=Outline, State=Pressed, Icon=Default
    "buttonType=outline|state=pressed|icon=default": __body21,
    // figma: Button type=Tertiary, State=Pressed, Icon=Default
    "buttonType=tertiary|state=pressed|icon=default": __body39,
    // figma: Button type=Outline, State=Disabled, Icon=Default
    "buttonType=outline|state=disabled|icon=default": __body40,
    // figma: Button type=Tertiary, State=Disabled, Icon=Default
    "buttonType=tertiary|state=disabled|icon=default": __body41
  };
  return (__impls[__vkey_ButtonV11(props)] ?? __body21)();
}

// figma node: 21:8779 Icon/Status/16/Success
function IconStatus16Success2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "var(--mq-color-icon-positive)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 7.998,
      height: 6,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Color"));
}

// figma node: 21:8793 Spinner (20 variants)
const __venc_Spinner = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Spinner = p => "size=" + __venc_Spinner(p.size) + '|' + "state=" + __venc_Spinner(p.state);
function Spinner(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "l",
    state: _p.state ?? "brand"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-disabled)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 14.667,
    viewBox: "0 0 14.667 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.667,
      top: 0.667,
      width: 14.667,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.917 7.333 C 13.917 7.748 14.252 8.083 14.667 8.083 C 15.081 8.083 15.417 7.748 15.417 7.333 L 14.667 7.333 L 13.917 7.333 Z M 7.333 15.417 C 7.748 15.417 8.083 15.081 8.083 14.667 C 8.083 14.252 7.748 13.917 7.333 13.917 L 7.333 14.667 L 7.333 15.417 Z M 7.333 14.667 L 7.333 13.917 C 3.697 13.917 0.75 10.969 0.75 7.333 L 0 7.333 L -0.75 7.333 C -0.75 11.798 2.869 15.417 7.333 15.417 L 7.333 14.667 Z M 0 7.333 L 0.75 7.333 C 0.75 3.697 3.697 0.75 7.333 0.75 L 7.333 0 L 7.333 -0.75 C 2.869 -0.75 -0.75 2.869 -0.75 7.333 L 0 7.333 Z M 7.333 0 L 7.333 0.75 C 10.969 0.75 13.917 3.697 13.917 7.333 L 14.667 7.333 L 15.417 7.333 C 15.417 2.869 11.798 -0.75 7.333 -0.75 L 7.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-inverse-static)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 14.667,
    viewBox: "0 0 14.667 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.667,
      top: 0.667,
      width: 14.667,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.917 7.333 C 13.917 7.748 14.252 8.083 14.667 8.083 C 15.081 8.083 15.417 7.748 15.417 7.333 L 14.667 7.333 L 13.917 7.333 Z M 7.333 15.417 C 7.748 15.417 8.083 15.081 8.083 14.667 C 8.083 14.252 7.748 13.917 7.333 13.917 L 7.333 14.667 L 7.333 15.417 Z M 7.333 14.667 L 7.333 13.917 C 3.697 13.917 0.75 10.969 0.75 7.333 L 0 7.333 L -0.75 7.333 C -0.75 11.798 2.869 15.417 7.333 15.417 L 7.333 14.667 Z M 0 7.333 L 0.75 7.333 C 0.75 3.697 3.697 0.75 7.333 0.75 L 7.333 0 L 7.333 -0.75 C 2.869 -0.75 -0.75 2.869 -0.75 7.333 L 0 7.333 Z M 7.333 0 L 7.333 0.75 C 10.969 0.75 13.917 3.697 13.917 7.333 L 14.667 7.333 L 15.417 7.333 C 15.417 2.869 11.798 -0.75 7.333 -0.75 L 7.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 14.667,
    viewBox: "0 0 14.667 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.667,
      top: 0.667,
      width: 14.667,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.917 7.333 C 13.917 7.748 14.252 8.083 14.667 8.083 C 15.081 8.083 15.417 7.748 15.417 7.333 L 14.667 7.333 L 13.917 7.333 Z M 7.333 15.417 C 7.748 15.417 8.083 15.081 8.083 14.667 C 8.083 14.252 7.748 13.917 7.333 13.917 L 7.333 14.667 L 7.333 15.417 Z M 7.333 14.667 L 7.333 13.917 C 3.697 13.917 0.75 10.969 0.75 7.333 L 0 7.333 L -0.75 7.333 C -0.75 11.798 2.869 15.417 7.333 15.417 L 7.333 14.667 Z M 0 7.333 L 0.75 7.333 C 0.75 3.697 3.697 0.75 7.333 0.75 L 7.333 0 L 7.333 -0.75 C 2.869 -0.75 -0.75 2.869 -0.75 7.333 L 0 7.333 Z M 7.333 0 L 7.333 0.75 C 10.969 0.75 13.917 3.697 13.917 7.333 L 14.667 7.333 L 15.417 7.333 C 15.417 2.869 11.798 -0.75 7.333 -0.75 L 7.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 14.667,
    viewBox: "0 0 14.667 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.667,
      top: 0.667,
      width: 14.667,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.917 7.333 C 13.917 7.748 14.252 8.083 14.667 8.083 C 15.081 8.083 15.417 7.748 15.417 7.333 L 14.667 7.333 L 13.917 7.333 Z M 7.333 15.417 C 7.748 15.417 8.083 15.081 8.083 14.667 C 8.083 14.252 7.748 13.917 7.333 13.917 L 7.333 14.667 L 7.333 15.417 Z M 7.333 14.667 L 7.333 13.917 C 3.697 13.917 0.75 10.969 0.75 7.333 L 0 7.333 L -0.75 7.333 C -0.75 11.798 2.869 15.417 7.333 15.417 L 7.333 14.667 Z M 0 7.333 L 0.75 7.333 C 0.75 3.697 3.697 0.75 7.333 0.75 L 7.333 0 L 7.333 -0.75 C 2.869 -0.75 -0.75 2.869 -0.75 7.333 L 0 7.333 Z M 7.333 0 L 7.333 0.75 C 10.969 0.75 13.917 3.697 13.917 7.333 L 14.667 7.333 L 15.417 7.333 C 15.417 2.869 11.798 -0.75 7.333 -0.75 L 7.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-brand)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 14.667,
    viewBox: "0 0 14.667 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.667,
      top: 0.667,
      width: 14.667,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.917 7.333 C 13.917 7.748 14.252 8.083 14.667 8.083 C 15.081 8.083 15.417 7.748 15.417 7.333 L 14.667 7.333 L 13.917 7.333 Z M 7.333 15.417 C 7.748 15.417 8.083 15.081 8.083 14.667 C 8.083 14.252 7.748 13.917 7.333 13.917 L 7.333 14.667 L 7.333 15.417 Z M 7.333 14.667 L 7.333 13.917 C 3.697 13.917 0.75 10.969 0.75 7.333 L 0 7.333 L -0.75 7.333 C -0.75 11.798 2.869 15.417 7.333 15.417 L 7.333 14.667 Z M 0 7.333 L 0.75 7.333 C 0.75 3.697 3.697 0.75 7.333 0.75 L 7.333 0 L 7.333 -0.75 C 2.869 -0.75 -0.75 2.869 -0.75 7.333 L 0 7.333 Z M 7.333 0 L 7.333 0.75 C 10.969 0.75 13.917 3.697 13.917 7.333 L 14.667 7.333 L 15.417 7.333 C 15.417 2.869 11.798 -0.75 7.333 -0.75 L 7.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--mq-color-icon-disabled)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 11 C 21 11.552 21.448 12 22 12 C 22.552 12 23 11.552 23 11 L 22 11 L 21 11 Z M 11 23 C 11.552 23 12 22.552 12 22 C 12 21.448 11.552 21 11 21 L 11 22 L 11 23 Z M 11 22 L 11 21 C 5.477 21 1 16.523 1 11 L 0 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 22 Z M 0 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 0 L 11 -1 C 4.373 -1 -1 4.373 -1 11 L 0 11 Z M 11 0 L 11 1 C 16.523 1 21 5.477 21 11 L 22 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--mq-color-icon-inverse-static)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 11 C 21 11.552 21.448 12 22 12 C 22.552 12 23 11.552 23 11 L 22 11 L 21 11 Z M 11 23 C 11.552 23 12 22.552 12 22 C 12 21.448 11.552 21 11 21 L 11 22 L 11 23 Z M 11 22 L 11 21 C 5.477 21 1 16.523 1 11 L 0 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 22 Z M 0 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 0 L 11 -1 C 4.373 -1 -1 4.373 -1 11 L 0 11 Z M 11 0 L 11 1 C 16.523 1 21 5.477 21 11 L 22 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 11 C 21 11.552 21.448 12 22 12 C 22.552 12 23 11.552 23 11 L 22 11 L 21 11 Z M 11 23 C 11.552 23 12 22.552 12 22 C 12 21.448 11.552 21 11 21 L 11 22 L 11 23 Z M 11 22 L 11 21 C 5.477 21 1 16.523 1 11 L 0 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 22 Z M 0 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 0 L 11 -1 C 4.373 -1 -1 4.373 -1 11 L 0 11 Z M 11 0 L 11 1 C 16.523 1 21 5.477 21 11 L 22 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--mq-color-icon-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 11 C 21 11.552 21.448 12 22 12 C 22.552 12 23 11.552 23 11 L 22 11 L 21 11 Z M 11 23 C 11.552 23 12 22.552 12 22 C 12 21.448 11.552 21 11 21 L 11 22 L 11 23 Z M 11 22 L 11 21 C 5.477 21 1 16.523 1 11 L 0 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 22 Z M 0 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 0 L 11 -1 C 4.373 -1 -1 4.373 -1 11 L 0 11 Z M 11 0 L 11 1 C 16.523 1 21 5.477 21 11 L 22 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--mq-color-icon-brand)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 11 C 21 11.552 21.448 12 22 12 C 22.552 12 23 11.552 23 11 L 22 11 L 21 11 Z M 11 23 C 11.552 23 12 22.552 12 22 C 12 21.448 11.552 21 11 21 L 11 22 L 11 23 Z M 11 22 L 11 21 C 5.477 21 1 16.523 1 11 L 0 11 L -1 11 C -1 17.627 4.373 23 11 23 L 11 22 Z M 0 11 L 1 11 C 1 5.477 5.477 1 11 1 L 11 0 L 11 -1 C 4.373 -1 -1 4.373 -1 11 L 0 11 Z M 11 0 L 11 1 C 16.523 1 21 5.477 21 11 L 22 11 L 23 11 C 23 4.373 17.627 -1 11 -1 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      color: "var(--mq-color-icon-disabled)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 22 C 42 23.105 42.895 24 44 24 C 45.105 24 46 23.105 46 22 L 44 22 L 42 22 Z M 22 46 C 23.105 46 24 45.105 24 44 C 24 42.895 23.105 42 22 42 L 22 44 L 22 46 Z M 22 44 L 22 42 C 10.954 42 2 33.046 2 22 L 0 22 L -2 22 C -2 35.255 8.745 46 22 46 L 22 44 Z M 0 22 L 2 22 C 2 10.954 10.954 2 22 2 L 22 0 L 22 -2 C 8.745 -2 -2 8.745 -2 22 L 0 22 Z M 22 0 L 22 2 C 33.046 2 42 10.954 42 22 L 44 22 L 46 22 C 46 8.745 35.255 -2 22 -2 L 22 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      color: "var(--mq-color-icon-inverse-static)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 22 C 42 23.105 42.895 24 44 24 C 45.105 24 46 23.105 46 22 L 44 22 L 42 22 Z M 22 46 C 23.105 46 24 45.105 24 44 C 24 42.895 23.105 42 22 42 L 22 44 L 22 46 Z M 22 44 L 22 42 C 10.954 42 2 33.046 2 22 L 0 22 L -2 22 C -2 35.255 8.745 46 22 46 L 22 44 Z M 0 22 L 2 22 C 2 10.954 10.954 2 22 2 L 22 0 L 22 -2 C 8.745 -2 -2 8.745 -2 22 L 0 22 Z M 22 0 L 22 2 C 33.046 2 42 10.954 42 22 L 44 22 L 46 22 C 46 8.745 35.255 -2 22 -2 L 22 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 22 C 42 23.105 42.895 24 44 24 C 45.105 24 46 23.105 46 22 L 44 22 L 42 22 Z M 22 46 C 23.105 46 24 45.105 24 44 C 24 42.895 23.105 42 22 42 L 22 44 L 22 46 Z M 22 44 L 22 42 C 10.954 42 2 33.046 2 22 L 0 22 L -2 22 C -2 35.255 8.745 46 22 46 L 22 44 Z M 0 22 L 2 22 C 2 10.954 10.954 2 22 2 L 22 0 L 22 -2 C 8.745 -2 -2 8.745 -2 22 L 0 22 Z M 22 0 L 22 2 C 33.046 2 42 10.954 42 22 L 44 22 L 46 22 C 46 8.745 35.255 -2 22 -2 L 22 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      color: "var(--mq-color-icon-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 22 C 42 23.105 42.895 24 44 24 C 45.105 24 46 23.105 46 22 L 44 22 L 42 22 Z M 22 46 C 23.105 46 24 45.105 24 44 C 24 42.895 23.105 42 22 42 L 22 44 L 22 46 Z M 22 44 L 22 42 C 10.954 42 2 33.046 2 22 L 0 22 L -2 22 C -2 35.255 8.745 46 22 46 L 22 44 Z M 0 22 L 2 22 C 2 10.954 10.954 2 22 2 L 22 0 L 22 -2 C 8.745 -2 -2 8.745 -2 22 L 0 22 Z M 22 0 L 22 2 C 33.046 2 42 10.954 42 22 L 44 22 L 46 22 C 46 8.745 35.255 -2 22 -2 L 22 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      color: "var(--mq-color-icon-brand)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 44,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 22 C 42 23.105 42.895 24 44 24 C 45.105 24 46 23.105 46 22 L 44 22 L 42 22 Z M 22 46 C 23.105 46 24 45.105 24 44 C 24 42.895 23.105 42 22 42 L 22 44 L 22 46 Z M 22 44 L 22 42 C 10.954 42 2 33.046 2 22 L 0 22 L -2 22 C -2 35.255 8.745 46 22 46 L 22 44 Z M 0 22 L 2 22 C 2 10.954 10.954 2 22 2 L 22 0 L 22 -2 C 8.745 -2 -2 8.745 -2 22 L 0 22 Z M 22 0 L 22 2 C 33.046 2 42 10.954 42 22 L 44 22 L 46 22 C 46 8.745 35.255 -2 22 -2 L 22 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 96,
      height: 96,
      position: "relative",
      color: "var(--mq-color-icon-disabled)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84 44 C 84 46.209 85.791 48 88 48 C 90.209 48 92 46.209 92 44 L 88 44 L 84 44 Z M 44 92 C 46.209 92 48 90.209 48 88 C 48 85.791 46.209 84 44 84 L 44 88 L 44 92 Z M 44 88 L 44 84 C 21.909 84 4 66.091 4 44 L 0 44 L -4 44 C -4 70.51 17.49 92 44 92 L 44 88 Z M 0 44 L 4 44 C 4 21.909 21.909 4 44 4 L 44 0 L 44 -4 C 17.49 -4 -4 17.49 -4 44 L 0 44 Z M 44 0 L 44 4 C 66.091 4 84 21.909 84 44 L 88 44 L 92 44 C 92 17.49 70.51 -4 44 -4 L 44 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 96,
      height: 96,
      position: "relative",
      color: "var(--mq-color-icon-inverse-static)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84 44 C 84 46.209 85.791 48 88 48 C 90.209 48 92 46.209 92 44 L 88 44 L 84 44 Z M 44 92 C 46.209 92 48 90.209 48 88 C 48 85.791 46.209 84 44 84 L 44 88 L 44 92 Z M 44 88 L 44 84 C 21.909 84 4 66.091 4 44 L 0 44 L -4 44 C -4 70.51 17.49 92 44 92 L 44 88 Z M 0 44 L 4 44 C 4 21.909 21.909 4 44 4 L 44 0 L 44 -4 C 17.49 -4 -4 17.49 -4 44 L 0 44 Z M 44 0 L 44 4 C 66.091 4 84 21.909 84 44 L 88 44 L 92 44 C 92 17.49 70.51 -4 44 -4 L 44 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 96,
      height: 96,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84 44 C 84 46.209 85.791 48 88 48 C 90.209 48 92 46.209 92 44 L 88 44 L 84 44 Z M 44 92 C 46.209 92 48 90.209 48 88 C 48 85.791 46.209 84 44 84 L 44 88 L 44 92 Z M 44 88 L 44 84 C 21.909 84 4 66.091 4 44 L 0 44 L -4 44 C -4 70.51 17.49 92 44 92 L 44 88 Z M 0 44 L 4 44 C 4 21.909 21.909 4 44 4 L 44 0 L 44 -4 C 17.49 -4 -4 17.49 -4 44 L 0 44 Z M 44 0 L 44 4 C 66.091 4 84 21.909 84 44 L 88 44 L 92 44 C 92 17.49 70.51 -4 44 -4 L 44 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 96,
      height: 96,
      position: "relative",
      color: "var(--mq-color-icon-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84 44 C 84 46.209 85.791 48 88 48 C 90.209 48 92 46.209 92 44 L 88 44 L 84 44 Z M 44 92 C 46.209 92 48 90.209 48 88 C 48 85.791 46.209 84 44 84 L 44 88 L 44 92 Z M 44 88 L 44 84 C 21.909 84 4 66.091 4 44 L 0 44 L -4 44 C -4 70.51 17.49 92 44 92 L 44 88 Z M 0 44 L 4 44 C 4 21.909 21.909 4 44 4 L 44 0 L 44 -4 C 17.49 -4 -4 17.49 -4 44 L 0 44 Z M 44 0 L 44 4 C 66.091 4 84 21.909 84 44 L 88 44 L 92 44 C 92 17.49 70.51 -4 44 -4 L 44 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 96,
      height: 96,
      position: "relative",
      color: "var(--mq-color-icon-brand)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84 44 C 84 46.209 85.791 48 88 48 C 90.209 48 92 46.209 92 44 L 88 44 L 84 44 Z M 44 92 C 46.209 92 48 90.209 48 88 C 48 85.791 46.209 84 44 84 L 44 88 L 44 92 Z M 44 88 L 44 84 C 21.909 84 4 66.091 4 44 L 0 44 L -4 44 C -4 70.51 17.49 92 44 92 L 44 88 Z M 0 44 L 4 44 C 4 21.909 21.909 4 44 4 L 44 0 L 44 -4 C 17.49 -4 -4 17.49 -4 44 L 0 44 Z M 44 0 L 44 4 C 66.091 4 84 21.909 84 44 L 88 44 L 92 44 C 92 17.49 70.51 -4 44 -4 L 44 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Size=XS, State=Disabled
    "size=xs|state=disabled": __body0,
    // figma: Size=XS, State=Inverse Static
    "size=xs|state=inverse static": __body1,
    // figma: Size=XS, State=Inverse
    "size=xs|state=inverse": __body2,
    // figma: Size=XS, State=Mono
    "size=xs|state=mono": __body3,
    // figma: Size=XS, State=Brand
    "size=xs|state=brand": __body4,
    // figma: Size=S, State=Disabled
    "size=s|state=disabled": __body5,
    // figma: Size=S, State=Inverse Static
    "size=s|state=inverse static": __body6,
    // figma: Size=S, State=Inverse
    "size=s|state=inverse": __body7,
    // figma: Size=S, State=Mono
    "size=s|state=mono": __body8,
    // figma: Size=S, State=Brand
    "size=s|state=brand": __body9,
    // figma: Size=M, State=Disabled
    "size=m|state=disabled": __body10,
    // figma: Size=M, State=Inverse Static
    "size=m|state=inverse static": __body11,
    // figma: Size=M, State=Inverse
    "size=m|state=inverse": __body12,
    // figma: Size=M, State=Mono
    "size=m|state=mono": __body13,
    // figma: Size=M, State=Brand
    "size=m|state=brand": __body14,
    // figma: Size=L, State=Disabled
    "size=l|state=disabled": __body15,
    // figma: Size=L, State=Inverse Static
    "size=l|state=inverse static": __body16,
    // figma: Size=L, State=Inverse
    "size=l|state=inverse": __body17,
    // figma: Size=L, State=Mono
    "size=l|state=mono": __body18,
    // figma: Size=L, State=Brand
    "size=l|state=brand": __body19
  };
  return (__impls[__vkey_Spinner(props)] ?? __body19)();
}

// figma node: 21:8834 contextual-nav-item-inactive (8 variants)
const __venc_ContextualNavItemInactive = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ContextualNavItemInactive = p => "property1=" + __venc_ContextualNavItemInactive(p.property1);
function ContextualNavItemInactive(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "inactive"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 303,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mq-color-border-secondary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 255,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Item name")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 1,
    viewBox: "0 -0.500 52 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,303,0)",
      transformOrigin: "0 0",
      width: 52,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 52 0 L 52 -0.5 L 52 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      backgroundColor: "rgb(15,118,222)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Item name")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 303,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Item name")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconStatus16Success2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  }))))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 303,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Item name")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Spinner, {
    size: "xs",
    state: "brand"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  }))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 302,
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      backgroundColor: "rgb(15,118,222)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Item name")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconStatus16Success2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  }))))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 302,
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      backgroundColor: "rgb(15,118,222)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Item name")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Spinner, {
    size: "xs",
    state: "brand"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  }))))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 303,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mq-color-border-secondary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Section label")), /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 1,
    viewBox: "0 -0.500 52 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,303,0)",
      transformOrigin: "0 0",
      width: 52,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 52 0 L 52 -0.5 L 52 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 1,
    viewBox: "0 -0.500 52 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,303,0)",
      transformOrigin: "0 0",
      width: 52,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 52 0 L 52 -0.5 L 52 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=Inactive
    "property1=inactive": __body0,
    // figma: Property 1=Active
    "property1=active": __body1,
    // figma: Property 1=Variant6
    "property1=variant6": __body1,
    // figma: Property 1=Complete
    "property1=complete": __body2,
    // figma: Property 1=Inactive-load
    "property1=inactive-load": __body3,
    // figma: Property 1=active-complete
    "property1=active-complete": __body4,
    // figma: Property 1=Active-load
    "property1=active-load": __body5,
    // figma: Property 1=Section
    "property1=section": __body6
  };
  return (__impls[__vkey_ContextualNavItemInactive(props)] ?? __body0)();
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

// figma node: 19:6693 Icon/Default/24/External Link
function IconDefault24ExternalLink(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 15.001,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 14 12 C 14 13.105 13.105 14 12 14 L 2 14 C 0.895 14 0 13.105 0 12 L 0 2 C 0 0.895 0.895 0 2 0 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.001,
    height: 6,
    viewBox: "0 0 6.001 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 0,
      width: 6.001,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 6 0 L 6.001 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 0,
      width: 8,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 L 8 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 19:2239 Icon/Default/32/Account/Reports
function IconDefault32AccountReports(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.1,
      top: -0.824,
      width: 22.324,
      height: 29.088,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.324,
      height: 29.088,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.765,
    height: 18.039,
    viewBox: "0 0 6.765 18.039",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,15.559,18.039)",
      transformOrigin: "0 0",
      width: 6.765,
      height: 18.039
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.765 18.039 L 6.765 10.298 L 6.765 0 L 0 0 L 0 13.529 L 3.382 13.529 L 3.382 4.239 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.735,
      width: 18.106,
      height: 24.353,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.519,
    height: 6.708,
    viewBox: "0 0 8.519 6.708",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.059,
      top: 9.471,
      width: 8.519,
      height: 6.708
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.708 L 3.15 1.951 L 6.401 4.107 L 8.519 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.106,
    height: 24.353,
    viewBox: "0 0 18.106 24.353",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,18.106,0)",
      transformOrigin: "0 0",
      width: 18.106,
      height: 24.353,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.472 0 C 9.703 0 16.812 0 16.812 0 C 17.527 0 18.106 0.606 18.106 1.353 L 18.106 23 C 18.106 23.747 17.527 24.353 16.812 24.353 L 1.293 24.353 C 0.579 24.353 0 23.747 0 23 C 0 23 0 19.685 0 16.912 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
}

// figma node: 19:2259 Icon/Default/32/Accounts
function IconDefault32Accounts(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.5,
      top: 8,
      width: 22.5,
      height: 16.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 16,
    viewBox: "0 0 11 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 0,
      width: 11,
      height: 16,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 11 0 L 7 3.997 L 7 16 L 0 16 L 0 4 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7.5,
      width: 6,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0.5 L 5.5 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 3,
    viewBox: "0 0 9 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.5,
      top: 5,
      width: 9,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 L 6 3 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 3,
    viewBox: "0 0 9 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.5,
      top: 9,
      width: 9,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 L 6 3 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 3,
    viewBox: "0 0 10 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.5,
      top: 13,
      width: 10,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 L 7 3 L 10 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.5,
      width: 6,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0.5 L 5.5 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 15.5,
      width: 6,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0.5 L 5.5 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 3,
    viewBox: "0 0 10 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.5,
      top: 1,
      width: 10,
      height: 3,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 10 0 L 7 2.997 L 0 3 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 3,
    viewBox: "0 0 8 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 1,
      width: 8,
      height: 3,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 8 0 L 5 2.997 L 0 3 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 19:2210 Icon/Default/32/Dashboard
function IconDefault32Dashboard(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      width: 4,
      height: 4,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 2.500,
    viewBox: "0 0 2.500 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.5,
      top: 8,
      width: 2.5,
      height: 2.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.5 L 2.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.5,
      top: 2.999,
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,18.011,5.282)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,21.001,11.500)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.707,0.707,-0.707,-0.707,18.718,18.011)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,12.500,21.001)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.707,-0.707,0.707,-0.707,5.989,18.718)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,2.999,12.500)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1.001,
    viewBox: "0 0 1 1.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,5.282,5.989)",
      transformOrigin: "0 0",
      width: 1,
      height: 1.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 1.001 L 0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 21:9059 Icon/Default/32/Doc/PDF
function IconDefault32DocPDF(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "var(--mq-color-icon-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.373,
    height: 7.616,
    viewBox: "0 0 20.373 7.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 13.384,
      width: 20.373,
      height: 7.616
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.675 3.584 L 2.976 3.584 C 3.168 3.584 3.353 3.57 3.531 3.541 C 3.708 3.513 3.865 3.458 4 3.376 C 4.135 3.294 4.244 3.179 4.325 3.029 C 4.407 2.88 4.448 2.684 4.448 2.443 C 4.448 2.201 4.407 2.005 4.325 1.856 C 4.244 1.707 4.135 1.591 4 1.509 C 3.865 1.428 3.708 1.372 3.531 1.344 C 3.353 1.316 3.168 1.301 2.976 1.301 L 1.675 1.301 L 1.675 3.584 Z M 0 0 L 3.435 0 C 3.911 0 4.316 0.069 4.651 0.208 C 4.985 0.347 5.257 0.53 5.467 0.757 C 5.676 0.985 5.829 1.244 5.925 1.536 C 6.021 1.828 6.069 2.13 6.069 2.443 C 6.069 2.748 6.021 3.049 5.925 3.344 C 5.829 3.639 5.676 3.9 5.467 4.128 C 5.257 4.356 4.985 4.539 4.651 4.677 C 4.316 4.816 3.911 4.885 3.435 4.885 L 1.675 4.885 L 1.675 7.616 L 0 7.616 L 0 0 Z M 8.789 6.208 L 10.283 6.208 C 10.524 6.208 10.759 6.169 10.987 6.091 C 11.214 6.012 11.417 5.883 11.595 5.701 C 11.772 5.52 11.915 5.284 12.021 4.992 C 12.128 4.7 12.181 4.345 12.181 3.925 C 12.181 3.541 12.144 3.195 12.069 2.885 C 11.995 2.576 11.872 2.311 11.701 2.091 C 11.531 1.87 11.305 1.701 11.024 1.584 C 10.743 1.467 10.396 1.408 9.984 1.408 L 8.789 1.408 L 8.789 6.208 Z M 7.115 0 L 10.4 0 C 10.891 0 11.348 0.078 11.771 0.235 C 12.194 0.391 12.56 0.626 12.869 0.939 C 13.179 1.252 13.42 1.643 13.595 2.112 C 13.769 2.581 13.856 3.132 13.856 3.765 C 13.856 4.32 13.785 4.832 13.643 5.301 C 13.5 5.771 13.285 6.176 12.997 6.517 C 12.709 6.859 12.35 7.127 11.92 7.323 C 11.49 7.518 10.983 7.616 10.4 7.616 L 7.115 7.616 L 7.115 0 Z M 15.019 0 L 20.373 0 L 20.373 1.408 L 16.693 1.408 L 16.693 3.168 L 19.883 3.168 L 19.883 4.469 L 16.693 4.469 L 16.693 7.616 L 15.019 7.616 L 15.019 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 4,
      width: 17,
      height: 24,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Color"));
}

// figma node: 19:2283 Icon/Default/32/Manage People
function IconDefault32ManagePeople(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 0,
      width: 6,
      height: 6,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 4,
      height: 4,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 20,
      width: 4,
      height: 4,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 20,
      width: 4,
      height: 4,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 2,
    viewBox: "0 0 10 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 9,
      width: 10,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 2 1.55 0 5 0 C 8.45 0 10 2 10 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 6,
    viewBox: "0 0 1 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.5,
      top: 14,
      width: 1,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0 L 0.5 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 6,
    viewBox: "0 0 20 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 14,
      width: 20,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 L 0 1 C 0 0.448 0.448 0 1 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 21:9039 Icon/Default/32/Upload
function IconDefault32Upload(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 5,
      width: 28,
      height: 22.286,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 17,
    viewBox: "0 0 28 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.25 17 C 2.335 16.915 0 14.763 0 12.12 C 0 9.478 2.335 7.326 5.25 7.243 C 5.25 3.242 8.854 0 13.3 0 C 16.764 0 19.717 1.968 20.852 4.729 C 20.959 4.724 21.067 4.722 21.175 4.722 C 24.944 4.722 28 7.471 28 10.861 C 28 14.199 25.039 16.914 21.35 16.998 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.429,
    height: 5.714,
    viewBox: "0 0 11.429 5.714",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,19.429,13.714)",
      transformOrigin: "0 0",
      width: 11.429,
      height: 5.714
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.429 0 L 5.715 5.714 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.429,
    height: 14.286,
    viewBox: "0 0 1.429 14.286",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,14.429,22.286)",
      transformOrigin: "0 0",
      width: 1.429,
      height: 14.286
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.714 0 L 0.714 14.286 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 21:8705 Icon/Status/16/Success
function IconStatus16Success(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "var(--mq-color-icon-positive)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 7.998,
      height: 6,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Color"));
}

// figma node: 21:9063 Icon/Status/24/Success
function IconStatus24Success(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--mq-color-icon-inverse)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "var(--mq-color-icon-positive)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 8,
      width: 10,
      height: 8.003,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Color"));
}

// figma node: 19:2135 Logo (6 variants)
const __venc_Logo = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Logo = p => "mode=" + __venc_Logo(p.mode) + '|' + "variant=" + __venc_Logo(p.variant);
function Logo(_p = {}) {
  const props = {
    ..._p,
    mode: _p.mode ?? "black",
    variant: _p.variant ?? "mark"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 178.286,
      height: 32,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 178.286,
    height: 32,
    viewBox: "0 0 178.286 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 178.286,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 156.839 12.78 C 156.839 10.284 155.335 8.292 151.817 8.292 L 143.697 8.292 L 143.697 23.714 L 145.887 23.714 L 145.887 17.269 L 150.683 17.269 L 154.935 23.714 L 157.45 23.714 L 153.125 17.161 C 155.935 16.668 156.835 14.57 156.835 12.78 L 156.839 12.78 Z M 145.881 15.238 L 145.881 10.355 L 151.749 10.355 C 153.615 10.355 154.643 11.215 154.643 12.777 C 154.643 14.362 153.615 15.234 151.749 15.234 L 145.881 15.238 Z M 122.691 8.293 L 124.881 8.293 L 124.881 17.207 C 124.881 21.326 122.392 24.028 118.136 24.028 C 113.881 24.028 111.389 21.326 111.389 17.207 L 111.389 8.293 L 113.581 8.293 L 113.581 16.969 C 113.581 20.138 115.199 21.883 118.132 21.883 C 121.065 21.883 122.683 20.138 122.683 16.969 L 122.691 8.293 Z M 178.286 21.645 L 178.286 23.711 L 166.188 23.711 L 166.188 8.292 L 178.145 8.292 L 178.145 10.355 L 168.379 10.355 L 168.379 14.711 L 177.13 14.711 L 177.13 16.757 L 168.379 16.757 L 168.379 21.645 L 178.286 21.645 Z M 160.268 8.293 L 162.46 8.293 L 162.46 23.714 L 160.268 23.714 L 160.268 8.293 Z M 67.873 8.293 L 60.873 23.714 L 63.092 23.714 L 64.889 19.689 L 72.652 19.689 L 74.449 23.714 L 76.667 23.714 L 69.671 8.292 L 67.873 8.293 Z M 65.777 17.703 L 68.772 10.996 L 71.767 17.703 L 65.777 17.703 Z M 132.958 8.293 L 125.959 23.715 L 128.182 23.715 L 129.979 19.69 L 137.742 19.69 L 139.539 23.715 L 141.758 23.715 L 134.758 8.293 L 132.958 8.293 Z M 130.859 17.702 L 133.854 10.994 L 136.849 17.702 L 130.859 17.702 Z M 55.623 8.293 L 58.938 8.293 L 58.938 23.714 L 56.857 23.714 L 56.857 10.575 L 51.49 23.714 L 49.598 23.714 L 44.231 10.575 L 44.231 23.714 L 42.153 23.714 L 42.153 8.293 L 45.464 8.293 L 50.542 20.82 L 55.623 8.293 Z M 85.06 10.054 C 82.031 10.054 79.314 12.335 79.314 16.003 C 79.314 19.67 82.031 21.952 85.06 21.952 C 86.966 21.952 88.545 21.04 89.756 19.242 L 91.435 20.54 C 90.747 21.617 89.803 22.501 88.689 23.111 C 87.574 23.721 86.326 24.038 85.06 24.032 C 80.562 24.032 77.082 20.555 77.082 16.004 C 77.082 11.452 80.562 7.977 85.06 7.977 C 86.326 7.97 87.574 8.287 88.688 8.897 C 89.802 9.507 90.747 10.391 91.435 11.467 L 89.756 12.766 C 88.545 10.967 86.966 10.056 85.06 10.056 L 85.06 10.054 Z M 108.568 16.005 C 108.568 11.58 105.145 7.981 100.761 7.981 C 96.414 7.981 92.954 11.538 92.954 16.005 C 92.954 20.431 96.377 24.031 100.761 24.031 C 102.619 24.036 104.417 23.363 105.825 22.134 L 107.542 23.713 L 110.557 23.713 L 107.178 20.604 C 108.09 19.246 108.575 17.64 108.568 15.998 L 108.568 16.005 Z M 105.55 19.104 L 103.554 17.268 L 102.118 18.721 L 104.25 20.682 C 103.271 21.504 102.037 21.952 100.764 21.946 C 97.632 21.946 95.177 19.334 95.177 16 C 95.177 12.666 97.632 10.055 100.764 10.055 C 103.897 10.055 106.351 12.667 106.351 16 C 106.358 17.088 106.083 18.159 105.554 19.106 L 105.55 19.104 Z M 16.901 0 C 7.422 0 0 7.014 0 16 C 0 24.986 7.422 32 16.901 32 C 26.381 32 33.803 24.986 33.803 16 C 33.803 7.014 26.381 0 16.901 0 Z M 6.664 27.04 C 6.678 27.051 6.69 27.066 6.699 27.082 C 6.708 27.098 6.713 27.116 6.714 27.135 C 6.716 27.153 6.713 27.172 6.707 27.189 C 6.701 27.207 6.691 27.223 6.678 27.236 C 6.632 27.278 6.545 27.272 6.46 27.201 C 3.668 24.896 1.156 21.103 1.156 16 C 1.156 10.897 3.668 7.103 6.46 4.801 C 6.549 4.731 6.632 4.723 6.678 4.766 C 6.691 4.779 6.701 4.795 6.707 4.813 C 6.713 4.83 6.716 4.849 6.714 4.867 C 6.713 4.886 6.708 4.904 6.699 4.92 C 6.69 4.936 6.678 4.951 6.664 4.962 C 4.6 7.151 2.586 10.792 2.586 16.002 C 2.586 21.212 4.6 24.853 6.664 27.042 L 6.664 27.04 Z M 11.892 22.871 C 11.856 22.925 11.768 22.939 11.67 22.879 C 9.308 21.44 7.443 19.121 7.443 16.002 C 7.443 12.882 9.308 10.564 11.67 9.124 C 11.768 9.065 11.856 9.078 11.892 9.133 C 11.909 9.16 11.914 9.194 11.907 9.225 C 11.9 9.257 11.881 9.285 11.854 9.302 C 10.311 10.634 8.873 12.94 8.873 16.002 C 8.873 19.063 10.311 21.371 11.854 22.701 C 11.881 22.719 11.9 22.746 11.907 22.778 C 11.914 22.81 11.909 22.843 11.892 22.871 Z M 16.901 23.457 C 13.237 23.457 10.031 20.239 10.031 16.002 C 10.031 11.764 13.238 8.546 16.901 8.546 C 20.565 8.546 23.772 11.764 23.772 16.002 C 23.772 20.239 20.565 23.457 16.901 23.457 Z M 22.133 22.879 C 22.035 22.939 21.947 22.925 21.91 22.871 C 21.893 22.843 21.888 22.81 21.895 22.778 C 21.902 22.746 21.922 22.719 21.949 22.701 C 23.492 21.371 24.93 19.063 24.93 16.002 C 24.93 12.94 23.492 10.634 21.949 9.302 C 21.922 9.285 21.902 9.257 21.895 9.226 C 21.888 9.194 21.893 9.16 21.91 9.133 C 21.947 9.078 22.035 9.065 22.133 9.124 C 24.494 10.562 26.36 12.884 26.36 16 C 26.36 19.116 24.495 21.438 22.133 22.877 L 22.133 22.879 Z M 27.343 27.201 C 27.254 27.272 27.171 27.278 27.125 27.236 C 27.112 27.223 27.102 27.207 27.096 27.189 C 27.09 27.172 27.087 27.153 27.088 27.135 C 27.089 27.116 27.095 27.098 27.103 27.082 C 27.112 27.066 27.124 27.051 27.138 27.04 C 29.203 24.851 31.217 21.21 31.217 16 C 31.217 10.79 29.203 7.149 27.138 4.96 C 27.124 4.949 27.112 4.934 27.103 4.918 C 27.095 4.902 27.089 4.884 27.088 4.865 C 27.087 4.847 27.09 4.828 27.096 4.811 C 27.102 4.793 27.112 4.777 27.125 4.764 C 27.171 4.722 27.258 4.729 27.343 4.799 C 30.134 7.104 32.647 10.897 32.647 16 C 32.647 21.103 30.134 24.897 27.343 27.199",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 178.286,
      height: 32,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 178,
    height: 32,
    viewBox: "0 0 178 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 178,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 156.587 12.78 C 156.587 10.284 155.086 8.292 151.574 8.292 L 143.466 8.292 L 143.466 23.714 L 145.654 23.714 L 145.654 17.269 L 150.441 17.269 L 154.687 23.714 L 157.198 23.714 L 152.88 17.161 C 155.685 16.668 156.584 14.57 156.584 12.78 L 156.587 12.78 Z M 145.647 15.238 L 145.647 10.355 L 151.506 10.355 C 153.369 10.355 154.395 11.215 154.395 12.777 C 154.395 14.362 153.369 15.234 151.506 15.234 L 145.647 15.238 Z M 122.494 8.293 L 124.681 8.293 L 124.681 17.207 C 124.681 21.326 122.195 24.028 117.947 24.028 C 113.698 24.028 111.211 21.326 111.211 17.207 L 111.211 8.293 L 113.399 8.293 L 113.399 16.969 C 113.399 20.138 115.014 21.883 117.942 21.883 C 120.871 21.883 122.486 20.138 122.486 16.969 L 122.494 8.293 Z M 178 21.645 L 178 23.711 L 165.921 23.711 L 165.921 8.292 L 177.859 8.292 L 177.859 10.355 L 168.109 10.355 L 168.109 14.711 L 176.846 14.711 L 176.846 16.757 L 168.109 16.757 L 168.109 21.645 L 178 21.645 Z M 160.011 8.293 L 162.199 8.293 L 162.199 23.714 L 160.011 23.714 L 160.011 8.293 Z M 67.764 8.293 L 60.776 23.714 L 62.99 23.714 L 64.785 19.689 L 72.535 19.689 L 74.33 23.714 L 76.544 23.714 L 69.559 8.292 L 67.764 8.293 Z M 65.671 17.703 L 68.662 10.996 L 71.652 17.703 L 65.671 17.703 Z M 132.745 8.293 L 125.757 23.715 L 127.976 23.715 L 129.771 19.69 L 137.521 19.69 L 139.316 23.715 L 141.53 23.715 L 134.542 8.293 L 132.745 8.293 Z M 130.649 17.702 L 133.64 10.994 L 136.63 17.702 L 130.649 17.702 Z M 55.534 8.293 L 58.843 8.293 L 58.843 23.714 L 56.766 23.714 L 56.766 10.575 L 51.408 23.714 L 49.518 23.714 L 44.16 10.575 L 44.16 23.714 L 42.086 23.714 L 42.086 8.293 L 45.391 8.293 L 50.461 20.82 L 55.534 8.293 Z M 84.923 10.054 C 81.9 10.054 79.187 12.335 79.187 16.003 C 79.187 19.67 81.9 21.952 84.923 21.952 C 86.826 21.952 88.403 21.04 89.612 19.242 L 91.289 20.54 C 90.602 21.617 89.659 22.501 88.546 23.111 C 87.434 23.721 86.188 24.038 84.923 24.032 C 80.433 24.032 76.959 20.555 76.959 16.004 C 76.959 11.452 80.433 7.977 84.923 7.977 C 86.188 7.97 87.434 8.287 88.546 8.897 C 89.659 9.507 90.602 10.391 91.289 11.467 L 89.612 12.766 C 88.403 10.967 86.826 10.056 84.923 10.056 L 84.923 10.054 Z M 108.394 16.005 C 108.394 11.58 104.976 7.981 100.599 7.981 C 96.26 7.981 92.805 11.538 92.805 16.005 C 92.805 20.431 96.222 24.031 100.599 24.031 C 102.455 24.036 104.25 23.363 105.655 22.134 L 107.369 23.713 L 110.38 23.713 L 107.006 20.604 C 107.917 19.246 108.401 17.64 108.394 15.998 L 108.394 16.005 Z M 105.381 19.104 L 103.388 17.268 L 101.954 18.721 L 104.083 20.682 C 103.105 21.504 101.873 21.952 100.603 21.946 C 97.475 21.946 95.024 19.334 95.024 16 C 95.024 12.666 97.475 10.055 100.603 10.055 C 103.731 10.055 106.181 12.667 106.181 16 C 106.187 17.088 105.913 18.159 105.384 19.106 L 105.381 19.104 Z M 16.874 0 C 7.41 0 0 7.014 0 16 C 0 24.986 7.41 32 16.874 32 C 26.338 32 33.749 24.986 33.749 16 C 33.749 7.014 26.338 0 16.874 0 Z M 6.653 27.04 C 6.668 27.051 6.68 27.066 6.688 27.082 C 6.697 27.098 6.702 27.116 6.704 27.135 C 6.705 27.153 6.702 27.172 6.696 27.189 C 6.69 27.207 6.68 27.223 6.667 27.236 C 6.621 27.278 6.535 27.272 6.449 27.201 C 3.662 24.896 1.154 21.103 1.154 16 C 1.154 10.897 3.662 7.103 6.449 4.801 C 6.538 4.731 6.621 4.723 6.667 4.766 C 6.68 4.779 6.69 4.795 6.696 4.813 C 6.702 4.83 6.705 4.849 6.704 4.867 C 6.702 4.886 6.697 4.904 6.688 4.92 C 6.68 4.936 6.668 4.951 6.653 4.962 C 4.593 7.151 2.582 10.792 2.582 16.002 C 2.582 21.212 4.593 24.853 6.653 27.042 L 6.653 27.04 Z M 11.873 22.871 C 11.837 22.925 11.749 22.939 11.651 22.879 C 9.293 21.44 7.431 19.121 7.431 16.002 C 7.431 12.882 9.293 10.564 11.651 9.124 C 11.749 9.065 11.837 9.078 11.873 9.133 C 11.89 9.16 11.895 9.194 11.888 9.225 C 11.881 9.257 11.862 9.285 11.835 9.302 C 10.294 10.634 8.859 12.94 8.859 16.002 C 8.859 19.063 10.294 21.371 11.835 22.701 C 11.862 22.719 11.881 22.746 11.888 22.778 C 11.895 22.81 11.89 22.843 11.873 22.871 Z M 16.874 23.457 C 13.215 23.457 10.015 20.239 10.015 16.002 C 10.015 11.764 13.216 8.546 16.874 8.546 C 20.532 8.546 23.734 11.764 23.734 16.002 C 23.734 20.239 20.532 23.457 16.874 23.457 Z M 22.098 22.879 C 22 22.939 21.911 22.925 21.875 22.871 C 21.858 22.843 21.853 22.81 21.86 22.778 C 21.867 22.746 21.887 22.719 21.914 22.701 C 23.454 21.371 24.89 19.063 24.89 16.002 C 24.89 12.94 23.454 10.634 21.914 9.302 C 21.887 9.285 21.867 9.257 21.86 9.226 C 21.853 9.194 21.858 9.16 21.875 9.133 C 21.911 9.078 22 9.065 22.098 9.124 C 24.455 10.562 26.318 12.884 26.318 16 C 26.318 19.116 24.456 21.438 22.098 22.877 L 22.098 22.879 Z M 27.3 27.201 C 27.21 27.272 27.128 27.278 27.081 27.236 C 27.069 27.223 27.059 27.207 27.052 27.189 C 27.046 27.172 27.044 27.153 27.045 27.135 C 27.046 27.116 27.051 27.098 27.06 27.082 C 27.068 27.066 27.08 27.051 27.095 27.04 C 29.156 24.851 31.167 21.21 31.167 16 C 31.167 10.79 29.156 7.149 27.095 4.96 C 27.08 4.949 27.068 4.934 27.06 4.918 C 27.051 4.902 27.046 4.884 27.045 4.865 C 27.044 4.847 27.046 4.828 27.052 4.811 C 27.059 4.793 27.069 4.777 27.081 4.764 C 27.128 4.722 27.214 4.729 27.3 4.799 C 30.085 7.104 32.595 10.897 32.595 16 C 32.595 21.103 30.085 24.897 27.3 27.199",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 35,
      height: 32,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35,
    height: 32,
    viewBox: "0 0 35 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.5 0 C 7.686 0 0 7.011 0 16 C 0 24.989 7.686 32 17.5 32 C 27.314 32 35 24.989 35 16 C 35 7.011 27.314 0 17.5 0 Z M 6.899 27.04 C 6.975 27.118 6.958 27.196 6.913 27.236 C 6.868 27.276 6.776 27.272 6.687 27.201 C 3.798 24.897 1.195 21.103 1.195 16 C 1.195 10.897 3.799 7.103 6.688 4.799 C 6.777 4.728 6.867 4.721 6.915 4.764 C 6.962 4.807 6.976 4.882 6.9 4.96 C 4.763 7.148 2.678 10.79 2.678 16 C 2.678 21.211 4.763 24.851 6.899 27.04 Z M 12.313 22.869 C 12.276 22.923 12.184 22.937 12.083 22.877 C 9.638 21.438 7.708 19.12 7.708 16 C 7.708 12.881 9.639 10.562 12.084 9.122 C 12.186 9.063 12.278 9.076 12.315 9.131 C 12.352 9.186 12.339 9.247 12.274 9.301 C 10.677 10.631 9.189 12.938 9.189 16 C 9.189 19.062 10.677 21.369 12.274 22.699 C 12.339 22.753 12.351 22.817 12.315 22.869 L 12.313 22.869 Z M 17.501 23.456 C 13.706 23.456 10.386 20.237 10.386 16 C 10.386 11.763 13.706 8.544 17.501 8.544 C 21.297 8.544 24.616 11.763 24.616 16 C 24.616 20.238 21.295 23.456 17.5 23.456 L 17.501 23.456 Z M 22.917 22.878 C 22.816 22.937 22.724 22.924 22.687 22.869 C 22.649 22.814 22.663 22.753 22.727 22.699 C 24.324 21.369 25.812 19.062 25.812 16 C 25.812 12.939 24.324 10.631 22.727 9.301 C 22.663 9.247 22.651 9.183 22.687 9.131 C 22.722 9.078 22.816 9.063 22.917 9.122 C 25.362 10.562 27.293 12.88 27.293 16 C 27.293 19.12 25.362 21.438 22.917 22.878 Z M 28.312 27.201 C 28.223 27.272 28.134 27.279 28.085 27.236 C 28.037 27.194 28.024 27.118 28.1 27.04 C 30.237 24.853 32.322 21.211 32.322 16 C 32.322 10.79 30.237 7.149 28.1 4.96 C 28.024 4.882 28.041 4.804 28.085 4.764 C 28.13 4.725 28.223 4.728 28.312 4.799 C 31.201 7.103 33.803 10.897 33.803 16 C 33.803 21.104 31.201 24.897 28.312 27.201 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 35,
      height: 32,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35,
    height: 32,
    viewBox: "0 0 35 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.5 0 C 7.686 0 0 7.011 0 16 C 0 24.989 7.686 32 17.5 32 C 27.314 32 35 24.989 35 16 C 35 7.011 27.314 0 17.5 0 Z M 6.899 27.04 C 6.975 27.118 6.958 27.196 6.913 27.236 C 6.868 27.276 6.776 27.272 6.687 27.201 C 3.798 24.897 1.195 21.103 1.195 16 C 1.195 10.897 3.799 7.103 6.688 4.799 C 6.777 4.728 6.867 4.721 6.915 4.764 C 6.962 4.807 6.976 4.882 6.9 4.96 C 4.763 7.148 2.678 10.79 2.678 16 C 2.678 21.211 4.763 24.851 6.899 27.04 Z M 12.313 22.869 C 12.276 22.923 12.184 22.937 12.083 22.877 C 9.638 21.438 7.708 19.12 7.708 16 C 7.708 12.881 9.639 10.562 12.084 9.122 C 12.186 9.063 12.278 9.076 12.315 9.131 C 12.352 9.186 12.339 9.247 12.274 9.301 C 10.677 10.631 9.189 12.938 9.189 16 C 9.189 19.062 10.677 21.369 12.274 22.699 C 12.339 22.753 12.351 22.817 12.315 22.869 L 12.313 22.869 Z M 17.501 23.456 C 13.706 23.456 10.386 20.237 10.386 16 C 10.386 11.763 13.706 8.544 17.501 8.544 C 21.297 8.544 24.616 11.763 24.616 16 C 24.616 20.238 21.295 23.456 17.5 23.456 L 17.501 23.456 Z M 22.917 22.878 C 22.816 22.937 22.724 22.924 22.687 22.869 C 22.649 22.814 22.663 22.753 22.727 22.699 C 24.324 21.369 25.812 19.062 25.812 16 C 25.812 12.939 24.324 10.631 22.727 9.301 C 22.663 9.247 22.651 9.183 22.687 9.131 C 22.722 9.078 22.816 9.063 22.917 9.122 C 25.362 10.562 27.293 12.88 27.293 16 C 27.293 19.12 25.362 21.438 22.917 22.878 Z M 28.312 27.201 C 28.223 27.272 28.134 27.279 28.085 27.236 C 28.037 27.194 28.024 27.118 28.1 27.04 C 30.237 24.853 32.322 21.211 32.322 16 C 32.322 10.79 30.237 7.149 28.1 4.96 C 28.024 4.882 28.041 4.804 28.085 4.764 C 28.13 4.725 28.223 4.728 28.312 4.799 C 31.201 7.103 33.803 10.897 33.803 16 C 33.803 21.104 31.201 24.897 28.312 27.201 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 94,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 120,
    height: 94,
    viewBox: "0 0 120 94",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 120,
      height: 94
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 101.09 84.45 C 101.09 82.331 99.765 80.641 96.663 80.641 L 89.504 80.641 L 89.504 93.729 L 91.435 93.729 L 91.435 88.259 L 95.662 88.259 L 99.41 93.729 L 101.629 93.729 L 97.82 88.171 C 100.297 87.752 101.09 85.972 101.09 84.453 L 101.09 84.45 Z M 91.435 86.539 L 91.435 82.398 L 96.607 82.398 C 98.252 82.398 99.158 83.128 99.158 84.453 C 99.158 85.798 98.251 86.539 96.607 86.539 L 91.435 86.539 Z M 70.994 80.643 L 72.925 80.643 L 72.925 88.209 C 72.925 91.705 70.729 93.998 66.975 93.998 C 63.221 93.998 61.026 91.705 61.026 88.209 L 61.026 80.643 L 62.957 80.643 L 62.957 88.007 C 62.957 90.695 64.383 92.176 66.972 92.176 C 69.562 92.176 70.988 90.695 70.988 88.007 L 70.994 80.643 Z M 120 91.977 L 120 93.731 L 109.332 93.731 L 109.332 80.641 L 119.873 80.641 L 119.873 82.395 L 111.263 82.395 L 111.263 86.092 L 118.977 86.092 L 118.977 87.828 L 111.263 87.828 L 111.263 91.975 L 120 91.977 Z M 104.118 80.643 L 106.049 80.643 L 106.049 93.731 L 104.113 93.731 L 104.118 80.643 Z M 22.676 80.643 L 16.506 93.731 L 18.453 93.731 L 20.037 90.315 L 26.883 90.315 L 28.467 93.731 L 30.422 93.731 L 24.252 80.643 L 22.676 80.643 Z M 20.828 88.629 L 23.468 82.936 L 26.108 88.629 L 20.828 88.629 Z M 80.046 80.643 L 73.877 93.731 L 75.829 93.731 L 77.413 90.315 L 84.258 90.315 L 85.842 93.731 L 87.798 93.731 L 81.628 80.643 L 80.046 80.643 Z M 78.198 88.629 L 80.838 82.936 L 83.478 88.629 L 78.198 88.629 Z M 11.877 80.643 L 14.802 80.643 L 14.802 93.731 L 12.961 93.731 L 12.961 82.578 L 8.23 93.729 L 6.562 93.729 L 1.831 82.578 L 1.831 93.729 L 0 93.729 L 0 80.641 L 2.924 80.641 L 7.4 91.273 L 11.877 80.643 Z M 37.826 82.138 C 35.157 82.138 32.761 84.073 32.761 87.186 C 32.761 90.299 35.157 92.235 37.826 92.235 C 39.506 92.235 40.898 91.462 41.96 89.935 L 43.44 91.037 C 42.834 91.951 42.001 92.701 41.019 93.219 C 40.037 93.736 38.937 94.005 37.821 94 C 33.856 94 30.788 91.052 30.788 87.186 C 30.788 83.321 33.856 80.374 37.821 80.374 C 38.937 80.369 40.037 80.637 41.019 81.155 C 42.001 81.673 42.834 82.423 43.44 83.336 L 41.96 84.437 C 40.893 82.911 39.501 82.137 37.826 82.137 L 37.826 82.138 Z M 58.541 87.188 C 58.541 83.431 55.524 80.379 51.66 80.379 C 47.829 80.379 44.778 83.396 44.778 87.188 C 44.778 90.946 47.795 93.999 51.66 93.999 C 53.298 94.004 54.883 93.434 56.124 92.392 L 57.637 93.733 L 60.3 93.733 L 57.321 91.094 C 58.124 89.942 58.549 88.581 58.541 87.188 L 58.541 87.188 Z M 55.881 89.824 L 54.119 88.262 L 52.853 89.496 L 54.733 91.16 C 53.87 91.858 52.782 92.238 51.66 92.234 C 48.898 92.234 46.736 90.018 46.736 87.188 C 46.736 84.358 48.898 82.143 51.66 82.143 C 54.422 82.143 56.585 84.359 56.585 87.188 C 56.59 88.112 56.347 89.02 55.879 89.824 L 55.881 89.824 Z M 59.96 0 C 39.177 0 22.902 14.8 22.902 33.777 C 22.902 52.753 39.177 67.553 59.96 67.553 C 80.743 67.553 97.018 52.753 97.018 33.777 C 97.018 14.8 80.743 0 59.96 0 Z M 37.511 57.083 C 37.671 57.246 37.636 57.412 37.541 57.496 C 37.446 57.581 37.251 57.571 37.062 57.422 C 30.944 52.559 25.433 44.549 25.433 33.777 C 25.433 23.004 30.947 14.995 37.065 10.131 C 37.254 9.982 37.443 9.967 37.544 10.057 C 37.645 10.148 37.674 10.307 37.514 10.471 C 32.988 15.089 28.572 22.777 28.572 33.777 C 28.572 44.776 32.988 52.461 37.511 57.083 Z M 48.977 48.276 C 48.898 48.391 48.704 48.42 48.489 48.294 C 43.311 45.257 39.225 40.362 39.225 33.777 C 39.225 27.191 43.314 22.297 48.492 19.257 C 48.707 19.133 48.901 19.159 48.98 19.275 C 49.059 19.391 49.031 19.521 48.894 19.634 C 45.512 22.443 42.361 27.313 42.361 33.777 C 42.361 40.24 45.512 45.11 48.894 47.919 C 49.031 48.033 49.056 48.167 48.98 48.277 L 48.977 48.276 Z M 59.963 49.515 C 51.927 49.515 44.895 42.722 44.895 33.777 C 44.895 24.832 51.927 18.037 59.963 18.037 C 68 18.037 75.028 24.831 75.028 33.777 C 75.028 42.723 67.997 49.515 59.96 49.515 L 59.963 49.515 Z M 71.431 48.295 C 71.217 48.421 71.022 48.393 70.943 48.277 C 70.865 48.161 70.893 48.033 71.029 47.919 C 74.411 45.11 77.562 40.239 77.562 33.777 C 77.562 27.314 74.411 22.443 71.029 19.634 C 70.893 19.521 70.868 19.386 70.943 19.275 C 71.019 19.164 71.217 19.133 71.431 19.257 C 76.609 22.297 80.698 27.19 80.698 33.777 C 80.698 40.363 76.609 45.257 71.431 48.295 Z M 82.855 57.422 C 82.666 57.571 82.478 57.586 82.376 57.496 C 82.274 57.407 82.246 57.246 82.406 57.083 C 86.933 52.464 91.348 44.776 91.348 33.777 C 91.348 22.777 86.933 15.092 82.406 10.471 C 82.246 10.307 82.282 10.141 82.376 10.057 C 82.47 9.974 82.666 9.982 82.855 10.131 C 88.974 14.995 94.484 23.003 94.484 33.777 C 94.484 44.55 88.974 52.559 82.855 57.422",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 94,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 120,
    height: 94,
    viewBox: "0 0 120 94",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 120,
      height: 94
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 101.09 84.45 C 101.09 82.331 99.765 80.641 96.663 80.641 L 89.504 80.641 L 89.504 93.729 L 91.435 93.729 L 91.435 88.259 L 95.662 88.259 L 99.41 93.729 L 101.629 93.729 L 97.82 88.171 C 100.297 87.752 101.09 85.972 101.09 84.453 L 101.09 84.45 Z M 91.435 86.539 L 91.435 82.398 L 96.607 82.398 C 98.252 82.398 99.158 83.128 99.158 84.453 C 99.158 85.798 98.251 86.539 96.607 86.539 L 91.435 86.539 Z M 70.994 80.643 L 72.925 80.643 L 72.925 88.209 C 72.925 91.705 70.729 93.998 66.975 93.998 C 63.221 93.998 61.026 91.705 61.026 88.209 L 61.026 80.643 L 62.957 80.643 L 62.957 88.007 C 62.957 90.695 64.383 92.176 66.972 92.176 C 69.562 92.176 70.988 90.695 70.988 88.007 L 70.994 80.643 Z M 120 91.977 L 120 93.731 L 109.332 93.731 L 109.332 80.641 L 119.873 80.641 L 119.873 82.395 L 111.263 82.395 L 111.263 86.092 L 118.977 86.092 L 118.977 87.828 L 111.263 87.828 L 111.263 91.975 L 120 91.977 Z M 104.118 80.643 L 106.049 80.643 L 106.049 93.731 L 104.113 93.731 L 104.118 80.643 Z M 22.676 80.643 L 16.506 93.731 L 18.453 93.731 L 20.037 90.315 L 26.883 90.315 L 28.467 93.731 L 30.422 93.731 L 24.252 80.643 L 22.676 80.643 Z M 20.828 88.629 L 23.468 82.936 L 26.108 88.629 L 20.828 88.629 Z M 80.046 80.643 L 73.877 93.731 L 75.829 93.731 L 77.413 90.315 L 84.258 90.315 L 85.842 93.731 L 87.798 93.731 L 81.628 80.643 L 80.046 80.643 Z M 78.198 88.629 L 80.838 82.936 L 83.478 88.629 L 78.198 88.629 Z M 11.877 80.643 L 14.802 80.643 L 14.802 93.731 L 12.961 93.731 L 12.961 82.578 L 8.23 93.729 L 6.562 93.729 L 1.831 82.578 L 1.831 93.729 L 0 93.729 L 0 80.641 L 2.924 80.641 L 7.4 91.273 L 11.877 80.643 Z M 37.826 82.138 C 35.157 82.138 32.761 84.073 32.761 87.186 C 32.761 90.299 35.157 92.235 37.826 92.235 C 39.506 92.235 40.898 91.462 41.96 89.935 L 43.44 91.037 C 42.834 91.951 42.001 92.701 41.019 93.219 C 40.037 93.736 38.937 94.005 37.821 94 C 33.856 94 30.788 91.052 30.788 87.186 C 30.788 83.321 33.856 80.374 37.821 80.374 C 38.937 80.369 40.037 80.637 41.019 81.155 C 42.001 81.673 42.834 82.423 43.44 83.336 L 41.96 84.437 C 40.893 82.911 39.501 82.137 37.826 82.137 L 37.826 82.138 Z M 58.541 87.188 C 58.541 83.431 55.524 80.379 51.66 80.379 C 47.829 80.379 44.778 83.396 44.778 87.188 C 44.778 90.946 47.795 93.999 51.66 93.999 C 53.298 94.004 54.883 93.434 56.124 92.392 L 57.637 93.733 L 60.3 93.733 L 57.321 91.094 C 58.124 89.942 58.549 88.581 58.541 87.188 L 58.541 87.188 Z M 55.881 89.824 L 54.119 88.262 L 52.853 89.496 L 54.733 91.16 C 53.87 91.858 52.782 92.238 51.66 92.234 C 48.898 92.234 46.736 90.018 46.736 87.188 C 46.736 84.358 48.898 82.143 51.66 82.143 C 54.422 82.143 56.585 84.359 56.585 87.188 C 56.59 88.112 56.347 89.02 55.879 89.824 L 55.881 89.824 Z M 59.96 0 C 39.177 0 22.902 14.8 22.902 33.777 C 22.902 52.753 39.177 67.553 59.96 67.553 C 80.743 67.553 97.018 52.753 97.018 33.777 C 97.018 14.8 80.743 0 59.96 0 Z M 37.511 57.083 C 37.671 57.246 37.636 57.412 37.541 57.496 C 37.446 57.581 37.251 57.571 37.062 57.422 C 30.944 52.559 25.433 44.549 25.433 33.777 C 25.433 23.004 30.947 14.995 37.065 10.131 C 37.254 9.982 37.443 9.967 37.544 10.057 C 37.645 10.148 37.674 10.307 37.514 10.471 C 32.988 15.089 28.572 22.777 28.572 33.777 C 28.572 44.776 32.988 52.461 37.511 57.083 Z M 48.977 48.276 C 48.898 48.391 48.704 48.42 48.489 48.294 C 43.311 45.257 39.225 40.362 39.225 33.777 C 39.225 27.191 43.314 22.297 48.492 19.257 C 48.707 19.133 48.901 19.159 48.98 19.275 C 49.059 19.391 49.031 19.521 48.894 19.634 C 45.512 22.443 42.361 27.313 42.361 33.777 C 42.361 40.24 45.512 45.11 48.894 47.919 C 49.031 48.033 49.056 48.167 48.98 48.277 L 48.977 48.276 Z M 59.963 49.515 C 51.927 49.515 44.895 42.722 44.895 33.777 C 44.895 24.832 51.927 18.037 59.963 18.037 C 68 18.037 75.028 24.831 75.028 33.777 C 75.028 42.723 67.997 49.515 59.96 49.515 L 59.963 49.515 Z M 71.431 48.295 C 71.217 48.421 71.022 48.393 70.943 48.277 C 70.865 48.161 70.893 48.033 71.029 47.919 C 74.411 45.11 77.562 40.239 77.562 33.777 C 77.562 27.314 74.411 22.443 71.029 19.634 C 70.893 19.521 70.868 19.386 70.943 19.275 C 71.019 19.164 71.217 19.133 71.431 19.257 C 76.609 22.297 80.698 27.19 80.698 33.777 C 80.698 40.363 76.609 45.257 71.431 48.295 Z M 82.855 57.422 C 82.666 57.571 82.478 57.586 82.376 57.496 C 82.274 57.407 82.246 57.246 82.406 57.083 C 86.933 52.464 91.348 44.776 91.348 33.777 C 91.348 22.777 86.933 15.092 82.406 10.471 C 82.246 10.307 82.282 10.141 82.376 10.057 C 82.47 9.974 82.666 9.982 82.855 10.131 C 88.974 14.995 94.484 23.003 94.484 33.777 C 94.484 44.55 88.974 52.559 82.855 57.422",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Mode=Black, Variant=Horizontal
    "mode=black|variant=horizontal": __body0,
    // figma: Mode=White, Variant=Horizontal
    "mode=white|variant=horizontal": __body1,
    // figma: Mode=Black, Variant=Mark
    "mode=black|variant=mark": __body2,
    // figma: Mode=White, Variant=Mark
    "mode=white|variant=mark": __body3,
    // figma: Mode=Black, Variant=Vertical
    "mode=black|variant=vertical": __body4,
    // figma: Mode=White, Variant=Vertical
    "mode=white|variant=vertical": __body5
  };
  return (__impls[__vkey_Logo(props)] ?? __body2)();
}

// figma node: 19:2384 mq-icon (519 variants)
const __variants_MqIcon = {

  // …+454 more variants not captured: "icon=face-sad|size=24", "icon=fax|size=24", "icon=feedback|size=24", "icon=file|size=24", "icon=filter|size=24", "icon=future|size=24", "icon=gesture-click|size=24", "icon=gift-cards|size=24", "icon=graph|size=24", "icon=help|size=24", …
};
const __venc_MqIcon = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MqIcon = p => "icon=" + __venc_MqIcon(p.icon) + '|' + "size=" + __venc_MqIcon(p.size);
function MqIcon(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? "account-details",
    size: _p.size ?? "24"
  };
  const __vs = __variants_MqIcon[__vkey_MqIcon(props)] ?? {};
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...__vs,
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      opacity: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 0 L 0 0 L 0 24 L 24 24 L 24 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.5,
      top: 3,
      width: 17.5,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.265,
      top: 0.5,
      width: 8.235,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.235,
    height: 8,
    viewBox: "0 0 8.235 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.235,
      height: 8,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.176 0 L 6.699 -0.538 C 6.408 -0.821 5.944 -0.821 5.653 -0.538 L 6.176 0 Z M 8.235 2 L 8.758 2.538 C 8.903 2.397 8.985 2.203 8.985 2 C 8.985 1.797 8.903 1.603 8.758 1.462 L 8.235 2 Z M 2.059 8 L 2.059 8.75 C 2.254 8.75 2.442 8.674 2.582 8.538 L 2.059 8 Z M 0 8 L -0.75 8 C -0.75 8.414 -0.414 8.75 0 8.75 L 0 8 Z M 0 6 L -0.523 5.462 C -0.668 5.603 -0.75 5.797 -0.75 6 L 0 6 Z M 6.176 0 L 5.653 0.538 L 7.712 2.538 L 8.235 2 L 8.758 1.462 L 6.699 -0.538 L 6.176 0 Z M 8.235 2 L 7.712 1.462 L 1.536 7.462 L 2.059 8 L 2.582 8.538 L 8.758 2.538 L 8.235 2 Z M 2.059 8 L 2.059 7.25 L 0 7.25 L 0 8 L 0 8.75 L 2.059 8.75 L 2.059 8 Z M 0 8 L 0.75 8 L 0.75 6 L 0 6 L -0.75 6 L -0.75 8 L 0 8 Z M 0 6 L 0.523 6.538 L 6.699 0.538 L 6.176 0 L 5.653 -0.538 L -0.523 5.462 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.053,
    height: 1.494,
    viewBox: "0 0 2.053 1.494",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.993,0.122,-0.122,0.993,4.477,1.634)",
      transformOrigin: "0 0",
      width: 2.053,
      height: 1.494,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.441 -0.606 C 0.106 -0.85 -0.363 -0.776 -0.606 -0.441 C -0.85 -0.106 -0.776 0.363 -0.441 0.606 L 0 0 L 0.441 -0.606 Z M 1.612 2.1 C 1.947 2.344 2.416 2.27 2.659 1.935 C 2.903 1.6 2.829 1.131 2.494 0.888 L 2.053 1.494 L 1.612 2.1 Z M 0 0 L -0.441 0.606 L 1.612 2.1 L 2.053 1.494 L 2.494 0.888 L 0.441 -0.606 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 13.382,
    height: 18,
    viewBox: "0 0 13.382 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,13.382,0)",
      transformOrigin: "0 0",
      width: 13.382,
      height: 18,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.956 -0.75 C 0.542 -0.75 0.206 -0.414 0.206 0 C 0.206 0.414 0.542 0.75 0.956 0.75 L 0.956 0 L 0.956 -0.75 Z M 0.75 9.991 C 0.75 9.577 0.414 9.241 0 9.241 C -0.414 9.241 -0.75 9.577 -0.75 9.991 L 0 9.991 L 0.75 9.991 Z M 0.956 0 L 0.956 0.75 L 12.426 0.75 L 12.426 0 L 12.426 -0.75 L 0.956 -0.75 L 0.956 0 Z M 12.426 0 L 12.426 0.75 C 12.509 0.75 12.632 0.83 12.632 1 L 13.382 1 L 14.132 1 C 14.132 0.066 13.4 -0.75 12.426 -0.75 L 12.426 0 Z M 13.382 1 L 12.632 1 L 12.632 17 L 13.382 17 L 14.132 17 L 14.132 1 L 13.382 1 Z M 13.382 17 L 12.632 17 C 12.632 17.17 12.509 17.25 12.426 17.25 L 12.426 18 L 12.426 18.75 C 13.4 18.75 14.132 17.934 14.132 17 L 13.382 17 Z M 12.426 18 L 12.426 17.25 L 0.956 17.25 L 0.956 18 L 0.956 18.75 L 12.426 18.75 L 12.426 18 Z M 0.956 18 L 0.956 17.25 C 0.874 17.25 0.75 17.17 0.75 17 L 0 17 L -0.75 17 C -0.75 17.934 -0.018 18.75 0.956 18.75 L 0.956 18 Z M 0 17 L 0.75 17 C 0.75 16.996 0.75 16.992 0.75 16.988 C 0.75 16.984 0.75 16.98 0.75 16.976 C 0.75 16.973 0.75 16.969 0.75 16.965 C 0.75 16.961 0.75 16.957 0.75 16.953 C 0.75 16.949 0.75 16.945 0.75 16.941 C 0.75 16.937 0.75 16.933 0.75 16.929 C 0.75 16.925 0.75 16.922 0.75 16.918 C 0.75 16.914 0.75 16.91 0.75 16.906 C 0.75 16.902 0.75 16.898 0.75 16.894 C 0.75 16.89 0.75 16.886 0.75 16.882 C 0.75 16.878 0.75 16.874 0.75 16.87 C 0.75 16.866 0.75 16.862 0.75 16.859 C 0.75 16.855 0.75 16.851 0.75 16.847 C 0.75 16.843 0.75 16.839 0.75 16.835 C 0.75 16.831 0.75 16.827 0.75 16.823 C 0.75 16.819 0.75 16.815 0.75 16.811 C 0.75 16.807 0.75 16.803 0.75 16.799 C 0.75 16.795 0.75 16.791 0.75 16.787 C 0.75 16.783 0.75 16.779 0.75 16.776 C 0.75 16.772 0.75 16.768 0.75 16.764 C 0.75 16.76 0.75 16.756 0.75 16.752 C 0.75 16.748 0.75 16.744 0.75 16.74 C 0.75 16.736 0.75 16.732 0.75 16.728 C 0.75 16.724 0.75 16.72 0.75 16.716 C 0.75 16.712 0.75 16.708 0.75 16.704 C 0.75 16.7 0.75 16.696 0.75 16.692 C 0.75 16.688 0.75 16.684 0.75 16.68 C 0.75 16.676 0.75 16.672 0.75 16.668 C 0.75 16.664 0.75 16.66 0.75 16.656 C 0.75 16.652 0.75 16.648 0.75 16.644 C 0.75 16.64 0.75 16.636 0.75 16.632 C 0.75 16.628 0.75 16.624 0.75 16.62 C 0.75 16.616 0.75 16.612 0.75 16.608 C 0.75 16.604 0.75 16.6 0.75 16.596 C 0.75 16.592 0.75 16.588 0.75 16.584 C 0.75 16.58 0.75 16.576 0.75 16.572 C 0.75 16.568 0.75 16.564 0.75 16.56 C 0.75 16.556 0.75 16.552 0.75 16.548 C 0.75 16.544 0.75 16.54 0.75 16.536 C 0.75 16.532 0.75 16.528 0.75 16.524 C 0.75 16.52 0.75 16.516 0.75 16.512 C 0.75 16.508 0.75 16.504 0.75 16.5 C 0.75 16.496 0.75 16.492 0.75 16.488 C 0.75 16.484 0.75 16.48 0.75 16.476 C 0.75 16.472 0.75 16.468 0.75 16.464 C 0.75 16.46 0.75 16.456 0.75 16.452 C 0.75 16.448 0.75 16.444 0.75 16.44 C 0.75 16.436 0.75 16.432 0.75 16.428 C 0.75 16.424 0.75 16.42 0.75 16.415 C 0.75 16.411 0.75 16.407 0.75 16.403 C 0.75 16.399 0.75 16.395 0.75 16.391 C 0.75 16.387 0.75 16.383 0.75 16.379 C 0.75 16.375 0.75 16.371 0.75 16.367 C 0.75 16.363 0.75 16.359 0.75 16.355 C 0.75 16.351 0.75 16.347 0.75 16.343 C 0.75 16.339 0.75 16.335 0.75 16.331 C 0.75 16.326 0.75 16.322 0.75 16.318 C 0.75 16.314 0.75 16.31 0.75 16.306 C 0.75 16.302 0.75 16.298 0.75 16.294 C 0.75 16.29 0.75 16.286 0.75 16.282 C 0.75 16.278 0.75 16.274 0.75 16.27 C 0.75 16.266 0.75 16.261 0.75 16.257 C 0.75 16.253 0.75 16.249 0.75 16.245 C 0.75 16.241 0.75 16.237 0.75 16.233 C 0.75 16.229 0.75 16.225 0.75 16.221 C 0.75 16.217 0.75 16.213 0.75 16.208 C 0.75 16.204 0.75 16.2 0.75 16.196 C 0.75 16.192 0.75 16.188 0.75 16.184 C 0.75 16.18 0.75 16.176 0.75 16.172 C 0.75 16.168 0.75 16.163 0.75 16.159 C 0.75 16.155 0.75 16.151 0.75 16.147 C 0.75 16.143 0.75 16.139 0.75 16.135 C 0.75 16.131 0.75 16.127 0.75 16.123 C 0.75 16.118 0.75 16.114 0.75 16.11 C 0.75 16.106 0.75 16.102 0.75 16.098 C 0.75 16.094 0.75 16.09 0.75 16.086 C 0.75 16.082 0.75 16.077 0.75 16.073 C 0.75 16.069 0.75 16.065 0.75 16.061 C 0.75 16.057 0.75 16.053 0.75 16.049 C 0.75 16.045 0.75 16.04 0.75 16.036 C 0.75 16.032 0.75 16.028 0.75 16.024 C 0.75 16.02 0.75 16.016 0.75 16.012 C 0.75 16.007 0.75 16.003 0.75 15.999 C 0.75 15.995 0.75 15.991 0.75 15.987 C 0.75 15.983 0.75 15.979 0.75 15.974 C 0.75 15.97 0.75 15.966 0.75 15.962 C 0.75 15.958 0.75 15.954 0.75 15.95 C 0.75 15.946 0.75 15.941 0.75 15.937 C 0.75 15.933 0.75 15.929 0.75 15.925 C 0.75 15.921 0.75 15.917 0.75 15.912 C 0.75 15.908 0.75 15.904 0.75 15.9 C 0.75 15.896 0.75 15.892 0.75 15.888 C 0.75 15.883 0.75 15.879 0.75 15.875 C 0.75 15.871 0.75 15.867 0.75 15.863 C 0.75 15.858 0.75 15.854 0.75 15.85 C 0.75 15.846 0.75 15.842 0.75 15.838 C 0.75 15.834 0.75 15.829 0.75 15.825 C 0.75 15.821 0.75 15.817 0.75 15.813 C 0.75 15.809 0.75 15.804 0.75 15.8 C 0.75 15.796 0.75 15.792 0.75 15.788 C 0.75 15.784 0.75 15.779 0.75 15.775 C 0.75 15.771 0.75 15.767 0.75 15.763 C 0.75 15.759 0.75 15.754 0.75 15.75 C 0.75 15.746 0.75 15.742 0.75 15.738 C 0.75 15.733 0.75 15.729 0.75 15.725 C 0.75 15.721 0.75 15.717 0.75 15.713 C 0.75 15.708 0.75 15.704 0.75 15.7 C 0.75 15.696 0.75 15.692 0.75 15.687 C 0.75 15.683 0.75 15.679 0.75 15.675 C 0.75 15.671 0.75 15.667 0.75 15.662 C 0.75 15.658 0.75 15.654 0.75 15.65 C 0.75 15.646 0.75 15.641 0.75 15.637 C 0.75 15.633 0.75 15.629 0.75 15.625 C 0.75 15.62 0.75 15.616 0.75 15.612 C 0.75 15.608 0.75 15.604 0.75 15.599 C 0.75 15.595 0.75 15.591 0.75 15.587 C 0.75 15.583 0.75 15.578 0.75 15.574 C 0.75 15.57 0.75 15.566 0.75 15.561 C 0.75 15.557 0.75 15.553 0.75 15.549 C 0.75 15.545 0.75 15.54 0.75 15.536 C 0.75 15.532 0.75 15.528 0.75 15.524 C 0.75 15.519 0.75 15.515 0.75 15.511 C 0.75 15.507 0.75 15.502 0.75 15.498 C 0.75 15.494 0.75 15.49 0.75 15.485 C 0.75 15.481 0.75 15.477 0.75 15.473 C 0.75 15.469 0.75 15.464 0.75 15.46 C 0.75 15.456 0.75 15.452 0.75 15.447 C 0.75 15.443 0.75 15.439 0.75 15.435 C 0.75 15.43 0.75 15.426 0.75 15.422 C 0.75 15.418 0.75 15.413 0.75 15.409 C 0.75 15.405 0.75 15.401 0.75 15.396 C 0.75 15.392 0.75 15.388 0.75 15.384 C 0.75 15.38 0.75 15.375 0.75 15.371 C 0.75 15.367 0.75 15.362 0.75 15.358 C 0.75 15.354 0.75 15.35 0.75 15.345 C 0.75 15.341 0.75 15.337 0.75 15.333 C 0.75 15.328 0.75 15.324 0.75 15.32 C 0.75 15.316 0.75 15.311 0.75 15.307 C 0.75 15.303 0.75 15.299 0.75 15.294 C 0.75 15.29 0.75 15.286 0.75 15.282 C 0.75 15.277 0.75 15.273 0.75 15.269 C 0.75 15.264 0.75 15.26 0.75 15.256 C 0.75 15.252 0.75 15.247 0.75 15.243 C 0.75 15.239 0.75 15.235 0.75 15.23 C 0.75 15.226 0.75 15.222 0.75 15.217 C 0.75 15.213 0.75 15.209 0.75 15.205 C 0.75 15.2 0.75 15.196 0.75 15.192 C 0.75 15.187 0.75 15.183 0.75 15.179 C 0.75 15.175 0.75 15.17 0.75 15.166 C 0.75 15.162 0.75 15.157 0.75 15.153 C 0.75 15.149 0.75 15.144 0.75 15.14 C 0.75 15.136 0.75 15.132 0.75 15.127 C 0.75 15.123 0.75 15.119 0.75 15.114 C 0.75 15.11 0.75 15.106 0.75 15.101 C 0.75 15.097 0.75 15.093 0.75 15.089 C 0.75 15.084 0.75 15.08 0.75 15.076 C 0.75 15.071 0.75 15.067 0.75 15.063 C 0.75 15.058 0.75 15.054 0.75 15.05 C 0.75 15.045 0.75 15.041 0.75 15.037 C 0.75 15.033 0.75 15.028 0.75 15.024 C 0.75 15.02 0.75 15.015 0.75 15.011 C 0.75 15.007 0.75 15.002 0.75 14.998 C 0.75 14.994 0.75 14.989 0.75 14.985 C 0.75 14.981 0.75 14.976 0.75 14.972 C 0.75 14.968 0.75 14.963 0.75 14.959 C 0.75 14.955 0.75 14.95 0.75 14.946 C 0.75 14.942 0.75 14.937 0.75 14.933 C 0.75 14.929 0.75 14.924 0.75 14.92 C 0.75 14.916 0.75 14.911 0.75 14.907 C 0.75 14.903 0.75 14.898 0.75 14.894 C 0.75 14.89 0.75 14.885 0.75 14.881 C 0.75 14.877 0.75 14.872 0.75 14.868 C 0.75 14.863 0.75 14.859 0.75 14.855 C 0.75 14.85 0.75 14.846 0.75 14.842 C 0.75 14.837 0.75 14.833 0.75 14.829 C 0.75 14.824 0.75 14.82 0.75 14.816 C 0.75 14.811 0.75 14.807 0.75 14.802 C 0.75 14.798 0.75 14.794 0.75 14.789 C 0.75 14.785 0.75 14.781 0.75 14.776 C 0.75 14.772 0.75 14.768 0.75 14.763 C 0.75 14.759 0.75 14.754 0.75 14.75 C 0.75 14.746 0.75 14.741 0.75 14.737 C 0.75 14.733 0.75 14.728 0.75 14.724 C 0.75 14.719 0.75 14.715 0.75 14.711 C 0.75 14.706 0.75 14.702 0.75 14.698 C 0.75 14.693 0.75 14.689 0.75 14.684 C 0.75 14.68 0.75 14.676 0.75 14.671 C 0.75 14.667 0.75 14.662 0.75 14.658 C 0.75 14.654 0.75 14.649 0.75 14.645 C 0.75 14.64 0.75 14.636 0.75 14.632 C 0.75 14.627 0.75 14.623 0.75 14.618 C 0.75 14.614 0.75 14.61 0.75 14.605 C 0.75 14.601 0.75 14.596 0.75 14.592 C 0.75 14.588 0.75 14.583 0.75 14.579 C 0.75 14.574 0.75 14.57 0.75 14.566 C 0.75 14.561 0.75 14.557 0.75 14.552 C 0.75 14.548 0.75 14.544 0.75 14.539 C 0.75 14.535 0.75 14.53 0.75 14.526 C 0.75 14.522 0.75 14.517 0.75 14.513 C 0.75 14.508 0.75 14.504 0.75 14.499 C 0.75 14.495 0.75 14.491 0.75 14.486 C 0.75 14.482 0.75 14.477 0.75 14.473 C 0.75 14.468 0.75 14.464 0.75 14.46 C 0.75 14.455 0.75 14.451 0.75 14.446 C 0.75 14.442 0.75 14.437 0.75 14.433 C 0.75 14.429 0.75 14.424 0.75 14.42 C 0.75 14.415 0.75 14.411 0.75 14.406 C 0.75 14.402 0.75 14.398 0.75 14.393 C 0.75 14.389 0.75 14.384 0.75 14.38 C 0.75 14.375 0.75 14.371 0.75 14.366 C 0.75 14.362 0.75 14.358 0.75 14.353 C 0.75 14.349 0.75 14.344 0.75 14.34 C 0.75 14.335 0.75 14.331 0.75 14.326 C 0.75 14.322 0.75 14.317 0.75 14.313 C 0.75 14.309 0.75 14.304 0.75 14.3 C 0.75 14.295 0.75 14.291 0.75 14.286 C 0.75 14.282 0.75 14.277 0.75 14.273 C 0.75 14.268 0.75 14.264 0.75 14.259 C 0.75 14.255 0.75 14.251 0.75 14.246 C 0.75 14.242 0.75 14.237 0.75 14.233 C 0.75 14.228 0.75 14.224 0.75 14.219 C 0.75 14.215 0.75 14.21 0.75 14.206 C 0.75 14.201 0.75 14.197 0.75 14.192 C 0.75 14.188 0.75 14.183 0.75 14.179 C 0.75 14.174 0.75 14.17 0.75 14.165 C 0.75 14.161 0.75 14.156 0.75 14.152 C 0.75 14.148 0.75 14.143 0.75 14.139 C 0.75 14.134 0.75 14.13 0.75 14.125 C 0.75 14.121 0.75 14.116 0.75 14.112 C 0.75 14.107 0.75 14.103 0.75 14.098 C 0.75 14.094 0.75 14.089 0.75 14.085 C 0.75 14.08 0.75 14.076 0.75 14.071 C 0.75 14.067 0.75 14.062 0.75 14.058 C 0.75 14.053 0.75 14.049 0.75 14.044 C 0.75 14.04 0.75 14.035 0.75 14.031 C 0.75 14.026 0.75 14.022 0.75 14.017 C 0.75 14.012 0.75 14.008 0.75 14.003 C 0.75 13.999 0.75 13.994 0.75 13.99 C 0.75 13.985 0.75 13.981 0.75 13.976 C 0.75 13.972 0.75 13.967 0.75 13.963 C 0.75 13.958 0.75 13.954 0.75 13.949 C 0.75 13.945 0.75 13.94 0.75 13.936 C 0.75 13.931 0.75 13.927 0.75 13.922 C 0.75 13.918 0.75 13.913 0.75 13.908 C 0.75 13.904 0.75 13.899 0.75 13.895 C 0.75 13.89 0.75 13.886 0.75 13.881 C 0.75 13.877 0.75 13.872 0.75 13.868 C 0.75 13.863 0.75 13.859 0.75 13.854 C 0.75 13.849 0.75 13.845 0.75 13.84 C 0.75 13.836 0.75 13.831 0.75 13.827 C 0.75 13.822 0.75 13.818 0.75 13.813 C 0.75 13.809 0.75 13.804 0.75 13.799 C 0.75 13.795 0.75 13.79 0.75 13.786 C 0.75 13.781 0.75 13.777 0.75 13.772 C 0.75 13.768 0.75 13.763 0.75 13.758 C 0.75 13.754 0.75 13.749 0.75 13.745 C 0.75 13.74 0.75 13.736 0.75 13.731 C 0.75 13.726 0.75 13.722 0.75 13.717 C 0.75 13.713 0.75 13.708 0.75 13.704 C 0.75 13.699 0.75 13.694 0.75 13.69 C 0.75 13.685 0.75 13.681 0.75 13.676 C 0.75 13.672 0.75 13.667 0.75 13.662 C 0.75 13.658 0.75 13.653 0.75 13.649 C 0.75 13.644 0.75 13.64 0.75 13.635 C 0.75 13.63 0.75 13.626 0.75 13.621 C 0.75 13.617 0.75 13.612 0.75 13.607 C 0.75 13.603 0.75 13.598 0.75 13.594 C 0.75 13.589 0.75 13.585 0.75 13.58 C 0.75 13.575 0.75 13.571 0.75 13.566 C 0.75 13.562 0.75 13.557 0.75 13.552 C 0.75 13.548 0.75 13.543 0.75 13.539 C 0.75 13.534 0.75 13.529 0.75 13.525 C 0.75 13.52 0.75 13.516 0.75 13.511 C 0.75 13.506 0.75 13.502 0.75 13.497 C 0.75 13.492 0.75 13.488 0.75 13.483 C 0.75 13.479 0.75 13.474 0.75 13.469 C 0.75 13.465 0.75 13.46 0.75 13.456 C 0.75 13.451 0.75 13.446 0.75 13.442 C 0.75 13.437 0.75 13.432 0.75 13.428 C 0.75 13.423 0.75 13.419 0.75 13.414 C 0.75 13.409 0.75 13.405 0.75 13.4 C 0.75 13.395 0.75 13.391 0.75 13.386 C 0.75 13.382 0.75 13.377 0.75 13.372 C 0.75 13.368 0.75 13.363 0.75 13.358 C 0.75 13.354 0.75 13.349 0.75 13.345 C 0.75 13.34 0.75 13.335 0.75 13.331 C 0.75 13.326 0.75 13.321 0.75 13.317 C 0.75 13.312 0.75 13.307 0.75 13.303 C 0.75 13.298 0.75 13.293 0.75 13.289 C 0.75 13.284 0.75 13.28 0.75 13.275 C 0.75 13.27 0.75 13.266 0.75 13.261 C 0.75 13.256 0.75 13.252 0.75 13.247 C 0.75 13.242 0.75 13.238 0.75 13.233 C 0.75 13.228 0.75 13.224 0.75 13.219 C 0.75 13.214 0.75 13.21 0.75 13.205 C 0.75 13.2 0.75 13.196 0.75 13.191 C 0.75 13.186 0.75 13.182 0.75 13.177 C 0.75 13.172 0.75 13.168 0.75 13.163 C 0.75 13.158 0.75 13.154 0.75 13.149 C 0.75 13.144 0.75 13.14 0.75 13.135 C 0.75 13.13 0.75 13.126 0.75 13.121 C 0.75 13.116 0.75 13.112 0.75 13.107 C 0.75 13.102 0.75 13.098 0.75 13.093 C 0.75 13.088 0.75 13.084 0.75 13.079 C 0.75 13.074 0.75 13.069 0.75 13.065 C 0.75 13.06 0.75 13.055 0.75 13.051 C 0.75 13.046 0.75 13.041 0.75 13.037 C 0.75 13.032 0.75 13.027 0.75 13.023 C 0.75 13.018 0.75 13.013 0.75 13.009 C 0.75 13.004 0.75 12.999 0.75 12.994 C 0.75 12.99 0.75 12.985 0.75 12.98 C 0.75 12.976 0.75 12.971 0.75 12.966 C 0.75 12.961 0.75 12.957 0.75 12.952 C 0.75 12.947 0.75 12.943 0.75 12.938 C 0.75 12.933 0.75 12.929 0.75 12.924 C 0.75 12.919 0.75 12.914 0.75 12.91 C 0.75 12.905 0.75 12.9 0.75 12.896 C 0.75 12.891 0.75 12.886 0.75 12.881 C 0.75 12.877 0.75 12.872 0.75 12.867 C 0.75 12.862 0.75 12.858 0.75 12.853 C 0.75 12.848 0.75 12.844 0.75 12.839 C 0.75 12.834 0.75 12.829 0.75 12.825 C 0.75 12.82 0.75 12.815 0.75 12.81 C 0.75 12.806 0.75 12.801 0.75 12.796 C 0.75 12.792 0.75 12.787 0.75 12.782 C 0.75 12.777 0.75 12.773 0.75 12.768 C 0.75 12.763 0.75 12.758 0.75 12.754 C 0.75 12.749 0.75 12.744 0.75 12.739 C 0.75 12.735 0.75 12.73 0.75 12.725 C 0.75 12.72 0.75 12.716 0.75 12.711 C 0.75 12.706 0.75 12.701 0.75 12.697 C 0.75 12.692 0.75 12.687 0.75 12.682 C 0.75 12.678 0.75 12.673 0.75 12.668 C 0.75 12.663 0.75 12.659 0.75 12.654 C 0.75 12.649 0.75 12.644 0.75 12.64 C 0.75 12.635 0.75 12.63 0.75 12.625 C 0.75 12.62 0.75 12.616 0.75 12.611 C 0.75 12.606 0.75 12.601 0.75 12.597 C 0.75 12.592 0.75 12.587 0.75 12.582 C 0.75 12.578 0.75 12.573 0.75 12.568 C 0.75 12.563 0.75 12.558 0.75 12.554 C 0.75 12.549 0.75 12.544 0.75 12.539 C 0.75 12.535 0.75 12.53 0.75 12.525 C 0.75 12.52 0.75 12.515 0.75 12.511 C 0.75 12.506 0.75 12.501 0.75 12.496 C 0.75 12.491 0.75 12.487 0.75 12.482 C 0.75 12.477 0.75 12.472 0.75 12.467 C 0.75 12.463 0.75 12.458 0.75 12.453 C 0.75 12.448 0.75 12.444 0.75 12.439 C 0.75 12.434 0.75 12.429 0.75 12.424 C 0.75 12.42 0.75 12.415 0.75 12.41 C 0.75 12.405 0.75 12.4 0.75 12.395 C 0.75 12.391 0.75 12.386 0.75 12.381 C 0.75 12.376 0.75 12.371 0.75 12.367 C 0.75 12.362 0.75 12.357 0.75 12.352 C 0.75 12.347 0.75 12.343 0.75 12.338 C 0.75 12.333 0.75 12.328 0.75 12.323 C 0.75 12.318 0.75 12.314 0.75 12.309 C 0.75 12.304 0.75 12.299 0.75 12.294 C 0.75 12.29 0.75 12.285 0.75 12.28 C 0.75 12.275 0.75 12.27 0.75 12.265 C 0.75 12.261 0.75 12.256 0.75 12.251 C 0.75 12.246 0.75 12.241 0.75 12.236 C 0.75 12.232 0.75 12.227 0.75 12.222 C 0.75 12.217 0.75 12.212 0.75 12.207 C 0.75 12.203 0.75 12.198 0.75 12.193 C 0.75 12.188 0.75 12.183 0.75 12.178 C 0.75 12.173 0.75 12.169 0.75 12.164 C 0.75 12.159 0.75 12.154 0.75 12.149 C 0.75 12.144 0.75 12.14 0.75 12.135 C 0.75 12.13 0.75 12.125 0.75 12.12 C 0.75 12.115 0.75 12.11 0.75 12.106 C 0.75 12.101 0.75 12.096 0.75 12.091 C 0.75 12.086 0.75 12.081 0.75 12.076 C 0.75 12.072 0.75 12.067 0.75 12.062 C 0.75 12.057 0.75 12.052 0.75 12.047 C 0.75 12.042 0.75 12.037 0.75 12.033 C 0.75 12.028 0.75 12.023 0.75 12.018 C 0.75 12.013 0.75 12.008 0.75 12.003 C 0.75 11.999 0.75 11.994 0.75 11.989 C 0.75 11.984 0.75 11.979 0.75 11.974 C 0.75 11.969 0.75 11.964 0.75 11.959 C 0.75 11.955 0.75 11.95 0.75 11.945 C 0.75 11.94 0.75 11.935 0.75 11.93 C 0.75 11.925 0.75 11.92 0.75 11.915 C 0.75 11.911 0.75 11.906 0.75 11.901 C 0.75 11.896 0.75 11.891 0.75 11.886 C 0.75 11.881 0.75 11.876 0.75 11.871 C 0.75 11.867 0.75 11.862 0.75 11.857 C 0.75 11.852 0.75 11.847 0.75 11.842 C 0.75 11.837 0.75 11.832 0.75 11.827 C 0.75 11.822 0.75 11.818 0.75 11.813 C 0.75 11.808 0.75 11.803 0.75 11.798 C 0.75 11.793 0.75 11.788 0.75 11.783 C 0.75 11.778 0.75 11.773 0.75 11.768 C 0.75 11.763 0.75 11.759 0.75 11.754 C 0.75 11.749 0.75 11.744 0.75 11.739 C 0.75 11.734 0.75 11.729 0.75 11.724 C 0.75 11.719 0.75 11.714 0.75 11.709 C 0.75 11.704 0.75 11.7 0.75 11.695 C 0.75 11.69 0.75 11.685 0.75 11.68 C 0.75 11.675 0.75 11.67 0.75 11.665 C 0.75 11.66 0.75 11.655 0.75 11.65 C 0.75 11.645 0.75 11.64 0.75 11.635 C 0.75 11.63 0.75 11.625 0.75 11.621 C 0.75 11.616 0.75 11.611 0.75 11.606 C 0.75 11.601 0.75 11.596 0.75 11.591 C 0.75 11.586 0.75 11.581 0.75 11.576 C 0.75 11.571 0.75 11.566 0.75 11.561 C 0.75 11.556 0.75 11.551 0.75 11.546 C 0.75 11.541 0.75 11.536 0.75 11.531 C 0.75 11.527 0.75 11.522 0.75 11.517 C 0.75 11.512 0.75 11.507 0.75 11.502 C 0.75 11.497 0.75 11.492 0.75 11.487 C 0.75 11.482 0.75 11.477 0.75 11.472 C 0.75 11.467 0.75 11.462 0.75 11.457 C 0.75 11.452 0.75 11.447 0.75 11.442 C 0.75 11.437 0.75 11.432 0.75 11.427 C 0.75 11.422 0.75 11.417 0.75 11.412 C 0.75 11.407 0.75 11.402 0.75 11.397 C 0.75 11.392 0.75 11.387 0.75 11.382 C 0.75 11.377 0.75 11.372 0.75 11.367 C 0.75 11.362 0.75 11.358 0.75 11.353 C 0.75 11.348 0.75 11.343 0.75 11.338 C 0.75 11.333 0.75 11.328 0.75 11.323 C 0.75 11.318 0.75 11.313 0.75 11.308 C 0.75 11.303 0.75 11.298 0.75 11.293 C 0.75 11.288 0.75 11.283 0.75 11.278 C 0.75 11.273 0.75 11.268 0.75 11.263 C 0.75 11.258 0.75 11.253 0.75 11.248 C 0.75 11.243 0.75 11.238 0.75 11.233 C 0.75 11.228 0.75 11.223 0.75 11.218 C 0.75 11.213 0.75 11.208 0.75 11.203 C 0.75 11.198 0.75 11.193 0.75 11.187 C 0.75 11.182 0.75 11.177 0.75 11.172 C 0.75 11.167 0.75 11.162 0.75 11.157 C 0.75 11.152 0.75 11.147 0.75 11.142 C 0.75 11.137 0.75 11.132 0.75 11.127 C 0.75 11.122 0.75 11.117 0.75 11.112 C 0.75 11.107 0.75 11.102 0.75 11.097 C 0.75 11.092 0.75 11.087 0.75 11.082 C 0.75 11.077 0.75 11.072 0.75 11.067 C 0.75 11.062 0.75 11.057 0.75 11.052 C 0.75 11.047 0.75 11.042 0.75 11.037 C 0.75 11.032 0.75 11.027 0.75 11.022 C 0.75 11.017 0.75 11.011 0.75 11.006 C 0.75 11.001 0.75 10.996 0.75 10.991 C 0.75 10.986 0.75 10.981 0.75 10.976 C 0.75 10.971 0.75 10.966 0.75 10.961 C 0.75 10.956 0.75 10.951 0.75 10.946 C 0.75 10.941 0.75 10.936 0.75 10.931 C 0.75 10.926 0.75 10.921 0.75 10.915 C 0.75 10.91 0.75 10.905 0.75 10.9 C 0.75 10.895 0.75 10.89 0.75 10.885 C 0.75 10.88 0.75 10.875 0.75 10.87 C 0.75 10.865 0.75 10.86 0.75 10.855 C 0.75 10.85 0.75 10.845 0.75 10.839 C 0.75 10.834 0.75 10.829 0.75 10.824 C 0.75 10.819 0.75 10.814 0.75 10.809 C 0.75 10.804 0.75 10.799 0.75 10.794 C 0.75 10.789 0.75 10.784 0.75 10.779 C 0.75 10.773 0.75 10.768 0.75 10.763 C 0.75 10.758 0.75 10.753 0.75 10.748 C 0.75 10.743 0.75 10.738 0.75 10.733 C 0.75 10.728 0.75 10.723 0.75 10.717 C 0.75 10.712 0.75 10.707 0.75 10.702 C 0.75 10.697 0.75 10.692 0.75 10.687 C 0.75 10.682 0.75 10.677 0.75 10.672 C 0.75 10.667 0.75 10.661 0.75 10.656 C 0.75 10.651 0.75 10.646 0.75 10.641 C 0.75 10.636 0.75 10.631 0.75 10.626 C 0.75 10.621 0.75 10.615 0.75 10.61 C 0.75 10.605 0.75 10.6 0.75 10.595 C 0.75 10.59 0.75 10.585 0.75 10.58 C 0.75 10.575 0.75 10.569 0.75 10.564 C 0.75 10.559 0.75 10.554 0.75 10.549 C 0.75 10.544 0.75 10.539 0.75 10.534 C 0.75 10.528 0.75 10.523 0.75 10.518 C 0.75 10.513 0.75 10.508 0.75 10.503 C 0.75 10.498 0.75 10.493 0.75 10.487 C 0.75 10.482 0.75 10.477 0.75 10.472 C 0.75 10.467 0.75 10.462 0.75 10.457 C 0.75 10.452 0.75 10.446 0.75 10.441 C 0.75 10.436 0.75 10.431 0.75 10.426 C 0.75 10.421 0.75 10.416 0.75 10.41 C 0.75 10.405 0.75 10.4 0.75 10.395 C 0.75 10.39 0.75 10.385 0.75 10.38 C 0.75 10.374 0.75 10.369 0.75 10.364 C 0.75 10.359 0.75 10.354 0.75 10.349 C 0.75 10.343 0.75 10.338 0.75 10.333 C 0.75 10.328 0.75 10.323 0.75 10.318 C 0.75 10.313 0.75 10.307 0.75 10.302 C 0.75 10.297 0.75 10.292 0.75 10.287 C 0.75 10.282 0.75 10.276 0.75 10.271 C 0.75 10.266 0.75 10.261 0.75 10.256 C 0.75 10.251 0.75 10.245 0.75 10.24 C 0.75 10.235 0.75 10.23 0.75 10.225 C 0.75 10.219 0.75 10.214 0.75 10.209 C 0.75 10.204 0.75 10.199 0.75 10.194 C 0.75 10.188 0.75 10.183 0.75 10.178 C 0.75 10.173 0.75 10.168 0.75 10.163 C 0.75 10.157 0.75 10.152 0.75 10.147 C 0.75 10.142 0.75 10.137 0.75 10.131 C 0.75 10.126 0.75 10.121 0.75 10.116 C 0.75 10.111 0.75 10.105 0.75 10.1 C 0.75 10.095 0.75 10.09 0.75 10.085 C 0.75 10.079 0.75 10.074 0.75 10.069 C 0.75 10.064 0.75 10.059 0.75 10.053 C 0.75 10.048 0.75 10.043 0.75 10.038 C 0.75 10.033 0.75 10.027 0.75 10.022 C 0.75 10.017 0.75 10.012 0.75 10.007 C 0.75 10.001 0.75 9.996 0.75 9.991 L 0 9.991 L -0.75 9.991 C -0.75 9.996 -0.75 10.001 -0.75 10.007 C -0.75 10.012 -0.75 10.017 -0.75 10.022 C -0.75 10.027 -0.75 10.033 -0.75 10.038 C -0.75 10.043 -0.75 10.048 -0.75 10.053 C -0.75 10.059 -0.75 10.064 -0.75 10.069 C -0.75 10.074 -0.75 10.079 -0.75 10.085 C -0.75 10.09 -0.75 10.095 -0.75 10.1 C -0.75 10.105 -0.75 10.111 -0.75 10.116 C -0.75 10.121 -0.75 10.126 -0.75 10.131 C -0.75 10.137 -0.75 10.142 -0.75 10.147 C -0.75 10.152 -0.75 10.157 -0.75 10.163 C -0.75 10.168 -0.75 10.173 -0.75 10.178 C -0.75 10.183 -0.75 10.188 -0.75 10.194 C -0.75 10.199 -0.75 10.204 -0.75 10.209 C -0.75 10.214 -0.75 10.219 -0.75 10.225 C -0.75 10.23 -0.75 10.235 -0.75 10.24 C -0.75 10.245 -0.75 10.251 -0.75 10.256 C -0.75 10.261 -0.75 10.266 -0.75 10.271 C -0.75 10.276 -0.75 10.282 -0.75 10.287 C -0.75 10.292 -0.75 10.297 -0.75 10.302 C -0.75 10.307 -0.75 10.313 -0.75 10.318 C -0.75 10.323 -0.75 10.328 -0.75 10.333 C -0.75 10.338 -0.75 10.343 -0.75 10.349 C -0.75 10.354 -0.75 10.359 -0.75 10.364 C -0.75 10.369 -0.75 10.374 -0.75 10.38 C -0.75 10.385 -0.75 10.39 -0.75 10.395 C -0.75 10.4 -0.75 10.405 -0.75 10.41 C -0.75 10.416 -0.75 10.421 -0.75 10.426 C -0.75 10.431 -0.75 10.436 -0.75 10.441 C -0.75 10.446 -0.75 10.452 -0.75 10.457 C -0.75 10.462 -0.75 10.467 -0.75 10.472 C -0.75 10.477 -0.75 10.482 -0.75 10.487 C -0.75 10.493 -0.75 10.498 -0.75 10.503 C -0.75 10.508 -0.75 10.513 -0.75 10.518 C -0.75 10.523 -0.75 10.528 -0.75 10.534 C -0.75 10.539 -0.75 10.544 -0.75 10.549 C -0.75 10.554 -0.75 10.559 -0.75 10.564 C -0.75 10.569 -0.75 10.575 -0.75 10.58 C -0.75 10.585 -0.75 10.59 -0.75 10.595 C -0.75 10.6 -0.75 10.605 -0.75 10.61 C -0.75 10.615 -0.75 10.621 -0.75 10.626 C -0.75 10.631 -0.75 10.636 -0.75 10.641 C -0.75 10.646 -0.75 10.651 -0.75 10.656 C -0.75 10.661 -0.75 10.667 -0.75 10.672 C -0.75 10.677 -0.75 10.682 -0.75 10.687 C -0.75 10.692 -0.75 10.697 -0.75 10.702 C -0.75 10.707 -0.75 10.712 -0.75 10.717 C -0.75 10.723 -0.75 10.728 -0.75 10.733 C -0.75 10.738 -0.75 10.743 -0.75 10.748 C -0.75 10.753 -0.75 10.758 -0.75 10.763 C -0.75 10.768 -0.75 10.773 -0.75 10.779 C -0.75 10.784 -0.75 10.789 -0.75 10.794 C -0.75 10.799 -0.75 10.804 -0.75 10.809 C -0.75 10.814 -0.75 10.819 -0.75 10.824 C -0.75 10.829 -0.75 10.834 -0.75 10.839 C -0.75 10.845 -0.75 10.85 -0.75 10.855 C -0.75 10.86 -0.75 10.865 -0.75 10.87 C -0.75 10.875 -0.75 10.88 -0.75 10.885 C -0.75 10.89 -0.75 10.895 -0.75 10.9 C -0.75 10.905 -0.75 10.91 -0.75 10.915 C -0.75 10.921 -0.75 10.926 -0.75 10.931 C -0.75 10.936 -0.75 10.941 -0.75 10.946 C -0.75 10.951 -0.75 10.956 -0.75 10.961 C -0.75 10.966 -0.75 10.971 -0.75 10.976 C -0.75 10.981 -0.75 10.986 -0.75 10.991 C -0.75 10.996 -0.75 11.001 -0.75 11.006 C -0.75 11.011 -0.75 11.017 -0.75 11.022 C -0.75 11.027 -0.75 11.032 -0.75 11.037 C -0.75 11.042 -0.75 11.047 -0.75 11.052 C -0.75 11.057 -0.75 11.062 -0.75 11.067 C -0.75 11.072 -0.75 11.077 -0.75 11.082 C -0.75 11.087 -0.75 11.092 -0.75 11.097 C -0.75 11.102 -0.75 11.107 -0.75 11.112 C -0.75 11.117 -0.75 11.122 -0.75 11.127 C -0.75 11.132 -0.75 11.137 -0.75 11.142 C -0.75 11.147 -0.75 11.152 -0.75 11.157 C -0.75 11.162 -0.75 11.167 -0.75 11.172 C -0.75 11.177 -0.75 11.182 -0.75 11.187 C -0.75 11.193 -0.75 11.198 -0.75 11.203 C -0.75 11.208 -0.75 11.213 -0.75 11.218 C -0.75 11.223 -0.75 11.228 -0.75 11.233 C -0.75 11.238 -0.75 11.243 -0.75 11.248 C -0.75 11.253 -0.75 11.258 -0.75 11.263 C -0.75 11.268 -0.75 11.273 -0.75 11.278 C -0.75 11.283 -0.75 11.288 -0.75 11.293 C -0.75 11.298 -0.75 11.303 -0.75 11.308 C -0.75 11.313 -0.75 11.318 -0.75 11.323 C -0.75 11.328 -0.75 11.333 -0.75 11.338 C -0.75 11.343 -0.75 11.348 -0.75 11.353 C -0.75 11.358 -0.75 11.362 -0.75 11.367 C -0.75 11.372 -0.75 11.377 -0.75 11.382 C -0.75 11.387 -0.75 11.392 -0.75 11.397 C -0.75 11.402 -0.75 11.407 -0.75 11.412 C -0.75 11.417 -0.75 11.422 -0.75 11.427 C -0.75 11.432 -0.75 11.437 -0.75 11.442 C -0.75 11.447 -0.75 11.452 -0.75 11.457 C -0.75 11.462 -0.75 11.467 -0.75 11.472 C -0.75 11.477 -0.75 11.482 -0.75 11.487 C -0.75 11.492 -0.75 11.497 -0.75 11.502 C -0.75 11.507 -0.75 11.512 -0.75 11.517 C -0.75 11.522 -0.75 11.527 -0.75 11.531 C -0.75 11.536 -0.75 11.541 -0.75 11.546 C -0.75 11.551 -0.75 11.556 -0.75 11.561 C -0.75 11.566 -0.75 11.571 -0.75 11.576 C -0.75 11.581 -0.75 11.586 -0.75 11.591 C -0.75 11.596 -0.75 11.601 -0.75 11.606 C -0.75 11.611 -0.75 11.616 -0.75 11.621 C -0.75 11.625 -0.75 11.63 -0.75 11.635 C -0.75 11.64 -0.75 11.645 -0.75 11.65 C -0.75 11.655 -0.75 11.66 -0.75 11.665 C -0.75 11.67 -0.75 11.675 -0.75 11.68 C -0.75 11.685 -0.75 11.69 -0.75 11.695 C -0.75 11.7 -0.75 11.704 -0.75 11.709 C -0.75 11.714 -0.75 11.719 -0.75 11.724 C -0.75 11.729 -0.75 11.734 -0.75 11.739 C -0.75 11.744 -0.75 11.749 -0.75 11.754 C -0.75 11.759 -0.75 11.763 -0.75 11.768 C -0.75 11.773 -0.75 11.778 -0.75 11.783 C -0.75 11.788 -0.75 11.793 -0.75 11.798 C -0.75 11.803 -0.75 11.808 -0.75 11.813 C -0.75 11.818 -0.75 11.822 -0.75 11.827 C -0.75 11.832 -0.75 11.837 -0.75 11.842 C -0.75 11.847 -0.75 11.852 -0.75 11.857 C -0.75 11.862 -0.75 11.867 -0.75 11.871 C -0.75 11.876 -0.75 11.881 -0.75 11.886 C -0.75 11.891 -0.75 11.896 -0.75 11.901 C -0.75 11.906 -0.75 11.911 -0.75 11.915 C -0.75 11.92 -0.75 11.925 -0.75 11.93 C -0.75 11.935 -0.75 11.94 -0.75 11.945 C -0.75 11.95 -0.75 11.955 -0.75 11.959 C -0.75 11.964 -0.75 11.969 -0.75 11.974 C -0.75 11.979 -0.75 11.984 -0.75 11.989 C -0.75 11.994 -0.75 11.999 -0.75 12.003 C -0.75 12.008 -0.75 12.013 -0.75 12.018 C -0.75 12.023 -0.75 12.028 -0.75 12.033 C -0.75 12.037 -0.75 12.042 -0.75 12.047 C -0.75 12.052 -0.75 12.057 -0.75 12.062 C -0.75 12.067 -0.75 12.072 -0.75 12.076 C -0.75 12.081 -0.75 12.086 -0.75 12.091 C -0.75 12.096 -0.75 12.101 -0.75 12.106 C -0.75 12.11 -0.75 12.115 -0.75 12.12 C -0.75 12.125 -0.75 12.13 -0.75 12.135 C -0.75 12.14 -0.75 12.144 -0.75 12.149 C -0.75 12.154 -0.75 12.159 -0.75 12.164 C -0.75 12.169 -0.75 12.173 -0.75 12.178 C -0.75 12.183 -0.75 12.188 -0.75 12.193 C -0.75 12.198 -0.75 12.203 -0.75 12.207 C -0.75 12.212 -0.75 12.217 -0.75 12.222 C -0.75 12.227 -0.75 12.232 -0.75 12.236 C -0.75 12.241 -0.75 12.246 -0.75 12.251 C -0.75 12.256 -0.75 12.261 -0.75 12.265 C -0.75 12.27 -0.75 12.275 -0.75 12.28 C -0.75 12.285 -0.75 12.29 -0.75 12.294 C -0.75 12.299 -0.75 12.304 -0.75 12.309 C -0.75 12.314 -0.75 12.318 -0.75 12.323 C -0.75 12.328 -0.75 12.333 -0.75 12.338 C -0.75 12.343 -0.75 12.347 -0.75 12.352 C -0.75 12.357 -0.75 12.362 -0.75 12.367 C -0.75 12.371 -0.75 12.376 -0.75 12.381 C -0.75 12.386 -0.75 12.391 -0.75 12.395 C -0.75 12.4 -0.75 12.405 -0.75 12.41 C -0.75 12.415 -0.75 12.42 -0.75 12.424 C -0.75 12.429 -0.75 12.434 -0.75 12.439 C -0.75 12.444 -0.75 12.448 -0.75 12.453 C -0.75 12.458 -0.75 12.463 -0.75 12.467 C -0.75 12.472 -0.75 12.477 -0.75 12.482 C -0.75 12.487 -0.75 12.491 -0.75 12.496 C -0.75 12.501 -0.75 12.506 -0.75 12.511 C -0.75 12.515 -0.75 12.52 -0.75 12.525 C -0.75 12.53 -0.75 12.535 -0.75 12.539 C -0.75 12.544 -0.75 12.549 -0.75 12.554 C -0.75 12.558 -0.75 12.563 -0.75 12.568 C -0.75 12.573 -0.75 12.578 -0.75 12.582 C -0.75 12.587 -0.75 12.592 -0.75 12.597 C -0.75 12.601 -0.75 12.606 -0.75 12.611 C -0.75 12.616 -0.75 12.62 -0.75 12.625 C -0.75 12.63 -0.75 12.635 -0.75 12.64 C -0.75 12.644 -0.75 12.649 -0.75 12.654 C -0.75 12.659 -0.75 12.663 -0.75 12.668 C -0.75 12.673 -0.75 12.678 -0.75 12.682 C -0.75 12.687 -0.75 12.692 -0.75 12.697 C -0.75 12.701 -0.75 12.706 -0.75 12.711 C -0.75 12.716 -0.75 12.72 -0.75 12.725 C -0.75 12.73 -0.75 12.735 -0.75 12.739 C -0.75 12.744 -0.75 12.749 -0.75 12.754 C -0.75 12.758 -0.75 12.763 -0.75 12.768 C -0.75 12.773 -0.75 12.777 -0.75 12.782 C -0.75 12.787 -0.75 12.792 -0.75 12.796 C -0.75 12.801 -0.75 12.806 -0.75 12.81 C -0.75 12.815 -0.75 12.82 -0.75 12.825 C -0.75 12.829 -0.75 12.834 -0.75 12.839 C -0.75 12.844 -0.75 12.848 -0.75 12.853 C -0.75 12.858 -0.75 12.862 -0.75 12.867 C -0.75 12.872 -0.75 12.877 -0.75 12.881 C -0.75 12.886 -0.75 12.891 -0.75 12.896 C -0.75 12.9 -0.75 12.905 -0.75 12.91 C -0.75 12.914 -0.75 12.919 -0.75 12.924 C -0.75 12.929 -0.75 12.933 -0.75 12.938 C -0.75 12.943 -0.75 12.947 -0.75 12.952 C -0.75 12.957 -0.75 12.961 -0.75 12.966 C -0.75 12.971 -0.75 12.976 -0.75 12.98 C -0.75 12.985 -0.75 12.99 -0.75 12.994 C -0.75 12.999 -0.75 13.004 -0.75 13.009 C -0.75 13.013 -0.75 13.018 -0.75 13.023 C -0.75 13.027 -0.75 13.032 -0.75 13.037 C -0.75 13.041 -0.75 13.046 -0.75 13.051 C -0.75 13.055 -0.75 13.06 -0.75 13.065 C -0.75 13.069 -0.75 13.074 -0.75 13.079 C -0.75 13.084 -0.75 13.088 -0.75 13.093 C -0.75 13.098 -0.75 13.102 -0.75 13.107 C -0.75 13.112 -0.75 13.116 -0.75 13.121 C -0.75 13.126 -0.75 13.13 -0.75 13.135 C -0.75 13.14 -0.75 13.144 -0.75 13.149 C -0.75 13.154 -0.75 13.158 -0.75 13.163 C -0.75 13.168 -0.75 13.172 -0.75 13.177 C -0.75 13.182 -0.75 13.186 -0.75 13.191 C -0.75 13.196 -0.75 13.2 -0.75 13.205 C -0.75 13.21 -0.75 13.214 -0.75 13.219 C -0.75 13.224 -0.75 13.228 -0.75 13.233 C -0.75 13.238 -0.75 13.242 -0.75 13.247 C -0.75 13.252 -0.75 13.256 -0.75 13.261 C -0.75 13.266 -0.75 13.27 -0.75 13.275 C -0.75 13.28 -0.75 13.284 -0.75 13.289 C -0.75 13.293 -0.75 13.298 -0.75 13.303 C -0.75 13.307 -0.75 13.312 -0.75 13.317 C -0.75 13.321 -0.75 13.326 -0.75 13.331 C -0.75 13.335 -0.75 13.34 -0.75 13.345 C -0.75 13.349 -0.75 13.354 -0.75 13.358 C -0.75 13.363 -0.75 13.368 -0.75 13.372 C -0.75 13.377 -0.75 13.382 -0.75 13.386 C -0.75 13.391 -0.75 13.395 -0.75 13.4 C -0.75 13.405 -0.75 13.409 -0.75 13.414 C -0.75 13.419 -0.75 13.423 -0.75 13.428 C -0.75 13.432 -0.75 13.437 -0.75 13.442 C -0.75 13.446 -0.75 13.451 -0.75 13.456 C -0.75 13.46 -0.75 13.465 -0.75 13.469 C -0.75 13.474 -0.75 13.479 -0.75 13.483 C -0.75 13.488 -0.75 13.492 -0.75 13.497 C -0.75 13.502 -0.75 13.506 -0.75 13.511 C -0.75 13.516 -0.75 13.52 -0.75 13.525 C -0.75 13.529 -0.75 13.534 -0.75 13.539 C -0.75 13.543 -0.75 13.548 -0.75 13.552 C -0.75 13.557 -0.75 13.562 -0.75 13.566 C -0.75 13.571 -0.75 13.575 -0.75 13.58 C -0.75 13.585 -0.75 13.589 -0.75 13.594 C -0.75 13.598 -0.75 13.603 -0.75 13.607 C -0.75 13.612 -0.75 13.617 -0.75 13.621 C -0.75 13.626 -0.75 13.63 -0.75 13.635 C -0.75 13.64 -0.75 13.644 -0.75 13.649 C -0.75 13.653 -0.75 13.658 -0.75 13.662 C -0.75 13.667 -0.75 13.672 -0.75 13.676 C -0.75 13.681 -0.75 13.685 -0.75 13.69 C -0.75 13.694 -0.75 13.699 -0.75 13.704 C -0.75 13.708 -0.75 13.713 -0.75 13.717 C -0.75 13.722 -0.75 13.726 -0.75 13.731 C -0.75 13.736 -0.75 13.74 -0.75 13.745 C -0.75 13.749 -0.75 13.754 -0.75 13.758 C -0.75 13.763 -0.75 13.768 -0.75 13.772 C -0.75 13.777 -0.75 13.781 -0.75 13.786 C -0.75 13.79 -0.75 13.795 -0.75 13.799 C -0.75 13.804 -0.75 13.809 -0.75 13.813 C -0.75 13.818 -0.75 13.822 -0.75 13.827 C -0.75 13.831 -0.75 13.836 -0.75 13.84 C -0.75 13.845 -0.75 13.849 -0.75 13.854 C -0.75 13.859 -0.75 13.863 -0.75 13.868 C -0.75 13.872 -0.75 13.877 -0.75 13.881 C -0.75 13.886 -0.75 13.89 -0.75 13.895 C -0.75 13.899 -0.75 13.904 -0.75 13.908 C -0.75 13.913 -0.75 13.918 -0.75 13.922 C -0.75 13.927 -0.75 13.931 -0.75 13.936 C -0.75 13.94 -0.75 13.945 -0.75 13.949 C -0.75 13.954 -0.75 13.958 -0.75 13.963 C -0.75 13.967 -0.75 13.972 -0.75 13.976 C -0.75 13.981 -0.75 13.985 -0.75 13.99 C -0.75 13.994 -0.75 13.999 -0.75 14.003 C -0.75 14.008 -0.75 14.012 -0.75 14.017 C -0.75 14.022 -0.75 14.026 -0.75 14.031 C -0.75 14.035 -0.75 14.04 -0.75 14.044 C -0.75 14.049 -0.75 14.053 -0.75 14.058 C -0.75 14.062 -0.75 14.067 -0.75 14.071 C -0.75 14.076 -0.75 14.08 -0.75 14.085 C -0.75 14.089 -0.75 14.094 -0.75 14.098 C -0.75 14.103 -0.75 14.107 -0.75 14.112 C -0.75 14.116 -0.75 14.121 -0.75 14.125 C -0.75 14.13 -0.75 14.134 -0.75 14.139 C -0.75 14.143 -0.75 14.148 -0.75 14.152 C -0.75 14.156 -0.75 14.161 -0.75 14.165 C -0.75 14.17 -0.75 14.174 -0.75 14.179 C -0.75 14.183 -0.75 14.188 -0.75 14.192 C -0.75 14.197 -0.75 14.201 -0.75 14.206 C -0.75 14.21 -0.75 14.215 -0.75 14.219 C -0.75 14.224 -0.75 14.228 -0.75 14.233 C -0.75 14.237 -0.75 14.242 -0.75 14.246 C -0.75 14.251 -0.75 14.255 -0.75 14.259 C -0.75 14.264 -0.75 14.268 -0.75 14.273 C -0.75 14.277 -0.75 14.282 -0.75 14.286 C -0.75 14.291 -0.75 14.295 -0.75 14.3 C -0.75 14.304 -0.75 14.309 -0.75 14.313 C -0.75 14.317 -0.75 14.322 -0.75 14.326 C -0.75 14.331 -0.75 14.335 -0.75 14.34 C -0.75 14.344 -0.75 14.349 -0.75 14.353 C -0.75 14.358 -0.75 14.362 -0.75 14.366 C -0.75 14.371 -0.75 14.375 -0.75 14.38 C -0.75 14.384 -0.75 14.389 -0.75 14.393 C -0.75 14.398 -0.75 14.402 -0.75 14.406 C -0.75 14.411 -0.75 14.415 -0.75 14.42 C -0.75 14.424 -0.75 14.429 -0.75 14.433 C -0.75 14.437 -0.75 14.442 -0.75 14.446 C -0.75 14.451 -0.75 14.455 -0.75 14.46 C -0.75 14.464 -0.75 14.468 -0.75 14.473 C -0.75 14.477 -0.75 14.482 -0.75 14.486 C -0.75 14.491 -0.75 14.495 -0.75 14.499 C -0.75 14.504 -0.75 14.508 -0.75 14.513 C -0.75 14.517 -0.75 14.522 -0.75 14.526 C -0.75 14.53 -0.75 14.535 -0.75 14.539 C -0.75 14.544 -0.75 14.548 -0.75 14.552 C -0.75 14.557 -0.75 14.561 -0.75 14.566 C -0.75 14.57 -0.75 14.574 -0.75 14.579 C -0.75 14.583 -0.75 14.588 -0.75 14.592 C -0.75 14.596 -0.75 14.601 -0.75 14.605 C -0.75 14.61 -0.75 14.614 -0.75 14.618 C -0.75 14.623 -0.75 14.627 -0.75 14.632 C -0.75 14.636 -0.75 14.64 -0.75 14.645 C -0.75 14.649 -0.75 14.654 -0.75 14.658 C -0.75 14.662 -0.75 14.667 -0.75 14.671 C -0.75 14.676 -0.75 14.68 -0.75 14.684 C -0.75 14.689 -0.75 14.693 -0.75 14.698 C -0.75 14.702 -0.75 14.706 -0.75 14.711 C -0.75 14.715 -0.75 14.719 -0.75 14.724 C -0.75 14.728 -0.75 14.733 -0.75 14.737 C -0.75 14.741 -0.75 14.746 -0.75 14.75 C -0.75 14.754 -0.75 14.759 -0.75 14.763 C -0.75 14.768 -0.75 14.772 -0.75 14.776 C -0.75 14.781 -0.75 14.785 -0.75 14.789 C -0.75 14.794 -0.75 14.798 -0.75 14.802 C -0.75 14.807 -0.75 14.811 -0.75 14.816 C -0.75 14.82 -0.75 14.824 -0.75 14.829 C -0.75 14.833 -0.75 14.837 -0.75 14.842 C -0.75 14.846 -0.75 14.85 -0.75 14.855 C -0.75 14.859 -0.75 14.863 -0.75 14.868 C -0.75 14.872 -0.75 14.877 -0.75 14.881 C -0.75 14.885 -0.75 14.89 -0.75 14.894 C -0.75 14.898 -0.75 14.903 -0.75 14.907 C -0.75 14.911 -0.75 14.916 -0.75 14.92 C -0.75 14.924 -0.75 14.929 -0.75 14.933 C -0.75 14.937 -0.75 14.942 -0.75 14.946 C -0.75 14.95 -0.75 14.955 -0.75 14.959 C -0.75 14.963 -0.75 14.968 -0.75 14.972 C -0.75 14.976 -0.75 14.981 -0.75 14.985 C -0.75 14.989 -0.75 14.994 -0.75 14.998 C -0.75 15.002 -0.75 15.007 -0.75 15.011 C -0.75 15.015 -0.75 15.02 -0.75 15.024 C -0.75 15.028 -0.75 15.033 -0.75 15.037 C -0.75 15.041 -0.75 15.045 -0.75 15.05 C -0.75 15.054 -0.75 15.058 -0.75 15.063 C -0.75 15.067 -0.75 15.071 -0.75 15.076 C -0.75 15.08 -0.75 15.084 -0.75 15.089 C -0.75 15.093 -0.75 15.097 -0.75 15.101 C -0.75 15.106 -0.75 15.11 -0.75 15.114 C -0.75 15.119 -0.75 15.123 -0.75 15.127 C -0.75 15.132 -0.75 15.136 -0.75 15.14 C -0.75 15.144 -0.75 15.149 -0.75 15.153 C -0.75 15.157 -0.75 15.162 -0.75 15.166 C -0.75 15.17 -0.75 15.175 -0.75 15.179 C -0.75 15.183 -0.75 15.187 -0.75 15.192 C -0.75 15.196 -0.75 15.2 -0.75 15.205 C -0.75 15.209 -0.75 15.213 -0.75 15.217 C -0.75 15.222 -0.75 15.226 -0.75 15.23 C -0.75 15.235 -0.75 15.239 -0.75 15.243 C -0.75 15.247 -0.75 15.252 -0.75 15.256 C -0.75 15.26 -0.75 15.264 -0.75 15.269 C -0.75 15.273 -0.75 15.277 -0.75 15.282 C -0.75 15.286 -0.75 15.29 -0.75 15.294 C -0.75 15.299 -0.75 15.303 -0.75 15.307 C -0.75 15.311 -0.75 15.316 -0.75 15.32 C -0.75 15.324 -0.75 15.328 -0.75 15.333 C -0.75 15.337 -0.75 15.341 -0.75 15.345 C -0.75 15.35 -0.75 15.354 -0.75 15.358 C -0.75 15.362 -0.75 15.367 -0.75 15.371 C -0.75 15.375 -0.75 15.38 -0.75 15.384 C -0.75 15.388 -0.75 15.392 -0.75 15.396 C -0.75 15.401 -0.75 15.405 -0.75 15.409 C -0.75 15.413 -0.75 15.418 -0.75 15.422 C -0.75 15.426 -0.75 15.43 -0.75 15.435 C -0.75 15.439 -0.75 15.443 -0.75 15.447 C -0.75 15.452 -0.75 15.456 -0.75 15.46 C -0.75 15.464 -0.75 15.469 -0.75 15.473 C -0.75 15.477 -0.75 15.481 -0.75 15.485 C -0.75 15.49 -0.75 15.494 -0.75 15.498 C -0.75 15.502 -0.75 15.507 -0.75 15.511 C -0.75 15.515 -0.75 15.519 -0.75 15.524 C -0.75 15.528 -0.75 15.532 -0.75 15.536 C -0.75 15.54 -0.75 15.545 -0.75 15.549 C -0.75 15.553 -0.75 15.557 -0.75 15.561 C -0.75 15.566 -0.75 15.57 -0.75 15.574 C -0.75 15.578 -0.75 15.583 -0.75 15.587 C -0.75 15.591 -0.75 15.595 -0.75 15.599 C -0.75 15.604 -0.75 15.608 -0.75 15.612 C -0.75 15.616 -0.75 15.62 -0.75 15.625 C -0.75 15.629 -0.75 15.633 -0.75 15.637 C -0.75 15.641 -0.75 15.646 -0.75 15.65 C -0.75 15.654 -0.75 15.658 -0.75 15.662 C -0.75 15.667 -0.75 15.671 -0.75 15.675 C -0.75 15.679 -0.75 15.683 -0.75 15.687 C -0.75 15.692 -0.75 15.696 -0.75 15.7 C -0.75 15.704 -0.75 15.708 -0.75 15.713 C -0.75 15.717 -0.75 15.721 -0.75 15.725 C -0.75 15.729 -0.75 15.733 -0.75 15.738 C -0.75 15.742 -0.75 15.746 -0.75 15.75 C -0.75 15.754 -0.75 15.759 -0.75 15.763 C -0.75 15.767 -0.75 15.771 -0.75 15.775 C -0.75 15.779 -0.75 15.784 -0.75 15.788 C -0.75 15.792 -0.75 15.796 -0.75 15.8 C -0.75 15.804 -0.75 15.809 -0.75 15.813 C -0.75 15.817 -0.75 15.821 -0.75 15.825 C -0.75 15.829 -0.75 15.834 -0.75 15.838 C -0.75 15.842 -0.75 15.846 -0.75 15.85 C -0.75 15.854 -0.75 15.858 -0.75 15.863 C -0.75 15.867 -0.75 15.871 -0.75 15.875 C -0.75 15.879 -0.75 15.883 -0.75 15.888 C -0.75 15.892 -0.75 15.896 -0.75 15.9 C -0.75 15.904 -0.75 15.908 -0.75 15.912 C -0.75 15.917 -0.75 15.921 -0.75 15.925 C -0.75 15.929 -0.75 15.933 -0.75 15.937 C -0.75 15.941 -0.75 15.946 -0.75 15.95 C -0.75 15.954 -0.75 15.958 -0.75 15.962 C -0.75 15.966 -0.75 15.97 -0.75 15.974 C -0.75 15.979 -0.75 15.983 -0.75 15.987 C -0.75 15.991 -0.75 15.995 -0.75 15.999 C -0.75 16.003 -0.75 16.007 -0.75 16.012 C -0.75 16.016 -0.75 16.02 -0.75 16.024 C -0.75 16.028 -0.75 16.032 -0.75 16.036 C -0.75 16.04 -0.75 16.045 -0.75 16.049 C -0.75 16.053 -0.75 16.057 -0.75 16.061 C -0.75 16.065 -0.75 16.069 -0.75 16.073 C -0.75 16.077 -0.75 16.082 -0.75 16.086 C -0.75 16.09 -0.75 16.094 -0.75 16.098 C -0.75 16.102 -0.75 16.106 -0.75 16.11 C -0.75 16.114 -0.75 16.118 -0.75 16.123 C -0.75 16.127 -0.75 16.131 -0.75 16.135 C -0.75 16.139 -0.75 16.143 -0.75 16.147 C -0.75 16.151 -0.75 16.155 -0.75 16.159 C -0.75 16.163 -0.75 16.168 -0.75 16.172 C -0.75 16.176 -0.75 16.18 -0.75 16.184 C -0.75 16.188 -0.75 16.192 -0.75 16.196 C -0.75 16.2 -0.75 16.204 -0.75 16.208 C -0.75 16.213 -0.75 16.217 -0.75 16.221 C -0.75 16.225 -0.75 16.229 -0.75 16.233 C -0.75 16.237 -0.75 16.241 -0.75 16.245 C -0.75 16.249 -0.75 16.253 -0.75 16.257 C -0.75 16.261 -0.75 16.266 -0.75 16.27 C -0.75 16.274 -0.75 16.278 -0.75 16.282 C -0.75 16.286 -0.75 16.29 -0.75 16.294 C -0.75 16.298 -0.75 16.302 -0.75 16.306 C -0.75 16.31 -0.75 16.314 -0.75 16.318 C -0.75 16.322 -0.75 16.326 -0.75 16.331 C -0.75 16.335 -0.75 16.339 -0.75 16.343 C -0.75 16.347 -0.75 16.351 -0.75 16.355 C -0.75 16.359 -0.75 16.363 -0.75 16.367 C -0.75 16.371 -0.75 16.375 -0.75 16.379 C -0.75 16.383 -0.75 16.387 -0.75 16.391 C -0.75 16.395 -0.75 16.399 -0.75 16.403 C -0.75 16.407 -0.75 16.411 -0.75 16.415 C -0.75 16.42 -0.75 16.424 -0.75 16.428 C -0.75 16.432 -0.75 16.436 -0.75 16.44 C -0.75 16.444 -0.75 16.448 -0.75 16.452 C -0.75 16.456 -0.75 16.46 -0.75 16.464 C -0.75 16.468 -0.75 16.472 -0.75 16.476 C -0.75 16.48 -0.75 16.484 -0.75 16.488 C -0.75 16.492 -0.75 16.496 -0.75 16.5 C -0.75 16.504 -0.75 16.508 -0.75 16.512 C -0.75 16.516 -0.75 16.52 -0.75 16.524 C -0.75 16.528 -0.75 16.532 -0.75 16.536 C -0.75 16.54 -0.75 16.544 -0.75 16.548 C -0.75 16.552 -0.75 16.556 -0.75 16.56 C -0.75 16.564 -0.75 16.568 -0.75 16.572 C -0.75 16.576 -0.75 16.58 -0.75 16.584 C -0.75 16.588 -0.75 16.592 -0.75 16.596 C -0.75 16.6 -0.75 16.604 -0.75 16.608 C -0.75 16.612 -0.75 16.616 -0.75 16.62 C -0.75 16.624 -0.75 16.628 -0.75 16.632 C -0.75 16.636 -0.75 16.64 -0.75 16.644 C -0.75 16.648 -0.75 16.652 -0.75 16.656 C -0.75 16.66 -0.75 16.664 -0.75 16.668 C -0.75 16.672 -0.75 16.676 -0.75 16.68 C -0.75 16.684 -0.75 16.688 -0.75 16.692 C -0.75 16.696 -0.75 16.7 -0.75 16.704 C -0.75 16.708 -0.75 16.712 -0.75 16.716 C -0.75 16.72 -0.75 16.724 -0.75 16.728 C -0.75 16.732 -0.75 16.736 -0.75 16.74 C -0.75 16.744 -0.75 16.748 -0.75 16.752 C -0.75 16.756 -0.75 16.76 -0.75 16.764 C -0.75 16.768 -0.75 16.772 -0.75 16.776 C -0.75 16.779 -0.75 16.783 -0.75 16.787 C -0.75 16.791 -0.75 16.795 -0.75 16.799 C -0.75 16.803 -0.75 16.807 -0.75 16.811 C -0.75 16.815 -0.75 16.819 -0.75 16.823 C -0.75 16.827 -0.75 16.831 -0.75 16.835 C -0.75 16.839 -0.75 16.843 -0.75 16.847 C -0.75 16.851 -0.75 16.855 -0.75 16.859 C -0.75 16.862 -0.75 16.866 -0.75 16.87 C -0.75 16.874 -0.75 16.878 -0.75 16.882 C -0.75 16.886 -0.75 16.89 -0.75 16.894 C -0.75 16.898 -0.75 16.902 -0.75 16.906 C -0.75 16.91 -0.75 16.914 -0.75 16.918 C -0.75 16.922 -0.75 16.925 -0.75 16.929 C -0.75 16.933 -0.75 16.937 -0.75 16.941 C -0.75 16.945 -0.75 16.949 -0.75 16.953 C -0.75 16.957 -0.75 16.961 -0.75 16.965 C -0.75 16.969 -0.75 16.973 -0.75 16.976 C -0.75 16.98 -0.75 16.984 -0.75 16.988 C -0.75 16.992 -0.75 16.996 -0.75 17 L 0 17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.118,
    height: 1.500,
    viewBox: "0 -0.750 4.118 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.088,
      top: 12,
      width: 4.118,
      height: 1.5,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 4.118 0.75 C 4.532 0.75 4.868 0.414 4.868 0 C 4.868 -0.414 4.532 -0.75 4.118 -0.75 L 4.118 0 L 4.118 0.75 Z M 0 0 L 0 0.75 L 4.118 0.75 L 4.118 0 L 4.118 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.177,
    height: 1.500,
    viewBox: "0 -0.750 6.177 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.088,
      top: 8.5,
      width: 6.177,
      height: 1.5,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 6.177 0.75 C 6.591 0.75 6.927 0.414 6.927 0 C 6.927 -0.414 6.591 -0.75 6.177 -0.75 L 6.177 0 L 6.177 0.75 Z M 0 0 L 0 0.75 L 6.177 0.75 L 6.177 0 L 6.177 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}

// figma node: 19:1949 notifications
function Notifications(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--schemes-on-surface)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 20,
    viewBox: "0 0 16 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2,
      width: 16,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 17 L 0 15 L 2 15 L 2 8 C 2 6.617 2.417 5.392 3.25 4.325 C 4.083 3.242 5.167 2.533 6.5 2.2 L 6.5 1.5 C 6.5 1.083 6.642 0.733 6.925 0.45 C 7.225 0.15 7.583 0 8 0 C 8.417 0 8.767 0.15 9.05 0.45 C 9.35 0.733 9.5 1.083 9.5 1.5 L 9.5 2.2 C 10.833 2.533 11.917 3.242 12.75 4.325 C 13.583 5.392 14 6.617 14 8 L 14 15 L 16 15 L 16 17 L 0 17 Z M 8 20 C 7.45 20 6.975 19.808 6.575 19.425 C 6.192 19.025 6 18.55 6 18 L 10 18 C 10 18.55 9.8 19.025 9.4 19.425 C 9.017 19.808 8.55 20 8 20 Z M 4 15 L 12 15 L 12 8 C 12 6.9 11.608 5.958 10.825 5.175 C 10.042 4.392 9.1 4 8 4 C 6.9 4 5.958 4.392 5.175 5.175 C 4.392 5.958 4 6.9 4 8 L 4 15 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 19:2312 24/Pin
function Pin24(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(51,54,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 2,
      width: 17.678,
      height: 17.678,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 12,
    viewBox: "0 0 10 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,10.607,0)",
      transformOrigin: "0 0",
      width: 10,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 C 9 1.364 8.317 2.569 7.275 3.291 L 7.648 7.758 C 9.061 8.642 10 10.211 10 12 L 0 12 C 0 10.21 0.94 8.64 2.354 7.757 L 2.726 3.291 C 1.683 2.569 1 1.365 1 0 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.5,
      height: 8,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector")));
}

// figma node: 19:1840 Icon/Default/16/Chevron/Down
function IconDefault16ChevronDown(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(76,76,76)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 9.999 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 19:1848 🟢 Small button - v.1.1 (36 variants)
const __venc_SmallButtonV11 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SmallButtonV11 = p => "buttonType=" + __venc_SmallButtonV11(p.buttonType) + '|' + "state=" + __venc_SmallButtonV11(p.state) + '|' + "icon=" + __venc_SmallButtonV11(p.icon);
function SmallButtonV11(_p = {}) {
  const props = {
    ..._p,
    buttonType: _p.buttonType ?? "outline",
    state: _p.state ?? "enabled",
    icon: _p.icon ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(12,108,206)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(12,108,206)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16ChevronDown, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(12,108,206)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16ChevronDown, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(4,88,173)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(4,88,173)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16ChevronDown, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(4,88,173)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16ChevronDown, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(6,67,132)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(6,67,132)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16ChevronDown, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(6,67,132)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconDefault16ChevronDown, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(247,247,247)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(204,204,204)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(247,247,247)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(204,204,204)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(247,247,247)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(204,204,204)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(247,247,247)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(247,247,247)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(247,247,247)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(247,247,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(247,247,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(247,247,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(204,204,204)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      lineHeight: 1.399999976158142,
      color: "rgb(204,204,204)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(204,204,204)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(76,76,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(204,204,204)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"));
  const __impls = {
    // figma: Button type=Primary, State=Enabled, Icon=Default
    "buttonType=primary|state=enabled|icon=default": __body0,
    // figma: Button type=Primary, State=Enabled, Icon=Right
    "buttonType=primary|state=enabled|icon=right": __body1,
    // figma: Button type=Primary, State=Enabled, Icon=Left
    "buttonType=primary|state=enabled|icon=left": __body2,
    // figma: Button type=Primary, State=Hover, Icon=Default
    "buttonType=primary|state=hover|icon=default": __body3,
    // figma: Button type=Primary, State=Hover, Icon=Right
    "buttonType=primary|state=hover|icon=right": __body4,
    // figma: Button type=Primary, State=Hover, Icon=Left
    "buttonType=primary|state=hover|icon=left": __body5,
    // figma: Button type=Primary, State=Pressed, Icon=Default
    "buttonType=primary|state=pressed|icon=default": __body6,
    // figma: Button type=Primary, State=Pressed, Icon=Right
    "buttonType=primary|state=pressed|icon=right": __body7,
    // figma: Button type=Primary, State=Pressed, Icon=Left
    "buttonType=primary|state=pressed|icon=left": __body8,
    // figma: Button type=Primary, State=Disabled, Icon=Default
    "buttonType=primary|state=disabled|icon=default": __body9,
    // figma: Button type=Primary, State=Disabled, Icon=Right
    "buttonType=primary|state=disabled|icon=right": __body10,
    // figma: Button type=Primary, State=Disabled, Icon=Left
    "buttonType=primary|state=disabled|icon=left": __body11,
    // figma: Button type=Secondary, State=Enabled, Icon=Default
    "buttonType=secondary|state=enabled|icon=default": __body12,
    // figma: Button type=Secondary, State=Enabled, Icon=Right
    "buttonType=secondary|state=enabled|icon=right": __body13,
    // figma: Button type=Secondary, State=Enabled, Icon=Left
    "buttonType=secondary|state=enabled|icon=left": __body14,
    // figma: Button type=Secondary, State=Hover, Icon=Default
    "buttonType=secondary|state=hover|icon=default": __body15,
    // figma: Button type=Secondary, State=Hover, Icon=Right
    "buttonType=secondary|state=hover|icon=right": __body16,
    // figma: Button type=Secondary, State=Hover, Icon=Left
    "buttonType=secondary|state=hover|icon=left": __body17,
    // figma: Button type=Secondary, State=Pressed, Icon=Default
    "buttonType=secondary|state=pressed|icon=default": __body18,
    // figma: Button type=Secondary, State=Pressed, Icon=Right
    "buttonType=secondary|state=pressed|icon=right": __body19,
    // figma: Button type=Secondary, State=Pressed, Icon=Left
    "buttonType=secondary|state=pressed|icon=left": __body20,
    // figma: Button type=Secondary, State=Disabled, Icon=Default
    "buttonType=secondary|state=disabled|icon=default": __body9,
    // figma: Button type=Secondary, State=Disabled, Icon=Right
    "buttonType=secondary|state=disabled|icon=right": __body10,
    // figma: Button type=Secondary, State=Disabled, Icon=Left
    "buttonType=secondary|state=disabled|icon=left": __body11,
    // figma: Button type=Outline, State=Enabled, Icon=Default
    "buttonType=outline|state=enabled|icon=default": __body21,
    // figma: Button type=Outline, State=Enabled, Icon=Right
    "buttonType=outline|state=enabled|icon=right": __body22,
    // figma: Button type=Outline, State=Enabled, Icon=Left
    "buttonType=outline|state=enabled|icon=left": __body23,
    // figma: Button type=Outline, State=Hover, Icon=Default
    "buttonType=outline|state=hover|icon=default": __body24,
    // figma: Button type=Outline, State=Hover, Icon=Right
    "buttonType=outline|state=hover|icon=right": __body25,
    // figma: Button type=Outline, State=Hover, Icon=Left
    "buttonType=outline|state=hover|icon=left": __body26,
    // figma: Button type=Outline, State=Pressed, Icon=Default
    "buttonType=outline|state=pressed|icon=default": __body21,
    // figma: Button type=Outline, State=Pressed, Icon=Right
    "buttonType=outline|state=pressed|icon=right": __body22,
    // figma: Button type=Outline, State=Pressed, Icon=Left
    "buttonType=outline|state=pressed|icon=left": __body23,
    // figma: Button type=Outline, State=Disabled, Icon=Default
    "buttonType=outline|state=disabled|icon=default": __body27,
    // figma: Button type=Outline, State=Disabled, Icon=Right
    "buttonType=outline|state=disabled|icon=right": __body28,
    // figma: Button type=Outline, State=Disabled, Icon=Left
    "buttonType=outline|state=disabled|icon=left": __body29
  };
  return (__impls[__vkey_SmallButtonV11(props)] ?? __body21)();
}

// figma node: 15:45 Macquarie
function Macquarie(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 13745,
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
    className: "fig-asset-35088e744b8debf5-cec5d254",
    style: {
      position: "relative",
      width: 205.765,
      height: 44,
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
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Broker Portal:\nReducing application handling time")), /*#__PURE__*/React.createElement("div", {
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
  }, "When submitting an application on behalf of a client, brokers provide a set of mandatory upfront documents, including financial statements, income details, and identification. During assessment, if discrepancies arise or extra information is needed, an \"outstanding information\" flag is raised on the application. This means the broker must submit further documentation to Macquarie's Credit Assessment Team. This was a chance to make that process intuitive and simple for brokerages.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Design strategy, User research, UI and UX")), /*#__PURE__*/React.createElement("div", {
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
  }, "2024 Q3 - 2 months")), /*#__PURE__*/React.createElement("div", {
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
  }, "Me, PM, BA, 2x FE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 331.703,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mac-lal-diagram.png",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      zIndex: 3,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 124.886,
      width: 1028,
      height: 36.912,
      display: "flex",
      flexDirection: "row",
      gap: 73.82406616210938,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Submission"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Mandatory \u2028documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 74.439,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Credit assessment"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Requesting additional documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Conditional approval"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Formal approval"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11.60755729675293,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Settled")), /*#__PURE__*/React.createElement("svg", {
    width: 966.480,
    height: 2.461,
    viewBox: "0 -1.230 966.480 2.461",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.998,
      top: 107.66,
      width: 966.48,
      height: 2.4608020782470703,
      color: "rgb(29,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1.23 L 0 0 L 966.48 0 L 966.48 -1.23 L 966.48 -2.461 L 0 -2.461 L 0 -1.23 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 143.342,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 285.453,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 433.716,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 652.112,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 831.136,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 966.48,
      top: 99.662,
      width: 15.995,
      height: 15.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.995,
      height: 15.995,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.230px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.691,
      top: 3.691,
      width: 8.613,
      height: 8.613,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 265,
      top: 0,
      width: 481.702,
      height: 32.606,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24.608020782470703,
      whiteSpace: "nowrap",
      lineHeight: "32.606px",
      color: "rgb(0,0,0)"
    }
  }, "Home Loan Application Lifecycle (LAL)"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 102.18,
      height: 102.18,
      transform: "matrix(0.918,-0.396,0.396,0.918,398.964,218.024)",
      transformOrigin: "0 0"
    }
  }, /*#__PURE__*/React.createElement(Arrow3, {
    style: {
      transform: "scale(0.426, 0.426)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 63.366,
      top: 49.831,
      width: 213.787,
      height: 115.683,
      opacity: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 58.124,
      top: 70.406,
      width: 52.126,
      height: 20,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 1.9993470907211304,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "Brokers are required to log into the Broker Portal to review the outstanding information task that is assigned to them. The portal presents messaging to the Broker on a list of documents hat are required of them - that is manually-typed by a credit assessor. "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 146.666,
      top: 46.556,
      width: 67.121,
      height: 16,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 1.9993470907211304,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "As a call-to-action in the portal, the user is able to provide documents to a group inbox that is viewed by the credit-assessor team. Which each document will be manually assessed and classified according to the requested list."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 146.666,
      top: 95.683,
      width: 66.55,
      height: 20,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 1.9993470907211304,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "Brokers can log onto NextGen, a provider that houses the document request capability for Macquarie. NextGen allows the Broker to manually upload their documents as a bulk upload feature which then notifies the credit team to review and classify the documents in NextGen."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0.286,
      top: 70.406,
      width: 46.842,
      height: 12,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 1.9993470907211304,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "Broker\u2019s are contacted through an automated email, that details that a task requires their attention in the Broker Portal."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 59.695,
      width: 42.129,
      height: 4,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 2.284968137741089,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "Notified of outstanding information"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 58.124,
      top: 59.695,
      width: 48.413,
      height: 4,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 2.284968137741089,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "Review outstanding information request"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 146.666,
      top: 37.845,
      width: 48.413,
      height: 4,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 2.284968137741089,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "Email documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 146.666,
      top: 86.686,
      width: 53.84,
      height: 4,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 2.284968137741089,
      lineHeight: "3.999px",
      color: "rgb(0,0,0)"
    }
  }, "NextGen | ApplyOnline"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 101.538,
      height: 7.569,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 5.7124199867248535,
      whiteSpace: "nowrap",
      lineHeight: "7.569px",
      color: "rgb(0,0,0)"
    }
  }, "Requesting additional documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.998,
      width: 101.538,
      height: 7.569,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 3.427452325820923,
      whiteSpace: "nowrap",
      lineHeight: "7.569px",
      color: "rgb(0,0,0)"
    }
  }, "Current state"), /*#__PURE__*/React.createElement("svg", {
    width: 120.960,
    height: 0.571,
    viewBox: "0 -0.286 120.960 0.571",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.286,
      top: 53.982,
      width: 120.96,
      height: 0.5712420344352722,
      color: "rgb(29,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.286 L 0 0 L 120.96 0 L 120.96 -0.286 L 120.96 -0.571 L 0 -0.571 L 0 -0.286 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 51.412,
      width: 3.713,
      height: 3.713,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.713,
      height: 3.713,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 0.286px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.857,
      top: 0.857,
      width: 1.999,
      height: 1.999,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56.981,
      top: 51.412,
      width: 3.713,
      height: 3.713,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.713,
      height: 3.713,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 0.286px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.857,
      top: 0.857,
      width: 1.999,
      height: 1.999,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.991,
    height: 18.565,
    viewBox: "0 0 27.991 18.565",
    fill: "none",
    style: {
      position: "absolute",
      left: 121.246,
      top: 35.131,
      width: 27.991,
      height: 18.565,
      color: "rgb(28,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.286 L -0.286 -0.286 L -0.286 0 L 0 0 Z M 0 18.565 L 0.286 18.565 L 0.286 0 L 0 0 L -0.286 0 L -0.286 18.565 L 0 18.565 Z M 0 0 L 0 0.286 L 27.991 0.286 L 27.991 0 L 27.991 -0.286 L 0 -0.286 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.991,
    height: 27.277,
    viewBox: "0 0 27.991 27.277",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,121.246,81.116)",
      transformOrigin: "0 0",
      width: 27.991,
      height: 27.277,
      color: "rgb(28,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.286 L -0.286 -0.286 L -0.286 0 L 0 0 Z M 0 27.277 L 0.286 27.277 L 0.286 0 L 0 0 L -0.286 0 L -0.286 27.277 L 0 27.277 Z M 0 0 L 0 0.286 L 27.991 0.286 L 27.991 0 L 27.991 -0.286 L 0 -0.286 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 146.666,
      top: 33.275,
      width: 3.713,
      height: 3.713,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.713,
      height: 3.713,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 0.286px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.857,
      top: 0.857,
      width: 1.999,
      height: 1.999,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 145.81,
      top: 79.26,
      width: 3.713,
      height: 3.713,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.713,
      height: 3.713,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 0.286px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.857,
      top: 0.857,
      width: 1.999,
      height: 1.999,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56.125,
      top: 24.421,
      width: 31.235,
      height: 24.94,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.992,
      height: 23.992,
      borderRadius: "50%",
      backgroundColor: "rgb(225,255,234)",
      boxShadow: "inset 0 0 0 0.143px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.571,
      top: 1.142,
      width: 30.664,
      height: 23.797,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.141,
      width: 23.747,
      height: 19.656,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.221,
      top: 0.48,
      width: 2.066,
      height: 2.078,
      opacity: 0.44,
      borderRadius: 0.19922636449337006,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.221,
      top: 7.81,
      width: 2.066,
      height: 2.078,
      opacity: 0.44,
      borderRadius: 0.19922636449337006,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 0.339,
    height: 0.206,
    viewBox: "0 0 0.339 0.206",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.924,
      top: 16.905,
      width: 0.339,
      height: 0.206,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.026 0.163 C -0.05 0.177 -0.057 0.208 -0.043 0.232 C -0.028 0.255 0.002 0.263 0.026 0.248 L 0 0.206 L -0.026 0.163 Z M 0.365 0.043 C 0.389 0.028 0.397 -0.002 0.382 -0.026 C 0.368 -0.05 0.337 -0.057 0.314 -0.043 L 0.339 0 L 0.365 0.043 Z M 0 0.206 L 0.026 0.248 L 0.365 0.043 L 0.339 0 L 0.314 -0.043 L -0.026 0.163 L 0 0.206 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.986,
    height: 9.468,
    viewBox: "0 0 4.986 9.468",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.224,
      top: 9.321,
      width: 4.986,
      height: 9.468,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.225 L 2.36 0 C 3.991 1.079 4.986 9.468 4.986 9.468 L 1.195 7.475 L 0 1.225 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.986,
    height: 9.468,
    viewBox: "0 0 4.986 9.468",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.224,
      top: 9.321,
      width: 4.986,
      height: 9.468,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.225 L -0.023 1.181 C -0.043 1.191 -0.053 1.213 -0.049 1.235 L 0 1.225 Z M 2.36 0 L 2.388 -0.042 C 2.372 -0.052 2.353 -0.053 2.337 -0.044 L 2.36 0 Z M 4.986 9.468 L 4.963 9.512 C 4.98 9.521 5 9.52 5.015 9.509 C 5.03 9.499 5.038 9.481 5.036 9.462 L 4.986 9.468 Z M 1.195 7.475 L 1.146 7.484 C 1.149 7.499 1.159 7.512 1.172 7.519 L 1.195 7.475 Z M 0 1.225 L 0.023 1.27 L 2.383 0.044 L 2.36 0 L 2.337 -0.044 L -0.023 1.181 L 0 1.225 Z M 2.36 0 L 2.332 0.042 C 2.526 0.17 2.715 0.411 2.897 0.741 C 3.079 1.07 3.25 1.483 3.411 1.951 C 3.733 2.886 4.01 4.033 4.236 5.149 C 4.462 6.264 4.637 7.345 4.756 8.148 C 4.815 8.549 4.861 8.881 4.891 9.112 C 4.906 9.228 4.918 9.318 4.925 9.38 C 4.929 9.411 4.932 9.434 4.934 9.45 C 4.935 9.458 4.936 9.464 4.936 9.468 C 4.936 9.47 4.937 9.472 4.937 9.473 C 4.937 9.473 4.937 9.473 4.937 9.474 C 4.937 9.474 4.937 9.474 4.937 9.474 C 4.937 9.474 4.937 9.474 4.986 9.468 C 5.036 9.462 5.036 9.462 5.036 9.462 C 5.036 9.462 5.036 9.462 5.036 9.462 C 5.036 9.462 5.036 9.461 5.036 9.461 C 5.036 9.46 5.036 9.458 5.035 9.456 C 5.035 9.452 5.034 9.446 5.033 9.438 C 5.031 9.422 5.028 9.398 5.025 9.368 C 5.017 9.306 5.005 9.215 4.99 9.099 C 4.96 8.867 4.914 8.535 4.855 8.133 C 4.736 7.329 4.56 6.246 4.334 5.129 C 4.107 4.012 3.829 2.86 3.506 1.918 C 3.344 1.448 3.17 1.029 2.985 0.693 C 2.8 0.358 2.602 0.1 2.388 -0.042 L 2.36 0 Z M 4.986 9.468 L 5.01 9.424 L 1.219 7.43 L 1.195 7.475 L 1.172 7.519 L 4.963 9.512 L 4.986 9.468 Z M 1.195 7.475 L 1.244 7.465 L 0.049 1.216 L 0 1.225 L -0.049 1.235 L 1.146 7.484 L 1.195 7.475 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.247,
    height: 12.029,
    viewBox: "0 0 12.247 12.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.429,
      top: 6.897,
      width: 12.247,
      height: 12.029,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.17 5.755 C 12.082 7.378 11.904 9.529 11.546 12.029 L 3.309 11.497 L 0 5.173 L 0.013 2.229 C 0.013 2.229 5.7 -2.962 12.247 2.5",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.429,
      top: 6.897,
      width: 12.247,
      height: 12.029,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.246858596801758,
      height: 12.02878189086914,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.848,
    height: 8.210,
    viewBox: "0 0 8.848 8.210",
    fill: "none",
    style: {
      position: "absolute",
      left: -1.385,
      top: 5.136,
      width: 8.848,
      height: 8.21,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.18 0.252 C 5.629 -1.233 3.71 4.365 6.137 3.656 C 8.563 2.948 8.848 4.783 8.848 4.783 L 5.69 8.21 L 0 5.868 L 1.905 1.845",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 12.247,
    height: 12.029,
    viewBox: "0 0 12.247 12.029",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.429,
      top: 6.897,
      width: 12.247,
      height: 12.029,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.22 5.758 C 12.221 5.73 12.2 5.706 12.173 5.705 C 12.145 5.704 12.121 5.725 12.12 5.752 L 12.17 5.755 L 12.22 5.758 Z M 11.546 12.029 L 11.543 12.079 C 11.569 12.08 11.592 12.062 11.596 12.036 L 11.546 12.029 Z M 3.309 11.497 L 3.265 11.52 C 3.273 11.536 3.288 11.546 3.306 11.547 L 3.309 11.497 Z M 0 5.173 L -0.05 5.172 C -0.05 5.18 -0.048 5.189 -0.044 5.196 L 0 5.173 Z M 0.013 2.229 L -0.021 2.192 C -0.031 2.201 -0.037 2.214 -0.037 2.228 L 0.013 2.229 Z M 12.215 2.538 C 12.236 2.556 12.268 2.553 12.285 2.532 C 12.303 2.511 12.3 2.479 12.279 2.461 L 12.247 2.5 L 12.215 2.538 Z M 12.17 5.755 L 12.12 5.752 C 12.032 7.374 11.854 9.524 11.497 12.022 L 11.546 12.029 L 11.596 12.036 C 11.954 9.535 12.132 7.382 12.22 5.758 L 12.17 5.755 Z M 11.546 12.029 L 11.55 11.979 L 3.312 11.447 L 3.309 11.497 L 3.306 11.547 L 11.543 12.079 L 11.546 12.029 Z M 3.309 11.497 L 3.353 11.474 L 0.044 5.149 L 0 5.173 L -0.044 5.196 L 3.265 11.52 L 3.309 11.497 Z M 0 5.173 L 0.05 5.173 L 0.063 2.229 L 0.013 2.229 L -0.037 2.228 L -0.05 5.172 L 0 5.173 Z M 0.013 2.229 C 0.047 2.266 0.047 2.266 0.047 2.266 C 0.047 2.266 0.047 2.265 0.047 2.265 C 0.047 2.265 0.047 2.265 0.047 2.265 C 0.048 2.264 0.049 2.263 0.05 2.262 C 0.053 2.26 0.057 2.256 0.062 2.251 C 0.073 2.242 0.089 2.228 0.111 2.21 C 0.153 2.174 0.217 2.121 0.301 2.056 C 0.468 1.925 0.714 1.745 1.03 1.545 C 1.663 1.146 2.574 0.67 3.688 0.364 C 5.914 -0.247 8.955 -0.181 12.215 2.538 L 12.247 2.5 L 12.279 2.461 C 8.992 -0.281 5.916 -0.351 3.661 0.268 C 2.535 0.577 1.615 1.058 0.977 1.461 C 0.658 1.662 0.409 1.845 0.239 1.977 C 0.155 2.043 0.09 2.096 0.046 2.134 C 0.024 2.152 0.007 2.167 -0.004 2.176 C -0.009 2.181 -0.014 2.185 -0.016 2.188 C -0.018 2.189 -0.019 2.19 -0.02 2.191 C -0.02 2.191 -0.02 2.191 -0.021 2.191 C -0.021 2.192 -0.021 2.192 -0.021 2.192 C -0.021 2.192 -0.021 2.192 0.013 2.229 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.710,
    height: 4.237,
    viewBox: "0 0 2.710 4.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.876,
      top: 4.338,
      width: 2.71,
      height: 4.237,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.641 L 0.686 0 L 2.646 0.64 L 2.646 2.864 L 2.71 3.717 L 2.453 4.237 L 1.915 4.155 L 0.789 4.056",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.876,
      top: 4.338,
      width: 2.71,
      height: 4.237,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.7097291946411133,
      height: 4.237387180328369,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.282,
    height: 2.782,
    viewBox: "0 0 1.282 2.782",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.97,
      top: 0.542,
      width: 1.282,
      height: 2.782,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.282 2.782 C -1.19 2.295 0.961 1.724 0.08 1.307 C -0.162 1.192 0.223 0 0.223 0 L 0.895 0.442",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 2.710,
    height: 4.237,
    viewBox: "0 0 2.710 4.237",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.876,
      top: 4.338,
      width: 2.71,
      height: 4.237,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.048 2.628 C -0.055 2.655 -0.039 2.682 -0.013 2.689 C 0.014 2.696 0.041 2.68 0.048 2.653 L 0 2.641 L -0.048 2.628 Z M 0.686 0 L 0.702 -0.048 C 0.689 -0.052 0.674 -0.05 0.662 -0.044 C 0.65 -0.037 0.641 -0.026 0.638 -0.013 L 0.686 0 Z M 2.646 0.64 L 2.696 0.64 C 2.696 0.618 2.682 0.599 2.661 0.592 L 2.646 0.64 Z M 2.646 2.864 L 2.596 2.864 L 2.596 2.868 L 2.646 2.864 Z M 2.71 3.717 L 2.755 3.739 C 2.759 3.731 2.76 3.722 2.76 3.713 L 2.71 3.717 Z M 2.453 4.237 L 2.446 4.287 C 2.467 4.29 2.489 4.279 2.498 4.259 L 2.453 4.237 Z M 1.915 4.155 L 1.923 4.106 L 1.92 4.106 L 1.915 4.155 Z M 0.793 4.006 C 0.766 4.003 0.741 4.024 0.739 4.051 C 0.736 4.079 0.757 4.103 0.784 4.105 L 0.789 4.056 L 0.793 4.006 Z M 0 2.641 L 0.048 2.653 L 0.735 0.013 L 0.686 0 L 0.638 -0.013 L -0.048 2.628 L 0 2.641 Z M 0.686 0 L 0.671 0.048 L 2.63 0.687 L 2.646 0.64 L 2.661 0.592 L 0.702 -0.048 L 0.686 0 Z M 2.646 0.64 L 2.596 0.64 L 2.596 2.864 L 2.646 2.864 L 2.696 2.864 L 2.696 0.64 L 2.646 0.64 Z M 2.646 2.864 L 2.596 2.868 L 2.66 3.72 L 2.71 3.717 L 2.76 3.713 L 2.696 2.86 L 2.646 2.864 Z M 2.71 3.717 L 2.665 3.694 L 2.409 4.215 L 2.453 4.237 L 2.498 4.259 L 2.755 3.739 L 2.71 3.717 Z M 2.453 4.237 L 2.461 4.188 L 1.923 4.106 L 1.915 4.155 L 1.908 4.205 L 2.446 4.287 L 2.453 4.237 Z M 1.915 4.155 L 1.92 4.106 L 0.793 4.006 L 0.789 4.056 L 0.784 4.105 L 1.911 4.205 L 1.915 4.155 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.272,
    height: 5.240,
    viewBox: "0 0 3.272 5.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.026,
      top: 1.089,
      width: 3.272,
      height: 5.24,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.169 L 0.689 1.527 L 2.626 0 C 2.916 1.764 4.66 6.717 0.816 4.81",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M -0.046 3.15 C -0.057 3.175 -0.045 3.204 -0.019 3.215 C 0.006 3.226 0.035 3.214 0.046 3.188 L 0 3.169 L -0.046 3.15 Z M 0.689 1.527 L 0.658 1.487 C 0.652 1.493 0.646 1.5 0.643 1.507 L 0.689 1.527 Z M 2.626 0 L 2.675 -0.008 C 2.672 -0.026 2.661 -0.04 2.644 -0.047 C 2.628 -0.053 2.609 -0.05 2.595 -0.039 L 2.626 0 Z M 0.838 4.765 C 0.814 4.753 0.784 4.763 0.771 4.788 C 0.759 4.813 0.769 4.843 0.794 4.855 L 0.816 4.81 L 0.838 4.765 Z M 0 3.169 L 0.046 3.188 L 0.735 1.546 L 0.689 1.527 L 0.643 1.507 L -0.046 3.15 L 0 3.169 Z M 0.689 1.527 L 0.72 1.566 L 2.657 0.039 L 2.626 0 L 2.595 -0.039 L 0.658 1.487 L 0.689 1.527 Z M 2.626 0 L 2.577 0.008 C 2.649 0.45 2.814 1.095 2.957 1.774 C 3.102 2.456 3.226 3.177 3.221 3.781 C 3.217 4.39 3.084 4.859 2.736 5.068 C 2.387 5.277 1.798 5.241 0.838 4.765 L 0.816 4.81 L 0.794 4.855 C 1.756 5.332 2.391 5.392 2.787 5.154 C 3.185 4.915 3.317 4.394 3.321 3.782 C 3.326 3.166 3.199 2.436 3.055 1.753 C 2.91 1.067 2.748 0.432 2.675 -0.008 L 2.626 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.520,
    height: 4.406,
    viewBox: "0 0 6.520 4.406",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.783,
      top: 0,
      width: 6.52,
      height: 4.406,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.981 4.368 C 1.709 4.658 2.713 3.204 2.284 2.736 C 2.284 2.736 3.51 3.231 4.374 2.512 C 7.305 2.892 7.111 -0.73 4.541 0.306 C 3.203 -0.434 1.713 0.297 1.778 1.126 C 0.772 0.231 -1.188 3.503 0.981 4.368 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.981 4.368 L 0.962 4.414 L 0.962 4.414 L 0.981 4.368 Z M 2.284 2.736 L 2.303 2.689 C 2.281 2.68 2.256 2.688 2.243 2.707 C 2.23 2.726 2.232 2.752 2.247 2.769 L 2.284 2.736 Z M 4.374 2.512 L 4.381 2.462 C 4.367 2.46 4.353 2.464 4.342 2.473 L 4.374 2.512 Z M 4.541 0.306 L 4.516 0.35 C 4.53 0.358 4.545 0.358 4.559 0.353 L 4.541 0.306 Z M 1.778 1.126 L 1.745 1.163 C 1.76 1.177 1.782 1.18 1.801 1.171 C 1.819 1.162 1.83 1.142 1.828 1.122 L 1.778 1.126 Z M 0.981 4.368 L 0.962 4.414 C 1.163 4.494 1.378 4.452 1.576 4.345 C 1.773 4.238 1.959 4.063 2.106 3.866 C 2.254 3.669 2.365 3.446 2.413 3.24 C 2.459 3.036 2.445 2.837 2.321 2.702 L 2.284 2.736 L 2.247 2.769 C 2.338 2.869 2.359 3.027 2.315 3.218 C 2.272 3.407 2.167 3.618 2.026 3.806 C 1.885 3.995 1.71 4.159 1.528 4.257 C 1.346 4.356 1.163 4.386 0.999 4.321 L 0.981 4.368 Z M 2.284 2.736 C 2.265 2.782 2.266 2.782 2.266 2.782 C 2.266 2.782 2.266 2.782 2.266 2.782 C 2.266 2.782 2.266 2.782 2.266 2.782 C 2.266 2.782 2.266 2.782 2.267 2.782 C 2.267 2.783 2.268 2.783 2.27 2.783 C 2.272 2.784 2.276 2.786 2.281 2.788 C 2.29 2.791 2.304 2.796 2.322 2.803 C 2.358 2.815 2.411 2.832 2.476 2.85 C 2.607 2.886 2.79 2.926 3.001 2.943 C 3.423 2.978 3.96 2.921 4.406 2.55 L 4.374 2.512 L 4.342 2.473 C 3.924 2.821 3.417 2.877 3.009 2.843 C 2.806 2.827 2.629 2.788 2.503 2.753 C 2.439 2.736 2.389 2.72 2.355 2.708 C 2.338 2.702 2.325 2.697 2.316 2.694 C 2.311 2.692 2.308 2.691 2.306 2.69 C 2.305 2.69 2.304 2.69 2.304 2.689 C 2.303 2.689 2.303 2.689 2.303 2.689 C 2.303 2.689 2.303 2.689 2.303 2.689 C 2.303 2.689 2.303 2.689 2.303 2.689 C 2.303 2.689 2.303 2.689 2.284 2.736 Z M 4.374 2.512 L 4.368 2.561 C 5.11 2.658 5.662 2.501 6.028 2.221 C 6.394 1.942 6.572 1.543 6.57 1.163 C 6.568 0.783 6.387 0.421 6.036 0.224 C 5.684 0.026 5.174 -0.003 4.522 0.26 L 4.541 0.306 L 4.559 0.353 C 5.193 0.097 5.67 0.133 5.987 0.311 C 6.303 0.489 6.469 0.815 6.47 1.163 C 6.472 1.512 6.309 1.882 5.968 2.142 C 5.627 2.402 5.103 2.556 4.381 2.462 L 4.374 2.512 Z M 4.541 0.306 L 4.565 0.263 C 3.883 -0.115 3.161 -0.118 2.616 0.081 C 2.076 0.278 1.693 0.682 1.729 1.13 L 1.778 1.126 L 1.828 1.122 C 1.798 0.741 2.128 0.365 2.651 0.175 C 3.169 -0.014 3.861 -0.013 4.516 0.35 L 4.541 0.306 Z M 1.778 1.126 L 1.812 1.088 C 1.676 0.968 1.523 0.917 1.364 0.923 C 1.207 0.929 1.047 0.991 0.896 1.092 C 0.595 1.293 0.318 1.654 0.143 2.067 C -0.032 2.481 -0.108 2.955 0.001 3.383 C 0.11 3.813 0.406 4.192 0.962 4.414 L 0.981 4.368 L 0.999 4.321 C 0.471 4.111 0.199 3.756 0.097 3.358 C -0.005 2.957 0.066 2.507 0.235 2.106 C 0.404 1.706 0.671 1.363 0.952 1.175 C 1.092 1.081 1.234 1.028 1.368 1.023 C 1.501 1.018 1.629 1.06 1.745 1.163 L 1.778 1.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.781,
    height: 1.709,
    viewBox: "0 0 1.781 1.709",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.024,
      top: 3.443,
      width: 1.781,
      height: 1.709,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.613 1.709 C -0.698 0.596 0.283 -1.069 1.781 0.944 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.581 1.747 C 0.602 1.765 0.633 1.763 0.651 1.742 C 0.669 1.721 0.667 1.689 0.646 1.671 L 0.613 1.709 L 0.581 1.747 Z M 1.741 0.974 C 1.757 0.996 1.789 1.001 1.811 0.985 C 1.833 0.968 1.838 0.937 1.821 0.915 L 1.781 0.944 L 1.741 0.974 Z M 0.613 1.709 L 0.646 1.671 C 0.325 1.399 0.146 1.095 0.08 0.825 C 0.014 0.554 0.061 0.323 0.181 0.187 C 0.298 0.055 0.496 0 0.764 0.104 C 1.034 0.209 1.369 0.475 1.741 0.974 L 1.781 0.944 L 1.821 0.915 C 1.444 0.407 1.095 0.126 0.8 0.011 C 0.504 -0.104 0.258 -0.05 0.106 0.121 C -0.042 0.289 -0.088 0.557 -0.017 0.849 C 0.055 1.141 0.246 1.463 0.581 1.747 L 0.613 1.709 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.459,
    height: 0.661,
    viewBox: "0 0 0.459 0.661",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.169,
      top: 3.283,
      width: 0.459,
      height: 0.661,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.333 0.653 L 0.333 0.653 C 0.286 0.668 0.236 0.663 0.193 0.641 C 0.15 0.619 0.118 0.58 0.103 0.534 L 0.009 0.239 C -0.022 0.143 0.031 0.04 0.127 0.009 L 0.127 0.009 C 0.173 -0.006 0.223 -0.002 0.266 0.02 C 0.309 0.042 0.341 0.081 0.356 0.127 L 0.45 0.422 C 0.481 0.518 0.429 0.621 0.333 0.653 L 0.333 0.653 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.623,
    height: 0.361,
    viewBox: "0 0 0.623 0.361",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.808,
      top: 2.642,
      width: 0.623,
      height: 0.361,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.455 0.016 C -0.076 0.162 -0.123 0.419 0.215 0.349 C 0.553 0.279 0.803 -0.08 0.455 0.016 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.607,
    height: 0.941,
    viewBox: "0 0 0.607 0.941",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.872,
      top: 3.479,
      width: 0.607,
      height: 0.941,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.77 0.205 0.751 0.958 0.256 0.941 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.013 -0.048 C -0.014 -0.055 -0.041 -0.04 -0.048 -0.013 C -0.055 0.014 -0.04 0.041 -0.013 0.048 L 0 0 L 0.013 -0.048 Z M 0.258 0.891 C 0.23 0.89 0.207 0.911 0.206 0.939 C 0.205 0.967 0.227 0.99 0.255 0.991 L 0.256 0.941 L 0.258 0.891 Z M 0 0 L -0.013 0.048 C 0.358 0.147 0.527 0.373 0.553 0.561 C 0.566 0.655 0.544 0.739 0.495 0.798 C 0.447 0.856 0.368 0.895 0.258 0.891 L 0.256 0.941 L 0.255 0.991 C 0.392 0.995 0.501 0.946 0.572 0.862 C 0.641 0.778 0.668 0.664 0.652 0.547 C 0.619 0.311 0.413 0.058 0.013 -0.048 L 0 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.990,-0.144,0.144,0.990,10.447,3.994)",
      transformOrigin: "0 0",
      width: 0.83,
      height: 0.616,
      opacity: 0.27,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 0.666,
    height: 0.166,
    viewBox: "0 0 0.666 0.166",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.206,
      top: 4.607,
      width: 0.666,
      height: 0.166,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0.326 0.274 0.666 0.126 0.666 0.126 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.032 -0.038 C 0.011 -0.056 -0.02 -0.053 -0.038 -0.032 C -0.056 -0.011 -0.053 0.02 -0.032 0.038 L 0 0 L 0.032 -0.038 Z M 0.686 0.171 C 0.712 0.16 0.723 0.131 0.712 0.106 C 0.701 0.08 0.672 0.069 0.646 0.08 L 0.666 0.126 L 0.686 0.171 Z M 0 0 L -0.032 0.038 C 0.142 0.185 0.321 0.219 0.456 0.216 C 0.524 0.214 0.581 0.203 0.621 0.193 C 0.641 0.188 0.657 0.183 0.668 0.179 C 0.673 0.177 0.678 0.175 0.681 0.174 C 0.682 0.173 0.684 0.173 0.685 0.172 C 0.685 0.172 0.685 0.172 0.686 0.172 C 0.686 0.172 0.686 0.172 0.686 0.172 C 0.686 0.171 0.686 0.171 0.686 0.171 C 0.686 0.171 0.686 0.171 0.686 0.171 C 0.686 0.171 0.686 0.171 0.666 0.126 C 0.646 0.08 0.646 0.08 0.646 0.08 C 0.646 0.08 0.646 0.08 0.646 0.08 C 0.646 0.08 0.646 0.08 0.646 0.08 C 0.646 0.08 0.646 0.08 0.646 0.08 C 0.646 0.08 0.646 0.08 0.646 0.08 C 0.646 0.08 0.645 0.08 0.644 0.081 C 0.642 0.082 0.639 0.083 0.634 0.084 C 0.626 0.087 0.612 0.092 0.595 0.096 C 0.561 0.105 0.512 0.114 0.454 0.116 C 0.338 0.118 0.184 0.09 0.032 -0.038 L 0 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.589,
    height: 2.973,
    viewBox: "0 0 1.589 2.973",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.792,
      top: 6.729,
      width: 1.589,
      height: 2.973,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.952 2.973 L 0 1.765 C 0 1.765 0.774 1.537 0.827 0 L 1.589 0.641 L 0.952 2.973 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.952 2.973 L 0.912 3.004 C 0.924 3.019 0.943 3.026 0.961 3.022 C 0.98 3.018 0.995 3.004 1 2.986 L 0.952 2.973 Z M 0 1.765 L -0.014 1.717 C -0.03 1.722 -0.043 1.734 -0.048 1.75 C -0.053 1.766 -0.05 1.783 -0.039 1.796 L 0 1.765 Z M 0.827 0 L 0.86 -0.038 C 0.845 -0.051 0.824 -0.053 0.807 -0.046 C 0.79 -0.038 0.778 -0.021 0.777 -0.002 L 0.827 0 Z M 1.589 0.641 L 1.637 0.655 C 1.642 0.636 1.636 0.616 1.621 0.603 L 1.589 0.641 Z M 0.952 2.973 L 0.991 2.942 L 0.039 1.734 L 0 1.765 L -0.039 1.796 L 0.912 3.004 L 0.952 2.973 Z M 0 1.765 C 0.014 1.813 0.014 1.813 0.014 1.813 C 0.014 1.813 0.014 1.813 0.014 1.813 C 0.014 1.813 0.015 1.813 0.015 1.813 C 0.015 1.813 0.015 1.813 0.015 1.813 C 0.016 1.812 0.017 1.812 0.018 1.812 C 0.02 1.811 0.022 1.81 0.026 1.809 C 0.032 1.807 0.042 1.803 0.053 1.798 C 0.077 1.788 0.109 1.772 0.148 1.748 C 0.226 1.7 0.329 1.619 0.433 1.49 C 0.641 1.231 0.851 0.779 0.877 0.002 L 0.827 0 L 0.777 -0.002 C 0.751 0.758 0.547 1.188 0.355 1.427 C 0.259 1.547 0.165 1.62 0.096 1.663 C 0.061 1.684 0.033 1.698 0.013 1.706 C 0.004 1.711 -0.004 1.713 -0.008 1.715 C -0.011 1.716 -0.012 1.716 -0.013 1.717 C -0.014 1.717 -0.014 1.717 -0.014 1.717 C -0.014 1.717 -0.014 1.717 -0.014 1.717 C -0.014 1.717 -0.014 1.717 -0.014 1.717 C -0.014 1.717 -0.014 1.717 -0.014 1.717 C -0.014 1.717 -0.014 1.717 0 1.765 Z M 0.827 0 L 0.795 0.038 L 1.557 0.68 L 1.589 0.641 L 1.621 0.603 L 0.86 -0.038 L 0.827 0 Z M 1.589 0.641 L 1.541 0.628 L 0.903 2.96 L 0.952 2.973 L 1 2.986 L 1.637 0.655 L 1.589 0.641 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.924,
    height: 3.672,
    viewBox: "0 0 2.924 3.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.868,
      top: 6.219,
      width: 2.924,
      height: 3.672,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.825 C 0.398 0.131 1.183 0 1.183 0 C 1.183 0 0.983 1.692 2.924 2.275 L 1.904 3.672 C 1.904 3.672 0.123 1.971 0 0.825 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.825 L -0.043 0.8 C -0.049 0.809 -0.051 0.82 -0.05 0.831 L 0 0.825 Z M 1.183 0 L 1.233 0.006 C 1.235 -0.01 1.229 -0.025 1.218 -0.036 C 1.206 -0.047 1.191 -0.052 1.175 -0.049 L 1.183 0 Z M 2.924 2.275 L 2.964 2.304 C 2.974 2.291 2.977 2.274 2.971 2.259 C 2.966 2.243 2.954 2.232 2.938 2.227 L 2.924 2.275 Z M 1.904 3.672 L 1.87 3.708 C 1.88 3.718 1.894 3.723 1.909 3.722 C 1.923 3.721 1.936 3.713 1.945 3.702 L 1.904 3.672 Z M 0 0.825 L 0.043 0.85 C 0.236 0.514 0.523 0.314 0.763 0.197 C 0.883 0.139 0.991 0.102 1.068 0.079 C 1.107 0.068 1.138 0.061 1.16 0.056 C 1.17 0.053 1.178 0.052 1.184 0.051 C 1.187 0.05 1.189 0.05 1.19 0.05 C 1.191 0.049 1.191 0.049 1.191 0.049 C 1.191 0.049 1.192 0.049 1.192 0.049 C 1.192 0.049 1.192 0.049 1.192 0.049 C 1.192 0.049 1.192 0.049 1.192 0.049 C 1.192 0.049 1.192 0.049 1.183 0 C 1.175 -0.049 1.175 -0.049 1.175 -0.049 C 1.175 -0.049 1.175 -0.049 1.175 -0.049 C 1.175 -0.049 1.175 -0.049 1.175 -0.049 C 1.175 -0.049 1.174 -0.049 1.174 -0.049 C 1.174 -0.049 1.173 -0.049 1.172 -0.049 C 1.17 -0.048 1.168 -0.048 1.165 -0.047 C 1.159 -0.046 1.15 -0.044 1.138 -0.042 C 1.115 -0.037 1.082 -0.029 1.041 -0.017 C 0.959 0.007 0.845 0.046 0.719 0.107 C 0.467 0.23 0.162 0.442 -0.043 0.8 L 0 0.825 Z M 1.183 0 C 1.134 -0.006 1.134 -0.006 1.134 -0.006 C 1.134 -0.006 1.134 -0.006 1.134 -0.006 C 1.134 -0.006 1.134 -0.005 1.134 -0.005 C 1.134 -0.005 1.134 -0.005 1.133 -0.004 C 1.133 -0.003 1.133 -0.002 1.133 0 C 1.133 0.003 1.132 0.009 1.132 0.015 C 1.131 0.028 1.129 0.048 1.129 0.072 C 1.127 0.121 1.127 0.191 1.132 0.277 C 1.144 0.448 1.181 0.683 1.279 0.937 C 1.477 1.446 1.923 2.027 2.91 2.323 L 2.924 2.275 L 2.938 2.227 C 1.983 1.94 1.56 1.383 1.372 0.901 C 1.278 0.659 1.243 0.434 1.232 0.27 C 1.227 0.188 1.227 0.122 1.228 0.076 C 1.229 0.053 1.23 0.035 1.231 0.023 C 1.232 0.017 1.232 0.013 1.233 0.01 C 1.233 0.008 1.233 0.007 1.233 0.007 C 1.233 0.006 1.233 0.006 1.233 0.006 C 1.233 0.006 1.233 0.006 1.233 0.006 C 1.233 0.006 1.233 0.006 1.233 0.006 C 1.233 0.006 1.233 0.006 1.183 0 Z M 2.924 2.275 L 2.884 2.245 L 1.864 3.643 L 1.904 3.672 L 1.945 3.702 L 2.964 2.304 L 2.924 2.275 Z M 1.904 3.672 C 1.939 3.636 1.939 3.636 1.939 3.636 C 1.939 3.636 1.939 3.636 1.939 3.636 C 1.939 3.636 1.939 3.636 1.938 3.636 C 1.938 3.635 1.938 3.635 1.938 3.635 C 1.937 3.634 1.935 3.633 1.934 3.631 C 1.931 3.628 1.926 3.623 1.919 3.617 C 1.906 3.604 1.887 3.586 1.863 3.561 C 1.814 3.513 1.744 3.442 1.66 3.354 C 1.492 3.177 1.266 2.93 1.037 2.647 C 0.808 2.364 0.575 2.046 0.393 1.729 C 0.21 1.41 0.079 1.096 0.05 0.82 L 0 0.825 L -0.05 0.831 C -0.018 1.127 0.12 1.455 0.306 1.778 C 0.492 2.102 0.728 2.424 0.959 2.71 C 1.191 2.995 1.418 3.245 1.588 3.423 C 1.673 3.512 1.743 3.583 1.792 3.632 C 1.817 3.657 1.836 3.676 1.849 3.688 C 1.856 3.695 1.861 3.7 1.864 3.703 C 1.866 3.705 1.867 3.706 1.868 3.707 C 1.869 3.707 1.869 3.708 1.869 3.708 C 1.869 3.708 1.87 3.708 1.87 3.708 C 1.87 3.708 1.87 3.708 1.87 3.708 C 1.87 3.708 1.87 3.708 1.904 3.672 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.804,
    height: 9.941,
    viewBox: "0 0 4.804 9.941",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8.984,
      width: 4.804,
      height: 9.941,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.609 0 C 1.128 1.132 -0.911 7.126 0.445 9.941 L 4.804 8.043 C 4.804 8.043 4.442 8.983 4.447 8.836 C 4.474 8.138 4.901 4.56 4.601 2.931",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.804,
    height: 9.941,
    viewBox: "0 0 4.804 9.941",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8.984,
      width: 4.804,
      height: 9.941,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.639 0.04 C 2.661 0.023 2.666 -0.008 2.649 -0.03 C 2.632 -0.052 2.601 -0.056 2.579 -0.04 L 2.609 0 L 2.639 0.04 Z M 0.445 9.941 L 0.4 9.963 C 0.411 9.987 0.44 9.998 0.465 9.987 L 0.445 9.941 Z M 4.804 8.043 L 4.85 8.061 C 4.858 8.042 4.853 8.021 4.838 8.007 C 4.824 7.993 4.802 7.989 4.784 7.997 L 4.804 8.043 Z M 4.447 8.836 L 4.397 8.834 L 4.397 8.834 L 4.447 8.836 Z M 4.65 2.922 C 4.645 2.895 4.619 2.877 4.592 2.882 C 4.564 2.887 4.546 2.913 4.551 2.941 L 4.601 2.931 L 4.65 2.922 Z M 2.609 0 L 2.579 -0.04 C 2.199 0.25 1.79 0.846 1.411 1.613 C 1.031 2.381 0.678 3.328 0.415 4.327 C 0.151 5.325 -0.023 6.378 -0.047 7.358 C -0.071 8.338 0.056 9.249 0.4 9.963 L 0.445 9.941 L 0.49 9.92 C 0.156 9.226 0.029 8.332 0.053 7.361 C 0.076 6.39 0.25 5.345 0.512 4.352 C 0.773 3.359 1.124 2.419 1.5 1.657 C 1.878 0.893 2.279 0.315 2.639 0.04 L 2.609 0 Z M 0.445 9.941 L 0.465 9.987 L 4.824 8.089 L 4.804 8.043 L 4.784 7.997 L 0.425 9.895 L 0.445 9.941 Z M 4.804 8.043 C 4.757 8.025 4.757 8.025 4.757 8.025 C 4.757 8.025 4.757 8.025 4.757 8.025 C 4.757 8.025 4.757 8.025 4.757 8.025 C 4.757 8.026 4.757 8.026 4.757 8.026 C 4.757 8.026 4.756 8.027 4.756 8.028 C 4.755 8.03 4.754 8.032 4.753 8.036 C 4.75 8.043 4.747 8.052 4.742 8.065 C 4.732 8.091 4.718 8.127 4.701 8.169 C 4.667 8.255 4.622 8.368 4.577 8.476 C 4.532 8.584 4.488 8.686 4.456 8.752 C 4.439 8.787 4.427 8.806 4.422 8.813 C 4.421 8.814 4.422 8.812 4.427 8.809 C 4.429 8.807 4.449 8.794 4.473 8.807 C 4.484 8.812 4.49 8.821 4.493 8.826 C 4.495 8.831 4.496 8.835 4.497 8.837 C 4.497 8.84 4.497 8.841 4.497 8.838 L 4.447 8.836 L 4.397 8.834 C 4.397 8.84 4.397 8.848 4.399 8.856 C 4.4 8.861 4.405 8.884 4.427 8.895 C 4.454 8.909 4.477 8.896 4.483 8.892 C 4.491 8.886 4.496 8.88 4.5 8.875 C 4.513 8.859 4.529 8.829 4.545 8.796 C 4.579 8.727 4.625 8.622 4.67 8.514 C 4.715 8.405 4.76 8.292 4.794 8.206 C 4.811 8.163 4.825 8.127 4.835 8.101 C 4.84 8.089 4.844 8.079 4.846 8.072 C 4.848 8.068 4.849 8.066 4.849 8.064 C 4.85 8.063 4.85 8.062 4.85 8.062 C 4.85 8.062 4.85 8.061 4.85 8.061 C 4.85 8.061 4.85 8.061 4.85 8.061 C 4.85 8.061 4.85 8.061 4.85 8.061 C 4.85 8.061 4.85 8.061 4.804 8.043 Z M 4.447 8.836 L 4.497 8.838 C 4.504 8.665 4.535 8.312 4.575 7.852 C 4.614 7.393 4.66 6.829 4.697 6.236 C 4.769 5.051 4.801 3.743 4.65 2.922 L 4.601 2.931 L 4.551 2.941 C 4.7 3.748 4.669 5.044 4.597 6.23 C 4.561 6.822 4.514 7.385 4.475 7.844 C 4.436 8.302 4.404 8.658 4.397 8.834 L 4.447 8.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.952,
    height: 2.023,
    viewBox: "0 0 4.952 2.023",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.588,
      top: 15.907,
      width: 4.952,
      height: 2.023,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.144 0.569 C 0.144 0.569 2.93 0.255 3.225 0.294 C 3.52 0.332 4.65 0.087 4.722 0.053 C 5.361 -0.243 4.566 0.79 3.584 0.771 C 3.584 0.771 4.492 1.347 4.499 1.515 C 4.507 1.682 4.391 1.682 4.391 1.682 C 4.391 1.682 4.468 1.863 4.331 1.966 C 3.86 1.717 3.242 1.516 3.174 1.602 C 3.105 1.688 1.788 2.19 0.684 1.966 C -0.42 1.743 0.144 0.569 0.144 0.569 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.588,
      top: 15.907,
      width: 4.952,
      height: 2.023,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.951847076416016,
      height: 2.0234100818634033,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.186,
    height: 2.083,
    viewBox: "0 0 1.186 2.083",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.535,
      top: 0.541,
      width: 1.186,
      height: 2.083,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.244 0.028 C 0.745 -0.23 1.091 1.345 1.181 1.849 C 1.271 2.353 0 1.888 0 1.888",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 4.952,
    height: 2.023,
    viewBox: "0 0 4.952 2.023",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.588,
      top: 15.907,
      width: 4.952,
      height: 2.023,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.144 0.569 L 0.138 0.519 C 0.121 0.521 0.106 0.532 0.099 0.548 L 0.144 0.569 Z M 4.722 0.053 L 4.743 0.099 L 4.743 0.099 L 4.722 0.053 Z M 3.584 0.771 L 3.585 0.721 C 3.563 0.721 3.543 0.736 3.536 0.757 C 3.53 0.779 3.539 0.802 3.558 0.814 L 3.584 0.771 Z M 4.391 1.682 L 4.391 1.632 C 4.374 1.632 4.359 1.641 4.349 1.655 C 4.34 1.669 4.338 1.687 4.345 1.702 L 4.391 1.682 Z M 4.331 1.966 L 4.308 2.011 C 4.325 2.02 4.346 2.018 4.361 2.006 L 4.331 1.966 Z M 0.144 0.569 C 0.15 0.619 0.15 0.619 0.15 0.619 C 0.15 0.619 0.15 0.619 0.15 0.619 C 0.15 0.619 0.15 0.619 0.15 0.619 C 0.15 0.619 0.151 0.619 0.152 0.619 C 0.153 0.618 0.155 0.618 0.158 0.618 C 0.163 0.617 0.171 0.616 0.181 0.615 C 0.201 0.613 0.231 0.61 0.27 0.605 C 0.346 0.597 0.456 0.585 0.589 0.57 C 0.855 0.542 1.212 0.503 1.579 0.467 C 1.945 0.43 2.321 0.394 2.623 0.37 C 2.774 0.358 2.906 0.349 3.01 0.344 C 3.115 0.339 3.187 0.339 3.218 0.343 L 3.225 0.294 L 3.231 0.244 C 3.189 0.239 3.109 0.24 3.005 0.244 C 2.9 0.249 2.767 0.259 2.615 0.271 C 2.312 0.295 1.935 0.33 1.569 0.367 C 1.202 0.404 0.844 0.442 0.578 0.471 C 0.445 0.485 0.335 0.498 0.259 0.506 C 0.22 0.51 0.19 0.514 0.17 0.516 C 0.159 0.517 0.152 0.518 0.146 0.519 C 0.144 0.519 0.142 0.519 0.14 0.519 C 0.14 0.519 0.139 0.519 0.139 0.519 C 0.139 0.519 0.139 0.519 0.138 0.519 C 0.138 0.519 0.138 0.519 0.138 0.519 C 0.138 0.519 0.138 0.519 0.144 0.569 Z M 3.225 0.294 L 3.218 0.343 C 3.299 0.354 3.431 0.345 3.579 0.327 C 3.729 0.309 3.902 0.28 4.066 0.25 C 4.231 0.219 4.389 0.187 4.51 0.159 C 4.571 0.146 4.623 0.133 4.662 0.123 C 4.698 0.114 4.729 0.105 4.743 0.099 L 4.722 0.053 L 4.701 0.008 C 4.702 0.008 4.7 0.009 4.697 0.01 C 4.693 0.011 4.689 0.012 4.683 0.014 C 4.671 0.018 4.656 0.022 4.637 0.027 C 4.599 0.036 4.549 0.048 4.488 0.062 C 4.368 0.089 4.212 0.121 4.048 0.152 C 3.885 0.182 3.714 0.21 3.567 0.228 C 3.418 0.246 3.298 0.253 3.231 0.244 L 3.225 0.294 Z M 4.722 0.053 L 4.743 0.099 C 4.822 0.062 4.871 0.05 4.897 0.05 C 4.91 0.05 4.91 0.053 4.907 0.05 C 4.902 0.046 4.902 0.041 4.902 0.043 C 4.902 0.047 4.9 0.056 4.893 0.072 C 4.887 0.087 4.876 0.105 4.861 0.126 C 4.831 0.168 4.786 0.218 4.727 0.271 C 4.492 0.484 4.059 0.73 3.585 0.721 L 3.584 0.771 L 3.583 0.821 C 4.091 0.831 4.546 0.57 4.794 0.345 C 4.857 0.289 4.907 0.234 4.942 0.184 C 4.96 0.16 4.974 0.136 4.984 0.113 C 4.994 0.091 5.002 0.067 5.002 0.043 C 5.002 0.018 4.993 -0.008 4.97 -0.027 C 4.949 -0.045 4.922 -0.05 4.897 -0.05 C 4.848 -0.05 4.782 -0.03 4.701 0.008 L 4.722 0.053 Z M 3.584 0.771 C 3.558 0.814 3.558 0.814 3.558 0.814 C 3.558 0.814 3.558 0.814 3.558 0.814 C 3.558 0.814 3.558 0.814 3.558 0.814 C 3.558 0.814 3.558 0.814 3.558 0.814 C 3.559 0.814 3.559 0.815 3.56 0.815 C 3.562 0.816 3.564 0.818 3.568 0.82 C 3.574 0.824 3.584 0.83 3.596 0.838 C 3.621 0.854 3.656 0.877 3.699 0.906 C 3.784 0.962 3.897 1.039 4.01 1.121 C 4.123 1.203 4.236 1.289 4.32 1.365 C 4.362 1.403 4.396 1.437 4.419 1.466 C 4.431 1.48 4.439 1.492 4.444 1.502 C 4.446 1.506 4.448 1.51 4.449 1.513 C 4.449 1.516 4.45 1.517 4.45 1.517 L 4.499 1.515 L 4.549 1.512 C 4.549 1.492 4.541 1.472 4.532 1.455 C 4.523 1.438 4.511 1.421 4.497 1.403 C 4.469 1.368 4.431 1.33 4.387 1.29 C 4.299 1.211 4.183 1.122 4.069 1.04 C 3.954 0.957 3.84 0.879 3.754 0.822 C 3.711 0.794 3.675 0.771 3.651 0.755 C 3.638 0.746 3.628 0.74 3.621 0.736 C 3.618 0.734 3.616 0.732 3.614 0.731 C 3.613 0.73 3.612 0.73 3.612 0.73 C 3.612 0.73 3.611 0.729 3.611 0.729 C 3.611 0.729 3.611 0.729 3.611 0.729 C 3.611 0.729 3.611 0.729 3.611 0.729 C 3.611 0.729 3.611 0.729 3.584 0.771 Z M 4.499 1.515 L 4.45 1.517 C 4.453 1.588 4.43 1.612 4.418 1.621 C 4.411 1.627 4.403 1.63 4.397 1.631 C 4.394 1.632 4.392 1.632 4.391 1.632 C 4.39 1.632 4.39 1.632 4.39 1.632 C 4.39 1.632 4.39 1.632 4.39 1.632 C 4.39 1.632 4.39 1.632 4.391 1.632 C 4.391 1.632 4.391 1.632 4.391 1.632 C 4.391 1.632 4.391 1.632 4.391 1.632 C 4.391 1.632 4.391 1.632 4.391 1.632 C 4.391 1.632 4.391 1.632 4.391 1.682 C 4.391 1.732 4.391 1.732 4.391 1.732 C 4.391 1.732 4.391 1.732 4.391 1.732 C 4.391 1.732 4.391 1.732 4.391 1.732 C 4.391 1.732 4.392 1.732 4.392 1.732 C 4.392 1.732 4.392 1.732 4.393 1.732 C 4.393 1.732 4.394 1.732 4.395 1.732 C 4.396 1.732 4.399 1.732 4.401 1.732 C 4.406 1.731 4.413 1.73 4.421 1.728 C 4.436 1.724 4.457 1.717 4.478 1.701 C 4.522 1.668 4.554 1.609 4.549 1.512 L 4.499 1.515 Z M 4.391 1.682 C 4.345 1.702 4.345 1.702 4.345 1.702 C 4.345 1.702 4.345 1.702 4.345 1.702 C 4.345 1.702 4.345 1.702 4.345 1.702 C 4.345 1.702 4.345 1.702 4.345 1.702 C 4.345 1.702 4.345 1.702 4.345 1.702 C 4.345 1.702 4.345 1.702 4.345 1.703 C 4.346 1.704 4.346 1.705 4.347 1.707 C 4.349 1.711 4.351 1.718 4.353 1.725 C 4.357 1.741 4.362 1.763 4.363 1.788 C 4.364 1.836 4.352 1.888 4.301 1.927 L 4.331 1.966 L 4.361 2.006 C 4.447 1.942 4.465 1.852 4.462 1.784 C 4.461 1.75 4.455 1.72 4.449 1.699 C 4.446 1.688 4.443 1.68 4.441 1.674 C 4.44 1.67 4.439 1.668 4.438 1.666 C 4.438 1.665 4.438 1.665 4.438 1.664 C 4.437 1.664 4.437 1.663 4.437 1.663 C 4.437 1.663 4.437 1.663 4.437 1.663 C 4.437 1.663 4.437 1.663 4.437 1.663 C 4.437 1.663 4.437 1.663 4.437 1.663 C 4.437 1.663 4.437 1.663 4.391 1.682 Z M 4.331 1.966 L 4.355 1.922 C 4.117 1.796 3.842 1.682 3.617 1.611 C 3.504 1.575 3.403 1.549 3.324 1.538 C 3.285 1.533 3.249 1.53 3.219 1.533 C 3.192 1.536 3.156 1.543 3.134 1.571 L 3.174 1.602 L 3.213 1.633 C 3.208 1.639 3.206 1.635 3.228 1.633 C 3.247 1.631 3.274 1.632 3.31 1.637 C 3.381 1.647 3.477 1.671 3.586 1.706 C 3.806 1.776 4.075 1.887 4.308 2.011 L 4.331 1.966 Z M 3.174 1.602 L 3.134 1.571 C 3.136 1.569 3.134 1.572 3.12 1.58 C 3.109 1.587 3.092 1.596 3.071 1.607 C 3.028 1.627 2.968 1.652 2.894 1.68 C 2.745 1.735 2.542 1.798 2.306 1.852 C 1.834 1.959 1.236 2.027 0.694 1.917 L 0.684 1.966 L 0.674 2.015 C 1.236 2.129 1.849 2.058 2.328 1.949 C 2.568 1.895 2.776 1.83 2.928 1.774 C 3.004 1.745 3.067 1.719 3.114 1.697 C 3.137 1.686 3.157 1.675 3.172 1.665 C 3.186 1.657 3.202 1.646 3.213 1.633 L 3.174 1.602 Z M 0.684 1.966 L 0.694 1.917 C 0.428 1.863 0.268 1.754 0.174 1.624 C 0.08 1.494 0.049 1.338 0.05 1.184 C 0.051 1.03 0.086 0.882 0.121 0.771 C 0.138 0.716 0.155 0.67 0.168 0.639 C 0.175 0.623 0.18 0.611 0.184 0.603 C 0.185 0.599 0.187 0.596 0.188 0.594 C 0.188 0.593 0.189 0.592 0.189 0.591 C 0.189 0.591 0.189 0.591 0.189 0.591 C 0.189 0.591 0.189 0.591 0.189 0.591 C 0.189 0.591 0.189 0.591 0.189 0.591 C 0.189 0.591 0.189 0.591 0.144 0.569 C 0.099 0.548 0.099 0.548 0.099 0.548 C 0.099 0.548 0.099 0.548 0.099 0.548 C 0.099 0.548 0.099 0.548 0.099 0.548 C 0.099 0.548 0.098 0.548 0.098 0.549 C 0.098 0.549 0.098 0.55 0.097 0.551 C 0.096 0.554 0.094 0.557 0.092 0.562 C 0.088 0.571 0.082 0.584 0.076 0.601 C 0.062 0.635 0.044 0.683 0.025 0.741 C -0.011 0.857 -0.048 1.016 -0.05 1.183 C -0.051 1.351 -0.017 1.53 0.094 1.683 C 0.205 1.837 0.389 1.958 0.674 2.015 L 0.684 1.966 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.612,
      top: 9.891,
      width: 0.447,
      height: 0.449,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.612,
      top: 11.669,
      width: 0.447,
      height: 0.449,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.147,
      top: 18.394,
      width: 7.227,
      height: 0.527,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 11.196,
    height: 7.699,
    viewBox: "0 0 11.196 7.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.275,
      top: 11.222,
      width: 11.196,
      height: 7.699,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.531 7.699 L 0 7.699 L 1.685 0.296 C 1.724 0.123 1.877 0 2.054 0 L 10.852 0 C 10.957 0 11.056 0.049 11.121 0.131 C 11.187 0.213 11.211 0.32 11.187 0.423 L 9.531 7.699 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.531 7.699 L 9.531 7.749 C 9.554 7.749 9.574 7.733 9.58 7.71 L 9.531 7.699 Z M 0 7.699 L -0.049 7.688 C -0.052 7.703 -0.049 7.718 -0.039 7.73 C -0.03 7.742 -0.015 7.749 0 7.749 L 0 7.699 Z M 1.685 0.296 L 1.734 0.307 L 1.734 0.307 L 1.685 0.296 Z M 2.054 0 L 2.054 -0.05 L 2.054 -0.05 L 2.054 0 Z M 10.852 0 L 10.852 -0.05 L 10.852 -0.05 L 10.852 0 Z M 11.187 0.423 L 11.138 0.411 L 11.138 0.412 L 11.187 0.423 Z M 9.531 7.699 L 9.531 7.649 L 0 7.649 L 0 7.699 L 0 7.749 L 9.531 7.749 L 9.531 7.699 Z M 0 7.699 L 0.049 7.71 L 1.734 0.307 L 1.685 0.296 L 1.636 0.285 L -0.049 7.688 L 0 7.699 Z M 1.685 0.296 L 1.734 0.307 C 1.768 0.157 1.901 0.05 2.054 0.05 L 2.054 0 L 2.054 -0.05 C 1.854 -0.05 1.68 0.089 1.636 0.285 L 1.685 0.296 Z M 2.054 0 L 2.054 0.05 L 10.852 0.05 L 10.852 0 L 10.852 -0.05 L 2.054 -0.05 L 2.054 0 Z M 10.852 0 L 10.852 0.05 C 10.942 0.05 11.026 0.091 11.082 0.162 L 11.121 0.131 L 11.161 0.1 C 11.086 0.006 10.973 -0.05 10.852 -0.05 L 10.852 0 Z M 11.121 0.131 L 11.082 0.162 C 11.138 0.232 11.159 0.324 11.138 0.411 L 11.187 0.423 L 11.236 0.434 C 11.263 0.317 11.235 0.194 11.161 0.1 L 11.121 0.131 Z M 11.187 0.423 L 11.138 0.412 L 9.482 7.688 L 9.531 7.699 L 9.58 7.71 L 11.236 0.434 L 11.187 0.423 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.196,
    height: 7.699,
    viewBox: "0 0 11.196 7.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.551,
      top: 11.222,
      width: 11.196,
      height: 7.699,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.531 7.699 L 0 7.699 L 1.685 0.296 C 1.724 0.123 1.877 0 2.054 0 L 10.852 0 C 10.957 0 11.056 0.049 11.121 0.131 C 11.187 0.213 11.211 0.32 11.187 0.423 L 9.531 7.699 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.196,
    height: 7.699,
    viewBox: "0 0 11.196 7.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.551,
      top: 11.222,
      width: 11.196,
      height: 7.699,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.531 7.699 L 9.531 7.749 C 9.554 7.749 9.574 7.733 9.58 7.71 L 9.531 7.699 Z M 0 7.699 L -0.049 7.688 C -0.052 7.703 -0.049 7.718 -0.039 7.73 C -0.03 7.742 -0.015 7.749 0 7.749 L 0 7.699 Z M 1.685 0.296 L 1.734 0.307 L 1.734 0.307 L 1.685 0.296 Z M 2.054 0 L 2.054 -0.05 L 2.054 -0.05 L 2.054 0 Z M 10.852 0 L 10.852 -0.05 L 10.852 -0.05 L 10.852 0 Z M 11.187 0.423 L 11.138 0.411 L 11.138 0.412 L 11.187 0.423 Z M 9.531 7.699 L 9.531 7.649 L 0 7.649 L 0 7.699 L 0 7.749 L 9.531 7.749 L 9.531 7.699 Z M 0 7.699 L 0.049 7.71 L 1.734 0.307 L 1.685 0.296 L 1.636 0.285 L -0.049 7.688 L 0 7.699 Z M 1.685 0.296 L 1.734 0.307 C 1.768 0.157 1.901 0.05 2.054 0.05 L 2.054 0 L 2.054 -0.05 C 1.854 -0.05 1.68 0.089 1.636 0.285 L 1.685 0.296 Z M 2.054 0 L 2.054 0.05 L 10.852 0.05 L 10.852 0 L 10.852 -0.05 L 2.054 -0.05 L 2.054 0 Z M 10.852 0 L 10.852 0.05 C 10.942 0.05 11.026 0.091 11.082 0.162 L 11.121 0.131 L 11.161 0.1 C 11.086 0.006 10.973 -0.05 10.852 -0.05 L 10.852 0 Z M 11.121 0.131 L 11.082 0.162 C 11.138 0.232 11.159 0.324 11.138 0.411 L 11.187 0.423 L 11.236 0.434 C 11.263 0.317 11.235 0.194 11.161 0.1 L 11.121 0.131 Z M 11.187 0.423 L 11.138 0.412 L 9.482 7.688 L 9.531 7.699 L 9.58 7.71 L 11.236 0.434 L 11.187 0.423 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.681,
    height: 3.505,
    viewBox: "0 0 9.681 3.505",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.187,
      top: 16.151,
      width: 9.681,
      height: 3.505,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.597 0.086 C 6.231 -0.162 9.367 0.205 9.367 0.205 C 9.752 1.135 9.675 2.478 9.675 2.478 C 9.675 2.478 1.125 4.576 0.258 2.775 C 0.167 2.585 0.032 2.222 0 2.057",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.681,
    height: 3.505,
    viewBox: "0 0 9.681 3.505",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.187,
      top: 16.151,
      width: 9.681,
      height: 3.505,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.592 0.036 C 3.564 0.039 3.544 0.063 3.547 0.091 C 3.549 0.118 3.574 0.138 3.601 0.136 L 3.597 0.086 L 3.592 0.036 Z M 9.367 0.205 L 9.413 0.186 C 9.406 0.17 9.391 0.158 9.373 0.156 L 9.367 0.205 Z M 9.675 2.478 L 9.687 2.526 C 9.708 2.521 9.724 2.503 9.725 2.481 L 9.675 2.478 Z M 0.258 2.775 L 0.213 2.797 L 0.213 2.797 L 0.258 2.775 Z M 0.049 2.047 C 0.044 2.02 0.018 2.002 -0.01 2.008 C -0.037 2.013 -0.054 2.039 -0.049 2.066 L 0 2.057 L 0.049 2.047 Z M 3.597 0.086 L 3.601 0.136 C 4.915 0.012 6.354 0.042 7.467 0.103 C 8.023 0.133 8.497 0.171 8.831 0.202 C 8.999 0.217 9.131 0.23 9.222 0.24 C 9.267 0.245 9.302 0.248 9.326 0.251 C 9.337 0.252 9.346 0.253 9.352 0.254 C 9.355 0.254 9.358 0.255 9.359 0.255 C 9.36 0.255 9.36 0.255 9.361 0.255 C 9.361 0.255 9.361 0.255 9.361 0.255 C 9.361 0.255 9.361 0.255 9.361 0.255 C 9.361 0.255 9.361 0.255 9.367 0.205 C 9.373 0.156 9.373 0.156 9.373 0.156 C 9.373 0.156 9.373 0.156 9.373 0.156 C 9.373 0.156 9.372 0.156 9.372 0.156 C 9.372 0.156 9.371 0.156 9.371 0.155 C 9.369 0.155 9.367 0.155 9.364 0.155 C 9.358 0.154 9.349 0.153 9.337 0.152 C 9.313 0.149 9.278 0.145 9.232 0.14 C 9.141 0.131 9.008 0.117 8.84 0.102 C 8.505 0.071 8.03 0.033 7.472 0.003 C 6.358 -0.058 4.912 -0.088 3.592 0.036 L 3.597 0.086 Z M 9.367 0.205 L 9.321 0.225 C 9.51 0.682 9.587 1.243 9.616 1.693 C 9.63 1.918 9.632 2.114 9.631 2.253 C 9.631 2.323 9.629 2.378 9.628 2.417 C 9.627 2.436 9.626 2.45 9.626 2.46 C 9.626 2.465 9.626 2.469 9.625 2.471 C 9.625 2.473 9.625 2.474 9.625 2.474 C 9.625 2.474 9.625 2.475 9.625 2.475 C 9.625 2.475 9.625 2.475 9.625 2.475 C 9.625 2.475 9.625 2.475 9.625 2.475 C 9.625 2.475 9.625 2.475 9.675 2.478 C 9.725 2.481 9.725 2.481 9.725 2.481 C 9.725 2.481 9.725 2.481 9.725 2.481 C 9.725 2.481 9.725 2.481 9.725 2.48 C 9.725 2.48 9.725 2.48 9.725 2.48 C 9.725 2.479 9.725 2.478 9.725 2.477 C 9.725 2.474 9.726 2.47 9.726 2.465 C 9.726 2.455 9.727 2.44 9.728 2.42 C 9.729 2.381 9.731 2.325 9.731 2.254 C 9.732 2.113 9.73 1.914 9.715 1.687 C 9.686 1.233 9.609 0.659 9.413 0.186 L 9.367 0.205 Z M 9.675 2.478 C 9.663 2.429 9.663 2.429 9.663 2.429 C 9.663 2.429 9.663 2.429 9.663 2.429 C 9.663 2.43 9.662 2.43 9.662 2.43 C 9.661 2.43 9.659 2.43 9.657 2.431 C 9.653 2.432 9.647 2.433 9.639 2.435 C 9.623 2.439 9.599 2.445 9.567 2.452 C 9.505 2.467 9.413 2.489 9.295 2.516 C 9.06 2.57 8.723 2.644 8.316 2.729 C 7.501 2.897 6.407 3.103 5.285 3.252 C 4.163 3.402 3.017 3.495 2.098 3.438 C 1.639 3.41 1.239 3.345 0.929 3.232 C 0.618 3.119 0.403 2.962 0.303 2.753 L 0.258 2.775 L 0.213 2.797 C 0.33 3.038 0.572 3.209 0.895 3.326 C 1.218 3.444 1.628 3.51 2.092 3.538 C 3.021 3.595 4.174 3.501 5.298 3.351 C 6.423 3.201 7.52 2.995 8.336 2.827 C 8.744 2.742 9.081 2.667 9.317 2.613 C 9.435 2.586 9.528 2.565 9.59 2.55 C 9.622 2.542 9.646 2.536 9.662 2.532 C 9.67 2.53 9.677 2.529 9.681 2.528 C 9.683 2.527 9.684 2.527 9.685 2.527 C 9.686 2.527 9.686 2.527 9.687 2.527 C 9.687 2.527 9.687 2.526 9.687 2.526 C 9.687 2.526 9.687 2.526 9.675 2.478 Z M 0.258 2.775 L 0.303 2.753 C 0.213 2.566 0.08 2.207 0.049 2.047 L 0 2.057 L -0.049 2.066 C -0.016 2.237 0.121 2.605 0.213 2.797 L 0.258 2.775 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.414,
    height: 2.684,
    viewBox: "0 0 1.414 2.684",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.478,
      top: 16.189,
      width: 1.414,
      height: 2.684,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0 0 0.657 1.452 0.271 2.684 L 1.394 2.518 C 1.394 2.518 1.535 0.989 1.075 0.168 L 0 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.008 -0.049 C -0.01 -0.052 -0.029 -0.045 -0.04 -0.03 C -0.051 -0.016 -0.053 0.004 -0.046 0.021 L 0 0 Z M 0.271 2.684 L 0.223 2.669 C 0.218 2.686 0.222 2.704 0.233 2.717 C 0.244 2.73 0.261 2.736 0.278 2.734 L 0.271 2.684 Z M 1.394 2.518 L 1.401 2.568 C 1.424 2.565 1.442 2.546 1.444 2.523 L 1.394 2.518 Z M 1.075 0.168 L 1.119 0.143 C 1.112 0.13 1.098 0.121 1.083 0.118 L 1.075 0.168 Z M 0 0 C -0.046 0.021 -0.046 0.021 -0.046 0.021 C -0.046 0.021 -0.046 0.021 -0.046 0.021 C -0.046 0.021 -0.045 0.021 -0.045 0.021 C -0.045 0.021 -0.045 0.021 -0.045 0.021 C -0.045 0.022 -0.044 0.023 -0.044 0.024 C -0.043 0.027 -0.041 0.031 -0.039 0.036 C -0.034 0.047 -0.027 0.063 -0.019 0.084 C -0.002 0.125 0.022 0.186 0.05 0.263 C 0.105 0.417 0.174 0.635 0.232 0.891 C 0.347 1.404 0.413 2.065 0.223 2.669 L 0.271 2.684 L 0.319 2.699 C 0.516 2.071 0.446 1.39 0.329 0.869 C 0.271 0.608 0.2 0.386 0.144 0.229 C 0.116 0.151 0.091 0.089 0.074 0.046 C 0.065 0.024 0.058 0.008 0.053 -0.003 C 0.051 -0.009 0.049 -0.013 0.048 -0.016 C 0.047 -0.017 0.046 -0.019 0.046 -0.019 C 0.046 -0.02 0.046 -0.02 0.046 -0.02 C 0.046 -0.02 0.046 -0.02 0.046 -0.021 C 0.046 -0.021 0.046 -0.021 0.046 -0.021 C 0.046 -0.021 0.046 -0.021 0 0 Z M 0.271 2.684 L 0.278 2.734 L 1.401 2.568 L 1.394 2.518 L 1.387 2.469 L 0.264 2.635 L 0.271 2.684 Z M 1.394 2.518 C 1.444 2.523 1.444 2.523 1.444 2.523 C 1.444 2.523 1.444 2.523 1.444 2.523 C 1.444 2.523 1.444 2.523 1.444 2.523 C 1.444 2.522 1.444 2.522 1.444 2.522 C 1.444 2.521 1.444 2.52 1.444 2.518 C 1.445 2.515 1.445 2.511 1.445 2.505 C 1.446 2.494 1.448 2.476 1.449 2.455 C 1.452 2.411 1.456 2.347 1.459 2.269 C 1.465 2.111 1.468 1.893 1.457 1.649 C 1.435 1.163 1.355 0.565 1.119 0.143 L 1.075 0.168 L 1.032 0.192 C 1.255 0.592 1.335 1.17 1.357 1.653 C 1.368 1.894 1.365 2.11 1.359 2.265 C 1.356 2.342 1.352 2.405 1.349 2.448 C 1.348 2.469 1.347 2.486 1.346 2.497 C 1.345 2.503 1.345 2.507 1.345 2.51 C 1.345 2.511 1.344 2.512 1.344 2.513 C 1.344 2.513 1.344 2.514 1.344 2.514 C 1.344 2.514 1.344 2.514 1.344 2.514 C 1.344 2.514 1.344 2.514 1.344 2.514 C 1.344 2.514 1.344 2.514 1.394 2.518 Z M 1.075 0.168 L 1.083 0.118 L 0.008 -0.049 L 0 0 L -0.008 0.049 L 1.068 0.217 L 1.075 0.168 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.713,-0.701,0.701,0.713,17.377,14.820)",
      transformOrigin: "0 0",
      width: 1.99,
      height: 1.569,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.204,
      top: 11.476,
      width: 2.101,
      height: 0.417,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.851,
      top: 0,
      width: 12.812,
      height: 23.123,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.821,
    height: 13.672,
    viewBox: "0 0 4.821 13.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.256,
      top: 5.198,
      width: 4.821,
      height: 13.672,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.487 0 C -0.841 3.937 0.767 6.398 2.654 9 C 4.542 11.601 3.858 11.765 4.821 13.672 C 4.821 13.672 4.175 9.227 1.992 3.543 C 1.555 2.403 1.056 1.213 0.487 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.256,
      top: 5.198,
      width: 4.821,
      height: 13.672,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.82148551940918,
      height: 13.671546936035156,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.211,
    height: 10.201,
    viewBox: "0 0 4.211 10.201",
    fill: "none",
    style: {
      position: "absolute",
      left: -2.17,
      top: -1.435,
      width: 4.211,
      height: 10.201,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.647 0 C 2.647 0 3.591 -0.034 2.658 1.435 C 1.725 2.905 4.211 10.201 4.211 10.201 L 0 6.636 L 2.647 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 4.821,
    height: 13.672,
    viewBox: "0 0 4.821 13.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.256,
      top: 5.198,
      width: 4.821,
      height: 13.672,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.487 0 L 0.533 -0.021 C 0.524 -0.04 0.505 -0.051 0.485 -0.05 C 0.464 -0.049 0.447 -0.035 0.44 -0.016 L 0.487 0 Z M 4.821 13.672 L 4.777 13.694 C 4.788 13.716 4.813 13.727 4.837 13.719 C 4.86 13.712 4.874 13.689 4.871 13.664 L 4.821 13.672 Z M 1.992 3.543 L 2.039 3.525 L 2.039 3.525 L 1.992 3.543 Z M 0.487 0 L 0.44 -0.016 C -0.227 1.963 -0.158 3.573 0.318 5.016 C 0.792 6.457 1.671 7.729 2.614 9.029 L 2.654 9 L 2.695 8.97 C 1.751 7.669 0.882 6.409 0.413 4.985 C -0.056 3.563 -0.126 1.975 0.535 0.016 L 0.487 0 Z M 2.654 9 L 2.614 9.029 C 3.555 10.327 3.853 11.013 4.037 11.611 C 4.221 12.211 4.293 12.736 4.777 13.694 L 4.821 13.672 L 4.866 13.649 C 4.387 12.701 4.319 12.191 4.132 11.582 C 3.945 10.971 3.641 10.274 2.695 8.97 L 2.654 9 Z M 4.821 13.672 C 4.871 13.664 4.871 13.664 4.871 13.664 C 4.871 13.664 4.871 13.664 4.871 13.664 C 4.871 13.664 4.871 13.664 4.871 13.663 C 4.871 13.663 4.871 13.662 4.87 13.661 C 4.87 13.659 4.87 13.656 4.869 13.651 C 4.868 13.643 4.866 13.63 4.863 13.613 C 4.858 13.578 4.85 13.528 4.839 13.461 C 4.817 13.328 4.783 13.132 4.735 12.879 C 4.641 12.373 4.491 11.639 4.274 10.727 C 3.839 8.904 3.131 6.369 2.039 3.525 L 1.992 3.543 L 1.946 3.56 C 3.036 6.4 3.743 8.93 4.177 10.75 C 4.394 11.66 4.543 12.393 4.637 12.897 C 4.685 13.15 4.718 13.345 4.74 13.478 C 4.751 13.544 4.759 13.594 4.764 13.628 C 4.767 13.645 4.769 13.658 4.77 13.666 C 4.771 13.67 4.771 13.673 4.772 13.676 C 4.772 13.677 4.772 13.677 4.772 13.678 C 4.772 13.678 4.772 13.678 4.772 13.679 C 4.772 13.679 4.772 13.679 4.772 13.679 C 4.772 13.679 4.772 13.679 4.821 13.672 Z M 1.992 3.543 L 2.039 3.525 C 1.601 2.384 1.101 1.193 0.533 -0.021 L 0.487 0 L 0.442 0.021 C 1.01 1.233 1.509 2.422 1.946 3.56 L 1.992 3.543 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.821,
    height: 6.494,
    viewBox: "0 0 4.821 6.494",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12.108,
      width: 4.821,
      height: 6.494,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.487 0 C -0.841 1.87 0.767 3.039 2.654 4.275 C 4.542 5.51 3.858 5.588 4.821 6.494 C 4.821 6.494 4.175 4.382 1.992 1.683 C 1.555 1.141 1.056 0.576 0.487 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.487 0 L 0.523 -0.035 C 0.513 -0.046 0.498 -0.051 0.483 -0.05 C 0.469 -0.049 0.455 -0.041 0.447 -0.029 L 0.487 0 Z M 4.821 6.494 L 4.787 6.53 C 4.804 6.545 4.829 6.548 4.848 6.536 C 4.867 6.524 4.876 6.501 4.869 6.479 L 4.821 6.494 Z M 1.992 1.683 L 2.031 1.651 L 2.031 1.651 L 1.992 1.683 Z M 0.487 0 L 0.447 -0.029 C 0.11 0.444 -0.043 0.878 -0.05 1.282 C -0.057 1.687 0.084 2.057 0.324 2.404 C 0.802 3.094 1.685 3.7 2.627 4.316 L 2.654 4.275 L 2.682 4.233 C 1.736 3.614 0.871 3.018 0.406 2.347 C 0.175 2.013 0.044 1.663 0.05 1.284 C 0.057 0.905 0.2 0.491 0.528 0.029 L 0.487 0 Z M 2.654 4.275 L 2.627 4.316 C 3.568 4.933 3.863 5.257 4.043 5.535 C 4.224 5.816 4.3 6.072 4.787 6.53 L 4.821 6.494 L 4.856 6.457 C 4.38 6.01 4.316 5.774 4.127 5.481 C 3.936 5.185 3.628 4.852 2.682 4.233 L 2.654 4.275 Z M 4.821 6.494 C 4.869 6.479 4.869 6.479 4.869 6.479 C 4.869 6.479 4.869 6.479 4.869 6.479 C 4.869 6.479 4.869 6.479 4.869 6.478 C 4.869 6.478 4.869 6.478 4.869 6.477 C 4.868 6.476 4.868 6.474 4.867 6.472 C 4.866 6.468 4.864 6.462 4.861 6.454 C 4.856 6.437 4.848 6.413 4.837 6.381 C 4.814 6.317 4.78 6.224 4.733 6.103 C 4.638 5.862 4.488 5.512 4.27 5.078 C 3.834 4.21 3.125 3.004 2.031 1.651 L 1.992 1.683 L 1.954 1.714 C 3.042 3.061 3.748 4.26 4.181 5.123 C 4.397 5.554 4.546 5.901 4.64 6.14 C 4.687 6.259 4.72 6.352 4.742 6.414 C 4.753 6.445 4.761 6.469 4.766 6.485 C 4.769 6.493 4.771 6.499 4.772 6.502 C 4.773 6.504 4.773 6.506 4.773 6.507 C 4.773 6.507 4.774 6.508 4.774 6.508 C 4.774 6.508 4.774 6.508 4.774 6.508 C 4.774 6.508 4.774 6.508 4.774 6.508 C 4.774 6.508 4.774 6.508 4.821 6.494 Z M 1.992 1.683 L 2.031 1.651 C 1.593 1.109 1.092 0.542 0.523 -0.035 L 0.487 0 L 0.452 0.035 C 1.019 0.61 1.517 1.174 1.954 1.714 L 1.992 1.683 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.173,
    height: 12.631,
    viewBox: "0 0 7.173 12.631",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.639,
      top: 6.667,
      width: 7.173,
      height: 12.631,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.918 0 C 8.246 3.937 4.054 5.358 2.167 7.96 C 0.28 10.561 0.963 10.725 0 12.631 C 0 12.631 0.412 10.533 2.268 4.733 C 2.92 2.694 6.35 1.213 6.918 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.173,
    height: 12.631,
    viewBox: "0 0 7.173 12.631",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.639,
      top: 6.667,
      width: 7.173,
      height: 12.631,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.918 0 L 6.965 -0.016 C 6.959 -0.035 6.941 -0.049 6.921 -0.05 C 6.9 -0.051 6.881 -0.04 6.873 -0.021 L 6.918 0 Z M 0 12.631 L -0.049 12.622 C -0.054 12.646 -0.04 12.67 -0.016 12.679 C 0.007 12.687 0.033 12.676 0.045 12.654 L 0 12.631 Z M 2.268 4.733 L 2.22 4.718 L 2.22 4.718 L 2.268 4.733 Z M 6.918 0 L 6.87 0.016 C 7.199 0.991 7.186 1.807 6.954 2.524 C 6.721 3.241 6.268 3.863 5.712 4.446 C 5.155 5.03 4.499 5.572 3.859 6.135 C 3.221 6.695 2.602 7.275 2.127 7.93 L 2.167 7.96 L 2.208 7.989 C 2.676 7.343 3.288 6.77 3.925 6.21 C 4.561 5.651 5.224 5.104 5.784 4.515 C 6.346 3.926 6.81 3.292 7.049 2.554 C 7.288 1.816 7.3 0.978 6.965 -0.016 L 6.918 0 Z M 2.167 7.96 L 2.127 7.93 C 1.181 9.234 0.877 9.93 0.689 10.542 C 0.502 11.151 0.434 11.661 -0.045 12.609 L 0 12.631 L 0.045 12.654 C 0.529 11.696 0.601 11.17 0.785 10.571 C 0.968 9.973 1.266 9.286 2.208 7.989 L 2.167 7.96 Z M 0 12.631 C 0.049 12.641 0.049 12.641 0.049 12.641 C 0.049 12.641 0.049 12.641 0.049 12.641 C 0.049 12.641 0.049 12.641 0.049 12.641 C 0.049 12.64 0.049 12.64 0.049 12.64 C 0.05 12.639 0.05 12.637 0.05 12.635 C 0.051 12.631 0.052 12.625 0.054 12.616 C 0.057 12.6 0.063 12.575 0.07 12.54 C 0.085 12.472 0.108 12.368 0.142 12.224 C 0.21 11.938 0.319 11.495 0.486 10.87 C 0.821 9.622 1.388 7.648 2.316 4.748 L 2.268 4.733 L 2.22 4.718 C 1.292 7.619 0.725 9.594 0.39 10.844 C 0.222 11.47 0.112 11.914 0.045 12.201 C 0.011 12.345 -0.013 12.45 -0.028 12.519 C -0.035 12.554 -0.04 12.579 -0.044 12.596 C -0.046 12.605 -0.047 12.611 -0.048 12.615 C -0.048 12.617 -0.049 12.619 -0.049 12.62 C -0.049 12.621 -0.049 12.621 -0.049 12.621 C -0.049 12.621 -0.049 12.621 -0.049 12.622 C -0.049 12.622 -0.049 12.622 -0.049 12.622 C -0.049 12.622 -0.049 12.622 0 12.631 Z M 2.268 4.733 L 2.316 4.748 C 2.476 4.249 2.807 3.78 3.226 3.338 C 3.645 2.897 4.151 2.485 4.655 2.097 C 5.158 1.71 5.663 1.345 6.075 1.003 C 6.487 0.662 6.816 0.336 6.963 0.021 L 6.918 0 L 6.873 -0.021 C 6.736 0.271 6.423 0.585 6.011 0.926 C 5.601 1.267 5.101 1.628 4.594 2.017 C 4.089 2.406 3.579 2.822 3.154 3.27 C 2.729 3.717 2.387 4.198 2.22 4.718 L 2.268 4.733 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.757,
    height: 19.646,
    viewBox: "0 0 1.757 19.646",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.426,
      top: 0,
      width: 1.757,
      height: 19.646,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.414 0 C 2.043 3.991 2.094 8.199 1.081 12.425 C 0.069 16.651 0.867 16.675 0.575 19.646 C 0.575 19.646 0.284 19.033 0.016 10.319 C -0.079 7.256 0.277 1.877 0.414 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.414 0 L 0.46 -0.019 C 0.451 -0.04 0.429 -0.053 0.406 -0.049 C 0.383 -0.046 0.366 -0.027 0.364 -0.004 L 0.414 0 Z M 0.575 19.646 L 0.53 19.667 C 0.54 19.687 0.562 19.699 0.584 19.695 C 0.606 19.691 0.623 19.673 0.625 19.651 L 0.575 19.646 Z M 0.016 10.319 L -0.034 10.321 L -0.034 10.321 L 0.016 10.319 Z M 0.414 0 L 0.368 0.019 C 1.992 3.998 2.043 8.195 1.033 12.413 L 1.081 12.425 L 1.13 12.436 C 2.144 8.202 2.094 3.984 0.46 -0.019 L 0.414 0 Z M 1.081 12.425 L 1.033 12.413 C 0.526 14.529 0.471 15.597 0.508 16.508 C 0.545 17.418 0.671 18.16 0.526 19.641 L 0.575 19.646 L 0.625 19.651 C 0.771 18.161 0.644 17.406 0.608 16.504 C 0.571 15.604 0.624 14.546 1.13 12.436 L 1.081 12.425 Z M 0.575 19.646 C 0.621 19.624 0.621 19.624 0.621 19.624 C 0.621 19.624 0.621 19.624 0.621 19.625 C 0.621 19.625 0.621 19.625 0.621 19.625 C 0.621 19.625 0.621 19.625 0.621 19.625 C 0.621 19.626 0.621 19.626 0.621 19.625 C 0.621 19.625 0.62 19.623 0.62 19.621 C 0.618 19.616 0.615 19.606 0.611 19.59 C 0.603 19.558 0.591 19.502 0.575 19.406 C 0.544 19.214 0.499 18.866 0.446 18.246 C 0.34 17.005 0.2 14.674 0.066 10.318 L 0.016 10.319 L -0.034 10.321 C 0.1 14.678 0.24 17.011 0.346 18.254 C 0.4 18.876 0.445 19.226 0.476 19.422 C 0.492 19.519 0.505 19.579 0.514 19.614 C 0.518 19.632 0.522 19.644 0.525 19.652 C 0.526 19.656 0.527 19.66 0.528 19.662 C 0.529 19.663 0.529 19.664 0.529 19.665 C 0.53 19.665 0.53 19.666 0.53 19.666 C 0.53 19.666 0.53 19.666 0.53 19.667 C 0.53 19.667 0.53 19.667 0.53 19.667 C 0.53 19.667 0.53 19.667 0.575 19.646 Z M 0.016 10.319 L 0.066 10.318 C -0.029 7.258 0.327 1.881 0.464 0.004 L 0.414 0 L 0.364 -0.004 C 0.227 1.873 -0.129 7.255 -0.034 10.321 L 0.016 10.319 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.291,
    height: 4.576,
    viewBox: "0 0 7.291 4.576",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.445,
      top: 18.547,
      width: 7.291,
      height: 4.576,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.795 2.128 C 6.787 2.397 6.34 3.965 6.34 3.965 C 6.265 4.313 5.956 4.563 5.6 4.563 C 5.6 4.563 3.786 4.528 3.348 4.563 C 2.985 4.592 1.607 4.563 1.607 4.563 C 1.25 4.563 0.942 4.313 0.867 3.965 L 0 0 L 7.291 0.122 L 6.795 2.128",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.445,
      top: 18.547,
      width: 7.291,
      height: 4.576,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.291401386260986,
      height: 4.576157093048096,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.193,
    height: 7.263,
    viewBox: "0 0 9.193 7.263",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.005,
      top: -0.941,
      width: 9.193,
      height: 7.263,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.122 0 C 6.299 4.351 2.156 5.702 0.328 5.517 C -1.5 5.332 4.898 7.231 5.05 7.262 C 5.203 7.293 9.193 6.711 9.193 6.711 L 9.193 2.04 L 8.219 0.941",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 7.291,
    height: 4.576,
    viewBox: "0 0 7.291 4.576",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.445,
      top: 18.547,
      width: 7.291,
      height: 4.576,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.845 2.129 C 6.846 2.102 6.824 2.079 6.796 2.078 C 6.769 2.077 6.746 2.099 6.745 2.126 L 6.795 2.128 L 6.845 2.129 Z M 6.34 3.965 L 6.292 3.951 L 6.291 3.954 L 6.34 3.965 Z M 5.6 4.563 L 5.599 4.613 L 5.6 4.613 L 5.6 4.563 Z M 3.348 4.563 L 3.344 4.513 L 3.344 4.513 L 3.348 4.563 Z M 1.607 4.563 L 1.608 4.513 L 1.607 4.513 L 1.607 4.563 Z M 0.867 3.965 L 0.916 3.954 L 0.916 3.954 L 0.867 3.965 Z M 0 0 L 0.001 -0.05 C -0.014 -0.05 -0.029 -0.043 -0.039 -0.032 C -0.048 -0.02 -0.052 -0.004 -0.049 0.011 L 0 0 Z M 7.291 0.122 L 7.34 0.134 C 7.344 0.119 7.34 0.104 7.331 0.092 C 7.322 0.08 7.307 0.073 7.292 0.072 L 7.291 0.122 Z M 6.746 2.116 C 6.74 2.143 6.756 2.17 6.783 2.176 C 6.81 2.183 6.837 2.167 6.843 2.14 L 6.795 2.128 L 6.746 2.116 Z M 6.795 2.128 L 6.745 2.126 C 6.743 2.187 6.715 2.33 6.672 2.517 C 6.629 2.701 6.572 2.922 6.516 3.134 C 6.46 3.347 6.404 3.551 6.362 3.702 C 6.341 3.778 6.323 3.84 6.311 3.883 C 6.305 3.905 6.3 3.922 6.297 3.933 C 6.295 3.939 6.294 3.943 6.293 3.946 C 6.293 3.948 6.292 3.949 6.292 3.95 C 6.292 3.95 6.292 3.95 6.292 3.951 C 6.292 3.951 6.292 3.951 6.292 3.951 C 6.292 3.951 6.292 3.951 6.292 3.951 C 6.292 3.951 6.292 3.951 6.34 3.965 C 6.388 3.978 6.388 3.978 6.388 3.978 C 6.388 3.978 6.388 3.978 6.388 3.978 C 6.388 3.978 6.388 3.978 6.388 3.978 C 6.388 3.978 6.388 3.977 6.388 3.977 C 6.389 3.976 6.389 3.975 6.389 3.974 C 6.39 3.971 6.391 3.966 6.393 3.961 C 6.396 3.949 6.401 3.932 6.407 3.91 C 6.419 3.867 6.437 3.804 6.458 3.729 C 6.5 3.577 6.556 3.373 6.613 3.16 C 6.669 2.947 6.726 2.725 6.769 2.54 C 6.812 2.356 6.843 2.203 6.845 2.129 L 6.795 2.128 Z M 6.34 3.965 L 6.291 3.954 C 6.221 4.28 5.933 4.513 5.599 4.513 L 5.6 4.563 L 5.6 4.613 C 5.98 4.612 6.308 4.347 6.389 3.975 L 6.34 3.965 Z M 5.6 4.563 C 5.6 4.513 5.6 4.513 5.6 4.513 C 5.6 4.513 5.6 4.513 5.6 4.513 C 5.6 4.513 5.6 4.513 5.6 4.513 C 5.6 4.513 5.6 4.513 5.599 4.513 C 5.598 4.513 5.597 4.513 5.595 4.513 C 5.592 4.513 5.587 4.513 5.58 4.513 C 5.567 4.513 5.547 4.512 5.522 4.512 C 5.471 4.511 5.399 4.51 5.31 4.508 C 5.133 4.506 4.893 4.502 4.638 4.5 C 4.131 4.496 3.566 4.496 3.344 4.513 L 3.348 4.563 L 3.352 4.613 C 3.568 4.596 4.128 4.596 4.638 4.6 C 4.892 4.602 5.132 4.606 5.309 4.608 C 5.397 4.61 5.469 4.611 5.52 4.612 C 5.545 4.612 5.565 4.613 5.578 4.613 C 5.585 4.613 5.59 4.613 5.593 4.613 C 5.595 4.613 5.596 4.613 5.597 4.613 C 5.598 4.613 5.598 4.613 5.598 4.613 C 5.598 4.613 5.598 4.613 5.598 4.613 C 5.599 4.613 5.599 4.613 5.599 4.613 C 5.599 4.613 5.599 4.613 5.6 4.563 Z M 3.348 4.563 L 3.344 4.513 C 3.165 4.528 2.733 4.528 2.342 4.524 C 2.147 4.522 1.964 4.52 1.829 4.517 C 1.762 4.516 1.707 4.515 1.668 4.514 C 1.649 4.514 1.634 4.514 1.624 4.514 C 1.619 4.514 1.615 4.513 1.612 4.513 C 1.611 4.513 1.61 4.513 1.609 4.513 C 1.609 4.513 1.609 4.513 1.609 4.513 C 1.608 4.513 1.608 4.513 1.608 4.513 C 1.608 4.513 1.608 4.513 1.608 4.513 C 1.608 4.513 1.608 4.513 1.607 4.563 C 1.606 4.613 1.606 4.613 1.606 4.613 C 1.606 4.613 1.606 4.613 1.606 4.613 C 1.606 4.613 1.606 4.613 1.606 4.613 C 1.607 4.613 1.607 4.613 1.607 4.613 C 1.608 4.613 1.609 4.613 1.61 4.613 C 1.613 4.613 1.617 4.613 1.622 4.614 C 1.632 4.614 1.647 4.614 1.666 4.614 C 1.705 4.615 1.76 4.616 1.827 4.617 C 1.962 4.62 2.146 4.622 2.341 4.624 C 2.73 4.628 3.168 4.628 3.352 4.613 L 3.348 4.563 Z M 1.607 4.563 L 1.607 4.513 C 1.274 4.513 0.986 4.28 0.916 3.954 L 0.867 3.965 L 0.818 3.975 C 0.898 4.347 1.227 4.612 1.607 4.613 L 1.607 4.563 Z M 0.867 3.965 L 0.916 3.954 L 0.049 -0.011 L 0 0 L -0.049 0.011 L 0.818 3.975 L 0.867 3.965 Z M 0 0 L -0.001 0.05 L 7.291 0.172 L 7.291 0.122 L 7.292 0.072 L 0.001 -0.05 L 0 0 Z M 7.291 0.122 L 7.243 0.11 L 6.746 2.116 L 6.795 2.128 L 6.843 2.14 L 7.34 0.134 L 7.291 0.122 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.169,
    height: 0.879,
    viewBox: "0 0 0.169 0.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.034,
      top: 5.538,
      width: 0.169,
      height: 0.879,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.049 -0.009 C 0.044 -0.037 0.018 -0.054 -0.009 -0.049 C -0.037 -0.044 -0.054 -0.018 -0.049 0.009 L 0 0 L 0.049 -0.009 Z M 0.119 0.888 C 0.125 0.915 0.151 0.933 0.178 0.928 C 0.205 0.923 0.223 0.896 0.218 0.869 L 0.169 0.879 L 0.119 0.888 Z M 0 0 L -0.049 0.009 L 0.119 0.888 L 0.169 0.879 L 0.218 0.869 L 0.049 -0.009 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.014,
    height: 0.220,
    viewBox: "0 0 0.014 0.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.172,
      top: 11.037,
      width: 0.014,
      height: 0.22,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.057 0 C 0.057 -0.028 0.035 -0.05 0.007 -0.05 C -0.02 -0.05 -0.043 -0.028 -0.043 0 L 0.007 0 L 0.057 0 Z M -0.043 0.22 C -0.043 0.248 -0.02 0.27 0.007 0.27 C 0.035 0.27 0.057 0.248 0.057 0.22 L 0.007 0.22 L -0.043 0.22 Z M 0.007 0 L -0.043 0 L -0.043 0.22 L 0.007 0.22 L 0.057 0.22 L 0.057 0 L 0.007 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.322,
    height: 0.444,
    viewBox: "0 0 0.322 0.444",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.129,
      top: 16.094,
      width: 0.322,
      height: 0.444,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 -0.029 C 0.024 -0.052 -0.007 -0.057 -0.029 -0.04 C -0.052 -0.024 -0.057 0.007 -0.04 0.029 L 0 0 L 0.04 -0.029 Z M 0.282 0.473 C 0.298 0.496 0.329 0.501 0.352 0.484 C 0.374 0.468 0.379 0.437 0.363 0.415 L 0.322 0.444 L 0.282 0.473 Z M 0 0 L -0.04 0.029 L 0.282 0.473 L 0.322 0.444 L 0.363 0.415 L 0.04 -0.029 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.657,
    height: 0.095,
    viewBox: "0 0 0.657 0.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.421,
      top: 21.432,
      width: 0.657,
      height: 0.095,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.023 -0.044 C -0.001 -0.057 -0.031 -0.048 -0.044 -0.023 C -0.057 0.001 -0.048 0.031 -0.023 0.044 L 0 0 L 0.023 -0.044 Z M 0.673 0.094 C 0.699 0.085 0.713 0.056 0.704 0.03 C 0.694 0.004 0.666 -0.009 0.64 0 L 0.657 0.047 L 0.673 0.094 Z M 0 0 L -0.023 0.044 C 0.191 0.158 0.444 0.177 0.673 0.094 L 0.657 0.047 L 0.64 0 C 0.437 0.073 0.213 0.057 0.023 -0.044 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.286,
      top: 24.278,
      width: 23.992,
      height: 23.992,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.992,
      height: 23.992,
      borderRadius: "50%",
      backgroundColor: "rgb(225,255,234)",
      boxShadow: "inset 0 0 0 0.143px rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 137.812,
      top: 7.569,
      width: 21.707,
      height: 22.033,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.707,
      height: 21.707,
      borderRadius: "50%",
      backgroundColor: "var(--w)",
      boxShadow: "inset 0 0 0 0.143px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.142,
      top: 5.712,
      width: 16.566,
      height: 16.321,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.448,
    height: 11.568,
    viewBox: "0 0 15.448 11.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.448,
      height: 11.568,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.09 6.474 L 9.306 0.659 C 8.432 -0.22 7.016 -0.22 6.142 0.659 L 0.328 6.504 C 0.118 6.715 0 7.002 0 7.3 L 0 7.3 L 7.724 11.568 L 15.448 7.3 L 15.448 7.3 C 15.437 6.989 15.309 6.694 15.09 6.474 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.09 6.474 L 15.158 6.406 L 15.158 6.406 L 15.09 6.474 Z M 9.306 0.659 L 9.374 0.591 L 9.374 0.591 L 9.306 0.659 Z M 6.142 0.659 L 6.074 0.591 L 6.074 0.591 L 6.142 0.659 Z M 0.328 6.504 L 0.26 6.436 L 0.259 6.436 L 0.328 6.504 Z M 0 7.3 M 0 7.3 M 7.724 11.568 L 7.677 11.653 C 7.706 11.669 7.741 11.669 7.77 11.653 L 7.724 11.568 Z M 15.448 7.3 M 15.448 7.3 M 15.09 6.474 L 15.158 6.406 L 9.374 0.591 L 9.306 0.659 L 9.237 0.727 L 15.022 6.542 L 15.09 6.474 Z M 9.306 0.659 L 9.374 0.591 C 8.463 -0.325 6.985 -0.325 6.074 0.591 L 6.142 0.659 L 6.21 0.727 C 7.046 -0.114 8.401 -0.114 9.237 0.727 L 9.306 0.659 Z M 6.142 0.659 L 6.074 0.591 L 0.26 6.436 L 0.328 6.504 L 0.396 6.572 L 6.21 0.727 L 6.142 0.659 Z M 0.328 6.504 L 0.259 6.436 C 0.031 6.666 -0.097 6.976 -0.096 7.3 L 0 7.3 L 0.096 7.3 C 0.096 7.027 0.204 6.765 0.396 6.572 L 0.328 6.504 Z M 0 7.3 M 0 7.3 L -0.047 7.384 L 7.677 11.653 L 7.724 11.568 L 7.77 11.484 L 0.047 7.215 L 0 7.3 Z M 7.724 11.568 L 7.77 11.653 L 15.494 7.384 L 15.448 7.3 L 15.401 7.215 L 7.677 11.484 L 7.724 11.568 Z M 15.448 7.3 M 15.448 7.3 L 15.544 7.296 C 15.532 6.962 15.394 6.644 15.158 6.406 L 15.09 6.474 L 15.022 6.542 C 15.223 6.745 15.341 7.017 15.351 7.303 L 15.448 7.3 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.569,
      top: 0.714,
      width: 10.7,
      height: 10.758,
      borderRadius: 1.7671644687652588,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.096px rgb(27,27,27), 0 0 0 0.096px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.699,
      top: 1.242,
      width: 12.05,
      height: 12.114,
      borderRadius: 1.7671644687652588,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.699,
      top: 1.242,
      width: 12.05,
      height: 12.114,
      borderRadius: 1.7671644687652588,
      boxShadow: "inset 0 0 0 0.096px rgb(27,27,27), 0 0 0 0.096px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.144,
      top: 3.693,
      width: 9.159,
      height: 1.146,
      borderRadius: 0.18481352925300598,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.096px rgb(27,27,27), 0 0 0 0.096px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.144,
      top: 5.738,
      width: 6.253,
      height: 1.146,
      borderRadius: 0.18481352925300598,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.096px rgb(27,27,27), 0 0 0 0.096px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 6.084,
    height: 8.026,
    viewBox: "0 0 6.084 8.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7.3,
      width: 6.084,
      height: 8.026,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 6.205 C -0.001 6.871 0.235 7.517 0.666 8.026 L 6.084 3.362 L 0 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.047 -0.084 C 0.017 -0.101 -0.02 -0.1 -0.049 -0.083 C -0.078 -0.066 -0.096 -0.034 -0.096 0 L 0 0 Z M 0 6.205 L 0.096 6.205 L 0.096 6.205 L 0 6.205 Z M 0.666 8.026 L 0.593 8.088 C 0.609 8.107 0.633 8.12 0.659 8.122 C 0.684 8.124 0.71 8.115 0.729 8.099 L 0.666 8.026 Z M 6.084 3.362 L 6.146 3.435 C 6.17 3.415 6.183 3.384 6.179 3.352 C 6.176 3.321 6.158 3.293 6.13 3.278 L 6.084 3.362 Z M 0 0 L -0.096 0 L -0.096 6.205 L 0 6.205 L 0.096 6.205 L 0.096 0 L 0 0 Z M 0 6.205 L -0.096 6.204 C -0.097 6.894 0.147 7.562 0.593 8.088 L 0.666 8.026 L 0.74 7.963 C 0.324 7.472 0.096 6.849 0.096 6.205 L 0 6.205 Z M 0.666 8.026 L 0.729 8.099 L 6.146 3.435 L 6.084 3.362 L 6.021 3.289 L 0.603 7.952 L 0.666 8.026 Z M 6.084 3.362 L 6.13 3.278 L 0.047 -0.084 L 0 0 L -0.047 0.084 L 6.037 3.447 L 6.084 3.362 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.084,
    height: 8.026,
    viewBox: "0 0 6.084 8.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.364,
      top: 7.3,
      width: 6.084,
      height: 8.026,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.084 0 L 0 3.362 L 5.417 8.026 C 5.848 7.517 6.084 6.871 6.084 6.205 L 6.084 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.084 0 L 6.18 0 C 6.18 -0.034 6.162 -0.066 6.132 -0.083 C 6.103 -0.1 6.067 -0.101 6.037 -0.084 L 6.084 0 Z M 0 3.362 L -0.047 3.278 C -0.074 3.293 -0.093 3.321 -0.096 3.352 C -0.099 3.384 -0.087 3.415 -0.063 3.435 L 0 3.362 Z M 5.417 8.026 L 5.354 8.099 C 5.374 8.115 5.399 8.124 5.425 8.122 C 5.45 8.12 5.474 8.107 5.491 8.088 L 5.417 8.026 Z M 6.084 6.205 L 5.987 6.205 L 5.987 6.205 L 6.084 6.205 Z M 6.084 0 L 6.037 -0.084 L -0.047 3.278 L 0 3.362 L 0.047 3.447 L 6.13 0.084 L 6.084 0 Z M 0 3.362 L -0.063 3.435 L 5.354 8.099 L 5.417 8.026 L 5.48 7.952 L 0.063 3.289 L 0 3.362 Z M 5.417 8.026 L 5.491 8.088 C 5.937 7.562 6.181 6.894 6.18 6.204 L 6.084 6.205 L 5.987 6.205 C 5.988 6.849 5.76 7.472 5.344 7.963 L 5.417 8.026 Z M 6.084 6.205 L 6.18 6.205 L 6.18 0 L 6.084 0 L 5.987 0 L 5.987 6.205 L 6.084 6.205 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.115,
    height: 6.674,
    viewBox: "0 0 14.115 6.674",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.666,
      top: 9.646,
      width: 14.115,
      height: 6.674,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.698 1.015 L 7.868 0.301 C 7.402 -0.1 6.713 -0.1 6.247 0.301 L 5.417 1.015 L 0 5.679 C 0.514 6.287 1.279 6.674 2.135 6.674 L 11.98 6.674 C 12.836 6.674 13.601 6.287 14.115 5.679 L 8.698 1.015 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.698 1.015 L 8.761 0.942 L 8.761 0.942 L 8.698 1.015 Z M 7.868 0.301 L 7.805 0.374 L 7.805 0.374 L 7.868 0.301 Z M 6.247 0.301 L 6.31 0.374 L 6.31 0.374 L 6.247 0.301 Z M 5.417 1.015 L 5.354 0.942 L 5.354 0.942 L 5.417 1.015 Z M 0 5.679 L -0.063 5.606 C -0.103 5.64 -0.108 5.7 -0.074 5.741 L 0 5.679 Z M 14.115 5.679 L 14.189 5.741 C 14.223 5.7 14.218 5.64 14.178 5.606 L 14.115 5.679 Z M 8.698 1.015 L 8.761 0.942 L 7.931 0.228 L 7.868 0.301 L 7.805 0.374 L 8.635 1.088 L 8.698 1.015 Z M 7.868 0.301 L 7.931 0.228 C 7.429 -0.205 6.686 -0.205 6.184 0.228 L 6.247 0.301 L 6.31 0.374 C 6.74 0.004 7.376 0.004 7.805 0.374 L 7.868 0.301 Z M 6.247 0.301 L 6.184 0.228 L 5.354 0.942 L 5.417 1.015 L 5.48 1.088 L 6.31 0.374 L 6.247 0.301 Z M 5.417 1.015 L 5.354 0.942 L -0.063 5.606 L 0 5.679 L 0.063 5.752 L 5.48 1.088 L 5.417 1.015 Z M 0 5.679 L -0.074 5.741 C 0.458 6.37 1.249 6.771 2.135 6.771 L 2.135 6.674 L 2.135 6.578 C 1.309 6.578 0.57 6.204 0.074 5.617 L 0 5.679 Z M 2.135 6.674 L 2.135 6.771 L 11.98 6.771 L 11.98 6.674 L 11.98 6.578 L 2.135 6.578 L 2.135 6.674 Z M 11.98 6.674 L 11.98 6.771 C 12.866 6.771 13.657 6.37 14.189 5.741 L 14.115 5.679 L 14.041 5.617 C 13.545 6.204 12.806 6.578 11.98 6.578 L 11.98 6.674 Z M 14.115 5.679 L 14.178 5.606 L 8.761 0.942 L 8.698 1.015 L 8.635 1.088 L 14.052 5.752 L 14.115 5.679 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.862,
      top: 10.8,
      width: 1.153,
      height: 0.268,
      borderRadius: 0.13385343551635742,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.096px rgb(27,27,27), 0 0 0 0.096px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.862,
      top: 11.874,
      width: 1.704,
      height: 0.268,
      borderRadius: 0.13385343551635742,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.096px rgb(27,27,27), 0 0 0 0.096px rgb(27,27,27)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.285,
      top: 26.563,
      width: 21.919,
      height: 22.905,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 0.565,
    height: 0.556,
    viewBox: "0 0 0.565 0.556",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.2,
      top: 4.542,
      width: 0.565,
      height: 0.556,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.035 0.521 C -0.055 0.54 -0.055 0.572 -0.036 0.591 C -0.016 0.611 0.015 0.611 0.035 0.592 L 0 0.556 L -0.035 0.521 Z M 0.6 0.036 C 0.62 0.016 0.62 -0.015 0.601 -0.035 C 0.582 -0.055 0.55 -0.055 0.53 -0.036 L 0.565 0 L 0.6 0.036 Z M 0 0.556 L 0.035 0.592 L 0.6 0.036 L 0.565 0 L 0.53 -0.036 L -0.035 0.521 L 0 0.556 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.237,
    height: 1.419,
    viewBox: "0 0 2.237 1.419",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.24,
      top: 18.785,
      width: 2.237,
      height: 1.419,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.272 0.035 C 2.292 0.016 2.291 -0.016 2.272 -0.036 C 2.252 -0.055 2.221 -0.055 2.201 -0.035 L 2.237 0 L 2.272 0.035 Z M -0.017 1.372 C -0.043 1.381 -0.056 1.409 -0.047 1.435 C -0.038 1.461 -0.009 1.475 0.017 1.466 L 0 1.419 L -0.017 1.372 Z M 2.237 0 L 2.201 -0.035 C 1.577 0.595 0.819 1.076 -0.017 1.372 L 0 1.419 L 0.017 1.466 C 0.867 1.165 1.638 0.676 2.272 0.035 L 2.237 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.137,
      top: 4.27,
      width: 5.031,
      height: 5.162,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.031,
    height: 5.162,
    viewBox: "0 0 5.031 5.162",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.031,
      height: 5.162,
      color: "rgb(50,52,66)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.969 4.894 C 5.246 3.179 1.659 2.643 1.926 1.915 C 2.192 1.187 2.461 0.367 1.665 0.04 C 0.87 -0.286 0.285 1.486 0.285 1.486 L 0 2.91 L 0.494 4.005 L 5.031 5.162",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 1.723,
    height: 0.657,
    viewBox: "0 0 1.723 0.657",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.698,
      top: 1.374,
      width: 1.723,
      height: 0.657,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.317 C 0 0.317 0.926 -0.296 1.723 0.183 L 1.627 0.577 L 0.248 0.657 L 0 0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.317 L -0.028 0.275 C -0.039 0.283 -0.047 0.295 -0.049 0.308 C -0.052 0.322 -0.048 0.335 -0.04 0.347 L 0 0.317 Z M 1.723 0.183 L 1.772 0.195 C 1.777 0.174 1.768 0.152 1.749 0.141 L 1.723 0.183 Z M 1.627 0.577 L 1.63 0.627 C 1.652 0.626 1.67 0.61 1.675 0.589 L 1.627 0.577 Z M 0.248 0.657 L 0.207 0.686 C 0.217 0.7 0.233 0.708 0.25 0.707 L 0.248 0.657 Z M 0 0.317 C 0.028 0.359 0.028 0.359 0.028 0.359 C 0.028 0.359 0.028 0.359 0.028 0.359 C 0.028 0.359 0.028 0.359 0.028 0.359 C 0.028 0.359 0.028 0.359 0.028 0.358 C 0.028 0.358 0.029 0.358 0.03 0.357 C 0.031 0.356 0.034 0.355 0.037 0.353 C 0.044 0.349 0.054 0.342 0.067 0.335 C 0.093 0.319 0.131 0.298 0.18 0.273 C 0.277 0.224 0.414 0.164 0.576 0.118 C 0.901 0.027 1.315 -0.004 1.697 0.226 L 1.723 0.183 L 1.749 0.141 C 1.334 -0.109 0.887 -0.073 0.549 0.022 C 0.38 0.07 0.236 0.133 0.135 0.184 C 0.084 0.21 0.044 0.232 0.016 0.249 C 0.002 0.257 -0.009 0.263 -0.016 0.268 C -0.02 0.27 -0.022 0.272 -0.024 0.273 C -0.025 0.274 -0.026 0.274 -0.027 0.275 C -0.027 0.275 -0.027 0.275 -0.027 0.275 C -0.027 0.275 -0.027 0.275 -0.028 0.275 C -0.028 0.275 -0.028 0.275 -0.028 0.275 C -0.028 0.275 -0.028 0.275 0 0.317 Z M 1.723 0.183 L 1.675 0.171 L 1.578 0.565 L 1.627 0.577 L 1.675 0.589 L 1.772 0.195 L 1.723 0.183 Z M 1.627 0.577 L 1.624 0.527 L 0.245 0.607 L 0.248 0.657 L 0.25 0.707 L 1.63 0.627 L 1.627 0.577 Z M 0.248 0.657 L 0.288 0.628 L 0.04 0.288 L 0 0.317 L -0.04 0.347 L 0.207 0.686 L 0.248 0.657 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.449,
    height: 11.834,
    viewBox: "0 0 14.449 11.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.722,
      top: 6.533,
      width: 14.449,
      height: 11.834,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.567 10.993 C 0.374 10.212 -2.634 -0.031 7.45 0 C 17.533 0.031 13.755 11.834 13.755 11.834 L 0.567 10.993 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.722,
      top: 6.533,
      width: 14.449,
      height: 11.834,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.448634147644043,
      height: 11.833502769470215,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.661,
      top: -1.781,
      width: 7.798,
      height: 8.126,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.188,
      height: 3.816,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.66,
      top: 0.485,
      width: 3.868,
      height: 2.845,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.66,
      top: 0.485,
      width: 3.868,
      height: 2.845,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.8677761554718018,
      height: 2.8451313972473145,
      clipPath: "ellipse(1.934px 1.423px at 1.934px 1.423px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.572,
      top: 0.174,
      width: 4.769,
      height: 2.325,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.66,
      top: 0.485,
      width: 3.868,
      height: 2.845,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 0.473,
    height: 2.405,
    viewBox: "0 0 0.473 2.405",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.324,
      top: 5.721,
      width: 0.473,
      height: 2.405,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.304 0 C 0.289 0.619 0 2.405 0 2.405 L 0.473 1.137 L 0.304 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.304 0 L 0.354 -0.007 C 0.35 -0.033 0.327 -0.051 0.301 -0.05 C 0.276 -0.048 0.255 -0.027 0.255 -0.001 L 0.304 0 Z M 0 2.405 L -0.049 2.397 C -0.053 2.422 -0.038 2.447 -0.013 2.453 C 0.012 2.46 0.038 2.447 0.047 2.422 L 0 2.405 Z M 0.473 1.137 L 0.52 1.155 C 0.523 1.147 0.524 1.138 0.523 1.13 L 0.473 1.137 Z M 0.304 0 L 0.255 -0.001 C 0.247 0.305 0.171 0.903 0.097 1.427 C 0.06 1.689 0.023 1.932 -0.004 2.109 C -0.018 2.197 -0.029 2.269 -0.037 2.319 C -0.041 2.344 -0.044 2.364 -0.046 2.377 C -0.047 2.383 -0.048 2.389 -0.049 2.392 C -0.049 2.394 -0.049 2.395 -0.049 2.396 C -0.049 2.396 -0.049 2.396 -0.049 2.397 C -0.049 2.397 -0.049 2.397 -0.049 2.397 C -0.049 2.397 -0.049 2.397 -0.049 2.397 C -0.049 2.397 -0.049 2.397 0 2.405 C 0.049 2.413 0.049 2.413 0.049 2.413 C 0.049 2.413 0.049 2.413 0.049 2.413 C 0.049 2.413 0.049 2.413 0.049 2.413 C 0.049 2.412 0.049 2.412 0.05 2.412 C 0.05 2.411 0.05 2.409 0.05 2.408 C 0.051 2.404 0.052 2.399 0.053 2.393 C 0.055 2.379 0.058 2.36 0.062 2.335 C 0.07 2.285 0.081 2.212 0.095 2.124 C 0.122 1.947 0.159 1.704 0.196 1.441 C 0.27 0.918 0.347 0.314 0.354 0.001 L 0.304 0 Z M 0 2.405 L 0.047 2.422 L 0.52 1.155 L 0.473 1.137 L 0.426 1.12 L -0.047 2.388 L 0 2.405 Z M 0.473 1.137 L 0.523 1.13 L 0.354 -0.007 L 0.304 0 L 0.255 0.007 L 0.424 1.145 L 0.473 1.137 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 14.449,
    height: 11.834,
    viewBox: "0 0 14.449 11.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.722,
      top: 6.533,
      width: 14.449,
      height: 11.834,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.567 10.993 L 0.518 11.005 C 0.523 11.026 0.542 11.041 0.563 11.042 L 0.567 10.993 Z M 13.755 11.834 L 13.752 11.883 C 13.775 11.885 13.796 11.871 13.803 11.849 L 13.755 11.834 Z M 0.567 10.993 L 0.615 10.981 C 0.518 10.588 -0.278 7.843 0.204 5.201 C 0.445 3.881 1.004 2.591 2.126 1.633 C 3.247 0.674 4.937 0.042 7.45 0.05 L 7.45 0 L 7.45 -0.05 C 4.92 -0.058 3.205 0.579 2.061 1.557 C 0.916 2.534 0.349 3.848 0.105 5.183 C -0.381 7.85 0.422 10.617 0.518 11.005 L 0.567 10.993 Z M 7.45 0 L 7.45 0.05 C 9.96 0.058 11.601 0.798 12.653 1.897 C 13.706 2.997 14.177 4.463 14.334 5.934 C 14.492 7.405 14.335 8.876 14.139 9.98 C 14.041 10.532 13.933 10.992 13.85 11.314 C 13.808 11.475 13.773 11.601 13.747 11.687 C 13.735 11.73 13.725 11.763 13.718 11.785 C 13.715 11.796 13.712 11.804 13.71 11.81 C 13.71 11.813 13.709 11.815 13.709 11.816 C 13.708 11.817 13.708 11.817 13.708 11.818 C 13.708 11.818 13.708 11.818 13.708 11.818 C 13.708 11.818 13.708 11.818 13.755 11.834 C 13.803 11.849 13.803 11.849 13.803 11.849 C 13.803 11.848 13.803 11.848 13.803 11.848 C 13.803 11.848 13.804 11.847 13.804 11.846 C 13.804 11.845 13.805 11.843 13.806 11.84 C 13.808 11.834 13.81 11.826 13.814 11.814 C 13.821 11.792 13.831 11.758 13.843 11.715 C 13.869 11.628 13.905 11.501 13.947 11.339 C 14.03 11.015 14.139 10.553 14.237 9.998 C 14.434 8.888 14.592 7.407 14.434 5.923 C 14.275 4.44 13.799 2.949 12.725 1.828 C 11.65 0.705 9.981 -0.042 7.45 -0.05 L 7.45 0 Z M 13.755 11.834 L 13.759 11.784 L 0.57 10.943 L 0.567 10.993 L 0.563 11.042 L 13.752 11.883 L 13.755 11.834 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.856,
    height: 2.572,
    viewBox: "0 0 2.856 2.572",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.067,
      top: 6.366,
      width: 2.856,
      height: 2.572,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.856 1.557 C 2.806 2.845 0.494 3.304 0 0.504 C 0 0.504 1.411 -0.28 1.434 0.107 C 1.509 1.343 2.856 1.557 2.856 1.557 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.856 1.557 L 2.906 1.559 C 2.907 1.533 2.889 1.511 2.864 1.507 L 2.856 1.557 Z M 0 0.504 L -0.024 0.46 C -0.043 0.47 -0.053 0.491 -0.049 0.512 L 0 0.504 Z M 1.434 0.107 L 1.484 0.104 L 1.484 0.104 L 1.434 0.107 Z M 2.856 1.557 L 2.807 1.555 C 2.782 2.165 2.222 2.585 1.6 2.514 C 0.984 2.443 0.294 1.882 0.049 0.495 L 0 0.504 L -0.049 0.512 C 0.2 1.925 0.913 2.535 1.589 2.613 C 2.259 2.69 2.88 2.236 2.906 1.559 L 2.856 1.557 Z M 0 0.504 C 0.024 0.547 0.024 0.547 0.024 0.547 C 0.024 0.547 0.024 0.547 0.024 0.547 C 0.024 0.547 0.024 0.547 0.024 0.547 C 0.025 0.547 0.025 0.547 0.025 0.547 C 0.026 0.546 0.027 0.546 0.028 0.545 C 0.031 0.544 0.035 0.542 0.04 0.539 C 0.05 0.533 0.065 0.525 0.084 0.515 C 0.123 0.494 0.178 0.465 0.243 0.432 C 0.376 0.365 0.551 0.28 0.728 0.207 C 0.905 0.133 1.078 0.074 1.207 0.056 C 1.273 0.046 1.319 0.049 1.348 0.06 C 1.362 0.065 1.369 0.072 1.374 0.078 C 1.379 0.084 1.383 0.094 1.384 0.11 L 1.434 0.107 L 1.484 0.104 C 1.482 0.072 1.473 0.043 1.454 0.018 C 1.436 -0.006 1.411 -0.023 1.384 -0.033 C 1.331 -0.054 1.264 -0.053 1.193 -0.043 C 1.051 -0.024 0.868 0.04 0.689 0.114 C 0.51 0.189 0.331 0.275 0.198 0.343 C 0.132 0.377 0.076 0.406 0.037 0.427 C 0.018 0.437 0.002 0.445 -0.008 0.451 C -0.013 0.454 -0.017 0.456 -0.02 0.458 C -0.021 0.458 -0.022 0.459 -0.023 0.459 C -0.024 0.46 -0.024 0.46 -0.024 0.46 C -0.024 0.46 -0.024 0.46 -0.024 0.46 C -0.024 0.46 -0.024 0.46 -0.024 0.46 C -0.024 0.46 -0.024 0.46 0 0.504 Z M 1.434 0.107 L 1.384 0.11 C 1.423 0.749 1.792 1.125 2.148 1.338 C 2.325 1.445 2.5 1.512 2.63 1.552 C 2.695 1.572 2.749 1.585 2.788 1.594 C 2.807 1.598 2.822 1.601 2.832 1.603 C 2.837 1.604 2.841 1.605 2.844 1.605 C 2.845 1.606 2.847 1.606 2.847 1.606 C 2.848 1.606 2.848 1.606 2.848 1.606 C 2.848 1.606 2.848 1.606 2.848 1.606 C 2.849 1.606 2.849 1.606 2.849 1.606 C 2.849 1.606 2.849 1.606 2.856 1.557 C 2.864 1.507 2.864 1.507 2.864 1.507 C 2.864 1.507 2.864 1.507 2.864 1.507 C 2.864 1.507 2.864 1.507 2.864 1.507 C 2.864 1.507 2.864 1.507 2.864 1.507 C 2.863 1.507 2.862 1.507 2.861 1.507 C 2.859 1.506 2.855 1.506 2.851 1.505 C 2.841 1.503 2.827 1.5 2.809 1.496 C 2.773 1.488 2.722 1.475 2.659 1.456 C 2.535 1.418 2.368 1.354 2.199 1.252 C 1.862 1.05 1.52 0.701 1.484 0.104 L 1.434 0.107 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.966,
    height: 2.542,
    viewBox: "0 0 2.966 2.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.911,
      top: 6.368,
      width: 2.966,
      height: 2.542,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.554 C 0.051 2.842 2.264 3.214 2.966 0.527 C 2.966 0.527 1.445 -0.282 1.422 0.105 C 1.348 1.34 0 1.554 0 1.554 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.554 L -0.008 1.505 C -0.033 1.509 -0.051 1.531 -0.05 1.556 L 0 1.554 Z M 2.966 0.527 L 3.014 0.54 C 3.02 0.517 3.01 0.494 2.989 0.483 L 2.966 0.527 Z M 1.422 0.105 L 1.472 0.108 L 1.472 0.108 L 1.422 0.105 Z M 0 1.554 L -0.05 1.556 C -0.023 2.234 0.573 2.666 1.245 2.581 C 1.92 2.496 2.66 1.895 3.014 0.54 L 2.966 0.527 L 2.918 0.514 C 2.57 1.846 1.853 2.403 1.233 2.482 C 0.61 2.561 0.074 2.163 0.05 1.552 L 0 1.554 Z M 2.966 0.527 C 2.989 0.483 2.989 0.483 2.989 0.483 C 2.989 0.483 2.989 0.483 2.989 0.483 C 2.989 0.483 2.989 0.483 2.989 0.483 C 2.989 0.483 2.989 0.483 2.988 0.482 C 2.987 0.482 2.986 0.481 2.985 0.481 C 2.982 0.479 2.978 0.477 2.972 0.474 C 2.961 0.468 2.944 0.459 2.923 0.449 C 2.881 0.427 2.822 0.397 2.75 0.362 C 2.606 0.292 2.414 0.202 2.221 0.124 C 2.029 0.047 1.832 -0.02 1.68 -0.042 C 1.605 -0.053 1.534 -0.054 1.479 -0.035 C 1.45 -0.026 1.424 -0.01 1.404 0.014 C 1.385 0.039 1.374 0.069 1.372 0.102 L 1.422 0.105 L 1.472 0.108 C 1.473 0.092 1.477 0.083 1.482 0.077 C 1.487 0.071 1.496 0.064 1.511 0.059 C 1.544 0.048 1.595 0.047 1.666 0.057 C 1.806 0.077 1.993 0.14 2.184 0.217 C 2.374 0.294 2.564 0.382 2.706 0.452 C 2.777 0.486 2.836 0.516 2.878 0.538 C 2.898 0.548 2.915 0.557 2.926 0.562 C 2.931 0.565 2.935 0.567 2.938 0.569 C 2.94 0.57 2.941 0.57 2.941 0.571 C 2.942 0.571 2.942 0.571 2.942 0.571 C 2.942 0.571 2.942 0.571 2.942 0.571 C 2.942 0.571 2.942 0.571 2.942 0.571 C 2.942 0.571 2.942 0.571 2.966 0.527 Z M 1.422 0.105 L 1.372 0.102 C 1.336 0.698 0.994 1.048 0.657 1.25 C 0.489 1.351 0.322 1.415 0.197 1.454 C 0.135 1.473 0.083 1.486 0.047 1.494 C 0.029 1.498 0.015 1.501 0.006 1.502 C 0.001 1.503 -0.002 1.504 -0.005 1.504 C -0.006 1.504 -0.007 1.505 -0.007 1.505 C -0.007 1.505 -0.008 1.505 -0.008 1.505 C -0.008 1.505 -0.008 1.505 -0.008 1.505 C -0.008 1.505 -0.008 1.505 -0.008 1.505 C -0.008 1.505 -0.008 1.505 0 1.554 C 0.008 1.604 0.008 1.604 0.008 1.603 C 0.008 1.603 0.008 1.603 0.008 1.603 C 0.008 1.603 0.008 1.603 0.008 1.603 C 0.008 1.603 0.009 1.603 0.009 1.603 C 0.01 1.603 0.011 1.603 0.012 1.603 C 0.015 1.602 0.019 1.602 0.024 1.601 C 0.035 1.599 0.05 1.596 0.069 1.591 C 0.107 1.583 0.161 1.569 0.227 1.549 C 0.357 1.509 0.531 1.442 0.709 1.336 C 1.065 1.122 1.434 0.747 1.472 0.108 L 1.422 0.105 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.747,
    height: 8.195,
    viewBox: "0 0 11.747 8.195",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.686,
      top: 11.109,
      width: 11.747,
      height: 8.195,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.104 8.195 L 0.643 8.195 L 0.006 1.163 C -0.052 0.526 0.342 0 0.888 0 L 10.859 0 C 11.405 0 11.799 0.526 11.742 1.163 L 11.104 8.195 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.686,
      top: 11.109,
      width: 11.747,
      height: 8.195,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.747261047363281,
      height: 8.194580078125,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.548,
    height: 5.196,
    viewBox: "0 0 14.548 5.196",
    fill: "none",
    style: {
      position: "absolute",
      left: -1.218,
      top: 3.522,
      width: 14.548,
      height: 5.196,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.363 C 2.238 -0.75 5.83 2.761 7.731 3.717 C 9.631 4.672 11.23 -0.674 13.827 0.072 C 16.425 0.817 11.167 4.805 11.167 4.805 L 4.337 5.196",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 11.747,
    height: 8.195,
    viewBox: "0 0 11.747 8.195",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.686,
      top: 11.109,
      width: 11.747,
      height: 8.195,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.104 8.195 L 11.104 8.245 C 11.13 8.245 11.152 8.225 11.154 8.199 L 11.104 8.195 Z M 0.643 8.195 L 0.593 8.199 C 0.596 8.225 0.617 8.245 0.643 8.245 L 0.643 8.195 Z M 0.006 1.163 L 0.055 1.158 L 0.055 1.158 L 0.006 1.163 Z M 11.742 1.163 L 11.692 1.158 L 11.692 1.158 L 11.742 1.163 Z M 11.104 8.195 L 11.104 8.145 L 0.643 8.145 L 0.643 8.195 L 0.643 8.245 L 11.104 8.245 L 11.104 8.195 Z M 0.643 8.195 L 0.693 8.19 L 0.055 1.158 L 0.006 1.163 L -0.044 1.167 L 0.593 8.199 L 0.643 8.195 Z M 0.006 1.163 L 0.055 1.158 C -0.001 0.541 0.381 0.05 0.888 0.05 L 0.888 0 L 0.888 -0.05 C 0.304 -0.05 -0.104 0.51 -0.044 1.167 L 0.006 1.163 Z M 0.888 0 L 0.888 0.05 L 10.859 0.05 L 10.859 0 L 10.859 -0.05 L 0.888 -0.05 L 0.888 0 Z M 10.859 0 L 10.859 0.05 C 11.367 0.05 11.748 0.541 11.692 1.158 L 11.742 1.163 L 11.791 1.167 C 11.851 0.51 11.443 -0.05 10.859 -0.05 L 10.859 0 Z M 11.742 1.163 L 11.692 1.158 L 11.054 8.19 L 11.104 8.195 L 11.154 8.199 L 11.791 1.167 L 11.742 1.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.357,
    height: 1.154,
    viewBox: "0 0 1.357 1.154",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.957,
      top: 14.149,
      width: 1.357,
      height: 1.154,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.355 0.629 C 1.324 0.934 1.017 1.16 0.668 1.154 C 0.318 1.148 0.02 0.911 0.001 0.605 C -0.02 0.274 0.288 -0.007 0.69 0 C 1.091 0.007 1.388 0.3 1.355 0.629 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.355 0.629 L 1.305 0.624 L 1.305 0.624 L 1.355 0.629 Z M 0.001 0.605 L 0.051 0.602 L 0.051 0.602 L 0.001 0.605 Z M 1.355 0.629 L 1.305 0.624 C 1.278 0.897 1 1.11 0.669 1.104 L 0.668 1.154 L 0.667 1.204 C 1.035 1.211 1.371 0.972 1.405 0.634 L 1.355 0.629 Z M 0.668 1.154 L 0.669 1.104 C 0.337 1.098 0.068 0.875 0.051 0.602 L 0.001 0.605 L -0.049 0.608 C -0.028 0.947 0.298 1.197 0.667 1.204 L 0.668 1.154 Z M 0.001 0.605 L 0.051 0.602 C 0.033 0.308 0.308 0.043 0.689 0.05 L 0.69 0 L 0.691 -0.05 C 0.268 -0.057 -0.072 0.241 -0.049 0.608 L 0.001 0.605 Z M 0.69 0 L 0.689 0.05 C 1.069 0.057 1.335 0.332 1.305 0.624 L 1.355 0.629 L 1.405 0.634 C 1.441 0.268 1.113 -0.042 0.691 -0.05 L 0.69 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.435,
    height: 2.362,
    viewBox: "0 0 2.435 2.362",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.495,
      top: 20.415,
      width: 2.435,
      height: 2.362,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.42 0.106 L 2.181 0 C 2.181 0 3.532 1.653 0 2.362 L 1.42 0.106 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.42 0.106 L 1.413 0.056 C 1.398 0.058 1.385 0.067 1.377 0.079 L 1.42 0.106 Z M 2.181 0 L 2.22 -0.032 C 2.209 -0.045 2.192 -0.052 2.175 -0.05 L 2.181 0 Z M 0 2.362 L -0.042 2.335 C -0.053 2.352 -0.052 2.374 -0.041 2.39 C -0.03 2.407 -0.01 2.415 0.01 2.411 L 0 2.362 Z M 1.42 0.106 L 1.427 0.155 L 2.188 0.05 L 2.181 0 L 2.175 -0.05 L 1.413 0.056 L 1.42 0.106 Z M 2.181 0 C 2.143 0.032 2.143 0.032 2.143 0.032 C 2.143 0.032 2.143 0.032 2.143 0.032 C 2.143 0.032 2.143 0.032 2.143 0.032 C 2.143 0.032 2.143 0.032 2.143 0.032 C 2.144 0.033 2.145 0.034 2.146 0.035 C 2.148 0.038 2.151 0.043 2.155 0.048 C 2.164 0.06 2.176 0.077 2.191 0.099 C 2.219 0.144 2.257 0.209 2.291 0.289 C 2.36 0.449 2.415 0.667 2.366 0.905 C 2.269 1.375 1.752 1.959 -0.01 2.313 L 0 2.362 L 0.01 2.411 C 1.78 2.056 2.354 1.459 2.464 0.925 C 2.519 0.661 2.457 0.421 2.383 0.25 C 2.346 0.164 2.306 0.094 2.275 0.045 C 2.259 0.021 2.246 0.002 2.236 -0.011 C 2.231 -0.017 2.227 -0.022 2.225 -0.026 C 2.223 -0.028 2.222 -0.029 2.221 -0.03 C 2.221 -0.03 2.221 -0.031 2.221 -0.031 C 2.22 -0.031 2.22 -0.031 2.22 -0.031 C 2.22 -0.031 2.22 -0.032 2.22 -0.032 C 2.22 -0.032 2.22 -0.032 2.181 0 Z M 0 2.362 L 0.042 2.388 L 1.462 0.132 L 1.42 0.106 L 1.377 0.079 L -0.042 2.335 L 0 2.362 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.310,
    height: 2.512,
    viewBox: "0 0 2.310 2.512",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.495,
      top: 20.265,
      width: 2.31,
      height: 2.512,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.397 0.05 C 1.055 -0.001 1.618 -0.02 1.912 0.027 C 2.9 0.183 1.97 2.128 0 2.512 C 0 2.512 1.307 0.77 0.397 0.05 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.397 0.05 L 0.393 0 C 0.373 0.002 0.355 0.016 0.349 0.036 C 0.343 0.055 0.35 0.077 0.366 0.089 L 0.397 0.05 Z M 1.912 0.027 L 1.92 -0.023 L 1.92 -0.023 L 1.912 0.027 Z M 0 2.512 L -0.037 2.478 C -0.051 2.494 -0.054 2.517 -0.044 2.536 C -0.033 2.555 -0.012 2.565 0.01 2.561 L 0 2.512 Z M 0.397 0.05 L 0.401 0.1 C 1.06 0.049 1.617 0.03 1.904 0.076 L 1.912 0.027 L 1.92 -0.023 C 1.618 -0.07 1.05 -0.051 0.393 0 L 0.397 0.05 Z M 1.912 0.027 L 1.904 0.076 C 2.019 0.094 2.102 0.138 2.158 0.197 C 2.214 0.257 2.248 0.336 2.257 0.432 C 2.277 0.627 2.198 0.885 2.023 1.157 C 1.675 1.7 0.962 2.274 -0.01 2.463 L 0 2.512 L 0.01 2.561 C 1.008 2.366 1.745 1.776 2.107 1.211 C 2.288 0.93 2.379 0.648 2.357 0.422 C 2.345 0.308 2.305 0.207 2.231 0.128 C 2.156 0.05 2.052 -0.002 1.92 -0.023 L 1.912 0.027 Z M 0 2.512 L 0.037 2.545 C 0.038 2.544 0.04 2.542 0.04 2.542 C 0.04 2.542 0.04 2.542 0.04 2.542 C 0.04 2.542 0.04 2.541 0.04 2.541 C 0.04 2.541 0.041 2.541 0.041 2.54 C 0.042 2.539 0.043 2.538 0.044 2.536 C 0.046 2.533 0.05 2.528 0.055 2.521 C 0.065 2.508 0.078 2.489 0.095 2.464 C 0.13 2.414 0.178 2.343 0.233 2.255 C 0.342 2.079 0.478 1.836 0.586 1.57 C 0.694 1.304 0.775 1.012 0.769 0.738 C 0.763 0.462 0.67 0.202 0.428 0.011 L 0.397 0.05 L 0.366 0.089 C 0.58 0.258 0.664 0.486 0.669 0.74 C 0.674 0.994 0.599 1.272 0.494 1.532 C 0.389 1.791 0.255 2.029 0.148 2.202 C 0.094 2.288 0.047 2.359 0.013 2.407 C -0.003 2.431 -0.017 2.45 -0.026 2.463 C -0.031 2.469 -0.034 2.474 -0.037 2.477 C -0.038 2.479 -0.039 2.48 -0.039 2.481 C -0.039 2.481 -0.04 2.481 -0.04 2.481 C -0.04 2.482 -0.04 2.482 -0.04 2.482 C -0.04 2.482 -0.04 2.482 -0.04 2.482 C -0.04 2.482 -0.038 2.48 -0.037 2.478 L 0 2.512 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.518,
    height: 2.590,
    viewBox: "0 0 5.518 2.590",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.696,
      top: 20.315,
      width: 5.518,
      height: 2.59,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.208 0.476 C 1.208 0.476 3.512 0.132 5.196 0 C 6.106 0.72 4.799 2.461 4.799 2.461 C 4.673 2.486 4.547 2.504 4.42 2.514 C 2.193 2.702 0.289 2.509 0.031 2.308 C -0.227 2.106 1.208 0.476 1.208 0.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.208 0.476 L 1.201 0.427 C 1.189 0.428 1.179 0.434 1.171 0.443 L 1.208 0.476 Z M 5.196 0 L 5.227 -0.039 C 5.217 -0.047 5.204 -0.051 5.192 -0.05 L 5.196 0 Z M 4.799 2.461 L 4.808 2.511 C 4.821 2.508 4.832 2.501 4.839 2.491 L 4.799 2.461 Z M 4.42 2.514 L 4.424 2.564 L 4.424 2.564 L 4.42 2.514 Z M 1.208 0.476 C 1.216 0.525 1.216 0.525 1.216 0.525 C 1.216 0.525 1.216 0.525 1.216 0.525 C 1.216 0.525 1.216 0.525 1.216 0.525 C 1.217 0.525 1.217 0.525 1.217 0.525 C 1.219 0.525 1.22 0.525 1.222 0.524 C 1.227 0.524 1.233 0.523 1.242 0.522 C 1.259 0.519 1.285 0.515 1.318 0.51 C 1.384 0.501 1.481 0.487 1.602 0.47 C 1.844 0.435 2.184 0.388 2.577 0.337 C 3.363 0.234 4.359 0.115 5.2 0.05 L 5.196 0 L 5.192 -0.05 C 4.349 0.016 3.351 0.135 2.564 0.238 C 2.171 0.289 1.83 0.336 1.588 0.371 C 1.466 0.388 1.37 0.402 1.303 0.412 C 1.27 0.416 1.245 0.42 1.227 0.423 C 1.219 0.424 1.212 0.425 1.208 0.426 C 1.206 0.426 1.204 0.426 1.203 0.426 C 1.202 0.426 1.202 0.427 1.201 0.427 C 1.201 0.427 1.201 0.427 1.201 0.427 C 1.201 0.427 1.201 0.427 1.201 0.427 C 1.201 0.427 1.201 0.427 1.208 0.476 Z M 5.196 0 L 5.165 0.039 C 5.378 0.208 5.462 0.436 5.468 0.689 C 5.473 0.944 5.397 1.222 5.292 1.482 C 5.082 2.001 4.758 2.432 4.758 2.432 L 4.799 2.461 L 4.839 2.491 C 4.839 2.491 5.169 2.051 5.385 1.52 C 5.492 1.254 5.573 0.961 5.568 0.687 C 5.562 0.411 5.468 0.152 5.227 -0.039 L 5.196 0 Z M 4.799 2.461 L 4.789 2.412 C 4.666 2.436 4.541 2.454 4.416 2.464 L 4.42 2.514 L 4.424 2.564 C 4.553 2.553 4.681 2.535 4.808 2.511 L 4.799 2.461 Z M 4.42 2.514 L 4.416 2.464 C 3.305 2.558 2.274 2.557 1.49 2.507 C 1.098 2.482 0.768 2.445 0.521 2.402 C 0.397 2.38 0.295 2.358 0.216 2.334 C 0.136 2.31 0.086 2.287 0.062 2.268 L 0.031 2.308 L 0 2.347 C 0.04 2.378 0.106 2.406 0.188 2.43 C 0.272 2.455 0.378 2.479 0.504 2.5 C 0.756 2.544 1.089 2.582 1.484 2.607 C 2.273 2.657 3.308 2.658 4.424 2.564 L 4.42 2.514 Z M 0.031 2.308 L 0.062 2.268 C 0.055 2.263 0.042 2.243 0.056 2.182 C 0.069 2.125 0.102 2.05 0.15 1.96 C 0.247 1.783 0.4 1.562 0.563 1.346 C 0.726 1.131 0.896 0.922 1.027 0.766 C 1.092 0.688 1.147 0.624 1.185 0.579 C 1.204 0.557 1.22 0.539 1.23 0.527 C 1.235 0.521 1.239 0.517 1.242 0.514 C 1.243 0.512 1.244 0.511 1.245 0.51 C 1.245 0.51 1.246 0.51 1.246 0.509 C 1.246 0.509 1.246 0.509 1.246 0.509 C 1.246 0.509 1.246 0.509 1.246 0.509 C 1.246 0.509 1.246 0.509 1.208 0.476 C 1.171 0.443 1.171 0.443 1.171 0.443 C 1.171 0.443 1.171 0.443 1.171 0.443 C 1.171 0.443 1.171 0.443 1.171 0.443 C 1.17 0.444 1.17 0.444 1.17 0.444 C 1.169 0.445 1.168 0.446 1.167 0.448 C 1.164 0.451 1.16 0.456 1.155 0.462 C 1.144 0.474 1.129 0.491 1.109 0.514 C 1.071 0.559 1.015 0.624 0.95 0.702 C 0.819 0.858 0.647 1.069 0.483 1.286 C 0.32 1.503 0.162 1.728 0.062 1.913 C 0.012 2.005 -0.025 2.09 -0.041 2.16 C -0.056 2.227 -0.057 2.302 0 2.347 L 0.031 2.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.514,
    height: 3.034,
    viewBox: "0 0 2.514 3.034",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.084,
      top: 19.607,
      width: 2.514,
      height: 3.034,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.323 0 C 1.488 0.748 2.249 1.268 2.249 1.268 C 2.679 1.826 2.508 2.319 2.274 2.646 C 2.081 2.91 1.765 3.056 1.439 3.032 C 0.96 2.999 0.479 2.954 0 2.897 C 0.173 2.1 0.397 0.85 0.323 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.323 0 L 0.35 -0.042 C 0.334 -0.052 0.313 -0.053 0.297 -0.043 C 0.281 -0.033 0.271 -0.015 0.273 0.004 L 0.323 0 Z M 2.249 1.268 L 2.288 1.237 C 2.285 1.233 2.281 1.229 2.277 1.226 L 2.249 1.268 Z M 2.274 2.646 L 2.314 2.675 L 2.314 2.675 L 2.274 2.646 Z M 1.439 3.032 L 1.443 2.982 L 1.442 2.982 L 1.439 3.032 Z M 0 2.897 L -0.049 2.887 C -0.052 2.901 -0.049 2.915 -0.041 2.926 C -0.033 2.938 -0.02 2.945 -0.006 2.947 L 0 2.897 Z M 0.323 0 L 0.296 0.042 C 0.878 0.416 1.359 0.733 1.695 0.956 C 1.863 1.068 1.994 1.156 2.084 1.216 C 2.128 1.246 2.163 1.27 2.186 1.285 C 2.197 1.293 2.206 1.299 2.212 1.303 C 2.215 1.305 2.217 1.306 2.218 1.307 C 2.219 1.308 2.22 1.308 2.22 1.309 C 2.22 1.309 2.22 1.309 2.22 1.309 C 2.22 1.309 2.221 1.309 2.221 1.309 C 2.221 1.309 2.221 1.309 2.221 1.309 C 2.221 1.309 2.221 1.309 2.249 1.268 C 2.277 1.226 2.277 1.226 2.277 1.226 C 2.277 1.226 2.277 1.226 2.277 1.226 C 2.277 1.226 2.277 1.226 2.277 1.226 C 2.277 1.226 2.277 1.226 2.276 1.226 C 2.276 1.226 2.275 1.225 2.275 1.225 C 2.273 1.224 2.271 1.222 2.268 1.22 C 2.262 1.216 2.253 1.21 2.242 1.203 C 2.219 1.187 2.184 1.164 2.14 1.133 C 2.05 1.073 1.918 0.985 1.75 0.873 C 1.414 0.649 0.933 0.332 0.35 -0.042 L 0.323 0 Z M 2.249 1.268 L 2.209 1.298 C 2.418 1.568 2.478 1.819 2.461 2.04 C 2.444 2.262 2.347 2.458 2.233 2.617 L 2.274 2.646 L 2.314 2.675 C 2.435 2.507 2.541 2.293 2.561 2.047 C 2.58 1.8 2.511 1.525 2.288 1.237 L 2.249 1.268 Z M 2.274 2.646 L 2.233 2.616 C 2.051 2.866 1.752 3.005 1.443 2.982 L 1.439 3.032 L 1.435 3.082 C 1.779 3.107 2.111 2.953 2.314 2.675 L 2.274 2.646 Z M 1.439 3.032 L 1.442 2.982 C 0.964 2.949 0.484 2.904 0.006 2.848 L 0 2.897 L -0.006 2.947 C 0.474 3.004 0.956 3.049 1.436 3.082 L 1.439 3.032 Z M 0 2.897 L 0.049 2.908 C 0.222 2.111 0.448 0.854 0.373 -0.004 L 0.323 0 L 0.273 0.004 C 0.347 0.846 0.124 2.089 -0.049 2.887 L 0 2.897 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.422,
    height: 8.274,
    viewBox: "0 0 12.422 8.274",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 14.229,
      width: 12.422,
      height: 8.274,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.589 0.317 C 1.721 -1.205 8.898 3.124 12.407 5.377 C 12.482 6.227 12.257 7.477 12.084 8.274 C 4.849 7.419 -2.093 3.922 0.589 0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.422,
    height: 8.274,
    viewBox: "0 0 12.422 8.274",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 14.229,
      width: 12.422,
      height: 8.274,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.589 0.317 L 0.629 0.347 L 0.629 0.347 L 0.589 0.317 Z M 12.407 5.377 L 12.457 5.373 C 12.456 5.357 12.447 5.343 12.434 5.335 L 12.407 5.377 Z M 12.084 8.274 L 12.078 8.324 C 12.104 8.327 12.128 8.31 12.133 8.285 L 12.084 8.274 Z M 0.589 0.317 L 0.629 0.347 C 0.758 0.173 0.977 0.077 1.281 0.055 C 1.585 0.033 1.966 0.084 2.407 0.197 C 3.289 0.423 4.398 0.89 5.585 1.476 C 7.956 2.649 10.626 4.293 12.38 5.419 L 12.407 5.377 L 12.434 5.335 C 10.679 4.208 8.006 2.562 5.629 1.387 C 4.441 0.799 3.324 0.329 2.432 0.1 C 1.986 -0.014 1.593 -0.068 1.274 -0.045 C 0.955 -0.021 0.702 0.081 0.548 0.287 L 0.589 0.317 Z M 12.407 5.377 L 12.357 5.381 C 12.431 6.223 12.209 7.466 12.035 8.264 L 12.084 8.274 L 12.133 8.285 C 12.306 7.488 12.532 6.231 12.457 5.373 L 12.407 5.377 Z M 12.084 8.274 L 12.09 8.225 C 8.477 7.798 4.941 6.711 2.644 5.284 C 1.495 4.571 0.662 3.775 0.282 2.94 C -0.097 2.11 -0.031 1.234 0.629 0.347 L 0.589 0.317 L 0.548 0.287 C -0.132 1.202 -0.204 2.116 0.191 2.982 C 0.583 3.843 1.436 4.651 2.591 5.369 C 4.904 6.806 8.456 7.896 12.078 8.324 L 12.084 8.274 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.016,
      top: 2.092,
      width: 3.815,
      height: 5.37,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.016,
      top: 2.092,
      width: 3.815,
      height: 5.37,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.8149356842041016,
      height: 5.369659900665283,
      clipPath: "ellipse(1.907px 2.685px at 1.907px 2.685px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.978,
      top: 2.551,
      width: 1.838,
      height: 1.919,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 0.345,
    height: 0.640,
    viewBox: "0 0 0.345 0.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1.000,0.028,-0.028,1.000,0.096,0.448)",
      transformOrigin: "0 0",
      width: 0.345,
      height: 0.64,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.173 0 L 0.173 0 C 0.268 0 0.345 0.077 0.345 0.173 L 0.345 0.467 C 0.345 0.513 0.327 0.557 0.295 0.589 C 0.262 0.622 0.218 0.64 0.173 0.64 L 0.173 0.64 C 0.077 0.64 0 0.563 0 0.467 L 0 0.173 C 0 0.077 0.077 0 0.173 0 L 0.173 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.345,
    height: 0.640,
    viewBox: "0 0 0.345 0.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1.000,0.028,-0.028,1.000,1.424,0.431)",
      transformOrigin: "0 0",
      width: 0.345,
      height: 0.64,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.173 0 L 0.173 0 C 0.268 0 0.345 0.077 0.345 0.173 L 0.345 0.467 C 0.345 0.563 0.268 0.64 0.173 0.64 L 0.173 0.64 C 0.077 0.64 0 0.563 0 0.467 L 0 0.173 C 0 0.077 0.077 0 0.173 0 L 0.173 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.264,
    height: 0.848,
    viewBox: "0 0 0.264 0.848",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.676,
      top: 0.804,
      width: 0.264,
      height: 0.848,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.305 0.013 C 0.313 -0.009 0.3 -0.034 0.277 -0.041 C 0.255 -0.049 0.23 -0.036 0.223 -0.013 L 0.264 0 L 0.305 0.013 Z M 0.259 0.402 L 0.254 0.445 C 0.272 0.447 0.29 0.437 0.298 0.42 C 0.306 0.404 0.303 0.383 0.289 0.37 L 0.259 0.402 Z M 0.141 0.877 C 0.157 0.895 0.184 0.897 0.202 0.881 C 0.22 0.866 0.223 0.838 0.207 0.82 L 0.174 0.848 L 0.141 0.877 Z M 0.264 0 L 0.223 -0.013 C 0.171 0.146 0.169 0.254 0.181 0.325 C 0.188 0.36 0.198 0.385 0.208 0.403 C 0.213 0.412 0.217 0.419 0.221 0.423 C 0.223 0.426 0.224 0.428 0.226 0.429 C 0.227 0.43 0.227 0.431 0.228 0.431 C 0.228 0.432 0.228 0.432 0.228 0.432 C 0.229 0.432 0.229 0.432 0.229 0.432 C 0.229 0.432 0.229 0.433 0.229 0.433 C 0.229 0.433 0.229 0.433 0.229 0.433 C 0.229 0.433 0.229 0.433 0.259 0.402 C 0.289 0.37 0.289 0.37 0.289 0.371 C 0.289 0.371 0.29 0.371 0.29 0.371 C 0.29 0.371 0.29 0.371 0.29 0.371 C 0.29 0.371 0.29 0.371 0.29 0.371 C 0.29 0.371 0.29 0.371 0.29 0.371 C 0.29 0.371 0.29 0.372 0.29 0.372 C 0.291 0.372 0.29 0.371 0.29 0.371 C 0.289 0.369 0.287 0.366 0.284 0.362 C 0.279 0.352 0.272 0.335 0.267 0.309 C 0.257 0.256 0.257 0.163 0.305 0.013 L 0.264 0 Z M 0.259 0.402 L 0.265 0.359 C 0.131 0.341 0.038 0.358 -0.01 0.415 C -0.06 0.473 -0.045 0.553 -0.022 0.615 C 0.002 0.68 0.044 0.746 0.078 0.794 C 0.095 0.818 0.111 0.839 0.122 0.853 C 0.128 0.861 0.133 0.866 0.136 0.87 C 0.137 0.872 0.139 0.874 0.14 0.875 C 0.14 0.875 0.14 0.876 0.141 0.876 C 0.141 0.876 0.141 0.876 0.141 0.877 C 0.141 0.877 0.141 0.877 0.141 0.877 C 0.141 0.877 0.141 0.877 0.141 0.877 C 0.141 0.877 0.141 0.877 0.174 0.848 C 0.207 0.82 0.207 0.82 0.207 0.82 C 0.207 0.82 0.207 0.82 0.207 0.82 C 0.207 0.82 0.207 0.82 0.207 0.82 C 0.207 0.82 0.207 0.82 0.207 0.82 C 0.207 0.82 0.206 0.819 0.206 0.819 C 0.205 0.818 0.204 0.817 0.203 0.815 C 0.2 0.811 0.195 0.806 0.19 0.799 C 0.179 0.786 0.165 0.767 0.148 0.744 C 0.116 0.698 0.08 0.639 0.059 0.584 C 0.037 0.526 0.04 0.49 0.056 0.471 C 0.073 0.451 0.123 0.428 0.254 0.445 L 0.259 0.402 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.255,
    height: 0.158,
    viewBox: "0 0 0.255 0.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.91,
      top: 1.761,
      width: 0.255,
      height: 0.158,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.296 0.014 C 0.304 -0.008 0.292 -0.033 0.269 -0.041 C 0.246 -0.049 0.222 -0.037 0.214 -0.014 L 0.255 0 L 0.296 0.014 Z M 0.006 0.113 C -0.018 0.11 -0.04 0.126 -0.043 0.15 C -0.046 0.174 -0.03 0.196 -0.006 0.199 L 0 0.156 L 0.006 0.113 Z M 0.255 0 L 0.214 -0.014 C 0.184 0.072 0.097 0.126 0.006 0.113 L 0 0.156 L -0.006 0.199 C 0.126 0.217 0.252 0.14 0.296 0.014 L 0.255 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.391,
    height: 0.261,
    viewBox: "0 0 0.391 0.261",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.034,
      width: 0.391,
      height: 0.261,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.237 0.009 C -0.118 0.102 -0.026 0.298 0.199 0.254 C 0.425 0.21 0.469 -0.052 0.237 0.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.386,
    height: 0.257,
    viewBox: "0 0 0.386 0.257",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.451,
      top: 0,
      width: 0.386,
      height: 0.257,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.014 C 0.495 0.127 0.42 0.303 0.197 0.246 C -0.026 0.19 -0.082 -0.06 0.146 0.014 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.016,
      top: 2.092,
      width: 3.815,
      height: 5.37,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.050px rgb(27,27,27), 0 0 0 0.050px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1.242,
    height: 1.567,
    viewBox: "0 0 1.242 1.567",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.067,
      top: 4.31,
      width: 1.242,
      height: 1.567,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.088 0.162 C -0.013 -0.354 -0.253 0.47 0.253 1.147 C 0.633 1.654 1.055 1.587 1.242 1.522",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.067 0.207 C 1.092 0.219 1.122 0.208 1.133 0.183 C 1.145 0.158 1.134 0.128 1.109 0.116 L 1.088 0.162 L 1.067 0.207 Z M 0.253 1.147 L 0.213 1.177 L 0.213 1.177 L 0.253 1.147 Z M 1.259 1.569 C 1.285 1.56 1.299 1.532 1.29 1.506 C 1.281 1.48 1.252 1.466 1.226 1.475 L 1.242 1.522 L 1.259 1.569 Z M 1.088 0.162 L 1.109 0.116 C 0.83 -0.015 0.599 -0.063 0.418 -0.047 C 0.234 -0.03 0.101 0.053 0.025 0.182 C -0.05 0.308 -0.067 0.472 -0.034 0.644 C -0.001 0.817 0.083 1.002 0.213 1.177 L 0.253 1.147 L 0.293 1.117 C 0.17 0.953 0.094 0.781 0.064 0.625 C 0.034 0.469 0.052 0.332 0.111 0.233 C 0.169 0.135 0.271 0.067 0.427 0.053 C 0.584 0.038 0.796 0.08 1.067 0.207 L 1.088 0.162 Z M 0.253 1.147 L 0.213 1.177 C 0.409 1.439 0.62 1.557 0.809 1.598 C 0.997 1.639 1.16 1.604 1.259 1.569 L 1.242 1.522 L 1.226 1.475 C 1.138 1.506 0.995 1.536 0.83 1.5 C 0.667 1.465 0.476 1.362 0.293 1.117 L 0.253 1.147 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.147,
    height: 1.567,
    viewBox: "0 0 1.147 1.567",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.435,
      top: 4.31,
      width: 1.147,
      height: 1.567,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.059 0.162 C 1.16 -0.354 1.4 0.47 0.894 1.147 C 0.569 1.581 0.213 1.595 0 1.549",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.038 0.116 C 0.013 0.128 0.002 0.158 0.014 0.183 C 0.025 0.208 0.055 0.219 0.08 0.207 L 0.059 0.162 L 0.038 0.116 Z M 0.894 1.147 L 0.934 1.177 L 0.934 1.177 L 0.894 1.147 Z M 0.01 1.5 C -0.017 1.494 -0.043 1.511 -0.049 1.538 C -0.055 1.565 -0.037 1.592 -0.01 1.598 L 0 1.549 L 0.01 1.5 Z M 0.059 0.162 L 0.08 0.207 C 0.351 0.08 0.563 0.038 0.72 0.053 C 0.876 0.067 0.978 0.135 1.036 0.233 C 1.095 0.332 1.113 0.469 1.083 0.625 C 1.053 0.781 0.977 0.953 0.854 1.117 L 0.894 1.147 L 0.934 1.177 C 1.064 1.002 1.148 0.817 1.181 0.644 C 1.214 0.472 1.197 0.308 1.122 0.182 C 1.046 0.053 0.913 -0.03 0.729 -0.047 C 0.548 -0.063 0.317 -0.015 0.038 0.116 L 0.059 0.162 Z M 0.894 1.147 L 0.854 1.117 C 0.697 1.327 0.535 1.432 0.389 1.48 C 0.244 1.529 0.111 1.521 0.01 1.5 L 0 1.549 L -0.01 1.598 C 0.103 1.622 0.254 1.631 0.421 1.575 C 0.588 1.519 0.766 1.401 0.934 1.177 L 0.894 1.147 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.196,
    height: 3.174,
    viewBox: "0 0 4.196 3.174",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.715,
      top: 1.87,
      width: 4.196,
      height: 3.174,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.648 1.329 C 1.363 3.488 0.091 3.156 0.091 3.156 C 0.091 3.156 -0.649 -0.037 2.084 0 C 4.817 0.037 4.115 2.907 4.115 2.907 C 4.115 2.907 1.951 2.953 1.648 1.329 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.648 1.329 L 1.697 1.32 C 1.692 1.296 1.671 1.278 1.646 1.279 C 1.622 1.28 1.601 1.298 1.598 1.322 L 1.648 1.329 Z M 0.091 3.156 L 0.043 3.167 C 0.047 3.185 0.061 3.199 0.079 3.204 L 0.091 3.156 Z M 4.115 2.907 L 4.116 2.957 C 4.139 2.956 4.158 2.94 4.164 2.918 L 4.115 2.907 Z M 1.648 1.329 L 1.598 1.322 C 1.457 2.392 1.074 2.831 0.739 3.008 C 0.571 3.097 0.411 3.121 0.293 3.124 C 0.235 3.125 0.187 3.121 0.153 3.116 C 0.137 3.114 0.124 3.112 0.116 3.11 C 0.111 3.109 0.108 3.108 0.106 3.108 C 0.105 3.108 0.105 3.107 0.104 3.107 C 0.104 3.107 0.104 3.107 0.104 3.107 C 0.104 3.107 0.104 3.107 0.104 3.107 C 0.104 3.107 0.104 3.107 0.104 3.107 C 0.104 3.107 0.104 3.107 0.091 3.156 C 0.079 3.204 0.079 3.204 0.079 3.204 C 0.079 3.204 0.079 3.204 0.079 3.204 C 0.079 3.204 0.079 3.204 0.079 3.204 C 0.08 3.204 0.08 3.204 0.08 3.204 C 0.081 3.205 0.082 3.205 0.084 3.205 C 0.087 3.206 0.091 3.207 0.096 3.208 C 0.106 3.21 0.121 3.213 0.14 3.215 C 0.177 3.22 0.231 3.225 0.296 3.224 C 0.425 3.221 0.601 3.194 0.786 3.096 C 1.159 2.899 1.554 2.425 1.697 1.335 L 1.648 1.329 Z M 0.091 3.156 C 0.14 3.144 0.14 3.144 0.14 3.144 C 0.14 3.144 0.14 3.144 0.14 3.144 C 0.14 3.144 0.14 3.144 0.14 3.144 C 0.14 3.144 0.14 3.143 0.14 3.142 C 0.139 3.141 0.139 3.139 0.138 3.136 C 0.137 3.13 0.135 3.121 0.133 3.11 C 0.128 3.087 0.122 3.053 0.114 3.01 C 0.099 2.924 0.081 2.801 0.068 2.653 C 0.042 2.357 0.035 1.964 0.112 1.574 C 0.189 1.183 0.349 0.799 0.654 0.514 C 0.958 0.231 1.411 0.041 2.084 0.05 L 2.084 0 L 2.085 -0.05 C 1.391 -0.059 0.912 0.137 0.586 0.441 C 0.261 0.745 0.093 1.152 0.014 1.554 C -0.066 1.958 -0.058 2.361 -0.031 2.662 C -0.018 2.813 0.001 2.939 0.016 3.027 C 0.023 3.071 0.03 3.106 0.035 3.13 C 0.037 3.142 0.039 3.151 0.041 3.157 C 0.041 3.16 0.042 3.163 0.042 3.164 C 0.042 3.165 0.042 3.166 0.043 3.166 C 0.043 3.166 0.043 3.167 0.043 3.167 C 0.043 3.167 0.043 3.167 0.043 3.167 C 0.043 3.167 0.043 3.167 0.091 3.156 Z M 2.084 0 L 2.084 0.05 C 2.758 0.059 3.214 0.243 3.522 0.508 C 3.83 0.773 3.994 1.125 4.076 1.478 C 4.157 1.833 4.155 2.187 4.132 2.453 C 4.121 2.586 4.104 2.697 4.091 2.775 C 4.084 2.813 4.078 2.843 4.073 2.864 C 4.071 2.874 4.069 2.882 4.068 2.887 C 4.068 2.89 4.067 2.892 4.067 2.893 C 4.067 2.894 4.067 2.894 4.067 2.894 C 4.067 2.894 4.067 2.895 4.067 2.895 C 4.067 2.895 4.067 2.895 4.067 2.895 C 4.067 2.895 4.067 2.895 4.115 2.907 C 4.164 2.918 4.164 2.918 4.164 2.918 C 4.164 2.918 4.164 2.918 4.164 2.918 C 4.164 2.918 4.164 2.918 4.164 2.918 C 4.164 2.917 4.164 2.917 4.164 2.916 C 4.165 2.915 4.165 2.912 4.166 2.91 C 4.167 2.904 4.169 2.896 4.171 2.885 C 4.176 2.863 4.182 2.832 4.189 2.792 C 4.203 2.712 4.22 2.598 4.232 2.462 C 4.255 2.189 4.258 1.824 4.173 1.456 C 4.089 1.088 3.916 0.715 3.587 0.432 C 3.258 0.149 2.777 -0.04 2.085 -0.05 L 2.084 0 Z M 4.115 2.907 C 4.114 2.857 4.114 2.857 4.114 2.857 C 4.114 2.857 4.114 2.857 4.114 2.857 C 4.114 2.857 4.114 2.857 4.114 2.857 C 4.114 2.857 4.113 2.857 4.113 2.857 C 4.112 2.857 4.11 2.857 4.108 2.857 C 4.105 2.857 4.099 2.857 4.091 2.857 C 4.075 2.857 4.052 2.856 4.023 2.855 C 3.964 2.854 3.88 2.849 3.777 2.839 C 3.572 2.818 3.296 2.773 3.011 2.679 C 2.44 2.49 1.844 2.106 1.697 1.32 L 1.648 1.329 L 1.599 1.338 C 1.755 2.176 2.393 2.58 2.98 2.774 C 3.273 2.871 3.557 2.917 3.767 2.938 C 3.872 2.949 3.959 2.953 4.02 2.955 C 4.05 2.956 4.074 2.957 4.091 2.957 C 4.099 2.957 4.105 2.957 4.109 2.957 C 4.111 2.957 4.113 2.957 4.114 2.957 C 4.115 2.957 4.115 2.957 4.116 2.957 C 4.116 2.957 4.116 2.957 4.116 2.957 C 4.116 2.957 4.116 2.957 4.116 2.957 C 4.116 2.957 4.116 2.957 4.115 2.907 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.435,
    height: 2.362,
    viewBox: "0 0 2.435 2.362",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.989,
      top: 20.415,
      width: 2.435,
      height: 2.362,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.015 0.106 L 0.254 0 C 0.254 0 -1.097 1.653 2.435 2.362 L 1.015 0.106 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.015 0.106 L 1.058 0.079 C 1.05 0.067 1.037 0.058 1.022 0.056 L 1.015 0.106 Z M 0.254 0 L 0.26 -0.05 C 0.243 -0.052 0.226 -0.045 0.215 -0.032 L 0.254 0 Z M 2.435 2.362 L 2.425 2.411 C 2.445 2.415 2.465 2.407 2.476 2.39 C 2.488 2.374 2.488 2.352 2.477 2.335 L 2.435 2.362 Z M 1.015 0.106 L 1.022 0.056 L 0.26 -0.05 L 0.254 0 L 0.247 0.05 L 1.009 0.155 L 1.015 0.106 Z M 0.254 0 C 0.215 -0.032 0.215 -0.032 0.215 -0.032 C 0.215 -0.032 0.215 -0.031 0.215 -0.031 C 0.215 -0.031 0.215 -0.031 0.214 -0.031 C 0.214 -0.031 0.214 -0.03 0.214 -0.03 C 0.213 -0.029 0.212 -0.028 0.21 -0.026 C 0.208 -0.022 0.204 -0.017 0.199 -0.011 C 0.189 0.002 0.176 0.021 0.16 0.045 C 0.129 0.094 0.089 0.164 0.052 0.25 C -0.022 0.421 -0.084 0.661 -0.029 0.925 C 0.081 1.459 0.655 2.056 2.425 2.411 L 2.435 2.362 L 2.445 2.313 C 0.683 1.959 0.166 1.375 0.069 0.905 C 0.02 0.667 0.075 0.449 0.144 0.289 C 0.178 0.209 0.216 0.144 0.244 0.099 C 0.259 0.077 0.271 0.06 0.28 0.048 C 0.284 0.043 0.287 0.038 0.289 0.035 C 0.29 0.034 0.291 0.033 0.292 0.032 C 0.292 0.032 0.292 0.032 0.292 0.032 C 0.292 0.032 0.292 0.032 0.292 0.032 C 0.292 0.032 0.292 0.032 0.292 0.032 C 0.292 0.032 0.292 0.032 0.254 0 Z M 2.435 2.362 L 2.477 2.335 L 1.058 0.079 L 1.015 0.106 L 0.973 0.132 L 2.393 2.388 L 2.435 2.362 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.310,
    height: 2.512,
    viewBox: "0 0 2.310 2.512",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.114,
      top: 20.265,
      width: 2.31,
      height: 2.512,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.913 0.05 C 1.256 -0.001 0.693 -0.02 0.398 0.027 C -0.59 0.183 0.34 2.128 2.31 2.512 C 2.31 2.512 1.003 0.77 1.913 0.05 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.913 0.05 L 1.944 0.089 C 1.96 0.077 1.967 0.055 1.961 0.036 C 1.955 0.016 1.937 0.002 1.917 0 L 1.913 0.05 Z M 0.398 0.027 L 0.39 -0.023 L 0.39 -0.023 L 0.398 0.027 Z M 2.31 2.512 L 2.301 2.561 C 2.323 2.565 2.345 2.554 2.355 2.534 C 2.365 2.514 2.36 2.49 2.344 2.475 L 2.31 2.512 Z M 1.913 0.05 L 1.917 0 C 1.261 -0.051 0.692 -0.07 0.39 -0.023 L 0.398 0.027 L 0.406 0.076 C 0.694 0.03 1.251 0.049 1.909 0.1 L 1.913 0.05 Z M 0.398 0.027 L 0.39 -0.023 C 0.258 -0.002 0.154 0.05 0.08 0.128 C 0.005 0.207 -0.035 0.308 -0.047 0.422 C -0.069 0.648 0.022 0.93 0.203 1.211 C 0.565 1.776 1.302 2.366 2.301 2.561 L 2.31 2.512 L 2.32 2.463 C 1.348 2.274 0.635 1.7 0.287 1.157 C 0.112 0.885 0.033 0.627 0.053 0.432 C 0.062 0.336 0.096 0.257 0.152 0.197 C 0.208 0.138 0.291 0.094 0.406 0.076 L 0.398 0.027 Z M 2.31 2.512 L 2.344 2.475 C 2.347 2.478 2.35 2.482 2.35 2.482 C 2.35 2.482 2.35 2.482 2.35 2.482 C 2.35 2.482 2.35 2.482 2.35 2.481 C 2.35 2.481 2.35 2.481 2.349 2.481 C 2.349 2.48 2.348 2.479 2.347 2.477 C 2.344 2.474 2.341 2.469 2.336 2.463 C 2.327 2.45 2.314 2.431 2.297 2.407 C 2.263 2.359 2.216 2.288 2.163 2.202 C 2.055 2.029 1.922 1.791 1.817 1.532 C 1.711 1.272 1.636 0.994 1.641 0.74 C 1.646 0.486 1.731 0.258 1.944 0.089 L 1.913 0.05 L 1.882 0.011 C 1.64 0.202 1.547 0.462 1.541 0.738 C 1.535 1.012 1.616 1.304 1.724 1.57 C 1.832 1.836 1.968 2.079 2.078 2.255 C 2.132 2.343 2.18 2.414 2.215 2.464 C 2.232 2.489 2.246 2.508 2.255 2.521 C 2.26 2.528 2.264 2.533 2.266 2.536 C 2.268 2.538 2.268 2.539 2.269 2.54 C 2.269 2.541 2.27 2.541 2.27 2.541 C 2.27 2.541 2.27 2.542 2.27 2.542 C 2.27 2.542 2.27 2.542 2.27 2.542 C 2.27 2.542 2.273 2.545 2.276 2.548 L 2.31 2.512 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.518,
    height: 2.590,
    viewBox: "0 0 5.518 2.590",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.705,
      top: 20.315,
      width: 5.518,
      height: 2.59,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.309 0.476 C 4.309 0.476 2.006 0.132 0.322 0 C -0.588 0.72 0.719 2.461 0.719 2.461 C 0.845 2.486 0.971 2.504 1.098 2.514 C 3.325 2.702 5.229 2.509 5.487 2.308 C 5.745 2.106 4.309 0.476 4.309 0.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.309 0.476 L 4.347 0.443 C 4.339 0.434 4.329 0.428 4.317 0.427 L 4.309 0.476 Z M 0.322 0 L 0.326 -0.05 C 0.314 -0.051 0.301 -0.047 0.291 -0.039 L 0.322 0 Z M 0.719 2.461 L 0.679 2.491 C 0.687 2.501 0.698 2.508 0.71 2.511 L 0.719 2.461 Z M 1.098 2.514 L 1.094 2.564 L 1.094 2.564 L 1.098 2.514 Z M 4.309 0.476 C 4.317 0.427 4.317 0.427 4.317 0.427 C 4.317 0.427 4.317 0.427 4.317 0.427 C 4.317 0.427 4.317 0.427 4.316 0.427 C 4.316 0.427 4.316 0.426 4.315 0.426 C 4.314 0.426 4.312 0.426 4.31 0.426 C 4.306 0.425 4.299 0.424 4.29 0.423 C 4.273 0.42 4.248 0.416 4.214 0.412 C 4.148 0.402 4.051 0.388 3.93 0.371 C 3.688 0.336 3.347 0.289 2.954 0.238 C 2.167 0.135 1.169 0.016 0.326 -0.05 L 0.322 0 L 0.318 0.05 C 1.159 0.115 2.155 0.234 2.941 0.337 C 3.334 0.388 3.674 0.435 3.916 0.47 C 4.037 0.487 4.134 0.501 4.2 0.51 C 4.233 0.515 4.259 0.519 4.276 0.522 C 4.284 0.523 4.291 0.524 4.295 0.524 C 4.298 0.525 4.299 0.525 4.3 0.525 C 4.301 0.525 4.301 0.525 4.302 0.525 C 4.302 0.525 4.302 0.525 4.302 0.525 C 4.302 0.525 4.302 0.525 4.302 0.525 C 4.302 0.525 4.302 0.525 4.309 0.476 Z M 0.322 0 L 0.291 -0.039 C 0.049 0.152 -0.044 0.411 -0.05 0.687 C -0.055 0.961 0.025 1.254 0.133 1.52 C 0.241 1.786 0.378 2.029 0.487 2.204 C 0.542 2.293 0.59 2.364 0.624 2.414 C 0.641 2.439 0.655 2.458 0.664 2.471 C 0.669 2.478 0.673 2.483 0.675 2.486 C 0.677 2.488 0.678 2.489 0.678 2.49 C 0.679 2.491 0.679 2.491 0.679 2.491 C 0.679 2.491 0.679 2.491 0.679 2.491 C 0.679 2.491 0.679 2.491 0.679 2.491 L 0.719 2.461 L 0.759 2.431 C 0.759 2.431 0.759 2.431 0.759 2.431 C 0.759 2.431 0.759 2.431 0.759 2.431 C 0.759 2.431 0.759 2.431 0.759 2.43 C 0.758 2.43 0.757 2.428 0.756 2.427 C 0.754 2.424 0.75 2.419 0.745 2.412 C 0.736 2.4 0.723 2.381 0.706 2.357 C 0.672 2.308 0.625 2.238 0.572 2.152 C 0.464 1.979 0.331 1.741 0.226 1.482 C 0.12 1.222 0.045 0.944 0.05 0.689 C 0.055 0.436 0.14 0.208 0.353 0.039 L 0.322 0 Z M 0.719 2.461 L 0.71 2.511 C 0.837 2.535 0.965 2.553 1.094 2.564 L 1.098 2.514 L 1.102 2.464 C 0.977 2.454 0.852 2.436 0.729 2.412 L 0.719 2.461 Z M 1.098 2.514 L 1.094 2.564 C 2.21 2.658 3.245 2.657 4.034 2.607 C 4.429 2.582 4.762 2.544 5.014 2.5 C 5.14 2.479 5.246 2.455 5.33 2.43 C 5.412 2.406 5.478 2.378 5.518 2.347 L 5.487 2.308 L 5.456 2.268 C 5.432 2.287 5.382 2.31 5.301 2.334 C 5.223 2.358 5.121 2.38 4.997 2.402 C 4.75 2.445 4.42 2.482 4.028 2.507 C 3.243 2.557 2.213 2.558 1.102 2.464 L 1.098 2.514 Z M 5.487 2.308 L 5.518 2.347 C 5.575 2.302 5.574 2.227 5.559 2.16 C 5.543 2.09 5.505 2.005 5.456 1.913 C 5.355 1.728 5.198 1.503 5.035 1.286 C 4.871 1.069 4.699 0.858 4.568 0.702 C 4.503 0.624 4.447 0.559 4.408 0.514 C 4.389 0.491 4.374 0.474 4.363 0.462 C 4.358 0.456 4.354 0.451 4.351 0.448 C 4.35 0.446 4.349 0.445 4.348 0.444 C 4.348 0.444 4.347 0.444 4.347 0.443 C 4.347 0.443 4.347 0.443 4.347 0.443 C 4.347 0.443 4.347 0.443 4.347 0.443 C 4.347 0.443 4.347 0.443 4.309 0.476 C 4.272 0.509 4.272 0.509 4.272 0.509 C 4.272 0.509 4.272 0.509 4.272 0.509 C 4.272 0.509 4.272 0.509 4.272 0.509 C 4.272 0.51 4.273 0.51 4.273 0.51 C 4.274 0.511 4.275 0.512 4.276 0.514 C 4.279 0.517 4.283 0.521 4.288 0.527 C 4.298 0.539 4.313 0.557 4.333 0.579 C 4.371 0.624 4.426 0.688 4.491 0.766 C 4.622 0.922 4.792 1.131 4.955 1.346 C 5.118 1.562 5.271 1.783 5.368 1.96 C 5.416 2.05 5.449 2.125 5.462 2.182 C 5.476 2.243 5.463 2.263 5.456 2.268 L 5.487 2.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.514,
    height: 3.034,
    viewBox: "0 0 2.514 3.034",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.321,
      top: 19.607,
      width: 2.514,
      height: 3.034,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.191 0 C 1.026 0.748 0.265 1.268 0.265 1.268 C -0.166 1.826 0.005 2.319 0.24 2.646 C 0.433 2.91 0.748 3.056 1.075 3.032 C 1.554 2.999 2.034 2.954 2.514 2.897 C 2.341 2.1 2.116 0.85 2.191 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.321,
      top: 19.607,
      width: 2.514,
      height: 3.034,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.513693332672119,
      height: 3.034437894821167,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.623,
    height: 3.573,
    viewBox: "0 0 3.623 3.573",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.543,
      top: -0.005,
      width: 3.623,
      height: 3.573,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.952 0.95 C 0.849 2.012 1.76 3.156 2.588 2.782 C 3.416 2.407 2.196 0.164 2.734 0.005 C 3.271 -0.153 3.623 3.304 3.623 3.304 C 3.623 3.304 3.396 3.406 3.189 3.489 C 2.982 3.573 1.056 3.573 1.056 3.573 L 0 1.994 L 0.207 0.663 L 1.236 1.19",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 2.514,
    height: 3.034,
    viewBox: "0 0 2.514 3.034",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.321,
      top: 19.607,
      width: 2.514,
      height: 3.034,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.191 0 L 2.241 0.004 C 2.242 -0.015 2.233 -0.033 2.217 -0.043 C 2.2 -0.053 2.18 -0.052 2.164 -0.042 L 2.191 0 Z M 0.265 1.268 L 0.237 1.226 C 0.232 1.229 0.229 1.233 0.225 1.237 L 0.265 1.268 Z M 0.24 2.646 L 0.199 2.675 L 0.2 2.675 L 0.24 2.646 Z M 1.075 3.032 L 1.071 2.982 L 1.071 2.982 L 1.075 3.032 Z M 2.514 2.897 L 2.52 2.947 C 2.534 2.945 2.546 2.938 2.554 2.926 C 2.563 2.915 2.566 2.901 2.563 2.887 L 2.514 2.897 Z M 2.191 0 L 2.164 -0.042 C 1.581 0.332 1.099 0.649 0.763 0.873 C 0.595 0.985 0.464 1.073 0.374 1.133 C 0.329 1.164 0.295 1.187 0.272 1.203 C 0.26 1.21 0.252 1.216 0.246 1.22 C 0.243 1.222 0.24 1.224 0.239 1.225 C 0.238 1.225 0.238 1.226 0.237 1.226 C 0.237 1.226 0.237 1.226 0.237 1.226 C 0.237 1.226 0.237 1.226 0.237 1.226 C 0.237 1.226 0.237 1.226 0.237 1.226 C 0.237 1.226 0.237 1.226 0.265 1.268 C 0.293 1.309 0.293 1.309 0.293 1.309 C 0.293 1.309 0.293 1.309 0.293 1.309 C 0.293 1.309 0.293 1.309 0.293 1.309 C 0.293 1.309 0.293 1.309 0.294 1.309 C 0.294 1.308 0.295 1.308 0.295 1.307 C 0.297 1.306 0.299 1.305 0.302 1.303 C 0.308 1.299 0.316 1.293 0.328 1.285 C 0.351 1.27 0.385 1.246 0.43 1.216 C 0.519 1.156 0.651 1.068 0.819 0.956 C 1.154 0.733 1.636 0.416 2.218 0.042 L 2.191 0 Z M 0.265 1.268 L 0.225 1.237 C 0.003 1.525 -0.066 1.8 -0.047 2.047 C -0.028 2.293 0.079 2.507 0.199 2.675 L 0.24 2.646 L 0.28 2.617 C 0.166 2.458 0.07 2.262 0.053 2.04 C 0.036 1.819 0.096 1.568 0.305 1.298 L 0.265 1.268 Z M 0.24 2.646 L 0.2 2.675 C 0.403 2.953 0.735 3.107 1.078 3.082 L 1.075 3.032 L 1.071 2.982 C 0.762 3.005 0.463 2.866 0.28 2.616 L 0.24 2.646 Z M 1.075 3.032 L 1.078 3.082 C 1.558 3.049 2.04 3.004 2.52 2.947 L 2.514 2.897 L 2.508 2.848 C 2.029 2.904 1.55 2.949 1.071 2.982 L 1.075 3.032 Z M 2.514 2.897 L 2.563 2.887 C 2.389 2.089 2.167 0.846 2.241 0.004 L 2.191 0 L 2.141 -0.004 C 2.066 0.854 2.292 2.111 2.465 2.908 L 2.514 2.897 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.422,
    height: 8.274,
    viewBox: "0 0 12.422 8.274",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.497,
      top: 14.229,
      width: 12.422,
      height: 8.274,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.833 0.317 C 10.701 -1.205 3.523 3.124 0.015 5.377 C -0.06 6.227 0.164 7.477 0.337 8.274 C 7.572 7.419 14.515 3.922 11.833 0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.497,
      top: 14.229,
      width: 12.422,
      height: 8.274,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.421818733215332,
      height: 8.274404525756836,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.795,
      top: -2.119,
      width: 14.185,
      height: 10.959,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.432,
    height: 6.534,
    viewBox: "0 0 7.432 6.534",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.753,
      top: 0,
      width: 7.432,
      height: 6.534,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.508 C 1.427 3.675 4.565 1.858 5.495 2.36 C 6.426 2.862 7.431 3.603 6.934 5.435 C 6.437 7.267 7.142 6.257 7.142 6.257 L 7.432 2.119 L 3.816 0 L 0 3.508 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.245,
    height: 4.396,
    viewBox: "0 0 2.245 4.396",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.563,
      width: 2.245,
      height: 4.396,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.652 0 C 1.379 1.302 2.245 4.232 2.245 4.232 L 0.521 4.396 L 0 0.358",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.701 0.01 C 1.706 -0.017 1.689 -0.043 1.662 -0.049 C 1.635 -0.055 1.609 -0.037 1.603 -0.01 L 1.652 0 L 1.701 0.01 Z M 2.245 4.232 L 2.249 4.282 C 2.264 4.281 2.278 4.273 2.286 4.26 C 2.295 4.248 2.297 4.232 2.293 4.218 L 2.245 4.232 Z M 0.521 4.396 L 0.471 4.402 C 0.475 4.429 0.499 4.448 0.525 4.445 L 0.521 4.396 Z M 0.05 0.352 C 0.046 0.325 0.021 0.305 -0.006 0.309 C -0.034 0.312 -0.053 0.337 -0.05 0.365 L 0 0.358 L 0.05 0.352 Z M 1.652 0 L 1.603 -0.01 C 1.533 0.323 1.537 0.756 1.579 1.215 C 1.623 1.676 1.706 2.166 1.797 2.614 C 1.888 3.063 1.988 3.471 2.065 3.767 C 2.104 3.914 2.137 4.034 2.16 4.117 C 2.172 4.159 2.181 4.191 2.187 4.213 C 2.19 4.224 2.193 4.232 2.194 4.238 C 2.195 4.241 2.196 4.243 2.196 4.244 C 2.196 4.245 2.197 4.245 2.197 4.246 C 2.197 4.246 2.197 4.246 2.197 4.246 C 2.197 4.246 2.197 4.246 2.197 4.246 C 2.197 4.246 2.197 4.246 2.245 4.232 C 2.293 4.218 2.293 4.218 2.293 4.218 C 2.293 4.218 2.293 4.218 2.293 4.218 C 2.293 4.218 2.293 4.218 2.293 4.218 C 2.292 4.217 2.292 4.217 2.292 4.216 C 2.292 4.215 2.291 4.212 2.29 4.21 C 2.289 4.204 2.286 4.196 2.283 4.185 C 2.277 4.163 2.268 4.131 2.256 4.09 C 2.233 4.008 2.2 3.889 2.162 3.741 C 2.085 3.447 1.986 3.041 1.895 2.595 C 1.804 2.148 1.722 1.661 1.679 1.206 C 1.636 0.75 1.634 0.328 1.701 0.01 L 1.652 0 Z M 2.245 4.232 L 2.24 4.182 L 0.516 4.346 L 0.521 4.396 L 0.525 4.445 L 2.249 4.282 L 2.245 4.232 Z M 0.521 4.396 L 0.57 4.389 L 0.05 0.352 L 0 0.358 L -0.05 0.365 L 0.471 4.402 L 0.521 4.396 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 12.422,
    height: 8.274,
    viewBox: "0 0 12.422 8.274",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.497,
      top: 14.229,
      width: 12.422,
      height: 8.274,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.833 0.317 L 11.793 0.347 L 11.793 0.347 L 11.833 0.317 Z M 0.015 5.377 L -0.012 5.335 C -0.025 5.343 -0.034 5.357 -0.035 5.373 L 0.015 5.377 Z M 0.337 8.274 L 0.289 8.285 C 0.294 8.31 0.318 8.327 0.343 8.324 L 0.337 8.274 Z M 11.833 0.317 L 11.873 0.287 C 11.72 0.081 11.467 -0.021 11.148 -0.045 C 10.829 -0.068 10.436 -0.014 9.99 0.1 C 9.098 0.329 7.981 0.799 6.793 1.387 C 4.416 2.562 1.742 4.208 -0.012 5.335 L 0.015 5.377 L 0.042 5.419 C 1.796 4.293 4.465 2.649 6.837 1.476 C 8.024 0.89 9.133 0.423 10.015 0.197 C 10.456 0.084 10.837 0.033 11.141 0.055 C 11.444 0.077 11.664 0.173 11.793 0.347 L 11.833 0.317 Z M 0.015 5.377 L -0.035 5.373 C -0.11 6.231 0.116 7.488 0.289 8.285 L 0.337 8.274 L 0.386 8.264 C 0.213 7.466 -0.009 6.223 0.064 5.381 L 0.015 5.377 Z M 0.337 8.274 L 0.343 8.324 C 3.965 7.896 7.517 6.806 9.83 5.369 C 10.986 4.651 11.838 3.843 12.231 2.982 C 12.626 2.116 12.554 1.202 11.873 0.287 L 11.833 0.317 L 11.793 0.347 C 12.453 1.234 12.519 2.11 12.14 2.94 C 11.759 3.775 10.926 4.571 9.778 5.284 C 7.481 6.711 3.944 7.798 0.332 8.225 L 0.337 8.274 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.721,
      top: 8.97,
      width: 0.336,
      height: 0.337,
      borderRadius: "50%",
      backgroundColor: "rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.721,
      top: 9.947,
      width: 0.336,
      height: 0.337,
      borderRadius: "50%",
      backgroundColor: "rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 0.104,
    height: 0.421,
    viewBox: "0 0 0.104 0.421",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.377,
      top: 2.52,
      width: 0.104,
      height: 0.421,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.051 0.003 C 0.053 -0.025 0.031 -0.048 0.004 -0.05 C -0.024 -0.051 -0.047 -0.03 -0.049 -0.003 L 0.001 0 L 0.051 0.003 Z M 0.061 0.447 C 0.075 0.47 0.106 0.478 0.13 0.464 C 0.154 0.45 0.161 0.419 0.147 0.396 L 0.104 0.421 L 0.061 0.447 Z M 0.001 0 L -0.049 -0.003 C -0.058 0.155 -0.019 0.311 0.061 0.447 L 0.104 0.421 L 0.147 0.396 C 0.077 0.277 0.043 0.14 0.051 0.003 L 0.001 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.894,
    height: 0.666,
    viewBox: "0 0 0.894 0.666",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.911,
      top: 13.842,
      width: 0.894,
      height: 0.666,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.035 -0.035 C 0.016 -0.055 -0.016 -0.055 -0.035 -0.035 C -0.055 -0.016 -0.055 0.016 -0.035 0.035 L 0 0 L 0.035 -0.035 Z M 0.871 0.71 C 0.895 0.723 0.925 0.714 0.938 0.689 C 0.951 0.665 0.942 0.635 0.918 0.622 L 0.894 0.666 L 0.871 0.71 Z M 0 0 L -0.035 0.035 C 0.231 0.304 0.537 0.531 0.871 0.71 L 0.894 0.666 L 0.918 0.622 C 0.593 0.448 0.295 0.226 0.035 -0.035 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.683,
    height: 0.314,
    viewBox: "0 0 0.683 0.314",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.634,
      top: 18.451,
      width: 0.683,
      height: 0.314,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.703 0.045 C 0.729 0.034 0.74 0.004 0.728 -0.021 C 0.716 -0.046 0.687 -0.057 0.662 -0.045 L 0.683 0 L 0.703 0.045 Z M -0.021 0.269 C -0.046 0.28 -0.057 0.31 -0.045 0.335 C -0.034 0.36 -0.004 0.371 0.021 0.36 L 0 0.314 L -0.021 0.269 Z M 0.683 0 L 0.662 -0.045 L -0.021 0.269 L 0 0.314 L 0.021 0.36 L 0.703 0.045 L 0.683 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.563,
    height: 3.194,
    viewBox: "0 0 4.563 3.194",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.950,0.313,-0.313,0.950,9.105,0)",
      transformOrigin: "0 0",
      width: 4.563,
      height: 3.194,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.686 3.167 C 1.196 3.377 1.899 2.323 1.599 1.983 C 1.599 1.983 2.457 2.343 3.062 1.821 C 5.112 2.097 4.977 -0.529 3.178 0.222 C 2.241 -0.315 1.199 0.215 1.245 0.816 C 0.54 0.168 -0.831 2.54 0.686 3.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.686 3.167 L 0.667 3.213 L 0.667 3.213 L 0.686 3.167 Z M 1.599 1.983 L 1.618 1.937 C 1.597 1.928 1.572 1.935 1.558 1.954 C 1.545 1.973 1.546 1.999 1.561 2.017 L 1.599 1.983 Z M 3.062 1.821 L 3.068 1.772 C 3.054 1.77 3.04 1.774 3.029 1.783 L 3.062 1.821 Z M 3.178 0.222 L 3.153 0.266 C 3.167 0.273 3.183 0.274 3.197 0.268 L 3.178 0.222 Z M 1.245 0.816 L 1.211 0.853 C 1.226 0.867 1.248 0.87 1.266 0.861 C 1.285 0.852 1.296 0.833 1.295 0.813 L 1.245 0.816 Z M 0.686 3.167 L 0.667 3.213 C 0.814 3.274 0.97 3.241 1.111 3.162 C 1.251 3.083 1.383 2.955 1.487 2.811 C 1.591 2.667 1.67 2.504 1.703 2.352 C 1.736 2.203 1.727 2.053 1.636 1.95 L 1.599 1.983 L 1.561 2.017 C 1.621 2.084 1.636 2.194 1.606 2.331 C 1.576 2.466 1.504 2.617 1.406 2.752 C 1.308 2.888 1.187 3.005 1.062 3.075 C 0.937 3.145 0.814 3.165 0.705 3.121 L 0.686 3.167 Z M 1.599 1.983 C 1.579 2.03 1.579 2.03 1.579 2.03 C 1.579 2.03 1.579 2.03 1.58 2.03 C 1.58 2.03 1.58 2.03 1.58 2.03 C 1.58 2.03 1.58 2.03 1.58 2.03 C 1.581 2.03 1.582 2.03 1.582 2.031 C 1.584 2.032 1.587 2.033 1.59 2.034 C 1.597 2.037 1.607 2.04 1.62 2.045 C 1.646 2.054 1.682 2.066 1.729 2.08 C 1.821 2.106 1.95 2.135 2.099 2.148 C 2.397 2.173 2.778 2.132 3.094 1.859 L 3.062 1.821 L 3.029 1.783 C 2.741 2.032 2.391 2.072 2.108 2.048 C 1.966 2.036 1.844 2.008 1.756 1.983 C 1.712 1.971 1.677 1.959 1.654 1.951 C 1.642 1.947 1.633 1.943 1.627 1.941 C 1.624 1.94 1.621 1.939 1.62 1.938 C 1.619 1.938 1.619 1.938 1.618 1.938 C 1.618 1.937 1.618 1.937 1.618 1.937 C 1.618 1.937 1.618 1.937 1.618 1.937 C 1.618 1.937 1.618 1.937 1.618 1.937 C 1.618 1.937 1.618 1.937 1.599 1.983 Z M 3.062 1.821 L 3.055 1.871 C 3.578 1.941 3.969 1.827 4.229 1.621 C 4.489 1.416 4.615 1.122 4.613 0.843 C 4.612 0.564 4.483 0.297 4.232 0.151 C 3.981 0.004 3.618 -0.016 3.159 0.176 L 3.178 0.222 L 3.197 0.268 C 3.638 0.084 3.966 0.111 4.182 0.237 C 4.398 0.363 4.512 0.594 4.513 0.843 C 4.515 1.092 4.402 1.357 4.167 1.543 C 3.932 1.728 3.57 1.839 3.068 1.772 L 3.062 1.821 Z M 3.178 0.222 L 3.203 0.179 C 2.721 -0.097 2.211 -0.1 1.825 0.046 C 1.444 0.19 1.17 0.488 1.195 0.82 L 1.245 0.816 L 1.295 0.813 C 1.274 0.544 1.498 0.276 1.861 0.139 C 2.219 0.004 2.698 0.005 3.153 0.266 L 3.178 0.222 Z M 1.245 0.816 L 1.279 0.78 C 1.181 0.69 1.07 0.651 0.954 0.655 C 0.84 0.66 0.726 0.707 0.618 0.781 C 0.404 0.928 0.209 1.193 0.086 1.494 C -0.037 1.796 -0.091 2.142 -0.014 2.456 C 0.063 2.772 0.273 3.05 0.667 3.213 L 0.686 3.167 L 0.705 3.121 C 0.341 2.97 0.153 2.717 0.083 2.432 C 0.012 2.144 0.061 1.82 0.179 1.532 C 0.296 1.243 0.481 0.997 0.675 0.863 C 0.772 0.796 0.868 0.759 0.958 0.755 C 1.046 0.752 1.132 0.781 1.211 0.853 L 1.245 0.816 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 372.196,
      top: 266.493,
      width: 181.576,
      height: 65.211,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.974,-0.228,0.228,0.974,0,42.819)",
      transformOrigin: "0 0",
      width: 151,
      height: 23,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: 14.171025276184082,
      whiteSpace: "nowrap",
      lineHeight: "22.044px",
      color: "rgb(0,0,0)"
    }
  }, "What we are tackling"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1e0d9cafff38b56f",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.957,-0.291,0.291,0.957,152.732,6.720)",
      transformOrigin: "0 0",
      width: 23.122,
      height: 23.122
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 259.902,
    height: 102.732,
    viewBox: "0 0 259.902 102.732",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.957,-0.291,0.291,0.957,342.051,113.661)",
      transformOrigin: "0 0",
      width: 259.902,
      height: 102.732,
      color: "rgb(28,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 113.345 15.679 C 114.535 15.67 115.492 14.699 115.483 13.51 C 115.475 12.321 114.504 11.364 113.315 11.372 L 113.33 13.526 L 113.345 15.679 Z M 79.253 15.833 L 79.536 17.968 L 79.253 15.833 Z M 47.665 22.364 L 46.948 20.334 L 47.665 22.364 Z M 15.614 41.489 L 17.075 43.071 L 15.614 41.489 Z M 0.26 64.336 L -1.858 63.946 L 0.26 64.336 Z M 40.489 97.112 L 39.98 99.204 L 40.489 97.112 Z M 82.255 102.64 L 82.222 104.793 L 82.255 102.64 Z M 136.764 101.298 L 136.919 103.446 L 136.764 101.298 Z M 216.685 90.17 L 217.213 92.257 L 216.685 90.17 Z M 259.111 62.546 L 261.185 63.127 L 259.111 62.546 Z M 224.887 22.829 L 224.069 24.821 L 224.069 24.821 L 224.887 22.829 Z M 203.894 15.923 L 203.298 17.992 L 203.894 15.923 Z M 169.109 7.049 L 168.687 9.16 L 168.687 9.16 L 169.109 7.049 Z M 81.323 -2.152 C 80.134 -2.19 79.14 -1.257 79.102 -0.068 C 79.065 1.12 79.998 2.114 81.186 2.152 L 81.254 0 L 81.323 -2.152 Z M 113.33 13.526 L 113.315 11.372 C 101.709 11.455 90.41 12.182 78.97 13.699 L 79.253 15.833 L 79.536 17.968 C 90.784 16.476 101.903 15.76 113.345 15.679 L 113.33 13.526 Z M 79.253 15.833 L 78.97 13.699 C 68.122 15.138 57.192 16.711 46.948 20.334 L 47.665 22.364 L 48.383 24.394 C 58.148 20.941 68.654 19.411 79.536 17.968 L 79.253 15.833 Z M 47.665 22.364 L 46.948 20.334 C 33.922 24.939 23.147 31.602 14.153 39.907 L 15.614 41.489 L 17.075 43.071 C 25.636 35.166 35.905 28.806 48.383 24.394 L 47.665 22.364 Z M 15.614 41.489 L 14.153 39.907 C 6.61 46.872 -0.081 54.274 -1.858 63.946 L 0.26 64.336 L 2.377 64.725 C 3.878 56.561 9.575 49.996 17.075 43.071 L 15.614 41.489 Z M 0.26 64.336 L -1.858 63.946 C -3.629 73.583 2.711 81.367 11.013 87.045 C 19.408 92.787 30.5 96.899 39.98 99.204 L 40.489 97.112 L 40.997 95.019 C 31.816 92.787 21.264 88.839 13.444 83.491 C 5.532 78.079 1.088 71.744 2.377 64.725 L 0.26 64.336 Z M 40.489 97.112 L 39.98 99.204 C 53.523 102.497 67.908 104.574 82.222 104.793 L 82.255 102.64 L 82.288 100.487 C 68.337 100.273 54.273 98.248 40.997 95.019 L 40.489 97.112 Z M 82.255 102.64 L 82.222 104.793 C 100.329 105.07 118.859 104.747 136.919 103.446 L 136.764 101.298 L 136.61 99.15 C 118.704 100.44 100.303 100.763 82.288 100.487 L 82.255 102.64 Z M 136.764 101.298 L 136.919 103.446 C 163.997 101.495 191.182 98.846 217.213 92.257 L 216.685 90.17 L 216.157 88.083 C 190.516 94.572 163.652 97.202 136.61 99.15 L 136.764 101.298 Z M 216.685 90.17 L 217.213 92.257 C 226.637 89.872 236.391 86.752 244.373 82.215 C 252.35 77.681 258.819 71.578 261.185 63.127 L 259.111 62.546 L 257.037 61.966 C 255.102 68.881 249.723 74.22 242.245 78.471 C 234.771 82.719 225.463 85.727 216.157 88.083 L 216.685 90.17 Z M 259.111 62.546 L 261.185 63.127 C 263.975 53.157 259.792 44.473 252.746 37.472 C 245.729 30.501 235.628 24.912 225.705 20.837 L 224.887 22.829 L 224.069 24.821 C 233.752 28.797 243.266 34.124 249.711 40.527 C 256.127 46.901 259.253 54.05 257.037 61.966 L 259.111 62.546 Z M 224.887 22.829 L 225.705 20.837 C 218.871 18.031 211.62 15.907 204.49 13.854 L 203.894 15.923 L 203.298 17.992 C 210.451 20.052 217.485 22.116 224.069 24.821 L 224.887 22.829 Z M 203.894 15.923 L 204.49 13.854 C 193.06 10.562 181.485 7.327 169.531 4.938 L 169.109 7.049 L 168.687 9.16 C 180.449 11.512 191.873 14.701 203.298 17.992 L 203.894 15.923 Z M 169.109 7.049 L 169.531 4.938 C 140.471 -0.871 110.909 -1.214 81.323 -2.152 L 81.254 0 L 81.186 2.152 C 110.923 3.095 140.06 3.438 168.687 9.16 L 169.109 7.049 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 134,
      top: 8247,
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
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Final designs"))), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 24,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Good (MVP - Milestone 1)"))), /*#__PURE__*/React.createElement("div", {
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
      whiteSpace: "pre-wrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "1. ", "A focused and easily navigable checklist of outstanding information required"), /*#__PURE__*/React.createElement("span", {
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
  }, "Brokers land on a clear, categorised list of exactly what's outstanding, separated into document requests and clarification requests. Each item shows its status at a glance, so brokers and their clients always know what's done, what's left, and what to tackle next. No more digging through emails or guessing what the Credit Assessment Team needs to move the application forward.")), /*#__PURE__*/React.createElement("div", {
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
      whiteSpace: "pre-wrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "1. ", "Clear and concise explanations"), /*#__PURE__*/React.createElement("span", {
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
  }, "Every request comes with plain-English context: why the information is being asked for and exactly what's acceptable to provide. Instead of vague requests that trigger back-and-forth, brokers get specific guidance up front, reducing errors, resubmissions, and delays in progressing the home loan.")), /*#__PURE__*/React.createElement("div", {
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
      whiteSpace: "pre-wrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "1. ", "Ability to upload and add additional commentary to support request"), /*#__PURE__*/React.createElement("span", {
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
  }, "Brokers can upload the required documents directly against each item and attach commentary to give the assessor helpful context. This keeps everything tied to the right request, speeds up assessment, and gives brokers a way to explain any nuances in their client's circumstances without a separate phone call or email."))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-00da992a6d4fd272",
    style: {
      position: "relative",
      width: 1005,
      height: 778,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 24,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Better (Milestone 2)"))), /*#__PURE__*/React.createElement("div", {
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
      whiteSpace: "pre-wrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "1. ", "Tasks management and notifications for clear broker actions when visiting Macquarie Broker Portal"), /*#__PURE__*/React.createElement("span", {
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
  }, "Outstanding tasks now appear right on the portal home page, so brokers see what needs actioning the moment they log in. A dedicated tasks list links straight to each application, and real-time notifications flag when more information is required, so nothing sits waiting and clients aren't left wondering. Brokers always know what needs their attention without hunting for it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 475,
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-tertiary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mac-dashboard.png",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      zIndex: 30,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40.612,
      backgroundColor: "var(--mq-color-background-header-static)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "10.153px 15.230px 10.153px 15.230px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      zIndex: 2,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 91.922,
      height: 16.499,
      flexShrink: 0,
      color: "var(--mq-color-logo-inverse)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    style: {
      transform: "scale(0.516, 0.516)",
      transformOrigin: "0 0",
      color: "var(--mq-color-logo-inverse)"
    },
    mode: "white",
    variant: "horizontal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 145.38,
      height: 40.612,
      backgroundColor: "var(--mq-color-background-header-static)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.727,
      top: 3.273,
      width: 6.545,
      height: 7.364,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 11.455,
    height: 2.455,
    viewBox: "0 0 11.455 2.455",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.273,
      top: 13.091,
      width: 11.455,
      height: 2.455,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.624 2.039 C -0.854 2.383 -0.761 2.849 -0.416 3.079 C -0.071 3.308 0.394 3.215 0.624 2.871 L -0.624 2.039 Z M 10.831 2.871 C 11.06 3.215 11.526 3.308 11.871 3.079 C 12.215 2.849 12.308 2.383 12.079 2.039 L 10.831 2.871 Z M 0 2.455 C 0.624 2.871 0.624 2.871 0.624 2.871 C 0.624 2.871 0.623 2.872 0.623 2.872 C 0.623 2.872 0.623 2.873 0.622 2.873 C 0.622 2.874 0.622 2.874 0.621 2.874 C 0.621 2.875 0.621 2.875 0.621 2.875 C 0.622 2.874 0.624 2.871 0.627 2.866 C 0.635 2.856 0.648 2.838 0.668 2.812 C 0.708 2.762 0.773 2.683 0.865 2.586 C 1.049 2.391 1.339 2.123 1.746 1.851 C 2.553 1.313 3.842 0.75 5.727 0.75 L 5.727 -0.75 C 3.522 -0.75 1.947 -0.086 0.914 0.603 C 0.4 0.946 0.025 1.291 -0.226 1.556 C -0.351 1.689 -0.446 1.802 -0.511 1.886 C -0.544 1.928 -0.57 1.962 -0.589 1.988 C -0.598 2.001 -0.606 2.012 -0.611 2.02 C -0.614 2.024 -0.617 2.028 -0.619 2.031 C -0.62 2.033 -0.621 2.034 -0.622 2.035 C -0.622 2.036 -0.623 2.036 -0.623 2.037 C -0.623 2.037 -0.623 2.038 -0.624 2.038 C -0.624 2.038 -0.624 2.039 0 2.455 Z M 5.727 0.75 C 7.612 0.75 8.901 1.313 9.709 1.851 C 10.116 2.123 10.406 2.391 10.59 2.586 C 10.682 2.683 10.747 2.762 10.787 2.812 C 10.806 2.838 10.82 2.856 10.827 2.866 C 10.831 2.871 10.833 2.874 10.833 2.875 C 10.834 2.875 10.834 2.875 10.833 2.874 C 10.833 2.874 10.833 2.874 10.832 2.873 C 10.832 2.873 10.832 2.872 10.831 2.872 C 10.831 2.872 10.831 2.871 10.831 2.871 C 10.831 2.871 10.831 2.871 11.455 2.455 C 12.079 2.039 12.078 2.038 12.078 2.038 C 12.078 2.038 12.078 2.037 12.078 2.037 C 12.077 2.036 12.077 2.036 12.076 2.035 C 12.076 2.034 12.075 2.033 12.074 2.031 C 12.071 2.028 12.069 2.024 12.066 2.02 C 12.06 2.012 12.053 2.001 12.043 1.988 C 12.024 1.962 11.999 1.928 11.966 1.886 C 11.9 1.802 11.806 1.689 11.68 1.556 C 11.43 1.291 11.054 0.946 10.541 0.603 C 9.508 -0.086 7.933 -0.75 5.727 -0.75 L 5.727 0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-primary-inverse)",
      flexShrink: 0
    }
  }, "Timothy Bigglesworth"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 9.999,
      height: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.999,
    height: 5,
    viewBox: "0 0 9.999 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.999,
      height: 5,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.61 5.671 4.801 5.75 5 5.75 C 5.199 5.75 5.39 5.671 5.53 5.53 L 5 5 Z M 10.529 0.53 C 10.822 0.237 10.822 -0.238 10.529 -0.53 C 10.236 -0.823 9.761 -0.823 9.468 -0.53 L 10.529 0.53 Z M -0.53 0.53 L 4.47 5.53 L 5.53 4.47 L 0.53 -0.53 L -0.53 0.53 Z M 5.53 5.53 L 10.529 0.53 L 9.468 -0.53 L 4.47 4.47 L 5.53 5.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      zIndex: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,55.842,572.380)",
      transformOrigin: "0 0",
      width: 572.38,
      height: 972.158
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--mq-color-background-sidebar-static)",
      display: "flex",
      flexDirection: "column",
      gap: 5.07654333114624,
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 55.842,
      height: 54.151,
      backgroundColor: "var(--mq-color-button-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 8px 16px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 33.844,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconDefault32Dashboard, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-primary-inverse)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Home"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 55.842,
      height: 54.151,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 4px 16px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 33.844,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconDefault32AccountReports, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-primary-inverse)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Applications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 55.842,
      height: 54.151,
      backgroundColor: "var(--mq-color-background-sidebar-static)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 4px 16px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 33.844,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconDefault32Accounts, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-primary-inverse)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Existing loans"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 55.842,
      height: 54.151,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "16px 4px 16px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 33.844,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconDefault32ManagePeople, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-primary-inverse)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Support staff")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      padding: "0px 0px 5.077px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 55.842,
      height: 44.42,
      backgroundColor: "var(--mq-color-background-sidebar-static)",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      padding: "5.077px 2.538px 5.077px 2.538px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 21.575,
      height: 21.575,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.575,
      height: 21.575,
      borderRadius: 2.53827166557312,
      backgroundColor: "var(--mq-color-button-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 3.173,
      width: 15.23,
      height: 15.23
    }
  }, /*#__PURE__*/React.createElement(Pin24, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0"
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20.30617332458496,
      padding: "30.459px 0px 30.459px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 761.482,
      display: "flex",
      flexDirection: "row",
      gap: 163,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 408.662,
      height: 41.077,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Good morning,"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 304.593,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Thursday, 1 June 2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      isolation: "isolate",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.22,
      top: 15.59,
      width: 345,
      height: 83.937,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 218.926,
      height: 54.691,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Processing times"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "8px 0px 8px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 29.19,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Up to 1 hour"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Avg. time to file pickup")), /*#__PURE__*/React.createElement("svg", {
    width: 31.538,
    height: 1,
    viewBox: "0 -0.500 31.538 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,105.696,5.077)",
      transformOrigin: "0 0",
      width: 31.538,
      height: 1,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 31.538 0 L 31.538 -0.317 L 31.538 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Up to 2 hours"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Avg. time to assessment"))))), /*#__PURE__*/React.createElement("svg", {
    width: 393,
    height: 130,
    viewBox: "0 0 393 130",
    fill: "none",
    style: {
      position: "relative",
      width: 393,
      height: 130,
      opacity: 0.15,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      zIndex: 1,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.538 C 0 1.136 1.136 0 2.538 0 L 246.847 0 C 248.249 0 249.385 1.136 249.385 2.538 L 249.385 79.956 C 249.385 81.357 248.249 82.494 246.847 82.494 L 2.538 82.494 C 1.136 82.494 0 81.357 0 79.956 L 0 2.538 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 761.482,
      display: "flex",
      flexDirection: "row",
      gap: 15.229629516601562,
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 761.482,
      display: "flex",
      flexDirection: "row",
      gap: 15.229629516601562,
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15.229629516601562,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 321.726,
      overflow: "hidden",
      borderRadius: 2.53827166557312,
      backgroundColor: "var(--mq-color-background-default)",
      boxShadow: "0px 0px 2.538px 0px rgba(0,0,0,0.08), 0px 3.807px 2.538px -2.538px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 15.229629516601562,
      padding: "20.306px 15.230px 20.306px 15.230px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7.614814758300781,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15.23,
      height: 15.23,
      flexShrink: 0,
      color: "var(--mq-color-icon-inverse)"
    }
  }, /*#__PURE__*/React.createElement(MqIcon, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0",
      color: "var(--mq-color-icon-inverse)"
    },
    icon: "account-reports",
    size: "24"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10.15308666229248,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Your applications")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 340.128,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Check all your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(15,118,222)",
      fontSize: 8.884,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "current active "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(15,118,222)",
      fontSize: 8.884,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "applications"), " submitted through us.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-icon-inverse)",
      display: "flex",
      flexDirection: "row",
      gap: 15.229629516601562,
      padding: "0px 6.346px 0px 6.346px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "6.346px 6.346px 6.346px 6.346px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.07654333114624,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.69135856628418,
      whiteSpace: "nowrap",
      lineHeight: "17.768px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "7"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      whiteSpace: "nowrap",
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "active"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "6.346px 6.346px 6.346px 6.346px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.07654333114624,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.69135856628418,
      whiteSpace: "nowrap",
      lineHeight: "17.768px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "13"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      whiteSpace: "nowrap",
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "this month"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "6.346px 6.346px 6.346px 6.346px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.07654333114624,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.69135856628418,
      whiteSpace: "nowrap",
      lineHeight: "17.768px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "20"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      whiteSpace: "nowrap",
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "this year")))), /*#__PURE__*/React.createElement("svg", {
    height: 0.635,
    viewBox: "0 -0.317 341.398 0.635",
    fill: "none",
    style: {
      position: "relative",
      height: 0.63456791639328,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 341.398 0 L 341.398 -0.317 L 341.398 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170.699,
      overflow: "hidden",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: 170.657,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81.225,
      height: 81.225,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 71.854,
    height: 62.873,
    viewBox: "0 0 71.854 62.873",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.511,0.859,-0.859,0.511,45.271,-2.146)",
      transformOrigin: "0 0",
      width: 71.854,
      height: 62.873,
      color: "var(--mq-color-accent-grey-subtle)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36.854 62.873 C 56.184 62.873 71.854 47.258 71.854 27.997 C 71.854 8.736 48.211 -12.339 33.744 8.85 C 19.276 30.039 10.761 17.095 1.875 29.755 C -7.011 42.414 17.524 62.873 36.854 62.873 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.595,
      top: 10.788,
      width: 38.074,
      height: 50.765,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38.074,
      height: 50.765,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-accent-grey-subtle)",
      boxShadow: "0 0 0 1.269px var(--mq-color-icon-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 3.807,
      width: 31.728,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.728,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 8.884,
      width: 31.728,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.728,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 13.961,
      width: 31.728,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.728,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 19.037,
      width: 31.728,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.728,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 34.267,
      width: 24.748,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.748,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.057,
      top: 24.113,
      width: 24.748,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.748,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.057,
      top: 29.19,
      width: 24.748,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.748,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 24.113,
      width: 7.615,
      height: 7.615,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.615,
      height: 7.615,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.556,
      top: 19.672,
      width: 38.074,
      height: 50.765,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38.074,
      height: 50.765,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-logo-inverse)",
      boxShadow: "0 0 0 1.269px var(--mq-color-icon-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.057,
      top: 3.808,
      width: 22.844,
      height: 2.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.844,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-secondary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 3.808,
      width: 7.615,
      height: 7.615,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.615,
      height: 7.615,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-secondary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.057,
      top: 8.884,
      width: 22.844,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 13.961,
      width: 31.728,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 18.402,
      width: 19.672,
      height: 2.538,
      borderRadius: 0.63456791639328,
      backgroundColor: "var(--mq-color-accent-grey-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.788,
      top: 27.286,
      width: 17.133,
      height: 17.133,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.133,
      height: 17.133,
      borderRadius: "50%",
      backgroundColor: "var(--mq-color-accent-blue-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.173,
      top: 3.808,
      width: 10.153,
      height: 10.153,
      color: "var(--mq-color-icon-inverse)"
    }
  }, /*#__PURE__*/React.createElement(MqIcon, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0",
      color: "var(--mq-color-icon-inverse)"
    },
    icon: "date",
    size: "16"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170.699,
      height: 19.037,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 170.699,
      height: 19.037,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10.15308666229248,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "var(--mq-color-text-secondary)"
    }
  }, "Track your applications")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 97.153,
      borderRadius: 2.53827166557312,
      backgroundColor: "var(--mq-color-button-secondary)",
      boxShadow: "inset 0 0 0 0.635px var(--mq-color-button-secondary-border)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 11.996,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 2.496,
    viewBox: "0 0 2.500 2.496",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.5,
      top: 9.5,
      width: 2.5,
      height: 2.496,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.5 2.496 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11,
      height: 11,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "View all your applications"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 321.726,
      overflow: "hidden",
      borderRadius: 2.621880292892456,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 2.622px 0px rgba(0,0,0,0.08), 0px 3.933px 2.622px -2.622px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 20.97504234313965,
      padding: "20.975px 15.731px 20.975px 15.731px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5.243760585784912,
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
      gap: 5.243760585784912,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 114.707,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10.487521171569824,
      lineHeight: 1.399999976158142,
      color: "rgb(21,23,28)",
      flexShrink: 0
    }
  }, "Your tasks")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Arial, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "This is list of actions for your applications, that we need to you to action in order to progress. Your currently have ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(15,118,222)"
    }
  }, "4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.177,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, " outstanding actions"), ". ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15.731281280517578,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 0.655,
    viewBox: "0 -0.328 341.663 0.655",
    fill: "none",
    style: {
      position: "relative",
      height: 0.655470073223114,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(208,209,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.328 L 0 0 L 341.663 0 L 341.663 -0.328 L 341.663 -0.655 L 0 -0.655 L 0 -0.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15.731281280517578,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 248.116,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10.487521171569824,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70.135,
      height: 26.219,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128.144,
      height: 11.798,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 9.176581382751465,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)"
    }
  }, "Timothy Igloo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 14.421,
      width: 181.565,
      height: 11.798,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(102,102,102)"
    }
  }, "APP-291324")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.243760585784912,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10.488,
      height: 10.488,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 2,
      height: 10,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 6,
    viewBox: "0 0 1 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 4,
      width: 1,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.819 0 C 0.819 -0.272 0.599 -0.492 0.328 -0.492 C 0.056 -0.492 -0.164 -0.272 -0.164 0 L 0.328 0 L 0.819 0 Z M -0.164 3.933 C -0.164 4.204 0.056 4.424 0.328 4.424 C 0.599 4.424 0.819 4.204 0.819 3.933 L 0.328 3.933 L -0.164 3.933 Z M 0.328 0 L -0.164 0 L -0.164 3.933 L 0.328 3.933 L 0.819 3.933 L 0.819 0 L 0.328 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 2,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 163.084,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "Documents reviewed - outstanding information "))), /*#__PURE__*/React.createElement(SmallButtonV11, {
    style: {
      position: "relative",
      width: 78.124,
      height: 15.588,
      flexShrink: 0
    },
    text1: "Go to application",
    buttonType: "secondary",
    state: "enabled",
    icon: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 0.655,
    viewBox: "0 -0.328 341.663 0.655",
    fill: "none",
    style: {
      position: "relative",
      height: 0.655470073223114,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(208,209,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.328 L 0 0 L 341.663 0 L 341.663 -0.328 L 341.663 -0.655 L 0 -0.655 L 0 -0.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15.731281280517578,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 248.116,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10.487521171569824,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70.135,
      height: 26.219,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128.144,
      height: 11.798,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 9.176581382751465,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)"
    }
  }, "David Blaine"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 14.42,
      width: 181.565,
      height: 11.798,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(102,102,102)"
    }
  }, "APP-291323")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.243760585784912,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10.488,
      height: 10.488,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 2,
      height: 10,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 6,
    viewBox: "0 0 1 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 4,
      width: 1,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.819 0 C 0.819 -0.272 0.599 -0.492 0.328 -0.492 C 0.056 -0.492 -0.164 -0.272 -0.164 0 L 0.328 0 L 0.819 0 Z M -0.164 3.933 C -0.164 4.204 0.056 4.424 0.328 4.424 C 0.599 4.424 0.819 4.204 0.819 3.933 L 0.328 3.933 L -0.164 3.933 Z M 0.328 0 L -0.164 0 L -0.164 3.933 L 0.328 3.933 L 0.819 3.933 L 0.819 0 L 0.328 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 2,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 163.084,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "Documents reviewed - outstanding information "))), /*#__PURE__*/React.createElement(SmallButtonV11, {
    style: {
      position: "relative",
      width: 78.124,
      height: 15.588,
      flexShrink: 0
    },
    text1: "Go to application",
    buttonType: "secondary",
    state: "enabled",
    icon: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 0.655,
    viewBox: "0 -0.328 341.663 0.655",
    fill: "none",
    style: {
      position: "relative",
      height: 0.655470073223114,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(208,209,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.328 L 0 0 L 341.663 0 L 341.663 -0.328 L 341.663 -0.655 L 0 -0.655 L 0 -0.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15.731281280517578,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 248.116,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10.487521171569824,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70.135,
      height: 26.219,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128.144,
      height: 11.798,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 9.176581382751465,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(51,54,62)"
    }
  }, "Amanda Nunez"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 14.42,
      width: 181.565,
      height: 11.798,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(102,102,102)"
    }
  }, "APP-291311")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.243760585784912,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10.488,
      height: 10.488,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 2,
      height: 10,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 6,
    viewBox: "0 0 1 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 4,
      width: 1,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.819 0 C 0.819 -0.272 0.599 -0.492 0.328 -0.492 C 0.056 -0.492 -0.164 -0.272 -0.164 0 L 0.328 0 L 0.819 0 Z M -0.164 3.933 C -0.164 4.204 0.056 4.424 0.328 4.424 C 0.599 4.424 0.819 4.204 0.819 3.933 L 0.328 3.933 L -0.164 3.933 Z M 0.328 0 L -0.164 0 L -0.164 3.933 L 0.328 3.933 L 0.819 3.933 L 0.819 0 L 0.328 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 2,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 163.084,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9.176581382751465,
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "Documents reviewed - outstanding information "))), /*#__PURE__*/React.createElement(SmallButtonV11, {
    style: {
      position: "relative",
      width: 78.124,
      height: 15.588,
      flexShrink: 0
    },
    text1: "Go to application",
    buttonType: "secondary",
    state: "enabled",
    icon: "default"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 373.126,
      height: 271.595,
      overflow: "hidden",
      borderRadius: 2.53827166557312,
      backgroundColor: "var(--mq-color-background-default)",
      boxShadow: "0px 0px 2.538px 0px rgba(0,0,0,0.08), 0px 3.807px 2.538px -2.538px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 15.229629516601562,
      padding: "20.306px 15.230px 20.306px 15.230px",
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
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7.614814758300781,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15.23,
      height: 15.23,
      flexShrink: 0,
      color: "var(--mq-color-icon-inverse)"
    }
  }, /*#__PURE__*/React.createElement(MqIcon, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0",
      color: "var(--mq-color-icon-inverse)"
    },
    icon: "accounts",
    size: "24"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10.15308666229248,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Your existing loans")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 340.128,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "rgb(51,54,62)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(51,54,62)",
      fontSize: 8.884,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "Search "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(15,118,222)",
      fontSize: 8.884,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "all your settled loans"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(51,54,62)",
      fontSize: 8.884,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, " and their details in one place."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-icon-inverse)",
      display: "flex",
      flexDirection: "row",
      gap: 15.229629516601562,
      padding: "0px 6.346px 0px 6.346px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "6.346px 6.346px 6.346px 6.346px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.07654333114624,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.69135856628418,
      whiteSpace: "nowrap",
      lineHeight: "17.768px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "20"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      whiteSpace: "nowrap",
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "this month"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "6.346px 6.346px 6.346px 6.346px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.07654333114624,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.69135856628418,
      whiteSpace: "nowrap",
      lineHeight: "17.768px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "56"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      whiteSpace: "nowrap",
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "this year"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
      padding: "6.346px 6.346px 6.346px 6.346px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5.07654333114624,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.69135856628418,
      whiteSpace: "nowrap",
      lineHeight: "17.768px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "76"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      whiteSpace: "nowrap",
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "total")))), /*#__PURE__*/React.createElement("svg", {
    height: 0.635,
    viewBox: "0 -0.317 341.398 0.635",
    fill: "none",
    style: {
      position: "relative",
      height: 0.63456791639328,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 341.398 0 L 341.398 -0.317 L 341.398 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170.699,
      height: 171.968,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81.225,
      height: 81.225,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 71.854,
    height: 62.873,
    viewBox: "0 0 71.854 62.873",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.935,-0.353,0.353,0.935,-6.183,22.381)",
      transformOrigin: "0 0",
      width: 71.854,
      height: 62.873,
      color: "var(--mq-color-accent-grey-subtle)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36.854 62.873 C 56.184 62.873 71.854 47.258 71.854 27.997 C 71.854 8.736 48.211 -12.339 33.744 8.85 C 19.276 30.039 10.761 17.095 1.875 29.755 C -7.011 42.414 17.524 62.873 36.854 62.873 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.23,
      top: 28.238,
      width: 50.765,
      height: 43.785,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-logo-inverse)",
      boxShadow: "0 0 0 1.269px var(--mq-color-icon-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.538,
      top: 9.836,
      width: 76.148,
      height: 64.091,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.615,
      top: 7.614,
      width: 60.919,
      height: 12.691,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)",
      boxShadow: "0 0 0 1.269px var(--mq-color-icon-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 55.842,
      top: 10.153,
      width: 7.615,
      height: 7.615,
      color: "var(--mq-color-icon-inverse)"
    }
  }, /*#__PURE__*/React.createElement(MqIcon, {
    style: {
      transform: "scale(0.476, 0.476)",
      transformOrigin: "0 0",
      color: "var(--mq-color-icon-inverse)"
    },
    icon: "search",
    size: "16"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.691,
      top: 11.422,
      width: 38.074,
      height: 5.077,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-logo-inverse)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.768,
      top: 26.017,
      width: 40.612,
      height: 5.077,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-accent-blue-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.768,
      top: 34.901,
      width: 40.612,
      height: 5.077,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.768,
      top: 43.785,
      width: 40.612,
      height: 5.077,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.768,
      top: 52.669,
      width: 40.612,
      height: 5.077,
      borderRadius: 1.26913583278656,
      backgroundColor: "var(--mq-color-accent-grey-tertiary)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44.632,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 170.699,
      height: 44.632,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10.15308666229248,
      textAlign: "center",
      whiteSpace: "pre-wrap",
      lineHeight: "15.230px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "Easily ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "rgb(51,54,62)",
      fontSize: 10.153,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "access existing loans"), " details"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 83.153,
      borderRadius: 2.53827166557312,
      backgroundColor: "var(--mq-color-button-secondary)",
      boxShadow: "inset 0 0 0 0.635px var(--mq-color-button-secondary-border)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3.500px 8px 3.500px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 11.996,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 2.496,
    viewBox: "0 0 2.500 2.496",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.5,
      top: 9.5,
      width: 2.5,
      height: 2.496,
      color: "rgb(51,54,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2.5 2.496 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11,
      height: 11,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.750px rgb(51,54,62), 0 0 0 0.750px rgb(51,54,62)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Search existing loans")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 271.595,
      overflow: "hidden",
      borderRadius: 2.53827166557312,
      backgroundColor: "var(--mq-color-background-default)",
      boxShadow: "0px 0px 2.538px 0px rgba(0,0,0,0.08), 0px 3.807px 2.538px -2.538px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 15.229629516601562,
      padding: "20.306px 15.230px 25.383px 15.230px",
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
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7.614814758300781,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15.23,
      height: 15.23,
      flexShrink: 0,
      color: "var(--mq-color-icon-inverse)"
    }
  }, /*#__PURE__*/React.createElement(MqIcon, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0",
      color: "var(--mq-color-icon-inverse)"
    },
    icon: "help",
    size: "24"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10.15308666229248,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Useful quick links")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 340.128,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "List of our frequently used tools by Macquarie brokers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 341.398,
    height: 0.635,
    viewBox: "0 -0.317 341.398 0.635",
    fill: "none",
    style: {
      position: "relative",
      width: 341.398,
      height: 0.63456791639328,
      flexShrink: 0,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 341.398 0 L 341.398 -0.317 L 341.398 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 15.229629516601562,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
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
      gap: 5.07654333114624,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 314.308,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Resources"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 314.308,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-link)",
      flexShrink: 0
    }
  }, "Calculators, forms, credit policy and more")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15.23,
      height: 15.23,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconDefault24ExternalLink, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 341.398,
    height: 0.635,
    viewBox: "0 -0.317 341.398 0.635",
    fill: "none",
    style: {
      position: "relative",
      width: 341.398,
      height: 0.63456791639328,
      flexShrink: 0,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 341.398 0 L 341.398 -0.317 L 341.398 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
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
      gap: 5.07654333114624,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 314.308,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Broker help centre"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 314.308,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "Search or browse through frequently asked questions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15.23,
      height: 15.23,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconDefault24ExternalLink, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10.15308666229248,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 341.398,
    height: 0.635,
    viewBox: "0 -0.317 341.398 0.635",
    fill: "none",
    style: {
      position: "relative",
      width: 341.398,
      height: 0.63456791639328,
      flexShrink: 0,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 341.398 0 L 341.398 -0.317 L 341.398 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6.34567928314209,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 6.34567928314209,
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
      gap: 5.07654333114624,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 314.308,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Valuation ordering"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 314.308,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8.883951187133789,
      lineHeight: "12.691px",
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0
    }
  }, "Request a valuation through CoreLogic")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15.23,
      height: 15.23,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconDefault24ExternalLink, {
    style: {
      transform: "scale(0.635, 0.635)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 341.398,
    height: 0.635,
    viewBox: "0 -0.317 341.398 0.635",
    fill: "none",
    style: {
      position: "relative",
      width: 341.398,
      height: 0.63456791639328,
      flexShrink: 0,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.317 L 0 0 L 341.398 0 L 341.398 -0.317 L 341.398 -0.635 L 0 -0.635 L 0 -0.317 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,1002.617,711.351)",
      transformOrigin: "0 0",
      width: 83.763,
      overflow: "hidden",
      borderRadius: "2.538px 2.538px 0px 0px",
      backgroundColor: "var(--mq-color-button-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-primary-inverse)",
      flexShrink: 0
    }
  }, "Feedback")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 332,
      height: 328,
      overflow: "hidden",
      boxShadow: "0px 6.156px 21.545px 0px rgba(0,0,0,0.1)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.251,
      height: 69.251,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.251,
      height: 69.251,
      backgroundColor: "var(--color)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.928,
      top: 16.928,
      width: 36.934,
      height: 36.934,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement(Notifications, {
    style: {
      transform: "scale(1.539, 1.539)",
      transformOrigin: "0 0",
      color: "rgb(255,255,255)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 69,
      width: 332,
      height: 259,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 15.389222145080566,
      padding: "30.778px 23.084px 30.778px 23.084px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.461149215698242,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 282.302,
      display: "flex",
      flexDirection: "row",
      gap: 8.263513565063477,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.527,
      height: 16.527,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17,
      height: 17,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 2,
      height: 10,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 6,
    viewBox: "0 0 1 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 4,
      width: 1,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.291 0 C 1.291 -0.428 0.944 -0.775 0.516 -0.775 C 0.089 -0.775 -0.258 -0.428 -0.258 0 L 0.516 0 L 1.291 0 Z M -0.258 6.198 C -0.258 6.625 0.089 6.972 0.516 6.972 C 0.944 6.972 1.291 6.625 1.291 6.198 L 0.516 6.198 L -0.258 6.198 Z M 0.516 0 L -0.258 0 L -0.258 6.198 L 0.516 6.198 L 1.291 6.198 L 1.291 0 L 0.516 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 2,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6.155688762664795,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 260.078,
      display: "flex",
      flexDirection: "row",
      gap: 6.155688762664795,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 164.665,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14.461149215698242,
      lineHeight: 1.399999976158142,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Outstanding information"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 89.257,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.31137752532959,
      textAlign: "right",
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "2:32PM")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 257,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.461149215698242,
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "We require more supporting information for David Blaine APP-291323"))), /*#__PURE__*/React.createElement("svg", {
    height: 1.539,
    viewBox: "0 -0.769 285.832 1.539",
    fill: "none",
    style: {
      position: "relative",
      height: 1.5389221906661987,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(217,217,217)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.769 L 0 0 L 285.832 0 L 285.832 -0.769 L 285.832 -1.539 L 0 -1.539 L 0 -0.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 282.302,
      display: "flex",
      flexDirection: "row",
      gap: 8.263513565063477,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.527,
      height: 16.527,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17,
      height: 17,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 3,
      width: 2,
      height: 10,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 6,
    viewBox: "0 0 1 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 4,
      width: 1,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.291 0 C 1.291 -0.428 0.944 -0.775 0.516 -0.775 C 0.089 -0.775 -0.258 -0.428 -0.258 0 L 0.516 0 L 1.291 0 Z M -0.258 6.198 C -0.258 6.625 0.089 6.972 0.516 6.972 C 0.944 6.972 1.291 6.625 1.291 6.198 L 0.516 6.198 L -0.258 6.198 Z M 0.516 0 L -0.258 0 L -0.258 6.198 L 0.516 6.198 L 1.291 6.198 L 1.291 0 L 0.516 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 2,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6.155688762664795,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 260.078,
      display: "flex",
      flexDirection: "row",
      gap: 6.155688762664795,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 164.665,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14.461149215698242,
      lineHeight: 1.399999976158142,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Outstanding information"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 89.257,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.31137752532959,
      textAlign: "right",
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "12:19PM")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 257,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.461149215698242,
      lineHeight: 1.399999976158142,
      color: "rgb(76,76,76)",
      flexShrink: 0
    }
  }, "We require more supporting information for Timothy Igloo APP-291324")))))), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 24,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Best (AI implementation)"))), /*#__PURE__*/React.createElement("div", {
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
      whiteSpace: "pre-wrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "1. ", "AI document checker to augment the upload experience"), /*#__PURE__*/React.createElement("span", {
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
  }, "As soon as a document is uploaded, it's automatically reviewed against the specific request, giving brokers instant feedback before it reaches an assessor. The check confirms what's correct, flags anything that doesn't match, and spells out exactly what needs attention, so brokers can fix issues on the spot. This reduces resubmissions, speeds up assessment, and gives brokers confidence their submission is right the first time. It also aligns with a company-wide KPI to meaningfully leverage AI, making this a deliberate step toward embedding AI where it adds real value to the broker experience. All automated checks assist the review process and don't replace manual assessment or credit decisioning."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 561,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mac-doc-review.png",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center top",
      zIndex: 30,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1124,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--mq-color-border-secondary)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 24px 32px 24px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: "28px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1
    }
  }, "Requested information"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 45,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(ButtonV11, {
    style: {
      position: "relative",
      width: 165,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Send for assessment",
    buttonType: "primary",
    state: "enabled",
    icon: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 176.5,
      top: -501,
      borderRadius: 3.8862051963806152,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.972px rgb(190,190,192)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12.500px 16px 12.500px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15.153844833374023,
      whiteSpace: "nowrap",
      lineHeight: "25.633px",
      color: "var(--color)",
      flexShrink: 0
    }
  }, "Chat with us")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 984,
      borderRadius: 8,
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--mq-color-background-sidebar-menu)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
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
      gap: 16,
      padding: "32px 16px 16px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Document request")))), /*#__PURE__*/React.createElement("svg", {
    width: 66,
    height: 1,
    viewBox: "0 -0.500 66 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,304,0)",
      transformOrigin: "0 0",
      width: 66,
      height: 1,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 66 0 L 66 -0.5 L 66 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 66,
    height: 1,
    viewBox: "0 -0.500 66 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,304,0)",
      transformOrigin: "0 0",
      width: 66,
      height: 1,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 66 0 L 66 -0.5 L 66 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 303,
      height: 1,
      backgroundColor: "var(--mq-color-border-secondary)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 304,
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 2,
      backgroundColor: "var(--mq-color-border-selected)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexGrow: 1
    }
  }, "Self employed (BAS)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 81,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconStatus16Success, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(AssetsCheck, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    state: "default",
    filled: "off"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 303,
      height: 1,
      backgroundColor: "var(--mq-color-border-secondary)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(ContextualNavItemInactive, {
    style: {
      position: "relative",
      width: 303,
      flexShrink: 0
    },
    text1: "Income – Tax Returns",
    property1: "complete"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 303,
      height: 1,
      backgroundColor: "var(--mq-color-border-secondary)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--mq-color-background-default)",
      display: "flex",
      flexDirection: "row",
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
      gap: 16,
      padding: "32px 16px 16px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--mq-color-text-primary)",
      flexShrink: 0
    }
  }, "Clarification request"))), /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 1,
    viewBox: "0 -0.500 64 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,304,0)",
      transformOrigin: "0 0",
      width: 64,
      height: 1,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 64 0 L 64 -0.5 L 64 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 1,
    viewBox: "0 -0.500 64 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,304,0)",
      transformOrigin: "0 0",
      width: 64,
      height: 1,
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 64 0 L 64 -0.5 L 64 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 303,
      height: 1,
      backgroundColor: "var(--mq-color-border-secondary)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(ContextualNavItemInactive, {
    style: {
      position: "relative",
      width: 303,
      height: 72,
      flexShrink: 0
    },
    text1: "Living Expenses – Under Declared Categories \t",
    property1: "complete"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 303,
      height: 1,
      backgroundColor: "var(--mq-color-border-secondary)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(ContextualNavItemInactive, {
    style: {
      position: "relative",
      width: 303,
      flexShrink: 0
    },
    text1: "Data Issues Calculator",
    property1: "complete"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 303,
      height: 1,
      backgroundColor: "var(--mq-color-border-secondary)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 676 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--mq-color-border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 676 0 L 676 -0.5 L 676 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "0px 24px 0px 24px",
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
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
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
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 467,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Self employed (BAS)"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 76,
      maxWidth: 104,
      maxHeight: null,
      borderRadius: 4,
      backgroundColor: "var(--mq-color-accent-green-subtle)",
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
      flexShrink: 0
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
      color: "rgb(255,255,255)",
      flexGrow: 1
    }
  }, "Completed")), /*#__PURE__*/React.createElement(IconStatus16Success2, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 467,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 68,
      flexShrink: 0
    },
    label: "John Doe",
    size: "m",
    kind: "subtle",
    state: "default"
  }), /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "relative",
      width: 135,
      flexShrink: 0
    },
    label: "Documentation reqest",
    size: "m",
    kind: "subtle",
    state: "default"
  }))))))), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Why are we asking for this?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "For self employed individuals we require 2 years of individual & trading entity for assessment and i", "s employed by a family business therefore additional income verification documents are required.")), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "What you need to provide"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "rgb(102,104,112)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Provide one of the following: most recent tax return and notice of assessment, OR, most recent ATO income statement (where status indicator is \"Tax Ready\"); OR, 6 months bank statements no older than 60 days evidencing regular salary credits. Ensure account holder details are clearly visible.")), /*#__PURE__*/React.createElement("div", {
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
      height: 200,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--mq-color-background-default)",
      outline: "1px dashed var(--mq-color-border-secondary)",
      outlineOffset: "-0.500px",
      display: "flex",
      flexDirection: "column",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
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
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconDefault32Upload, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 546,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 195.137,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Drag and drop or", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(15,118,222)"
    }
  }, "browse files")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 450,
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "Accepted file types include PDF, JPG, PNG. Files should not exceed 30MB. ")))), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--mq-color-background-default)",
      boxShadow: "inset 0 0 0 1px var(--mq-color-border-secondary)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-l) * 1px)",
      paddingTop: "calc(var(--mq-space-s) * 1px)",
      paddingRight: "calc(var(--mq-space-l) * 1px)",
      paddingBottom: "calc(var(--mq-space-s) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mq-space-l) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(IconDefault32DocPDF, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--mq-color-text-secondary)",
      flexGrow: 1
    }
  }, "sample-bas.pdf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--mq-space-l) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "var(--mq-color-text-secondary)",
      flexShrink: 0
    }
  }, "2 MB ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--mq-space-xs) * 1px)",
      paddingRight: "calc(var(--mq-space-m) * 1px)",
      paddingBottom: "calc(var(--mq-space-xs) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconStatus24Success, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 50,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--mq-space-s) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mq-space-s) * 1px)",
      paddingTop: "calc(var(--mq-space-s) * 1px)",
      paddingRight: "calc(var(--mq-space-s) * 1px)",
      paddingBottom: "calc(var(--mq-space-s) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 16,
    viewBox: "0 0 12 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 12,
      height: 16,
      color: "var(--mq-color-icon-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 5 C 1.75 4.586 1.414 4.25 1 4.25 C 0.586 4.25 0.25 4.586 0.25 5 L 1 5 L 1.75 5 Z M 11.75 5 C 11.75 4.586 11.414 4.25 11 4.25 C 10.586 4.25 10.25 4.586 10.25 5 L 11 5 L 11.75 5 Z M 0 2 L 0 1.25 C -0.414 1.25 -0.75 1.586 -0.75 2 L 0 2 Z M 12 2 L 12.75 2 C 12.75 1.586 12.414 1.25 12 1.25 L 12 2 Z M 12 5 L 12 5.75 C 12.414 5.75 12.75 5.414 12.75 5 L 12 5 Z M 0 5 L -0.75 5 C -0.75 5.414 -0.414 5.75 0 5.75 L 0 5 Z M 2.25 2 C 2.25 2.414 2.586 2.75 3 2.75 C 3.414 2.75 3.75 2.414 3.75 2 L 3 2 L 2.25 2 Z M 8.25 2 C 8.25 2.414 8.586 2.75 9 2.75 C 9.414 2.75 9.75 2.414 9.75 2 L 9 2 L 8.25 2 Z M 4.75 8 C 4.75 7.586 4.414 7.25 4 7.25 C 3.586 7.25 3.25 7.586 3.25 8 L 4 8 L 4.75 8 Z M 3.25 13 C 3.25 13.414 3.586 13.75 4 13.75 C 4.414 13.75 4.75 13.414 4.75 13 L 4 13 L 3.25 13 Z M 8.75 8 C 8.75 7.586 8.414 7.25 8 7.25 C 7.586 7.25 7.25 7.586 7.25 8 L 8 8 L 8.75 8 Z M 7.25 13 C 7.25 13.414 7.586 13.75 8 13.75 C 8.414 13.75 8.75 13.414 8.75 13 L 8 13 L 7.25 13 Z M 11 5 L 10.25 5 L 10.25 15 L 11 15 L 11.75 15 L 11.75 5 L 11 5 Z M 10 16 L 10 15.25 L 2 15.25 L 2 16 L 2 16.75 L 10 16.75 L 10 16 Z M 1 15 L 1.75 15 L 1.75 5 L 1 5 L 0.25 5 L 0.25 15 L 1 15 Z M 2 16 L 2 15.25 C 1.862 15.25 1.75 15.138 1.75 15 L 1 15 L 0.25 15 C 0.25 15.966 1.034 16.75 2 16.75 L 2 16 Z M 11 15 L 10.25 15 C 10.25 15.138 10.138 15.25 10 15.25 L 10 16 L 10 16.75 C 10.966 16.75 11.75 15.966 11.75 15 L 11 15 Z M 0 2 L 0 2.75 L 12 2.75 L 12 2 L 12 1.25 L 0 1.25 L 0 2 Z M 12 2 L 11.25 2 L 11.25 5 L 12 5 L 12.75 5 L 12.75 2 L 12 2 Z M 12 5 L 12 4.25 L 0 4.25 L 0 5 L 0 5.75 L 12 5.75 L 12 5 Z M 0 5 L 0.75 5 L 0.75 2 L 0 2 L -0.75 2 L -0.75 5 L 0 5 Z M 3 2 L 3.75 2 L 3.75 1 L 3 1 L 2.25 1 L 2.25 2 L 3 2 Z M 4 0 L 4 0.75 L 8 0.75 L 8 0 L 8 -0.75 L 4 -0.75 L 4 0 Z M 9 1 L 8.25 1 L 8.25 2 L 9 2 L 9.75 2 L 9.75 1 L 9 1 Z M 8 0 L 8 0.75 C 8.138 0.75 8.25 0.862 8.25 1 L 9 1 L 9.75 1 C 9.75 0.034 8.966 -0.75 8 -0.75 L 8 0 Z M 3 1 L 3.75 1 C 3.75 0.862 3.862 0.75 4 0.75 L 4 0 L 4 -0.75 C 3.034 -0.75 2.25 0.034 2.25 1 L 3 1 Z M 4 8 L 3.25 8 L 3.25 13 L 4 13 L 4.75 13 L 4.75 8 L 4 8 Z M 8 8 L 7.25 8 L 7.25 13 L 8 13 L 8.75 13 L 8.75 8 L 8 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 32.600px 0px rgb(215,235,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 20px 20px 20px",
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
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 9,
      height: 9,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.656,
    height: 12.656,
    viewBox: "0 0 12.656 12.656",
    fill: "none",
    style: {
      position: "absolute",
      left: -1.828,
      top: -1.828,
      width: 12.656,
      height: 12.656,
      borderRadius: 0.5765624642372131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.953 7.477 L 3.836 7.882 L 3.953 7.477 Z M 4.616 7.722 L 4.849 7.37 L 4.616 7.722 Z M 5.18 8.703 L 5.585 8.585 L 5.18 8.703 Z M 4.934 8.04 L 4.582 8.273 L 4.934 8.04 Z M 1.565 6.044 L 1.932 6.252 L 1.565 6.044 Z M 1.565 6.612 L 1.932 6.404 L 1.565 6.612 Z M 5.18 3.953 L 5.585 4.071 L 5.18 3.953 Z M 4.934 4.616 L 5.286 4.849 L 4.934 4.616 Z M 3.953 5.18 L 3.836 4.775 L 3.953 5.18 Z M 4.616 4.934 L 4.384 4.582 L 4.616 4.934 Z M 6.612 1.565 L 6.404 1.932 L 6.612 1.565 Z M 6.044 1.565 L 6.252 1.932 L 6.044 1.565 Z M 8.04 4.934 L 8.273 4.582 L 8.04 4.934 Z M 7.477 3.953 L 7.071 4.071 L 7.071 4.071 L 7.477 3.953 Z M 7.722 4.616 L 8.074 4.384 L 7.722 4.616 Z M 11.091 6.612 L 11.458 6.82 L 11.458 6.82 L 11.091 6.612 Z M 11.091 6.044 L 11.458 5.836 L 11.091 6.044 Z M 7.722 8.04 L 8.074 8.273 L 7.722 8.04 Z M 8.04 7.722 L 8.273 8.074 L 8.04 7.722 Z M 6.612 11.091 L 6.404 10.724 L 6.612 11.091 Z M 6.044 11.091 L 5.836 11.458 L 6.044 11.091 Z M 7.214 9.607 L 7.619 9.724 L 7.882 8.821 L 7.477 8.703 L 7.071 8.585 L 6.809 9.489 L 7.214 9.607 Z M 8.703 7.477 L 8.821 7.882 L 9.724 7.619 L 9.607 7.214 L 9.489 6.809 L 8.585 7.071 L 8.703 7.477 Z M 9.607 5.442 L 9.724 5.037 L 8.821 4.775 L 8.703 5.18 L 8.585 5.585 L 9.489 5.847 L 9.607 5.442 Z M 7.477 3.953 L 7.882 3.836 L 7.619 2.932 L 7.214 3.05 L 6.809 3.167 L 7.071 4.071 L 7.477 3.953 Z M 5.442 3.05 L 5.037 2.932 L 4.775 3.836 L 5.18 3.953 L 5.585 4.071 L 5.847 3.167 L 5.442 3.05 Z M 3.953 5.18 L 3.836 4.775 L 2.932 5.037 L 3.05 5.442 L 3.167 5.847 L 4.071 5.585 L 3.953 5.18 Z M 3.05 7.214 L 2.932 7.619 L 3.836 7.882 L 3.953 7.477 L 4.071 7.071 L 3.167 6.809 L 3.05 7.214 Z M 5.18 8.703 L 4.775 8.821 L 5.037 9.724 L 5.442 9.607 L 5.847 9.489 L 5.585 8.585 L 5.18 8.703 Z M 3.953 7.477 L 3.836 7.882 C 4.209 7.99 4.307 8.023 4.384 8.074 L 4.616 7.722 L 4.849 7.37 C 4.64 7.232 4.392 7.165 4.071 7.071 L 3.953 7.477 Z M 5.18 8.703 L 5.585 8.585 C 5.492 8.264 5.424 8.016 5.286 7.807 L 4.934 8.04 L 4.582 8.273 C 4.633 8.349 4.666 8.448 4.775 8.821 L 5.18 8.703 Z M 4.616 7.722 L 4.384 8.074 C 4.463 8.126 4.53 8.194 4.582 8.273 L 4.934 8.04 L 5.286 7.807 C 5.171 7.634 5.023 7.485 4.849 7.37 L 4.616 7.722 Z M 3.05 5.442 L 2.932 5.037 C 2.483 5.168 2.121 5.272 1.859 5.371 C 1.727 5.421 1.602 5.476 1.496 5.542 C 1.391 5.607 1.275 5.7 1.198 5.836 L 1.565 6.044 L 1.932 6.252 C 1.913 6.286 1.898 6.286 1.939 6.26 C 1.979 6.235 2.047 6.202 2.158 6.161 C 2.381 6.076 2.704 5.982 3.167 5.847 L 3.05 5.442 Z M 3.05 7.214 L 3.167 6.809 C 2.704 6.674 2.381 6.58 2.158 6.496 C 2.047 6.454 1.979 6.421 1.939 6.396 C 1.898 6.371 1.913 6.37 1.932 6.404 L 1.565 6.612 L 1.198 6.82 C 1.275 6.957 1.391 7.049 1.496 7.114 C 1.602 7.18 1.727 7.235 1.859 7.285 C 2.121 7.384 2.483 7.489 2.932 7.619 L 3.05 7.214 Z M 1.565 6.044 L 1.198 5.836 C 1.025 6.141 1.025 6.515 1.198 6.82 L 1.565 6.612 L 1.932 6.404 C 1.905 6.357 1.905 6.299 1.932 6.252 L 1.565 6.044 Z M 5.18 3.953 L 4.775 3.836 C 4.666 4.209 4.633 4.307 4.582 4.384 L 4.934 4.616 L 5.286 4.849 C 5.424 4.64 5.492 4.392 5.585 4.071 L 5.18 3.953 Z M 3.953 5.18 L 4.071 5.585 C 4.392 5.492 4.64 5.424 4.849 5.286 L 4.616 4.934 L 4.384 4.582 C 4.307 4.633 4.209 4.666 3.836 4.775 L 3.953 5.18 Z M 4.934 4.616 L 4.582 4.384 C 4.53 4.463 4.463 4.53 4.384 4.582 L 4.616 4.934 L 4.849 5.286 C 5.023 5.171 5.171 5.023 5.286 4.849 L 4.934 4.616 Z M 7.214 3.05 L 7.619 2.932 C 7.489 2.483 7.384 2.121 7.285 1.859 C 7.235 1.727 7.18 1.602 7.114 1.496 C 7.049 1.391 6.957 1.275 6.82 1.198 L 6.612 1.565 L 6.404 1.932 C 6.37 1.913 6.371 1.898 6.396 1.939 C 6.421 1.979 6.454 2.047 6.496 2.158 C 6.58 2.381 6.674 2.704 6.809 3.167 L 7.214 3.05 Z M 5.442 3.05 L 5.847 3.167 C 5.982 2.704 6.076 2.381 6.161 2.158 C 6.202 2.047 6.235 1.979 6.26 1.939 C 6.286 1.898 6.286 1.913 6.252 1.932 L 6.044 1.565 L 5.836 1.198 C 5.7 1.275 5.607 1.391 5.542 1.496 C 5.476 1.602 5.421 1.727 5.371 1.859 C 5.272 2.121 5.168 2.483 5.037 2.932 L 5.442 3.05 Z M 6.612 1.565 L 6.82 1.198 C 6.515 1.025 6.141 1.025 5.836 1.198 L 6.044 1.565 L 6.252 1.932 C 6.299 1.905 6.357 1.905 6.404 1.932 L 6.612 1.565 Z M 8.703 5.18 L 8.821 4.775 C 8.448 4.666 8.349 4.633 8.273 4.582 L 8.04 4.934 L 7.807 5.286 C 8.016 5.424 8.264 5.492 8.585 5.585 L 8.703 5.18 Z M 7.477 3.953 L 7.071 4.071 C 7.165 4.392 7.232 4.64 7.37 4.849 L 7.722 4.616 L 8.074 4.384 C 8.023 4.307 7.99 4.209 7.882 3.836 L 7.477 3.953 Z M 8.04 4.934 L 8.273 4.582 C 8.194 4.53 8.126 4.463 8.074 4.384 L 7.722 4.616 L 7.37 4.849 C 7.485 5.023 7.634 5.171 7.807 5.286 L 8.04 4.934 Z M 9.607 7.214 L 9.724 7.619 C 10.173 7.489 10.535 7.384 10.797 7.285 C 10.929 7.235 11.054 7.18 11.16 7.114 C 11.265 7.049 11.381 6.957 11.458 6.82 L 11.091 6.612 L 10.724 6.404 C 10.744 6.37 10.759 6.371 10.717 6.396 C 10.677 6.421 10.609 6.454 10.498 6.496 C 10.275 6.58 9.953 6.674 9.489 6.809 L 9.607 7.214 Z M 9.607 5.442 L 9.489 5.847 C 9.953 5.982 10.275 6.076 10.498 6.161 C 10.609 6.202 10.677 6.235 10.717 6.26 C 10.759 6.286 10.744 6.286 10.724 6.252 L 11.091 6.044 L 11.458 5.836 C 11.381 5.7 11.265 5.607 11.16 5.542 C 11.054 5.476 10.929 5.421 10.797 5.371 C 10.535 5.272 10.173 5.168 9.724 5.037 L 9.607 5.442 Z M 11.091 6.612 L 11.458 6.82 C 11.631 6.515 11.631 6.141 11.458 5.836 L 11.091 6.044 L 10.724 6.252 C 10.751 6.299 10.751 6.357 10.724 6.404 L 11.091 6.612 Z M 7.477 8.703 L 7.882 8.821 C 7.99 8.448 8.023 8.349 8.074 8.273 L 7.722 8.04 L 7.37 7.807 C 7.232 8.016 7.165 8.264 7.071 8.585 L 7.477 8.703 Z M 8.703 7.477 L 8.585 7.071 C 8.264 7.165 8.016 7.232 7.807 7.37 L 8.04 7.722 L 8.273 8.074 C 8.349 8.023 8.448 7.99 8.821 7.882 L 8.703 7.477 Z M 7.722 8.04 L 8.074 8.273 C 8.126 8.194 8.194 8.126 8.273 8.074 L 8.04 7.722 L 7.807 7.37 C 7.634 7.485 7.485 7.634 7.37 7.807 L 7.722 8.04 Z M 7.214 9.607 L 6.809 9.489 C 6.674 9.953 6.58 10.275 6.496 10.498 C 6.454 10.609 6.421 10.677 6.396 10.717 C 6.371 10.759 6.37 10.744 6.404 10.724 L 6.612 11.091 L 6.82 11.458 C 6.957 11.381 7.049 11.265 7.114 11.16 C 7.18 11.054 7.235 10.929 7.285 10.797 C 7.384 10.535 7.489 10.173 7.619 9.724 L 7.214 9.607 Z M 5.442 9.607 L 5.037 9.724 C 5.168 10.173 5.272 10.535 5.371 10.797 C 5.421 10.929 5.476 11.054 5.542 11.16 C 5.607 11.265 5.7 11.381 5.836 11.458 L 6.044 11.091 L 6.252 10.724 C 6.286 10.744 6.286 10.759 6.26 10.717 C 6.235 10.677 6.202 10.609 6.161 10.498 C 6.076 10.275 5.982 9.953 5.847 9.489 L 5.442 9.607 Z M 6.612 11.091 L 6.404 10.724 C 6.357 10.751 6.299 10.751 6.252 10.724 L 6.044 11.091 L 5.836 11.458 C 6.141 11.631 6.515 11.631 6.82 11.458 L 6.612 11.091 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.656,
    height: 3.656,
    viewBox: "0 0 3.656 3.656",
    fill: "none",
    style: {
      position: "absolute",
      left: -1.406,
      top: -1.406,
      width: 3.656,
      height: 3.656,
      borderRadius: 0.15468750894069672
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.207 2.503 L 1.975 3.208 C 1.929 3.35 1.728 3.35 1.681 3.208 L 1.45 2.503 C 1.404 2.363 1.294 2.253 1.153 2.207 L 0.448 1.975 C 0.306 1.929 0.306 1.728 0.448 1.681 L 1.153 1.45 C 1.294 1.404 1.404 1.294 1.45 1.153 L 1.681 0.448 C 1.728 0.306 1.929 0.306 1.975 0.448 L 2.207 1.153 C 2.253 1.294 2.363 1.404 2.503 1.45 L 3.208 1.681 C 3.35 1.728 3.35 1.929 3.208 1.975 L 2.503 2.207 C 2.363 2.253 2.253 2.363 2.207 2.503 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.656,
    height: 3.656,
    viewBox: "0 0 3.656 3.656",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.75,
      top: 6.75,
      width: 3.656,
      height: 3.656,
      borderRadius: 0.15468750894069672
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.207 2.503 L 1.975 3.208 C 1.929 3.35 1.728 3.35 1.681 3.208 L 1.45 2.503 C 1.404 2.363 1.294 2.253 1.153 2.207 L 0.448 1.975 C 0.306 1.929 0.306 1.728 0.448 1.681 L 1.153 1.45 C 1.294 1.404 1.404 1.294 1.45 1.153 L 1.681 0.448 C 1.728 0.306 1.929 0.306 1.975 0.448 L 2.207 1.153 C 2.253 1.294 2.363 1.404 2.503 1.45 L 3.208 1.681 C 3.35 1.728 3.35 1.929 3.208 1.975 L 2.503 2.207 C 2.363 2.253 2.253 2.363 2.207 2.503 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: "10.844px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Document review complete")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 7.590545177459717,
      lineHeight: "10.844px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,91)",
      fontSize: 10
    }
  }, "Thanks for uploading your document. This document was automatically reviewed against the request for self-employed income verification."), "\n", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 11
    }
  }, "Summary"), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,91)",
      fontSize: 10
    }
  }, "All required document types have been uploaded"), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,91)",
      fontSize: 10
    }
  }, "Documents are clear and readable"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,91)",
      fontSize: 10
    }
  }, "⚠ Some details don’t match the request"), "\n", "\n", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 11
    }
  }, "What needs attention"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,91)",
      fontSize: 10
    }
  }, "To complete this request, we need one update:"), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(45,45,45)",
      fontSize: 10
    }
  }, "Latest Notice of Assessment required"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(91,91,91)",
      fontSize: 10
    }
  }, " The Notice of Assessment provided is not for the most recent available financial year. Please upload the latest Notice of Assessment to allow us to complete an accurate assessment of income.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8,
      whiteSpace: "pre-wrap",
      lineHeight: "10.844px",
      color: "rgb(88,88,88)",
      flexShrink: 0
    }
  }, "Content verified by MacqGPT. ", "Automated checks are used to assist document review and do not replace manual assessment or credit decisioning."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 337,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Helvetica Neue\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "var(--mq-color-text-link)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Add additional commentary")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 303,
      top: -383,
      width: 1,
      height: 842,
      backgroundColor: "var(--mq-color-border-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 303,
      top: -502,
      width: 1,
      height: 66,
      backgroundColor: "var(--mq-color-border-secondary)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 459,
      overflow: "hidden",
      borderRadius: 9.804743766784668,
      backgroundColor: "rgba(255,255,255,0.6)",
      boxShadow: "0px 9.805px 79.909px 0px rgb(215,235,255)",
      display: "flex",
      flexDirection: "row",
      gap: 24.511857986450195,
      padding: "14.707px 16.800px 14.707px 16.800px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.061,
      height: 22.061,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.023,
    height: 31.023,
    viewBox: "0 0 31.023 31.023",
    fill: "none",
    style: {
      position: "absolute",
      left: -4.481,
      top: -4.481,
      width: 31.023,
      height: 31.023,
      borderRadius: 1.4132617712020874
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.316 18.928 L 10.745 19.791 L 11.316 18.928 Z M 12.095 19.707 L 11.232 20.277 L 12.095 19.707 Z M 3.836 14.815 L 2.937 14.305 L 3.836 14.815 Z M 7.475 17.683 L 7.187 18.676 L 7.475 17.683 Z M 3.836 16.208 L 4.736 15.698 L 3.836 16.208 Z M 12.095 11.316 L 12.957 11.886 L 12.095 11.316 Z M 11.316 12.095 L 11.886 12.957 L 11.316 12.095 Z M 17.683 7.475 L 18.676 7.187 L 17.683 7.475 Z M 16.208 3.836 L 15.698 4.736 L 16.208 3.836 Z M 14.815 3.836 L 14.305 2.937 L 14.815 3.836 Z M 21.333 12.697 L 21.044 13.69 L 21.333 12.697 Z M 19.707 12.095 L 20.277 11.232 L 19.707 12.095 Z M 18.326 9.69 L 17.333 9.979 L 18.326 9.69 Z M 18.928 11.316 L 19.791 10.745 L 18.928 11.316 Z M 27.186 16.208 L 28.086 16.717 L 27.186 16.208 Z M 23.548 13.34 L 23.836 12.347 L 23.548 13.34 Z M 27.186 14.815 L 28.086 14.305 L 27.186 14.815 Z M 18.326 21.333 L 17.333 21.044 L 18.326 21.333 Z M 18.928 19.707 L 19.791 20.277 L 18.928 19.707 Z M 21.333 18.326 L 21.044 17.333 L 21.333 18.326 Z M 19.707 18.928 L 19.137 18.066 L 19.707 18.928 Z M 16.208 27.186 L 16.717 28.086 L 16.208 27.186 Z M 14.815 27.186 L 14.305 28.086 L 14.815 27.186 Z M 17.683 23.548 L 18.676 23.836 L 19.319 21.621 L 18.326 21.333 L 17.333 21.044 L 16.69 23.259 L 17.683 23.548 Z M 21.333 18.326 L 21.621 19.319 L 23.836 18.676 L 23.548 17.683 L 23.259 16.69 L 21.044 17.333 L 21.333 18.326 Z M 23.548 13.34 L 23.836 12.347 L 21.621 11.703 L 21.333 12.697 L 21.044 13.69 L 23.259 14.333 L 23.548 13.34 Z M 18.326 9.69 L 19.319 9.402 L 18.676 7.187 L 17.683 7.475 L 16.69 7.764 L 17.333 9.979 L 18.326 9.69 Z M 13.34 7.475 L 12.347 7.187 L 11.703 9.402 L 12.697 9.69 L 13.69 9.979 L 14.333 7.764 L 13.34 7.475 Z M 9.69 12.697 L 9.402 11.703 L 7.187 12.347 L 7.475 13.34 L 7.764 14.333 L 9.979 13.69 L 9.69 12.697 Z M 7.475 17.683 L 7.187 18.676 L 9.402 19.319 L 9.69 18.326 L 9.979 17.333 L 7.764 16.69 L 7.475 17.683 Z M 12.697 21.333 L 11.703 21.621 L 12.347 23.836 L 13.34 23.548 L 14.333 23.259 L 13.69 21.044 L 12.697 21.333 Z M 9.69 18.326 L 9.402 19.319 C 10.316 19.585 10.558 19.667 10.745 19.791 L 11.316 18.928 L 11.886 18.066 C 11.375 17.727 10.766 17.562 9.979 17.333 L 9.69 18.326 Z M 12.697 21.333 L 13.69 21.044 C 13.461 20.257 13.296 19.648 12.957 19.137 L 12.095 19.707 L 11.232 20.277 C 11.356 20.465 11.438 20.707 11.703 21.621 L 12.697 21.333 Z M 11.316 18.928 L 10.745 19.791 C 10.939 19.919 11.104 20.084 11.232 20.277 L 12.095 19.707 L 12.957 19.137 C 12.676 18.711 12.312 18.347 11.886 18.066 L 11.316 18.928 Z M 7.475 13.34 L 7.187 12.347 C 6.087 12.667 5.2 12.923 4.557 13.166 C 4.234 13.289 3.928 13.424 3.667 13.585 C 3.409 13.744 3.126 13.971 2.937 14.305 L 3.836 14.815 L 4.736 15.325 C 4.688 15.409 4.652 15.407 4.753 15.345 C 4.852 15.284 5.018 15.203 5.289 15.101 C 5.836 14.894 6.627 14.663 7.764 14.333 L 7.475 13.34 Z M 7.475 17.683 L 7.764 16.69 C 6.627 16.36 5.836 16.129 5.289 15.922 C 5.018 15.82 4.852 15.739 4.753 15.678 C 4.652 15.615 4.688 15.613 4.736 15.698 L 3.836 16.208 L 2.937 16.717 C 3.126 17.052 3.409 17.279 3.667 17.438 C 3.928 17.599 4.234 17.734 4.557 17.856 C 5.2 18.1 6.087 18.356 7.187 18.676 L 7.475 17.683 Z M 3.836 14.815 L 2.937 14.305 C 2.513 15.054 2.513 15.969 2.937 16.717 L 3.836 16.208 L 4.736 15.698 C 4.671 15.582 4.671 15.44 4.736 15.325 L 3.836 14.815 Z M 12.697 9.69 L 11.703 9.402 C 11.438 10.316 11.356 10.558 11.232 10.745 L 12.095 11.316 L 12.957 11.886 C 13.296 11.375 13.461 10.766 13.69 9.979 L 12.697 9.69 Z M 9.69 12.697 L 9.979 13.69 C 10.766 13.461 11.375 13.296 11.886 12.957 L 11.316 12.095 L 10.745 11.232 C 10.558 11.356 10.316 11.438 9.402 11.703 L 9.69 12.697 Z M 12.095 11.316 L 11.232 10.745 C 11.104 10.939 10.939 11.104 10.745 11.232 L 11.316 12.095 L 11.886 12.957 C 12.312 12.676 12.676 12.312 12.957 11.886 L 12.095 11.316 Z M 17.683 7.475 L 18.676 7.187 C 18.356 6.087 18.1 5.2 17.856 4.557 C 17.734 4.234 17.599 3.928 17.438 3.667 C 17.279 3.409 17.052 3.126 16.717 2.937 L 16.208 3.836 L 15.698 4.736 C 15.613 4.688 15.615 4.652 15.678 4.753 C 15.739 4.852 15.82 5.018 15.922 5.289 C 16.129 5.836 16.36 6.627 16.69 7.764 L 17.683 7.475 Z M 13.34 7.475 L 14.333 7.764 C 14.663 6.627 14.894 5.836 15.101 5.289 C 15.203 5.018 15.284 4.852 15.345 4.753 C 15.407 4.652 15.409 4.688 15.325 4.736 L 14.815 3.836 L 14.305 2.937 C 13.971 3.126 13.744 3.409 13.585 3.667 C 13.424 3.928 13.289 4.234 13.166 4.557 C 12.923 5.2 12.667 6.087 12.347 7.187 L 13.34 7.475 Z M 16.208 3.836 L 16.717 2.937 C 15.969 2.513 15.054 2.513 14.305 2.937 L 14.815 3.836 L 15.325 4.736 C 15.44 4.671 15.582 4.671 15.698 4.736 L 16.208 3.836 Z M 21.333 12.697 L 21.621 11.703 C 20.707 11.438 20.465 11.356 20.277 11.232 L 19.707 12.095 L 19.137 12.957 C 19.648 13.296 20.257 13.461 21.044 13.69 L 21.333 12.697 Z M 18.326 9.69 L 17.333 9.979 C 17.562 10.766 17.727 11.375 18.066 11.886 L 18.928 11.316 L 19.791 10.745 C 19.667 10.558 19.585 10.316 19.319 9.402 L 18.326 9.69 Z M 19.707 12.095 L 20.277 11.232 C 20.084 11.104 19.919 10.939 19.791 10.745 L 18.928 11.316 L 18.066 11.886 C 18.347 12.312 18.711 12.676 19.137 12.957 L 19.707 12.095 Z M 23.548 17.683 L 23.836 18.676 C 24.936 18.356 25.823 18.1 26.465 17.856 C 26.789 17.734 27.095 17.599 27.356 17.438 C 27.614 17.279 27.897 17.052 28.086 16.717 L 27.186 16.208 L 26.286 15.698 C 26.334 15.613 26.371 15.615 26.269 15.678 C 26.171 15.739 26.005 15.82 25.734 15.922 C 25.187 16.129 24.396 16.36 23.259 16.69 L 23.548 17.683 Z M 23.548 13.34 L 23.259 14.333 C 24.396 14.663 25.187 14.894 25.734 15.101 C 26.005 15.203 26.171 15.284 26.269 15.345 C 26.371 15.407 26.334 15.409 26.286 15.325 L 27.186 14.815 L 28.086 14.305 C 27.897 13.971 27.614 13.744 27.356 13.585 C 27.095 13.424 26.789 13.289 26.465 13.166 C 25.823 12.923 24.936 12.667 23.836 12.347 L 23.548 13.34 Z M 27.186 16.208 L 28.086 16.717 C 28.51 15.969 28.51 15.054 28.086 14.305 L 27.186 14.815 L 26.286 15.325 C 26.352 15.44 26.352 15.582 26.286 15.698 L 27.186 16.208 Z M 18.326 21.333 L 19.319 21.621 C 19.585 20.707 19.667 20.465 19.791 20.277 L 18.928 19.707 L 18.066 19.137 C 17.727 19.648 17.562 20.257 17.333 21.044 L 18.326 21.333 Z M 21.333 18.326 L 21.044 17.333 C 20.257 17.562 19.648 17.727 19.137 18.066 L 19.707 18.928 L 20.277 19.791 C 20.465 19.667 20.707 19.585 21.621 19.319 L 21.333 18.326 Z M 18.928 19.707 L 19.791 20.277 C 19.919 20.084 20.084 19.919 20.277 19.791 L 19.707 18.928 L 19.137 18.066 C 18.711 18.347 18.347 18.711 18.066 19.137 L 18.928 19.707 Z M 17.683 23.548 L 16.69 23.259 C 16.36 24.396 16.129 25.187 15.922 25.734 C 15.82 26.005 15.739 26.171 15.678 26.269 C 15.615 26.371 15.613 26.334 15.698 26.286 L 16.208 27.186 L 16.717 28.086 C 17.052 27.897 17.279 27.614 17.438 27.356 C 17.599 27.095 17.734 26.789 17.856 26.465 C 18.1 25.823 18.356 24.936 18.676 23.836 L 17.683 23.548 Z M 13.34 23.548 L 12.347 23.836 C 12.667 24.936 12.923 25.823 13.166 26.465 C 13.289 26.789 13.424 27.095 13.585 27.356 C 13.744 27.614 13.971 27.897 14.305 28.086 L 14.815 27.186 L 15.325 26.286 C 15.409 26.334 15.407 26.371 15.345 26.269 C 15.284 26.171 15.203 26.005 15.101 25.734 C 14.894 25.187 14.663 24.396 14.333 23.259 L 13.34 23.548 Z M 16.208 27.186 L 15.698 26.286 C 15.582 26.352 15.44 26.352 15.325 26.286 L 14.815 27.186 L 14.305 28.086 C 15.054 28.51 15.969 28.51 16.717 28.086 L 16.208 27.186 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.962,
    height: 8.962,
    viewBox: "0 0 8.962 8.962",
    fill: "none",
    style: {
      position: "absolute",
      left: -3.449,
      top: -3.446,
      width: 8.962,
      height: 8.962,
      borderRadius: 0.3791678249835968
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.409 6.135 L 4.841 7.864 C 4.727 8.212 4.235 8.212 4.121 7.864 L 3.553 6.135 C 3.441 5.791 3.171 5.522 2.827 5.409 L 1.098 4.841 C 0.75 4.727 0.75 4.235 1.098 4.121 L 2.827 3.553 C 3.171 3.441 3.441 3.171 3.553 2.827 L 4.121 1.098 C 4.235 0.75 4.727 0.75 4.841 1.098 L 5.409 2.827 C 5.522 3.171 5.791 3.441 6.135 3.553 L 7.864 4.121 C 8.212 4.235 8.212 4.727 7.864 4.841 L 6.135 5.409 C 5.791 5.522 5.522 5.791 5.409 6.135 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.962,
    height: 8.962,
    viewBox: "0 0 8.962 8.962",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.544,
      top: 16.545,
      width: 8.962,
      height: 8.962,
      borderRadius: 0.3791678249835968
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.409 6.135 L 4.841 7.864 C 4.727 8.212 4.235 8.212 4.121 7.864 L 3.553 6.135 C 3.441 5.791 3.171 5.522 2.827 5.409 L 1.098 4.841 C 0.75 4.727 0.75 4.235 1.098 4.121 L 2.827 3.553 C 3.171 3.441 3.441 3.171 3.553 2.827 L 4.121 1.098 C 4.235 0.75 4.727 0.75 4.841 1.098 L 5.409 2.827 C 5.522 3.171 5.791 3.441 6.135 3.553 L 7.864 4.121 C 8.212 4.235 8.212 4.727 7.864 4.841 L 6.135 5.409 C 5.791 5.522 5.522 5.791 5.409 6.135 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18.605836868286133,
      whiteSpace: "nowrap",
      lineHeight: "26.580px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "We\u2019re checking the uploaded documents against the request")))), /*#__PURE__*/React.createElement("div", {
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
      top: 13023,
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 174,
      top: 1384,
      width: 1092.89,
      display: "flex",
      flexDirection: "column",
      gap: 120,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
      fontSize: 48,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Tale of the tape")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 340,
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
  }, "What is the process?"), /*#__PURE__*/React.createElement("span", {
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
  }, "This process can become cyclical, when broker gather initial documents to build a scenario, but often requiring additional information to further understand and prove that the borrower is able to borrow and sustain the amount they are asking for.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
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
  }, "What are the problems in the process?"), /*#__PURE__*/React.createElement("span", {
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
  }, "This stage of the application lifecycle is referred to as the \"Outstanding Information\" stage. With emailing being the current primary channel, this has proven to create significant delays in the application process with back and forth exchanging of information between the client and ultimately increases \u2018touches\u2019 per application"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
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
  }, "How is it handled today?"), /*#__PURE__*/React.createElement("span", {
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
  }, "An \"outstanding information\" action is flagged on the client\u2019s application. This indicates that additional documentation must be provided to Macquarie\u2019s Credit Assessment Team in order for the application to progress.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 544.391,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 230.776,
      top: 289.37,
      width: 206.961,
      height: 130,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      lineHeight: "16.153px",
      color: "rgb(0,0,0)"
    }
  }, "Brokers are required to log into the Broker Portal to review the outstanding information task that is assigned to them. The portal presents messaging to the Broker on a list of documents hat are required of them - that is manually-typed by a credit assessor or the Broker Support Office. "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 606.14,
      top: 179,
      width: 266.498,
      height: 81,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      lineHeight: "16.153px",
      color: "rgb(0,0,0)"
    }
  }, "As a call-to-action in the portal, the user is able to provide documents to a group inbox that is viewed by the credit-assessor team. Which each document will be manually assessed and classified according to the requested list."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 606.14,
      top: 414.391,
      width: 208.662,
      height: 130,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      lineHeight: "16.153px",
      color: "rgb(0,0,0)"
    }
  }, "Brokers can log onto NextGen, a provider that houses the document request capability for Macquarie. NextGen allows the Broker to manually upload their documents as a bulk upload feature which then notifies the credit team to review and classify the documents in NextGen."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 836.916,
      top: 419.674,
      width: 116.805,
      height: 97,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      lineHeight: "16.153px",
      color: "rgb(0,0,0)"
    }
  }, "The documents are packaged up and sent as an automated email that goes to the Macquarie General Broker Inbox"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1.134,
      top: 289.37,
      width: 185.981,
      height: 65,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      lineHeight: "16.153px",
      color: "rgb(0,0,0)"
    }
  }, "Broker\u2019s are contacted through an automated email, that details that a task requires their attention in the Broker Portal."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 245.348,
      width: 167.27,
      height: 40,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Notified of outstanding information"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 230.776,
      top: 245.348,
      width: 192.218,
      height: 40,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Review outstanding information request"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 606.14,
      top: 155.543,
      width: 192.218,
      height: 20,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Email documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 835.782,
      top: 380.348,
      width: 192.218,
      height: 20,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Email documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 606.14,
      top: 377.413,
      width: 213.765,
      height: 20,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "NextGen | ApplyOnline"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 403.148,
      height: 31.109,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 23.076004028320312,
      whiteSpace: "nowrap",
      lineHeight: "30.576px",
      color: "rgb(0,0,0)"
    }
  }, "Requesting additional documents"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 28.761,
      width: 403.148,
      height: 31.109,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13.845602989196777,
      whiteSpace: "nowrap",
      lineHeight: "30.576px",
      color: "rgb(0,0,0)"
    }
  }, "Current state"), /*#__PURE__*/React.createElement("svg", {
    width: 480.263,
    height: 2.308,
    viewBox: "0 -1.154 480.263 2.308",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.134,
      top: 221.87,
      width: 480.263,
      height: 2.307600498199463,
      color: "rgb(29,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1.154 L 0 0 L 480.263 0 L 480.263 -1.154 L 480.263 -2.308 L 0 -2.308 L 0 -1.154 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 211.304,
      width: 14.742,
      height: 15.261,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.742,
      height: 15.261,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.154px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.402,
      top: 3.522,
      width: 7.938,
      height: 8.217,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 226.239,
      top: 211.304,
      width: 14.742,
      height: 15.261,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.742,
      height: 15.261,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.154px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.402,
      top: 3.522,
      width: 7.938,
      height: 8.217,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.135,
    height: 76.304,
    viewBox: "0 0 111.135 76.304",
    fill: "none",
    style: {
      position: "absolute",
      left: 481.397,
      top: 144.391,
      width: 111.135,
      height: 76.304,
      color: "rgb(28,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -1.154 L -1.154 -1.154 L -1.154 0 L 0 0 Z M 0 76.304 L 1.154 76.304 L 1.154 0 L 0 0 L -1.154 0 L -1.154 76.304 L 0 76.304 Z M 0 0 L 0 1.154 L 111.135 1.154 L 111.135 0 L 111.135 -1.154 L 0 -1.154 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.135,
    height: 136.174,
    viewBox: "0 0 111.135 136.174",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,481.397,357.457)",
      transformOrigin: "0 0",
      width: 111.135,
      height: 136.174,
      color: "rgb(28,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -1.154 L -1.154 -1.154 L -1.154 0 L 0 0 Z M 0 136.174 L 1.154 136.174 L 1.154 0 L 0 0 L -1.154 0 L -1.154 136.174 L 0 136.174 Z M 0 0 L 0 1.154 L 111.135 1.154 L 111.135 0 L 111.135 -1.154 L 0 -1.154 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 142.321,
    height: 0.587,
    viewBox: "0 0 142.321 0.587",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,664.543,357.457)",
      transformOrigin: "0 0",
      width: 142.321,
      height: 0.587,
      color: "rgb(28,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -1.154 L -1.154 -1.154 L -1.154 0 L 0 0 Z M 0 0.587 L 1.154 0.587 L 1.154 0 L 0 0 L -1.154 0 L -1.154 0.587 L 0 0.587 Z M 0 0 L 0 1.154 L 142.321 1.154 L 142.321 0 L 142.321 -1.154 L 0 -1.154 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 582.325,
      top: 136.761,
      width: 14.742,
      height: 15.261,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.742,
      height: 15.261,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.154px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.402,
      top: 3.522,
      width: 7.938,
      height: 8.217,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 799.493,
      top: 350.413,
      width: 14.742,
      height: 15.261,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.742,
      height: 15.261,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.154px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.402,
      top: 3.522,
      width: 7.938,
      height: 8.217,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 578.923,
      top: 349.239,
      width: 14.742,
      height: 15.261,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.742,
      height: 15.261,
      borderRadius: "50%",
      backgroundColor: "rgb(240,236,232)",
      boxShadow: "inset 0 0 0 1.154px rgb(29,79,61)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.402,
      top: 3.522,
      width: 7.938,
      height: 8.217,
      borderRadius: "50%",
      backgroundColor: "rgb(29,79,61)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 222.837,
      top: 100.37,
      width: 124.016,
      height: 102.503,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 95.259,
      height: 98.609,
      borderRadius: "50%",
      backgroundColor: "rgb(225,255,234)",
      boxShadow: "inset 0 0 0 0.577px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.268,
      top: 4.696,
      width: 121.748,
      height: 97.808,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 17.022,
      width: 94.285,
      height: 80.786,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 48.524,
      top: 1.972,
      width: 8.203,
      height: 8.541,
      opacity: 0.44,
      borderRadius: 0.8047987818717957,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 48.524,
      top: 32.101,
      width: 8.203,
      height: 8.541,
      opacity: 0.44,
      borderRadius: 0.8047987818717957,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1.348,
    height: 0.845,
    viewBox: "0 0 1.348 0.845",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.373,
      top: 69.481,
      width: 1.348,
      height: 0.845,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.107 0.674 C -0.202 0.734 -0.23 0.858 -0.171 0.953 C -0.112 1.047 0.013 1.076 0.107 1.016 L 0 0.845 L -0.107 0.674 Z M 1.455 0.171 C 1.55 0.112 1.578 -0.013 1.519 -0.107 C 1.46 -0.202 1.335 -0.23 1.241 -0.171 L 1.348 0 L 1.455 0.171 Z M 0 0.845 L 0.107 1.016 L 1.455 0.171 L 1.348 0 L 1.241 -0.171 L -0.107 0.674 L 0 0.845 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.798,
    height: 38.915,
    viewBox: "0 0 19.798 38.915",
    fill: "none",
    style: {
      position: "absolute",
      left: 48.533,
      top: 38.308,
      width: 19.798,
      height: 38.915,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.036 L 9.37 0 C 15.846 4.435 19.798 38.915 19.798 38.915 L 4.746 30.721 L 0 5.036 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.798,
    height: 38.915,
    viewBox: "0 0 19.798 38.915",
    fill: "none",
    style: {
      position: "absolute",
      left: 48.533,
      top: 38.308,
      width: 19.798,
      height: 38.915,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.036 L -0.096 4.858 C -0.173 4.899 -0.214 4.986 -0.199 5.072 L 0 5.036 Z M 9.37 0 L 9.484 -0.167 C 9.422 -0.209 9.341 -0.214 9.274 -0.178 L 9.37 0 Z M 19.798 38.915 L 19.702 39.092 C 19.768 39.128 19.849 39.124 19.911 39.082 C 19.974 39.04 20.008 38.966 19.999 38.892 L 19.798 38.915 Z M 4.746 30.721 L 4.547 30.757 C 4.558 30.817 4.596 30.869 4.649 30.898 L 4.746 30.721 Z M 0 5.036 L 0.096 5.213 L 9.466 0.178 L 9.37 0 L 9.274 -0.178 L -0.096 4.858 L 0 5.036 Z M 9.37 0 L 9.256 0.167 C 10.025 0.693 10.776 1.682 11.499 3.04 C 12.22 4.394 12.901 6.093 13.54 8.015 C 14.817 11.86 15.917 16.576 16.815 21.159 C 17.713 25.742 18.408 30.187 18.88 33.486 C 19.115 35.136 19.295 36.499 19.416 37.45 C 19.476 37.925 19.521 38.297 19.552 38.55 C 19.567 38.677 19.579 38.774 19.586 38.839 C 19.59 38.872 19.593 38.896 19.595 38.913 C 19.596 38.921 19.597 38.927 19.597 38.931 C 19.597 38.934 19.598 38.935 19.598 38.936 C 19.598 38.937 19.598 38.937 19.598 38.937 C 19.598 38.937 19.598 38.938 19.798 38.915 C 19.999 38.892 19.999 38.891 19.999 38.891 C 19.999 38.891 19.999 38.89 19.999 38.89 C 19.999 38.889 19.999 38.887 19.998 38.885 C 19.998 38.881 19.997 38.875 19.996 38.866 C 19.994 38.85 19.991 38.825 19.987 38.792 C 19.98 38.726 19.968 38.629 19.953 38.502 C 19.922 38.248 19.877 37.875 19.816 37.399 C 19.695 36.447 19.516 35.081 19.28 33.429 C 18.808 30.126 18.111 25.673 17.211 21.082 C 16.312 16.491 15.208 11.756 13.923 7.888 C 13.281 5.954 12.591 4.232 11.856 2.851 C 11.123 1.474 10.334 0.416 9.484 -0.167 L 9.37 0 Z M 19.798 38.915 L 19.895 38.737 L 4.842 30.543 L 4.746 30.721 L 4.649 30.898 L 19.702 39.092 L 19.798 38.915 Z M 4.746 30.721 L 4.944 30.684 L 0.199 4.999 L 0 5.036 L -0.199 5.072 L 4.547 30.757 L 4.746 30.721 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 48.625,
    height: 49.439,
    viewBox: "0 0 48.625 49.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.644,
      top: 28.346,
      width: 48.625,
      height: 49.439,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.319 23.653 C 47.971 30.323 47.263 39.165 45.844 49.439 L 13.138 47.253 L 0 21.259 L 0.051 9.16 C 0.051 9.16 22.631 -12.174 48.625 10.274",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.644,
      top: 28.346,
      width: 48.625,
      height: 49.439,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48.625030517578125,
      height: 49.438751220703125,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35.132,
    height: 33.742,
    viewBox: "0 0 35.132 33.742",
    fill: "none",
    style: {
      position: "absolute",
      left: -5.498,
      top: 21.11,
      width: 35.132,
      height: 33.742,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.625 1.034 C 22.35 -5.066 14.732 17.941 24.365 15.028 C 33.998 12.116 35.132 19.658 35.132 19.658 L 22.593 33.742 L 0 24.116 L 7.563 7.585",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 48.625,
    height: 49.439,
    viewBox: "0 0 48.625 49.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.644,
      top: 28.346,
      width: 48.625,
      height: 49.439,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.521 23.663 C 48.527 23.552 48.441 23.457 48.33 23.451 C 48.218 23.445 48.123 23.531 48.118 23.642 L 48.319 23.653 L 48.521 23.663 Z M 45.844 49.439 L 45.83 49.64 C 45.936 49.647 46.029 49.571 46.044 49.466 L 45.844 49.439 Z M 13.138 47.253 L 12.958 47.344 C 12.99 47.408 13.054 47.45 13.125 47.454 L 13.138 47.253 Z M 0 21.259 L -0.202 21.259 C -0.202 21.29 -0.195 21.322 -0.18 21.35 L 0 21.259 Z M 0.051 9.16 L -0.088 9.013 C -0.128 9.051 -0.151 9.104 -0.151 9.159 L 0.051 9.16 Z M 48.493 10.427 C 48.577 10.5 48.705 10.491 48.778 10.406 C 48.851 10.322 48.841 10.194 48.757 10.121 L 48.625 10.274 L 48.493 10.427 Z M 48.319 23.653 L 48.118 23.642 C 47.77 30.307 47.062 39.144 45.644 49.411 L 45.844 49.439 L 46.044 49.466 C 47.464 39.187 48.172 30.338 48.521 23.663 L 48.319 23.653 Z M 45.844 49.439 L 45.857 49.237 L 13.152 47.051 L 13.138 47.253 L 13.125 47.454 L 45.83 49.64 L 45.844 49.439 Z M 13.138 47.253 L 13.319 47.162 L 0.18 21.168 L 0 21.259 L -0.18 21.35 L 12.958 47.344 L 13.138 47.253 Z M 0 21.259 L 0.202 21.26 L 0.253 9.161 L 0.051 9.16 L -0.151 9.159 L -0.202 21.259 L 0 21.259 Z M 0.051 9.16 C 0.19 9.307 0.19 9.307 0.19 9.306 C 0.19 9.306 0.19 9.306 0.19 9.306 C 0.191 9.305 0.192 9.304 0.193 9.303 C 0.196 9.301 0.2 9.297 0.205 9.292 C 0.215 9.283 0.231 9.268 0.253 9.248 C 0.295 9.21 0.359 9.152 0.444 9.077 C 0.614 8.928 0.867 8.712 1.199 8.444 C 1.862 7.908 2.841 7.167 4.096 6.346 C 6.606 4.705 10.223 2.75 14.645 1.493 C 23.48 -1.017 35.552 -0.749 48.493 10.427 L 48.625 10.274 L 48.757 10.121 C 35.704 -1.151 23.488 -1.439 14.535 1.105 C 10.063 2.375 6.41 4.351 3.875 6.008 C 2.607 6.837 1.618 7.587 0.945 8.13 C 0.609 8.401 0.351 8.621 0.178 8.774 C 0.091 8.85 0.025 8.91 -0.02 8.95 C -0.042 8.97 -0.059 8.986 -0.07 8.996 C -0.076 9.002 -0.08 9.006 -0.083 9.009 C -0.084 9.01 -0.086 9.011 -0.086 9.012 C -0.087 9.012 -0.087 9.012 -0.087 9.013 C -0.088 9.013 -0.088 9.013 0.051 9.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.759,
    height: 17.416,
    viewBox: "0 0 10.759 17.416",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.272,
      top: 17.831,
      width: 10.759,
      height: 17.416,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.854 L 2.725 0 L 10.505 2.63 L 10.505 11.771 L 10.759 15.275 L 9.741 17.416 L 7.604 17.078 L 3.131 16.669",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.272,
      top: 17.831,
      width: 10.759,
      height: 17.416,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.758731842041016,
      height: 17.415821075439453,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.089,
    height: 11.435,
    viewBox: "0 0 5.089 11.435",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.823,
      top: 2.229,
      width: 5.089,
      height: 11.435,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.089 11.435 C -4.727 9.432 3.814 7.085 0.317 5.371 C -0.645 4.899 0.887 0 0.887 0 L 3.554 1.816",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 10.759,
    height: 17.416,
    viewBox: "0 0 10.759 17.416",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.272,
      top: 17.831,
      width: 10.759,
      height: 17.416,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.196 10.804 C -0.223 10.913 -0.157 11.022 -0.049 11.049 C 0.059 11.077 0.169 11.011 0.196 10.903 L 0 10.854 L -0.196 10.804 Z M 2.725 0 L 2.79 -0.191 C 2.736 -0.209 2.678 -0.204 2.628 -0.177 C 2.579 -0.15 2.543 -0.104 2.529 -0.049 L 2.725 0 Z M 10.505 2.63 L 10.707 2.63 C 10.707 2.543 10.652 2.466 10.57 2.438 L 10.505 2.63 Z M 10.505 11.771 L 10.303 11.771 C 10.303 11.776 10.303 11.781 10.304 11.786 L 10.505 11.771 Z M 10.759 15.275 L 10.941 15.362 C 10.956 15.33 10.963 15.295 10.96 15.261 L 10.759 15.275 Z M 9.741 17.416 L 9.71 17.615 C 9.798 17.629 9.885 17.583 9.924 17.503 L 9.741 17.416 Z M 7.604 17.078 L 7.636 16.879 L 7.623 16.877 L 7.604 17.078 Z M 3.149 16.468 C 3.038 16.458 2.94 16.539 2.93 16.651 C 2.92 16.762 3.002 16.86 3.113 16.87 L 3.131 16.669 L 3.149 16.468 Z M 0 10.854 L 0.196 10.903 L 2.921 0.049 L 2.725 0 L 2.529 -0.049 L -0.196 10.804 L 0 10.854 Z M 2.725 0 L 2.66 0.191 L 10.441 2.821 L 10.505 2.63 L 10.57 2.438 L 2.79 -0.191 L 2.725 0 Z M 10.505 2.63 L 10.303 2.63 L 10.303 11.771 L 10.505 11.771 L 10.707 11.771 L 10.707 2.63 L 10.505 2.63 Z M 10.505 11.771 L 10.304 11.786 L 10.557 15.29 L 10.759 15.275 L 10.96 15.261 L 10.707 11.757 L 10.505 11.771 Z M 10.759 15.275 L 10.576 15.189 L 9.559 17.329 L 9.741 17.416 L 9.924 17.503 L 10.941 15.362 L 10.759 15.275 Z M 9.741 17.416 L 9.773 17.216 L 7.636 16.879 L 7.604 17.078 L 7.573 17.278 L 9.71 17.615 L 9.741 17.416 Z M 7.604 17.078 L 7.623 16.877 L 3.149 16.468 L 3.131 16.669 L 3.113 16.87 L 7.586 17.28 L 7.604 17.078 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.989,
    height: 21.536,
    viewBox: "0 0 12.989 21.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.837,
      top: 4.477,
      width: 12.989,
      height: 21.536,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.024 L 2.736 6.275 L 10.426 0 C 11.579 7.249 18.503 27.606 3.241 19.77",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M -0.187 12.948 C -0.229 13.052 -0.179 13.169 -0.076 13.211 C 0.027 13.253 0.145 13.203 0.187 13.1 L 0 13.024 L -0.187 12.948 Z M 2.736 6.275 L 2.608 6.119 C 2.582 6.14 2.562 6.168 2.549 6.199 L 2.736 6.275 Z M 10.426 0 L 10.626 -0.032 C 10.614 -0.103 10.566 -0.163 10.498 -0.189 C 10.431 -0.214 10.355 -0.202 10.299 -0.156 L 10.426 0 Z M 3.333 19.59 C 3.234 19.539 3.112 19.579 3.061 19.678 C 3.01 19.777 3.049 19.899 3.148 19.95 L 3.241 19.77 L 3.333 19.59 Z M 0 13.024 L 0.187 13.1 L 2.923 6.351 L 2.736 6.275 L 2.549 6.199 L -0.187 12.948 L 0 13.024 Z M 2.736 6.275 L 2.864 6.431 L 10.554 0.156 L 10.426 0 L 10.299 -0.156 L 2.608 6.119 L 2.736 6.275 Z M 10.426 0 L 10.227 0.032 C 10.516 1.849 11.168 4.498 11.738 7.29 C 12.311 10.094 12.803 13.055 12.787 15.541 C 12.771 18.044 12.239 19.976 10.858 20.835 C 9.479 21.692 7.143 21.547 3.333 19.59 L 3.241 19.77 L 3.148 19.95 C 6.97 21.911 9.492 22.16 11.071 21.178 C 12.648 20.197 13.175 18.055 13.191 15.543 C 13.207 13.013 12.707 10.016 12.134 7.209 C 11.558 4.389 10.913 1.776 10.626 -0.032 L 10.426 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.888,
    height: 18.107,
    viewBox: "0 0 25.888 18.107",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.902,
      top: 0,
      width: 25.888,
      height: 18.107,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.894 17.951 C 6.784 19.144 10.772 13.17 9.069 11.243 C 9.069 11.243 13.938 13.279 17.368 10.323 C 29.002 11.885 28.233 -3 18.028 1.26 C 12.716 -1.784 6.803 1.221 7.061 4.627 C 3.064 0.949 -4.715 14.397 3.894 17.951 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.894 17.951 L 3.817 18.138 L 3.817 18.138 L 3.894 17.951 Z M 9.069 11.243 L 9.147 11.057 C 9.06 11.02 8.96 11.049 8.905 11.125 C 8.85 11.202 8.856 11.306 8.918 11.377 L 9.069 11.243 Z M 17.368 10.323 L 17.395 10.123 C 17.337 10.115 17.28 10.132 17.236 10.17 L 17.368 10.323 Z M 18.028 1.26 L 17.928 1.435 C 17.982 1.466 18.048 1.47 18.106 1.446 L 18.028 1.26 Z M 7.061 4.627 L 6.924 4.776 C 6.985 4.832 7.074 4.845 7.149 4.809 C 7.224 4.773 7.269 4.695 7.262 4.612 L 7.061 4.627 Z M 3.894 17.951 L 3.817 18.138 C 4.616 18.468 5.474 18.294 6.26 17.853 C 7.046 17.413 7.783 16.695 8.368 15.885 C 8.953 15.076 9.396 14.161 9.583 13.316 C 9.768 12.477 9.709 11.662 9.221 11.109 L 9.069 11.243 L 8.918 11.377 C 9.281 11.787 9.362 12.442 9.188 13.228 C 9.016 14.008 8.601 14.873 8.04 15.649 C 7.48 16.424 6.784 17.097 6.063 17.501 C 5.341 17.905 4.617 18.031 3.971 17.764 L 3.894 17.951 Z M 9.069 11.243 C 8.991 11.429 8.991 11.429 8.992 11.429 C 8.992 11.429 8.992 11.429 8.992 11.43 C 8.992 11.43 8.992 11.43 8.993 11.43 C 8.994 11.43 8.995 11.431 8.996 11.431 C 8.999 11.432 9.003 11.434 9.008 11.436 C 9.018 11.44 9.033 11.446 9.052 11.453 C 9.09 11.468 9.145 11.489 9.217 11.515 C 9.361 11.566 9.569 11.636 9.828 11.709 C 10.348 11.857 11.076 12.022 11.915 12.093 C 13.59 12.235 15.728 12.003 17.499 10.476 L 17.368 10.323 L 17.236 10.17 C 15.578 11.599 13.566 11.827 11.949 11.69 C 11.142 11.622 10.44 11.463 9.939 11.321 C 9.688 11.25 9.489 11.183 9.353 11.135 C 9.285 11.11 9.233 11.091 9.198 11.077 C 9.181 11.07 9.167 11.065 9.159 11.062 C 9.155 11.06 9.152 11.059 9.15 11.058 C 9.149 11.057 9.148 11.057 9.147 11.057 C 9.147 11.057 9.147 11.057 9.147 11.057 C 9.147 11.057 9.147 11.057 9.147 11.057 C 9.147 11.057 9.147 11.057 9.069 11.243 Z M 17.368 10.323 L 17.341 10.523 C 20.292 10.919 22.483 10.275 23.94 9.125 C 25.394 7.977 26.097 6.337 26.09 4.779 C 26.083 3.222 25.364 1.737 23.968 0.924 C 22.571 0.11 20.539 -0.007 17.95 1.073 L 18.028 1.26 L 18.106 1.446 C 20.62 0.397 22.511 0.543 23.765 1.273 C 25.019 2.004 25.679 3.344 25.686 4.781 C 25.692 6.217 25.044 7.738 23.689 8.808 C 22.336 9.877 20.261 10.508 17.395 10.123 L 17.368 10.323 Z M 18.028 1.26 L 18.129 1.084 C 15.418 -0.469 12.548 -0.481 10.384 0.336 C 8.236 1.147 6.721 2.81 6.86 4.643 L 7.061 4.627 L 7.262 4.612 C 7.143 3.039 8.455 1.496 10.527 0.714 C 12.583 -0.062 15.326 -0.056 17.928 1.435 L 18.028 1.26 Z M 7.061 4.627 L 7.198 4.479 C 6.66 3.984 6.05 3.771 5.416 3.796 C 4.789 3.821 4.154 4.078 3.555 4.492 C 2.357 5.318 1.258 6.801 0.563 8.501 C -0.132 10.201 -0.433 12.145 -0.001 13.901 C 0.433 15.666 1.605 17.224 3.817 18.138 L 3.894 17.951 L 3.971 17.764 C 1.878 16.9 0.794 15.445 0.391 13.804 C -0.015 12.154 0.264 10.299 0.937 8.653 C 1.611 7.006 2.667 5.595 3.784 4.824 C 4.341 4.439 4.903 4.221 5.432 4.2 C 5.956 4.179 6.463 4.351 6.924 4.776 L 7.061 4.627 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.071,
    height: 7.025,
    viewBox: "0 0 7.071 7.025",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.859,
      top: 14.151,
      width: 7.071,
      height: 7.025,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.435 7.025 C -2.773 2.449 1.124 -4.395 7.071 3.882 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.301 7.177 C 2.385 7.25 2.513 7.242 2.586 7.158 C 2.66 7.074 2.652 6.947 2.568 6.873 L 2.435 7.025 L 2.301 7.177 Z M 6.907 4 C 6.972 4.09 7.099 4.111 7.189 4.046 C 7.28 3.981 7.3 3.854 7.235 3.764 L 7.071 3.882 L 6.907 4 Z M 2.435 7.025 L 2.568 6.873 C 1.294 5.754 0.586 4.503 0.322 3.393 C 0.058 2.276 0.245 1.324 0.723 0.765 C 1.188 0.221 1.971 -0.001 3.03 0.425 C 4.1 0.855 5.431 1.945 6.907 4 L 7.071 3.882 L 7.235 3.764 C 5.738 1.68 4.352 0.522 3.181 0.05 C 2 -0.425 1.019 -0.202 0.416 0.502 C -0.172 1.191 -0.354 2.291 -0.071 3.486 C 0.214 4.687 0.972 6.008 2.301 7.177 L 2.435 7.025 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.823,
    height: 2.719,
    viewBox: "0 0 1.823 2.719",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.344,
      top: 13.495,
      width: 1.823,
      height: 2.719,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.321 2.683 L 1.321 2.683 C 1.137 2.744 0.938 2.727 0.767 2.635 C 0.597 2.544 0.468 2.386 0.41 2.196 L 0.035 0.984 C -0.088 0.589 0.121 0.165 0.503 0.036 L 0.503 0.036 C 0.686 -0.025 0.885 -0.008 1.056 0.083 C 1.227 0.175 1.355 0.333 1.413 0.523 L 1.788 1.734 C 1.911 2.13 1.702 2.554 1.321 2.683 L 1.321 2.683 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.472,
    height: 1.483,
    viewBox: "0 0 2.472 1.483",
    fill: "none",
    style: {
      position: "absolute",
      left: 42.91,
      top: 10.859,
      width: 2.472,
      height: 1.483,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.808 0.066 C -0.304 0.667 -0.489 1.721 0.854 1.435 C 2.197 1.148 3.187 -0.327 1.808 0.066 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.409,
    height: 3.867,
    viewBox: "0 0 2.409 3.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.136,
      top: 14.3,
      width: 2.409,
      height: 3.867,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 3.059 0.843 2.981 3.937 1.017 3.866 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.054 -0.195 C -0.054 -0.224 -0.165 -0.161 -0.195 -0.054 C -0.224 0.054 -0.161 0.165 -0.054 0.195 L 0 0 L 0.054 -0.195 Z M 1.025 3.664 C 0.913 3.66 0.82 3.748 0.816 3.859 C 0.812 3.97 0.899 4.064 1.01 4.068 L 1.017 3.866 L 1.025 3.664 Z M 0 0 L -0.054 0.195 C 1.413 0.599 2.088 1.528 2.192 2.303 C 2.245 2.693 2.155 3.041 1.96 3.284 C 1.768 3.523 1.459 3.68 1.025 3.664 L 1.017 3.866 L 1.01 4.068 C 1.558 4.088 1.995 3.885 2.274 3.537 C 2.551 3.193 2.657 2.729 2.592 2.249 C 2.462 1.284 1.646 0.244 0.054 -0.195 L 0 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.989,-0.149,0.140,0.990,41.478,16.414)",
      transformOrigin: "0 0",
      width: 3.3,
      height: 2.529,
      opacity: 0.27,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 2.645,
    height: 0.682,
    viewBox: "0 0 2.645 0.682",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.492,
      top: 18.934,
      width: 2.645,
      height: 0.682,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 1.294 1.128 2.645 0.516 2.645 0.516 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.133 -0.152 C 0.049 -0.225 -0.079 -0.217 -0.152 -0.133 C -0.225 -0.049 -0.217 0.079 -0.133 0.152 L 0 0 L 0.133 -0.152 Z M 2.729 0.7 C 2.83 0.654 2.875 0.535 2.829 0.433 C 2.783 0.331 2.664 0.286 2.562 0.332 L 2.645 0.516 L 2.729 0.7 Z M 0 0 L -0.133 0.152 C 0.558 0.755 1.271 0.896 1.813 0.883 C 2.082 0.876 2.307 0.832 2.467 0.789 C 2.546 0.768 2.61 0.746 2.654 0.73 C 2.677 0.722 2.694 0.715 2.707 0.71 C 2.713 0.707 2.718 0.705 2.722 0.703 C 2.723 0.703 2.725 0.702 2.726 0.701 C 2.727 0.701 2.727 0.701 2.728 0.701 C 2.728 0.701 2.728 0.7 2.728 0.7 C 2.728 0.7 2.728 0.7 2.728 0.7 C 2.729 0.7 2.729 0.7 2.645 0.516 C 2.562 0.332 2.562 0.332 2.562 0.332 C 2.562 0.332 2.562 0.332 2.562 0.332 C 2.563 0.332 2.563 0.332 2.563 0.332 C 2.563 0.332 2.563 0.332 2.563 0.332 C 2.563 0.332 2.562 0.332 2.561 0.333 C 2.56 0.333 2.557 0.334 2.553 0.336 C 2.545 0.339 2.532 0.344 2.515 0.351 C 2.481 0.363 2.428 0.381 2.361 0.399 C 2.227 0.436 2.034 0.474 1.803 0.479 C 1.345 0.49 0.735 0.373 0.133 -0.152 L 0 0 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.309,
    height: 12.219,
    viewBox: "0 0 6.309 12.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.877,
      top: 27.656,
      width: 6.309,
      height: 12.219,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.778 12.219 L 0 7.254 C 0 7.254 3.075 6.316 3.285 0 L 6.309 2.636 L 3.778 12.219 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.778 12.219 L 3.617 12.341 C 3.664 12.402 3.742 12.432 3.817 12.417 C 3.893 12.402 3.953 12.345 3.973 12.27 L 3.778 12.219 Z M 0 7.254 L -0.059 7.061 C -0.122 7.08 -0.172 7.129 -0.192 7.192 C -0.212 7.255 -0.201 7.324 -0.161 7.377 L 0 7.254 Z M 3.285 0 L 3.417 -0.152 C 3.359 -0.203 3.276 -0.216 3.204 -0.185 C 3.133 -0.154 3.086 -0.085 3.083 -0.007 L 3.285 0 Z M 6.309 2.636 L 6.504 2.688 C 6.524 2.613 6.499 2.534 6.442 2.484 L 6.309 2.636 Z M 3.778 12.219 L 3.939 12.096 L 0.161 7.132 L 0 7.254 L -0.161 7.377 L 3.617 12.341 L 3.778 12.219 Z M 0 7.254 C 0.059 7.447 0.059 7.447 0.059 7.447 C 0.059 7.447 0.06 7.447 0.06 7.447 C 0.06 7.447 0.06 7.447 0.061 7.447 C 0.062 7.447 0.063 7.446 0.064 7.446 C 0.066 7.445 0.07 7.444 0.073 7.443 C 0.081 7.44 0.092 7.436 0.105 7.431 C 0.132 7.421 0.169 7.407 0.215 7.386 C 0.308 7.344 0.438 7.278 0.593 7.179 C 0.902 6.981 1.311 6.651 1.723 6.119 C 2.549 5.055 3.38 3.198 3.487 0.007 L 3.285 0 L 3.083 -0.007 C 2.979 3.118 2.168 4.888 1.404 5.872 C 1.022 6.364 0.648 6.664 0.375 6.839 C 0.238 6.927 0.126 6.983 0.05 7.017 C 0.012 7.035 -0.017 7.046 -0.036 7.053 C -0.045 7.056 -0.052 7.059 -0.056 7.06 C -0.058 7.061 -0.059 7.061 -0.06 7.061 C -0.06 7.061 -0.06 7.061 -0.06 7.061 C -0.06 7.061 -0.06 7.061 -0.059 7.061 C -0.059 7.061 -0.059 7.061 -0.059 7.061 C -0.059 7.061 -0.059 7.061 0 7.254 Z M 3.285 0 L 3.152 0.152 L 6.176 2.788 L 6.309 2.636 L 6.442 2.484 L 3.417 -0.152 L 3.285 0 Z M 6.309 2.636 L 6.114 2.585 L 3.583 12.167 L 3.778 12.219 L 3.973 12.27 L 6.504 2.688 L 6.309 2.636 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.610,
    height: 15.092,
    viewBox: "0 0 11.610 15.092",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.267,
      top: 25.56,
      width: 11.61,
      height: 15.092,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.392 C 1.582 0.539 4.698 0 4.698 0 C 4.698 0 3.902 6.954 11.61 9.349 L 7.561 15.092 C 7.561 15.092 0.489 8.101 0 3.392 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.392 L -0.177 3.294 C -0.197 3.33 -0.205 3.371 -0.201 3.412 L 0 3.392 Z M 4.698 0 L 4.899 0.023 C 4.906 -0.04 4.883 -0.103 4.837 -0.147 C 4.791 -0.19 4.726 -0.21 4.664 -0.199 L 4.698 0 Z M 11.61 9.349 L 11.775 9.466 C 11.812 9.413 11.821 9.346 11.801 9.284 C 11.78 9.223 11.731 9.176 11.669 9.157 L 11.61 9.349 Z M 7.561 15.092 L 7.419 15.236 C 7.461 15.278 7.519 15.299 7.578 15.294 C 7.638 15.288 7.691 15.257 7.726 15.209 L 7.561 15.092 Z M 0 3.392 L 0.177 3.49 C 0.942 2.109 2.081 1.286 3.033 0.806 C 3.509 0.567 3.937 0.415 4.245 0.322 C 4.398 0.276 4.522 0.245 4.606 0.226 C 4.649 0.216 4.681 0.209 4.702 0.205 C 4.713 0.203 4.721 0.201 4.726 0.2 C 4.729 0.2 4.731 0.199 4.732 0.199 C 4.732 0.199 4.732 0.199 4.733 0.199 C 4.733 0.199 4.733 0.199 4.733 0.199 C 4.733 0.199 4.733 0.199 4.733 0.199 C 4.733 0.199 4.733 0.199 4.698 0 C 4.664 -0.199 4.664 -0.199 4.664 -0.199 C 4.664 -0.199 4.663 -0.199 4.663 -0.199 C 4.663 -0.199 4.663 -0.199 4.663 -0.199 C 4.662 -0.199 4.661 -0.199 4.66 -0.198 C 4.658 -0.198 4.656 -0.198 4.652 -0.197 C 4.645 -0.196 4.636 -0.194 4.623 -0.191 C 4.598 -0.186 4.562 -0.179 4.516 -0.168 C 4.424 -0.147 4.292 -0.114 4.129 -0.065 C 3.803 0.033 3.352 0.194 2.852 0.446 C 1.851 0.949 0.64 1.822 -0.177 3.294 L 0 3.392 Z M 4.698 0 C 4.498 -0.023 4.498 -0.023 4.498 -0.023 C 4.498 -0.023 4.498 -0.022 4.497 -0.022 C 4.497 -0.022 4.497 -0.021 4.497 -0.021 C 4.497 -0.02 4.497 -0.018 4.497 -0.016 C 4.496 -0.012 4.496 -0.007 4.495 0.001 C 4.494 0.015 4.492 0.036 4.49 0.063 C 4.486 0.117 4.481 0.196 4.477 0.297 C 4.47 0.497 4.469 0.785 4.493 1.137 C 4.539 1.841 4.684 2.806 5.074 3.847 C 5.859 5.938 7.631 8.324 11.55 9.542 L 11.61 9.349 L 11.669 9.157 C 7.88 7.979 6.197 5.69 5.452 3.705 C 5.079 2.709 4.94 1.785 4.896 1.111 C 4.873 0.773 4.874 0.499 4.881 0.31 C 4.884 0.216 4.889 0.143 4.892 0.094 C 4.894 0.07 4.896 0.051 4.897 0.039 C 4.898 0.033 4.898 0.029 4.898 0.026 C 4.899 0.025 4.899 0.024 4.899 0.023 C 4.899 0.023 4.899 0.023 4.899 0.023 C 4.899 0.023 4.899 0.023 4.899 0.023 C 4.899 0.023 4.899 0.023 4.698 0 Z M 11.61 9.349 L 11.445 9.233 L 7.396 14.976 L 7.561 15.092 L 7.726 15.209 L 11.775 9.466 L 11.61 9.349 Z M 7.561 15.092 C 7.703 14.949 7.703 14.949 7.703 14.949 C 7.702 14.949 7.702 14.949 7.702 14.949 C 7.702 14.948 7.702 14.948 7.701 14.948 C 7.701 14.947 7.699 14.946 7.698 14.944 C 7.694 14.941 7.69 14.936 7.683 14.929 C 7.67 14.916 7.65 14.896 7.624 14.871 C 7.573 14.819 7.497 14.742 7.401 14.642 C 7.207 14.443 6.931 14.153 6.597 13.79 C 5.928 13.063 5.033 12.046 4.123 10.884 C 3.212 9.72 2.289 8.414 1.564 7.109 C 0.838 5.8 0.319 4.508 0.201 3.371 L 0 3.392 L -0.201 3.412 C -0.075 4.629 0.474 5.977 1.211 7.305 C 1.95 8.635 2.886 9.959 3.805 11.132 C 4.723 12.306 5.626 13.331 6.299 14.063 C 6.636 14.429 6.915 14.722 7.111 14.923 C 7.209 15.024 7.285 15.102 7.338 15.155 C 7.364 15.181 7.384 15.201 7.398 15.215 C 7.404 15.222 7.41 15.227 7.413 15.231 C 7.415 15.232 7.416 15.234 7.417 15.235 C 7.418 15.235 7.418 15.235 7.418 15.236 C 7.418 15.236 7.418 15.236 7.419 15.236 C 7.419 15.236 7.419 15.236 7.561 15.092 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.073,
    height: 40.859,
    viewBox: "0 0 19.073 40.859",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 36.926,
      width: 19.073,
      height: 40.859,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.359 0 C 4.478 4.651 -3.616 29.29 1.765 40.859 L 19.073 33.058 C 19.073 33.058 17.635 36.922 17.658 36.315 C 17.765 33.45 19.458 18.741 18.266 12.048",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.073,
    height: 40.859,
    viewBox: "0 0 19.073 40.859",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 36.926,
      width: 19.073,
      height: 40.859,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.485 0.158 C 10.572 0.089 10.587 -0.038 10.518 -0.125 C 10.449 -0.213 10.322 -0.228 10.234 -0.158 L 10.359 0 L 10.485 0.158 Z M 1.765 40.859 L 1.582 40.944 C 1.629 41.044 1.748 41.088 1.848 41.043 L 1.765 40.859 Z M 19.073 33.058 L 19.262 33.128 C 19.291 33.052 19.27 32.966 19.211 32.91 C 19.151 32.855 19.064 32.84 18.99 32.874 L 19.073 33.058 Z M 17.658 36.315 L 17.456 36.308 L 17.456 36.308 L 17.658 36.315 Z M 18.465 12.013 C 18.446 11.903 18.341 11.83 18.231 11.85 C 18.121 11.869 18.048 11.974 18.068 12.084 L 18.266 12.048 L 18.465 12.013 Z M 10.359 0 L 10.234 -0.158 C 8.726 1.035 7.101 3.482 5.597 6.632 C 4.088 9.79 2.689 13.68 1.643 17.785 C 0.598 21.89 -0.096 26.215 -0.191 30.243 C -0.285 34.269 0.219 38.013 1.582 40.944 L 1.765 40.859 L 1.949 40.774 C 0.621 37.921 0.119 34.246 0.213 30.253 C 0.306 26.262 0.995 21.967 2.035 17.885 C 3.075 13.803 4.466 9.938 5.961 6.806 C 7.46 3.667 9.053 1.291 10.485 0.158 L 10.359 0 Z M 1.765 40.859 L 1.848 41.043 L 19.156 33.242 L 19.073 33.058 L 18.99 32.874 L 1.682 40.675 L 1.765 40.859 Z M 19.073 33.058 C 18.884 32.987 18.884 32.987 18.884 32.987 C 18.884 32.987 18.884 32.988 18.884 32.988 C 18.884 32.988 18.884 32.988 18.883 32.988 C 18.883 32.989 18.883 32.989 18.883 32.99 C 18.882 32.992 18.881 32.995 18.88 32.998 C 18.877 33.006 18.873 33.016 18.868 33.03 C 18.857 33.058 18.842 33.1 18.822 33.152 C 18.783 33.256 18.727 33.404 18.66 33.58 C 18.526 33.932 18.347 34.395 18.169 34.839 C 17.991 35.284 17.815 35.705 17.687 35.975 C 17.619 36.117 17.574 36.198 17.553 36.225 C 17.547 36.232 17.554 36.222 17.571 36.21 C 17.581 36.203 17.665 36.147 17.766 36.201 C 17.809 36.224 17.832 36.258 17.843 36.278 C 17.853 36.298 17.857 36.314 17.858 36.32 C 17.86 36.332 17.859 36.336 17.859 36.323 L 17.658 36.315 L 17.456 36.308 C 17.455 36.333 17.455 36.365 17.462 36.398 C 17.465 36.417 17.483 36.507 17.574 36.556 C 17.684 36.616 17.779 36.557 17.803 36.54 C 17.835 36.518 17.858 36.491 17.871 36.474 C 17.924 36.406 17.987 36.284 18.052 36.149 C 18.186 35.866 18.366 35.434 18.544 34.989 C 18.723 34.542 18.903 34.077 19.037 33.724 C 19.105 33.547 19.161 33.398 19.2 33.294 C 19.22 33.241 19.235 33.2 19.246 33.172 C 19.251 33.158 19.255 33.147 19.258 33.139 C 19.259 33.136 19.26 33.133 19.261 33.131 C 19.261 33.13 19.262 33.13 19.262 33.129 C 19.262 33.129 19.262 33.129 19.262 33.128 C 19.262 33.128 19.262 33.128 19.262 33.128 C 19.262 33.128 19.262 33.128 19.073 33.058 Z M 17.658 36.315 L 17.859 36.323 C 17.886 35.612 18.011 34.163 18.167 32.272 C 18.322 30.385 18.507 28.067 18.651 25.629 C 18.938 20.759 19.066 15.386 18.465 12.013 L 18.266 12.048 L 18.068 12.084 C 18.659 15.403 18.536 20.73 18.248 25.605 C 18.104 28.038 17.92 30.353 17.764 32.239 C 17.609 34.121 17.483 35.585 17.456 36.308 L 17.658 36.315 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.661,
    height: 8.316,
    viewBox: "0 0 19.661 8.316",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.098,
      top: 65.38,
      width: 19.661,
      height: 8.316,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.571 2.339 C 0.571 2.339 11.632 1.048 12.804 1.207 C 13.976 1.366 18.463 0.357 18.75 0.22 C 21.284 -0.997 18.127 3.245 14.231 3.171 C 14.231 3.171 17.836 5.535 17.865 6.225 C 17.893 6.915 17.434 6.915 17.434 6.915 C 17.434 6.915 17.74 7.658 17.196 8.082 C 15.328 7.056 12.872 6.231 12.6 6.585 C 12.328 6.938 7.1 9.002 2.716 8.082 C -1.667 7.162 0.571 2.339 0.571 2.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34.098,
      top: 65.38,
      width: 19.661,
      height: 8.316,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.66085433959961,
      height: 8.316291809082031,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.707,
    height: 8.562,
    viewBox: "0 0 4.707 8.562",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.123,
      top: 2.223,
      width: 4.707,
      height: 8.562,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.968 0.117 C 2.956 -0.945 4.332 5.53 4.689 7.599 C 5.046 9.669 0 7.759 0 7.759",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 19.661,
    height: 8.316,
    viewBox: "0 0 19.661 8.316",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.098,
      top: 65.38,
      width: 19.661,
      height: 8.316,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.571 2.339 L 0.548 2.139 C 0.478 2.147 0.418 2.191 0.388 2.254 L 0.571 2.339 Z M 18.75 0.22 L 18.837 0.402 L 18.837 0.402 L 18.75 0.22 Z M 14.231 3.171 L 14.235 2.969 C 14.145 2.967 14.065 3.025 14.038 3.111 C 14.012 3.197 14.045 3.29 14.121 3.339 L 14.231 3.171 Z M 17.434 6.915 L 17.434 6.713 C 17.367 6.713 17.304 6.746 17.267 6.802 C 17.229 6.858 17.222 6.929 17.248 6.992 L 17.434 6.915 Z M 17.196 8.082 L 17.099 8.259 C 17.17 8.298 17.257 8.291 17.321 8.241 L 17.196 8.082 Z M 0.571 2.339 C 0.595 2.54 0.595 2.54 0.595 2.54 C 0.595 2.54 0.595 2.54 0.595 2.54 C 0.596 2.54 0.596 2.54 0.597 2.54 C 0.598 2.539 0.6 2.539 0.603 2.539 C 0.608 2.538 0.616 2.537 0.627 2.536 C 0.647 2.534 0.679 2.53 0.719 2.525 C 0.8 2.516 0.92 2.502 1.072 2.485 C 1.377 2.45 1.813 2.4 2.341 2.341 C 3.395 2.222 4.814 2.066 6.269 1.914 C 7.724 1.763 9.215 1.617 10.415 1.518 C 11.015 1.469 11.54 1.432 11.952 1.412 C 12.37 1.391 12.652 1.39 12.777 1.407 L 12.804 1.207 L 12.831 1.007 C 12.663 0.984 12.343 0.988 11.932 1.008 C 11.514 1.029 10.984 1.066 10.382 1.116 C 9.178 1.214 7.684 1.361 6.227 1.513 C 4.771 1.664 3.351 1.821 2.295 1.939 C 1.768 1.999 1.331 2.048 1.026 2.083 C 0.874 2.101 0.754 2.115 0.673 2.124 C 0.632 2.129 0.601 2.133 0.58 2.135 C 0.569 2.136 0.561 2.137 0.556 2.138 C 0.553 2.138 0.551 2.138 0.55 2.138 C 0.549 2.139 0.549 2.139 0.549 2.139 C 0.548 2.139 0.548 2.139 0.548 2.139 C 0.548 2.139 0.548 2.139 0.571 2.339 Z M 12.804 1.207 L 12.777 1.407 C 13.1 1.451 13.625 1.414 14.213 1.34 C 14.808 1.265 15.493 1.148 16.147 1.023 C 16.802 0.898 17.429 0.763 17.91 0.651 C 18.151 0.595 18.357 0.544 18.512 0.503 C 18.589 0.483 18.656 0.464 18.708 0.448 C 18.756 0.434 18.804 0.418 18.837 0.402 L 18.75 0.22 L 18.663 0.037 C 18.664 0.037 18.659 0.039 18.644 0.044 C 18.631 0.049 18.613 0.055 18.59 0.062 C 18.544 0.076 18.483 0.093 18.408 0.113 C 18.259 0.153 18.057 0.202 17.819 0.258 C 17.342 0.369 16.72 0.502 16.071 0.626 C 15.421 0.751 14.746 0.865 14.162 0.939 C 13.57 1.014 13.095 1.043 12.831 1.007 L 12.804 1.207 Z M 18.75 0.22 L 18.837 0.402 C 19.149 0.252 19.343 0.202 19.444 0.202 C 19.493 0.202 19.492 0.213 19.477 0.2 C 19.457 0.183 19.459 0.164 19.459 0.177 C 19.459 0.224 19.421 0.34 19.295 0.523 C 19.175 0.696 18.996 0.902 18.764 1.119 C 17.829 1.996 16.114 3.005 14.235 2.969 L 14.231 3.171 L 14.227 3.372 C 16.245 3.411 18.056 2.336 19.04 1.414 C 19.287 1.182 19.487 0.956 19.627 0.753 C 19.76 0.56 19.862 0.357 19.863 0.178 C 19.863 0.079 19.831 -0.029 19.738 -0.108 C 19.652 -0.181 19.542 -0.202 19.442 -0.202 C 19.246 -0.201 18.984 -0.117 18.663 0.037 L 18.75 0.22 Z M 14.231 3.171 C 14.121 3.339 14.121 3.339 14.121 3.339 C 14.121 3.339 14.121 3.34 14.121 3.34 C 14.121 3.34 14.121 3.34 14.121 3.34 C 14.122 3.34 14.122 3.341 14.123 3.341 C 14.125 3.342 14.127 3.344 14.131 3.346 C 14.137 3.35 14.147 3.357 14.16 3.366 C 14.187 3.383 14.225 3.409 14.274 3.441 C 14.372 3.507 14.512 3.602 14.681 3.717 C 15.018 3.949 15.467 4.264 15.916 4.601 C 16.367 4.938 16.813 5.293 17.147 5.604 C 17.315 5.76 17.449 5.901 17.541 6.019 C 17.587 6.078 17.619 6.128 17.639 6.168 C 17.66 6.21 17.663 6.23 17.663 6.233 L 17.865 6.225 L 18.066 6.217 C 18.063 6.133 18.034 6.054 17.999 5.986 C 17.964 5.915 17.916 5.843 17.86 5.772 C 17.749 5.629 17.597 5.471 17.423 5.309 C 17.073 4.983 16.613 4.617 16.158 4.277 C 15.703 3.936 15.249 3.618 14.909 3.384 C 14.739 3.268 14.598 3.172 14.499 3.106 C 14.449 3.073 14.41 3.047 14.383 3.029 C 14.37 3.02 14.36 3.013 14.353 3.009 C 14.349 3.007 14.347 3.005 14.345 3.004 C 14.344 3.003 14.343 3.003 14.343 3.002 C 14.343 3.002 14.342 3.002 14.342 3.002 C 14.342 3.002 14.342 3.002 14.342 3.002 C 14.342 3.002 14.342 3.002 14.231 3.171 Z M 17.865 6.225 L 17.663 6.233 C 17.675 6.529 17.584 6.632 17.536 6.669 C 17.507 6.691 17.478 6.703 17.456 6.708 C 17.445 6.711 17.437 6.712 17.432 6.713 C 17.43 6.713 17.429 6.713 17.429 6.713 C 17.429 6.713 17.43 6.713 17.431 6.713 C 17.431 6.713 17.432 6.713 17.432 6.713 C 17.433 6.713 17.433 6.713 17.433 6.713 C 17.433 6.713 17.434 6.713 17.434 6.713 C 17.434 6.713 17.434 6.713 17.434 6.713 C 17.434 6.713 17.434 6.713 17.434 6.915 C 17.434 7.117 17.434 7.117 17.435 7.117 C 17.435 7.117 17.435 7.117 17.435 7.117 C 17.435 7.117 17.435 7.117 17.436 7.117 C 17.436 7.117 17.437 7.117 17.437 7.117 C 17.438 7.117 17.439 7.117 17.441 7.117 C 17.443 7.116 17.446 7.116 17.45 7.116 C 17.457 7.116 17.465 7.115 17.476 7.114 C 17.496 7.112 17.523 7.108 17.555 7.1 C 17.618 7.084 17.702 7.052 17.784 6.988 C 17.959 6.852 18.083 6.61 18.066 6.217 L 17.865 6.225 Z M 17.434 6.915 C 17.248 6.992 17.248 6.991 17.248 6.991 C 17.248 6.991 17.247 6.991 17.247 6.991 C 17.247 6.991 17.247 6.991 17.247 6.991 C 17.247 6.991 17.247 6.991 17.247 6.991 C 17.247 6.991 17.247 6.991 17.247 6.991 C 17.248 6.992 17.248 6.993 17.249 6.995 C 17.25 6.999 17.253 7.005 17.256 7.013 C 17.261 7.03 17.27 7.056 17.278 7.089 C 17.296 7.155 17.314 7.246 17.317 7.346 C 17.325 7.547 17.275 7.765 17.072 7.923 L 17.196 8.082 L 17.321 8.241 C 17.662 7.975 17.731 7.609 17.721 7.332 C 17.716 7.194 17.692 7.072 17.669 6.986 C 17.657 6.942 17.646 6.907 17.637 6.882 C 17.633 6.869 17.629 6.859 17.626 6.851 C 17.625 6.848 17.624 6.845 17.623 6.842 C 17.622 6.841 17.622 6.84 17.622 6.84 C 17.622 6.839 17.621 6.839 17.621 6.839 C 17.621 6.838 17.621 6.838 17.621 6.838 C 17.621 6.838 17.621 6.838 17.621 6.838 C 17.621 6.838 17.621 6.838 17.434 6.915 Z M 17.196 8.082 L 17.294 7.905 C 16.348 7.386 15.256 6.918 14.363 6.624 C 13.917 6.477 13.514 6.371 13.2 6.325 C 13.044 6.302 12.9 6.293 12.78 6.304 C 12.671 6.315 12.528 6.347 12.44 6.462 L 12.6 6.585 L 12.76 6.708 C 12.74 6.734 12.734 6.715 12.818 6.706 C 12.892 6.699 12.999 6.704 13.141 6.725 C 13.422 6.766 13.801 6.864 14.236 7.008 C 15.106 7.294 16.176 7.752 17.099 8.259 L 17.196 8.082 Z M 12.6 6.585 L 12.44 6.462 C 12.447 6.453 12.438 6.465 12.385 6.499 C 12.338 6.529 12.273 6.565 12.187 6.608 C 12.017 6.692 11.78 6.796 11.485 6.909 C 10.897 7.134 10.09 7.394 9.154 7.615 C 7.279 8.056 4.909 8.336 2.758 7.885 L 2.716 8.082 L 2.675 8.28 C 4.908 8.748 7.344 8.456 9.247 8.008 C 10.2 7.783 11.025 7.518 11.63 7.286 C 11.932 7.17 12.182 7.061 12.367 6.969 C 12.46 6.923 12.538 6.88 12.601 6.841 C 12.656 6.806 12.72 6.761 12.76 6.708 L 12.6 6.585 Z M 2.716 8.082 L 2.758 7.885 C 1.702 7.663 1.069 7.213 0.698 6.681 C 0.323 6.145 0.196 5.502 0.202 4.868 C 0.208 4.233 0.345 3.622 0.483 3.166 C 0.552 2.939 0.621 2.752 0.672 2.622 C 0.697 2.558 0.718 2.507 0.733 2.474 C 0.74 2.457 0.746 2.444 0.749 2.436 C 0.751 2.431 0.753 2.428 0.754 2.427 C 0.754 2.426 0.754 2.425 0.754 2.425 C 0.755 2.424 0.755 2.424 0.755 2.424 C 0.755 2.424 0.755 2.424 0.755 2.424 C 0.755 2.424 0.755 2.424 0.571 2.339 C 0.388 2.254 0.388 2.254 0.388 2.254 C 0.388 2.254 0.388 2.255 0.388 2.255 C 0.388 2.255 0.388 2.255 0.388 2.256 C 0.387 2.256 0.387 2.258 0.386 2.259 C 0.385 2.262 0.383 2.266 0.381 2.271 C 0.376 2.281 0.37 2.295 0.362 2.314 C 0.346 2.351 0.323 2.405 0.296 2.474 C 0.242 2.612 0.169 2.809 0.097 3.049 C -0.048 3.526 -0.196 4.178 -0.202 4.864 C -0.208 5.55 -0.072 6.285 0.367 6.912 C 0.808 7.544 1.539 8.041 2.675 8.28 L 2.716 8.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38.163,
      top: 40.653,
      width: 1.774,
      height: 1.847,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38.163,
      top: 47.959,
      width: 1.774,
      height: 1.847,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.405,
      top: 75.599,
      width: 28.693,
      height: 2.167,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 44.453,
    height: 31.644,
    viewBox: "0 0 44.453 31.644",
    fill: "none",
    style: {
      position: "absolute",
      left: 48.737,
      top: 46.124,
      width: 44.453,
      height: 31.644,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.841 31.644 L 0 31.644 L 6.691 1.216 C 6.845 0.506 7.454 0.001 8.156 0 L 43.088 0 C 43.504 0.002 43.898 0.199 44.156 0.538 C 44.415 0.876 44.511 1.317 44.418 1.737 L 37.841 31.644 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 37.841 31.644 L 37.841 31.846 C 37.936 31.846 38.018 31.78 38.039 31.687 L 37.841 31.644 Z M 0 31.644 L -0.197 31.6 C -0.21 31.66 -0.196 31.723 -0.157 31.77 C -0.119 31.818 -0.061 31.846 0 31.846 L 0 31.644 Z M 6.691 1.216 L 6.888 1.259 L 6.888 1.259 L 6.691 1.216 Z M 8.156 0 L 8.156 -0.202 L 8.156 -0.202 L 8.156 0 Z M 43.088 0 L 43.088 -0.202 L 43.088 -0.202 L 43.088 0 Z M 44.418 1.737 L 44.22 1.693 L 44.22 1.694 L 44.418 1.737 Z M 37.841 31.644 L 37.841 31.442 L 0 31.442 L 0 31.644 L 0 31.846 L 37.841 31.846 L 37.841 31.644 Z M 0 31.644 L 0.197 31.687 L 6.888 1.259 L 6.691 1.216 L 6.494 1.173 L -0.197 31.6 L 0 31.644 Z M 6.691 1.216 L 6.888 1.259 C 7.023 0.637 7.553 0.203 8.157 0.202 L 8.156 0 L 8.156 -0.202 C 7.354 -0.2 6.667 0.375 6.494 1.173 L 6.691 1.216 Z M 8.156 0 L 8.156 0.202 L 43.088 0.202 L 43.088 0 L 43.088 -0.202 L 8.156 -0.202 L 8.156 0 Z M 43.088 0 L 43.087 0.202 C 43.439 0.203 43.774 0.371 43.996 0.66 L 44.156 0.538 L 44.317 0.415 C 44.021 0.028 43.569 -0.2 43.088 -0.202 L 43.088 0 Z M 44.156 0.538 L 43.996 0.66 C 44.218 0.95 44.301 1.331 44.22 1.693 L 44.418 1.737 L 44.615 1.781 C 44.721 1.304 44.612 0.801 44.317 0.415 L 44.156 0.538 Z M 44.418 1.737 L 44.22 1.694 L 37.644 31.6 L 37.841 31.644 L 38.039 31.687 L 44.615 1.781 L 44.418 1.737 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.453,
    height: 31.644,
    viewBox: "0 0 44.453 31.644",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.833,
      top: 46.124,
      width: 44.453,
      height: 31.644,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.841 31.644 L 0 31.644 L 6.691 1.216 C 6.845 0.506 7.454 0.001 8.156 0 L 43.088 0 C 43.504 0.002 43.898 0.199 44.156 0.538 C 44.415 0.876 44.511 1.317 44.418 1.737 L 37.841 31.644 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.453,
    height: 31.644,
    viewBox: "0 0 44.453 31.644",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.833,
      top: 46.124,
      width: 44.453,
      height: 31.644,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.841 31.644 L 37.841 31.846 C 37.936 31.846 38.018 31.78 38.039 31.687 L 37.841 31.644 Z M 0 31.644 L -0.197 31.6 C -0.21 31.66 -0.196 31.723 -0.157 31.77 C -0.119 31.818 -0.061 31.846 0 31.846 L 0 31.644 Z M 6.691 1.216 L 6.888 1.259 L 6.888 1.259 L 6.691 1.216 Z M 8.156 0 L 8.156 -0.202 L 8.156 -0.202 L 8.156 0 Z M 43.088 0 L 43.088 -0.202 L 43.088 -0.202 L 43.088 0 Z M 44.418 1.737 L 44.22 1.693 L 44.22 1.694 L 44.418 1.737 Z M 37.841 31.644 L 37.841 31.442 L 0 31.442 L 0 31.644 L 0 31.846 L 37.841 31.846 L 37.841 31.644 Z M 0 31.644 L 0.197 31.687 L 6.888 1.259 L 6.691 1.216 L 6.494 1.173 L -0.197 31.6 L 0 31.644 Z M 6.691 1.216 L 6.888 1.259 C 7.023 0.637 7.553 0.203 8.157 0.202 L 8.156 0 L 8.156 -0.202 C 7.354 -0.2 6.667 0.375 6.494 1.173 L 6.691 1.216 Z M 8.156 0 L 8.156 0.202 L 43.088 0.202 L 43.088 0 L 43.088 -0.202 L 8.156 -0.202 L 8.156 0 Z M 43.088 0 L 43.087 0.202 C 43.439 0.203 43.774 0.371 43.996 0.66 L 44.156 0.538 L 44.317 0.415 C 44.021 0.028 43.569 -0.2 43.088 -0.202 L 43.088 0 Z M 44.156 0.538 L 43.996 0.66 C 44.218 0.95 44.301 1.331 44.22 1.693 L 44.418 1.737 L 44.615 1.781 C 44.721 1.304 44.612 0.801 44.317 0.415 L 44.156 0.538 Z M 44.418 1.737 L 44.22 1.694 L 37.644 31.6 L 37.841 31.644 L 38.039 31.687 L 44.615 1.781 L 44.418 1.737 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.439,
    height: 14.406,
    viewBox: "0 0 38.439 14.406",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.741,
      top: 66.38,
      width: 38.439,
      height: 14.406,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.28 0.353 C 24.738 -0.666 37.191 0.844 37.191 0.844 C 38.72 4.665 38.414 10.184 38.414 10.184 C 38.414 10.184 4.468 18.808 1.025 11.405 C 0.663 10.626 0.127 9.133 0 8.453",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.439,
    height: 14.406,
    viewBox: "0 0 38.439 14.406",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.741,
      top: 66.38,
      width: 38.439,
      height: 14.406,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.26 0.152 C 14.149 0.163 14.068 0.262 14.079 0.373 C 14.09 0.484 14.188 0.565 14.299 0.554 L 14.28 0.353 L 14.26 0.152 Z M 37.191 0.844 L 37.379 0.769 C 37.351 0.701 37.289 0.653 37.215 0.644 L 37.191 0.844 Z M 38.414 10.184 L 38.464 10.38 C 38.55 10.358 38.611 10.283 38.616 10.195 L 38.414 10.184 Z M 1.025 11.405 L 0.842 11.49 L 0.842 11.49 L 1.025 11.405 Z M 0.198 8.416 C 0.178 8.307 0.072 8.234 -0.037 8.255 C -0.147 8.275 -0.219 8.381 -0.198 8.491 L 0 8.453 L 0.198 8.416 Z M 14.28 0.353 L 14.299 0.554 C 19.513 0.046 25.23 0.168 29.646 0.418 C 31.853 0.543 33.734 0.7 35.063 0.825 C 35.727 0.888 36.254 0.943 36.614 0.982 C 36.794 1.002 36.932 1.017 37.026 1.028 C 37.072 1.033 37.108 1.038 37.131 1.04 C 37.143 1.042 37.152 1.043 37.158 1.044 C 37.161 1.044 37.163 1.044 37.165 1.044 C 37.165 1.044 37.166 1.045 37.166 1.045 C 37.167 1.045 37.167 1.045 37.167 1.045 C 37.167 1.045 37.167 1.045 37.191 0.844 C 37.215 0.644 37.215 0.644 37.215 0.644 C 37.215 0.644 37.215 0.644 37.215 0.644 C 37.214 0.644 37.214 0.644 37.213 0.643 C 37.211 0.643 37.209 0.643 37.206 0.643 C 37.2 0.642 37.191 0.641 37.179 0.639 C 37.155 0.637 37.119 0.632 37.072 0.627 C 36.978 0.616 36.838 0.6 36.657 0.581 C 36.296 0.541 35.767 0.486 35.101 0.423 C 33.768 0.297 31.882 0.14 29.669 0.015 C 25.244 -0.235 19.504 -0.359 14.26 0.152 L 14.28 0.353 Z M 37.191 0.844 L 37.004 0.919 C 37.756 2.8 38.06 5.109 38.175 6.96 C 38.232 7.883 38.241 8.687 38.236 9.261 C 38.234 9.547 38.228 9.776 38.223 9.933 C 38.22 10.011 38.218 10.072 38.216 10.112 C 38.215 10.133 38.214 10.148 38.214 10.158 C 38.213 10.163 38.213 10.167 38.213 10.17 C 38.213 10.171 38.213 10.172 38.213 10.172 C 38.213 10.173 38.213 10.173 38.213 10.173 C 38.213 10.173 38.213 10.173 38.213 10.173 C 38.213 10.173 38.213 10.173 38.414 10.184 C 38.616 10.195 38.616 10.195 38.616 10.195 C 38.616 10.195 38.616 10.195 38.616 10.195 C 38.616 10.195 38.616 10.195 38.616 10.194 C 38.616 10.193 38.616 10.192 38.616 10.191 C 38.616 10.188 38.617 10.184 38.617 10.178 C 38.617 10.168 38.618 10.151 38.619 10.13 C 38.621 10.088 38.624 10.026 38.626 9.946 C 38.632 9.787 38.638 9.554 38.64 9.264 C 38.645 8.683 38.635 7.869 38.578 6.935 C 38.463 5.07 38.155 2.71 37.379 0.769 L 37.191 0.844 Z M 38.414 10.184 C 38.365 9.989 38.365 9.989 38.364 9.989 C 38.364 9.989 38.364 9.989 38.363 9.989 C 38.362 9.989 38.361 9.99 38.359 9.99 C 38.355 9.991 38.349 9.993 38.34 9.995 C 38.324 9.999 38.3 10.005 38.268 10.013 C 38.204 10.029 38.109 10.053 37.984 10.083 C 37.735 10.144 37.369 10.233 36.903 10.344 C 35.969 10.565 34.631 10.873 33.014 11.219 C 29.781 11.911 25.435 12.756 20.983 13.371 C 16.529 13.985 11.979 14.367 8.332 14.136 C 6.508 14.02 4.922 13.752 3.691 13.289 C 2.458 12.825 1.607 12.178 1.208 11.32 L 1.025 11.405 L 0.842 11.49 C 1.304 12.483 2.266 13.185 3.549 13.667 C 4.833 14.149 6.464 14.422 8.307 14.539 C 11.994 14.773 16.576 14.386 21.038 13.771 C 25.503 13.154 29.86 12.307 33.099 11.613 C 34.718 11.267 36.059 10.958 36.996 10.737 C 37.464 10.626 37.831 10.537 38.081 10.475 C 38.206 10.445 38.301 10.421 38.366 10.405 C 38.398 10.397 38.423 10.39 38.439 10.386 C 38.447 10.384 38.454 10.383 38.458 10.382 C 38.46 10.381 38.461 10.381 38.462 10.38 C 38.463 10.38 38.463 10.38 38.464 10.38 C 38.464 10.38 38.464 10.38 38.414 10.184 Z M 1.025 11.405 L 1.208 11.32 C 0.85 10.549 0.321 9.073 0.198 8.416 L 0 8.453 L -0.198 8.491 C -0.067 9.193 0.476 10.704 0.842 11.49 L 1.025 11.405 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.615,
    height: 11.032,
    viewBox: "0 0 5.615 11.032",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.662,
      top: 66.535,
      width: 5.615,
      height: 11.032,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 0 0 2.611 5.966 1.076 11.032 L 5.535 10.351 C 5.535 10.351 6.093 4.065 4.27 0.689 L 0 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.032 -0.199 C -0.041 -0.211 -0.114 -0.182 -0.16 -0.124 C -0.205 -0.065 -0.215 0.013 -0.185 0.081 L 0 0 Z M 1.076 11.032 L 0.883 10.974 C 0.863 11.04 0.878 11.112 0.923 11.165 C 0.969 11.217 1.038 11.242 1.106 11.232 L 1.076 11.032 Z M 5.535 10.351 L 5.566 10.551 C 5.658 10.537 5.728 10.462 5.736 10.369 L 5.535 10.351 Z M 4.27 0.689 L 4.447 0.593 C 4.418 0.538 4.364 0.499 4.302 0.489 L 4.27 0.689 Z M 0 0 C -0.185 0.081 -0.185 0.081 -0.185 0.081 C -0.185 0.081 -0.185 0.081 -0.185 0.081 C -0.185 0.081 -0.185 0.081 -0.185 0.082 C -0.184 0.082 -0.184 0.083 -0.183 0.085 C -0.182 0.087 -0.181 0.091 -0.178 0.097 C -0.174 0.108 -0.167 0.124 -0.157 0.146 C -0.139 0.19 -0.112 0.255 -0.079 0.34 C -0.011 0.511 0.084 0.761 0.193 1.077 C 0.412 1.71 0.688 2.606 0.916 3.659 C 1.374 5.77 1.636 8.488 0.883 10.974 L 1.076 11.032 L 1.269 11.091 C 2.051 8.51 1.775 5.713 1.311 3.573 C 1.078 2.502 0.798 1.59 0.575 0.945 C 0.463 0.623 0.366 0.368 0.297 0.192 C 0.262 0.104 0.235 0.037 0.215 -0.01 C 0.206 -0.033 0.198 -0.05 0.193 -0.062 C 0.191 -0.068 0.189 -0.073 0.187 -0.076 C 0.187 -0.077 0.186 -0.079 0.186 -0.079 C 0.185 -0.08 0.185 -0.08 0.185 -0.08 C 0.185 -0.081 0.185 -0.081 0.185 -0.081 C 0.185 -0.081 0.185 -0.081 0 0 Z M 1.076 11.032 L 1.106 11.232 L 5.566 10.551 L 5.535 10.351 L 5.505 10.151 L 1.045 10.833 L 1.076 11.032 Z M 5.535 10.351 C 5.736 10.369 5.736 10.369 5.736 10.369 C 5.736 10.369 5.736 10.369 5.736 10.368 C 5.736 10.368 5.736 10.368 5.736 10.367 C 5.736 10.367 5.737 10.365 5.737 10.364 C 5.737 10.361 5.737 10.356 5.738 10.35 C 5.739 10.337 5.74 10.319 5.742 10.295 C 5.746 10.248 5.751 10.178 5.757 10.088 C 5.769 9.907 5.784 9.647 5.796 9.324 C 5.819 8.677 5.832 7.781 5.788 6.777 C 5.699 4.779 5.382 2.324 4.447 0.593 L 4.27 0.689 L 4.092 0.785 C 4.98 2.43 5.296 4.806 5.384 6.795 C 5.428 7.785 5.416 8.671 5.392 9.309 C 5.38 9.628 5.366 9.884 5.354 10.061 C 5.348 10.15 5.343 10.218 5.34 10.264 C 5.338 10.287 5.336 10.305 5.335 10.316 C 5.335 10.322 5.335 10.326 5.334 10.329 C 5.334 10.331 5.334 10.332 5.334 10.332 C 5.334 10.333 5.334 10.333 5.334 10.333 C 5.334 10.333 5.334 10.333 5.334 10.333 C 5.334 10.333 5.334 10.333 5.535 10.351 Z M 4.27 0.689 L 4.302 0.489 L 0.032 -0.199 L 0 0 L -0.032 0.199 L 4.237 0.888 L 4.27 0.689 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.701,-0.713,0.689,0.725,68.995,60.911)",
      transformOrigin: "0 0",
      width: 8.038,
      height: 6.343,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44.483,
      top: 47.169,
      width: 8.342,
      height: 1.714,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 70.877,
      top: 0,
      width: 50.871,
      height: 95.036,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.143,
    height: 56.191,
    viewBox: "0 0 19.143 56.191",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.985,
      top: 21.364,
      width: 19.143,
      height: 56.191,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.935 0 C -3.338 16.183 3.045 26.297 10.539 36.989 C 18.033 47.682 15.319 48.356 19.143 56.191 C 19.143 56.191 16.575 37.922 7.911 14.56 C 6.173 9.876 4.191 4.987 1.935 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.985,
      top: 21.364,
      width: 19.143,
      height: 56.191,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.143266677856445,
      height: 56.19057846069336,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.720,
    height: 41.928,
    viewBox: "0 0 16.720 41.928",
    fill: "none",
    style: {
      position: "absolute",
      left: -8.617,
      top: -5.898,
      width: 16.72,
      height: 41.928,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.51 0 C 10.51 0 14.256 -0.141 10.552 5.898 C 6.847 11.938 16.72 41.928 16.72 41.928 L 0 27.272 L 10.51 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 19.143,
    height: 56.191,
    viewBox: "0 0 19.143 56.191",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.985,
      top: 21.364,
      width: 19.143,
      height: 56.191,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.935 0 L 2.119 -0.083 C 2.085 -0.159 2.007 -0.206 1.924 -0.202 C 1.841 -0.197 1.769 -0.142 1.743 -0.063 L 1.935 0 Z M 19.143 56.191 L 18.962 56.279 C 19.005 56.368 19.107 56.413 19.202 56.384 C 19.297 56.355 19.357 56.261 19.343 56.162 L 19.143 56.191 Z M 7.911 14.56 L 8.1 14.49 L 8.1 14.49 L 7.911 14.56 Z M 1.935 0 L 1.743 -0.063 C -0.906 8.068 -0.63 14.686 1.257 20.615 C 3.141 26.536 6.628 31.76 10.374 37.105 L 10.539 36.989 L 10.705 36.874 C 6.957 31.526 3.505 26.348 1.642 20.492 C -0.219 14.646 -0.497 8.115 2.127 0.063 L 1.935 0 Z M 10.539 36.989 L 10.374 37.105 C 14.112 42.439 15.295 45.261 16.024 47.719 C 16.754 50.184 17.04 52.342 18.962 56.279 L 19.143 56.191 L 19.325 56.102 C 17.423 52.205 17.153 50.108 16.411 47.604 C 15.667 45.094 14.461 42.233 10.705 36.874 L 10.539 36.989 Z M 19.143 56.191 C 19.343 56.162 19.343 56.162 19.343 56.162 C 19.343 56.162 19.343 56.162 19.343 56.162 C 19.343 56.161 19.343 56.16 19.343 56.159 C 19.342 56.157 19.342 56.153 19.341 56.149 C 19.34 56.14 19.338 56.126 19.335 56.108 C 19.33 56.073 19.323 56.02 19.312 55.95 C 19.291 55.81 19.259 55.601 19.215 55.328 C 19.128 54.782 18.994 53.975 18.805 52.935 C 18.429 50.854 17.836 47.838 16.973 44.091 C 15.246 36.596 12.436 26.18 8.1 14.49 L 7.911 14.56 L 7.721 14.63 C 12.05 26.301 14.856 36.7 16.58 44.181 C 17.441 47.922 18.032 50.932 18.408 53.007 C 18.596 54.044 18.73 54.848 18.817 55.392 C 18.86 55.664 18.892 55.871 18.913 56.01 C 18.923 56.079 18.931 56.132 18.936 56.166 C 18.938 56.184 18.94 56.197 18.941 56.206 C 18.942 56.21 18.943 56.213 18.943 56.216 C 18.943 56.217 18.943 56.217 18.943 56.218 C 18.943 56.218 18.943 56.218 18.943 56.219 C 18.943 56.219 18.943 56.219 19.143 56.191 Z M 7.911 14.56 L 8.1 14.49 C 6.361 9.802 4.377 4.909 2.119 -0.083 L 1.935 0 L 1.751 0.083 C 4.005 5.066 5.986 9.95 7.721 14.63 L 7.911 14.56 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.143,
    height: 26.689,
    viewBox: "0 0 19.143 26.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 49.763,
      width: 19.143,
      height: 26.689,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.935 0 C -3.338 7.686 3.045 12.49 10.539 17.569 C 18.033 22.647 15.319 22.968 19.143 26.689 C 19.143 26.689 16.575 18.011 7.911 6.915 C 6.173 4.691 4.191 2.369 1.935 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.935 0 L 2.081 -0.139 C 2.039 -0.183 1.98 -0.206 1.919 -0.201 C 1.858 -0.196 1.803 -0.164 1.769 -0.114 L 1.935 0 Z M 19.143 26.689 L 19.002 26.833 C 19.068 26.897 19.169 26.909 19.248 26.862 C 19.326 26.814 19.363 26.719 19.337 26.631 L 19.143 26.689 Z M 7.911 6.915 L 8.07 6.791 L 8.07 6.791 L 7.911 6.915 Z M 1.935 0 L 1.769 -0.114 C 0.434 1.831 -0.174 3.61 -0.201 5.27 C -0.228 6.931 0.328 8.451 1.282 9.875 C 3.181 12.71 6.687 15.202 10.426 17.736 L 10.539 17.569 L 10.652 17.402 C 6.898 14.857 3.465 12.408 1.617 9.65 C 0.698 8.277 0.178 6.837 0.203 5.277 C 0.228 3.716 0.799 2.012 2.102 0.114 L 1.935 0 Z M 10.539 17.569 L 10.426 17.736 C 14.163 20.269 15.332 21.599 16.046 22.745 C 16.767 23.9 17.067 24.95 19.002 26.833 L 19.143 26.689 L 19.284 26.544 C 17.395 24.706 17.14 23.736 16.389 22.531 C 15.631 21.316 14.409 19.947 10.652 17.402 L 10.539 17.569 Z M 19.143 26.689 C 19.337 26.631 19.337 26.631 19.337 26.631 C 19.337 26.631 19.337 26.631 19.337 26.631 C 19.337 26.63 19.336 26.63 19.336 26.629 C 19.336 26.628 19.335 26.626 19.335 26.624 C 19.333 26.62 19.331 26.613 19.329 26.604 C 19.323 26.587 19.316 26.561 19.305 26.528 C 19.284 26.46 19.251 26.36 19.207 26.23 C 19.119 25.968 18.984 25.584 18.795 25.088 C 18.417 24.096 17.823 22.659 16.958 20.875 C 15.227 17.307 12.412 12.352 8.07 6.791 L 7.911 6.915 L 7.752 7.04 C 12.074 12.575 14.875 17.506 16.595 21.051 C 17.454 22.824 18.044 24.25 18.418 25.231 C 18.605 25.722 18.738 26.102 18.825 26.359 C 18.868 26.487 18.899 26.584 18.92 26.649 C 18.93 26.682 18.938 26.706 18.943 26.722 C 18.945 26.731 18.947 26.737 18.948 26.741 C 18.949 26.742 18.949 26.744 18.949 26.745 C 18.949 26.745 18.95 26.746 18.95 26.746 C 18.95 26.746 18.95 26.746 18.95 26.746 C 18.95 26.746 18.95 26.746 19.143 26.689 Z M 7.911 6.915 L 8.07 6.791 C 6.329 4.561 4.342 2.234 2.081 -0.139 L 1.935 0 L 1.789 0.139 C 4.04 2.503 6.018 4.82 7.752 7.04 L 7.911 6.915 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.481,
    height: 51.915,
    viewBox: "0 0 28.481 51.915",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.39,
      top: 27.403,
      width: 28.481,
      height: 51.915,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.467 0 C 32.74 16.183 16.098 22.022 8.604 32.714 C 1.11 43.406 3.824 44.081 0 51.915 C 0 51.915 1.636 43.292 9.005 19.453 C 11.595 11.073 25.211 4.987 27.467 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.481,
    height: 51.915,
    viewBox: "0 0 28.481 51.915",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.39,
      top: 27.403,
      width: 28.481,
      height: 51.915,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.467 0 L 27.659 -0.063 C 27.633 -0.142 27.561 -0.197 27.478 -0.202 C 27.394 -0.206 27.317 -0.159 27.283 -0.083 L 27.467 0 Z M 0 51.915 L -0.198 51.877 C -0.217 51.977 -0.16 52.075 -0.064 52.107 C 0.032 52.139 0.137 52.095 0.181 52.004 L 0 51.915 Z M 9.005 19.453 L 8.812 19.393 L 8.812 19.393 L 9.005 19.453 Z M 27.467 0 L 27.275 0.063 C 28.581 4.072 28.527 7.428 27.605 10.375 C 26.682 13.325 24.883 15.881 22.675 18.279 C 20.464 20.68 17.857 22.908 15.319 25.218 C 12.786 27.523 10.326 29.905 8.439 32.598 L 8.604 32.714 L 8.769 32.83 C 10.629 30.177 13.06 27.819 15.59 25.517 C 18.115 23.219 20.745 20.971 22.972 18.553 C 25.201 16.132 27.042 13.525 27.991 10.495 C 28.94 7.461 28.989 4.019 27.659 -0.063 L 27.467 0 Z M 8.604 32.714 L 8.439 32.598 C 4.683 37.957 3.476 40.818 2.732 43.329 C 1.99 45.833 1.721 47.929 -0.181 51.827 L 0 51.915 L 0.181 52.004 C 2.103 48.066 2.389 45.909 3.119 43.444 C 3.848 40.985 5.032 38.163 8.769 32.83 L 8.604 32.714 Z M 0 51.915 C 0.198 51.953 0.198 51.953 0.198 51.953 C 0.198 51.953 0.198 51.953 0.198 51.952 C 0.198 51.952 0.199 51.952 0.199 51.951 C 0.199 51.95 0.199 51.949 0.199 51.947 C 0.2 51.943 0.201 51.937 0.203 51.928 C 0.206 51.912 0.211 51.886 0.218 51.852 C 0.232 51.784 0.253 51.68 0.282 51.539 C 0.341 51.258 0.434 50.829 0.568 50.24 C 0.836 49.061 1.27 47.24 1.935 44.674 C 3.264 39.542 5.514 31.43 9.198 19.513 L 9.005 19.453 L 8.812 19.393 C 5.127 31.315 2.875 39.434 1.544 44.573 C 0.878 47.143 0.443 48.967 0.174 50.15 C 0.039 50.742 -0.054 51.173 -0.113 51.457 C -0.143 51.598 -0.164 51.703 -0.178 51.773 C -0.185 51.808 -0.19 51.834 -0.193 51.851 C -0.195 51.86 -0.196 51.866 -0.197 51.871 C -0.197 51.873 -0.198 51.875 -0.198 51.876 C -0.198 51.876 -0.198 51.877 -0.198 51.877 C -0.198 51.877 -0.198 51.877 -0.198 51.877 C -0.198 51.877 -0.198 51.877 0 51.915 Z M 9.005 19.453 L 9.198 19.513 C 9.833 17.457 11.149 15.531 12.814 13.716 C 14.479 11.901 16.484 10.207 18.487 8.612 C 20.484 7.022 22.488 5.524 24.126 4.118 C 25.76 2.715 27.066 1.375 27.651 0.083 L 27.467 0 L 27.283 -0.083 C 26.739 1.119 25.497 2.409 23.863 3.812 C 22.232 5.212 20.248 6.694 18.236 8.296 C 16.229 9.894 14.203 11.604 12.516 13.443 C 10.83 15.281 9.472 17.259 8.812 19.393 L 9.005 19.453 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.975,
    height: 80.744,
    viewBox: "0 0 6.975 80.744",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.543,
      top: 0,
      width: 6.975,
      height: 80.744,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.644 0 C 8.113 16.402 8.313 33.696 4.293 51.066 C 0.273 68.435 3.441 68.537 2.285 80.744 C 2.285 80.744 1.127 78.227 0.062 42.413 C -0.312 29.823 1.099 7.715 1.644 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.644 0 L 1.831 -0.074 C 1.797 -0.162 1.706 -0.214 1.613 -0.2 C 1.52 -0.185 1.449 -0.108 1.442 -0.014 L 1.644 0 Z M 2.285 80.744 L 2.101 80.829 C 2.14 80.912 2.229 80.959 2.319 80.943 C 2.409 80.928 2.477 80.854 2.486 80.763 L 2.285 80.744 Z M 0.062 42.413 L -0.14 42.419 L -0.14 42.419 L 0.062 42.413 Z M 1.644 0 L 1.456 0.074 C 7.907 16.43 8.109 33.681 4.096 51.02 L 4.293 51.066 L 4.489 51.111 C 8.516 33.711 8.319 16.374 1.831 -0.074 L 1.644 0 Z M 4.293 51.066 L 4.096 51.02 C 2.083 59.718 1.867 64.104 2.013 67.848 C 2.159 71.587 2.66 74.639 2.084 80.725 L 2.285 80.744 L 2.486 80.763 C 3.065 74.642 2.561 71.539 2.417 67.833 C 2.272 64.132 2.483 59.782 4.489 51.111 L 4.293 51.066 Z M 2.285 80.744 C 2.468 80.66 2.469 80.66 2.469 80.661 C 2.469 80.661 2.469 80.661 2.469 80.662 C 2.469 80.662 2.47 80.663 2.47 80.663 C 2.47 80.664 2.47 80.664 2.47 80.665 C 2.471 80.665 2.471 80.665 2.47 80.664 C 2.469 80.662 2.467 80.656 2.464 80.645 C 2.457 80.624 2.445 80.584 2.429 80.518 C 2.397 80.387 2.349 80.154 2.287 79.76 C 2.163 78.971 1.985 77.543 1.774 74.992 C 1.352 69.891 0.796 60.313 0.264 42.407 L 0.062 42.413 L -0.14 42.419 C 0.393 60.327 0.949 69.914 1.372 75.026 C 1.583 77.581 1.762 79.02 1.888 79.823 C 1.951 80.224 2.001 80.468 2.037 80.614 C 2.055 80.687 2.069 80.736 2.079 80.769 C 2.085 80.786 2.089 80.798 2.093 80.808 C 2.095 80.812 2.096 80.816 2.098 80.82 C 2.098 80.822 2.099 80.823 2.1 80.825 C 2.1 80.825 2.1 80.826 2.101 80.827 C 2.101 80.827 2.101 80.828 2.101 80.828 C 2.101 80.828 2.101 80.829 2.285 80.744 Z M 0.062 42.413 L 0.264 42.407 C -0.11 29.828 1.301 7.732 1.845 0.014 L 1.644 0 L 1.442 -0.014 C 0.898 7.699 -0.514 29.817 -0.14 42.419 L 0.062 42.413 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.950,
    height: 18.808,
    viewBox: "0 0 28.950 18.808",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.707,
      top: 76.228,
      width: 28.95,
      height: 18.808,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.978 8.745 C 26.946 9.85 25.172 16.294 25.172 16.294 C 24.873 17.728 23.649 18.752 22.232 18.755 C 22.232 18.755 15.033 18.611 13.291 18.755 C 11.853 18.874 6.382 18.755 6.382 18.755 C 4.965 18.752 3.741 17.728 3.442 16.294 L 0 0 L 28.95 0.502 L 26.978 8.745",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.707,
      top: 76.228,
      width: 28.95,
      height: 18.808,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.949840545654297,
      height: 18.808177947998047,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 36.502,
    height: 29.852,
    viewBox: "0 0 36.502 29.852",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.018,
      top: -3.867,
      width: 36.502,
      height: 29.852,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.277 0 C 25.011 17.883 8.56 23.437 1.303 22.675 C -5.955 21.913 19.447 29.722 20.051 29.848 C 20.656 29.973 36.502 27.581 36.502 27.581 L 36.502 8.383 L 32.631 3.867",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 28.950,
    height: 18.808,
    viewBox: "0 0 28.950 18.808",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.707,
      top: 76.228,
      width: 28.95,
      height: 18.808,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.18 8.751 C 27.183 8.639 27.095 8.547 26.984 8.543 C 26.872 8.54 26.779 8.628 26.776 8.739 L 26.978 8.745 L 27.18 8.751 Z M 25.172 16.294 L 24.977 16.241 L 24.974 16.253 L 25.172 16.294 Z M 22.232 18.755 L 22.228 18.957 L 22.233 18.957 L 22.232 18.755 Z M 13.291 18.755 L 13.275 18.554 L 13.275 18.554 L 13.291 18.755 Z M 6.382 18.755 L 6.386 18.553 L 6.382 18.553 L 6.382 18.755 Z M 3.442 16.294 L 3.64 16.253 L 3.639 16.253 L 3.442 16.294 Z M 0 0 L 0.004 -0.202 C -0.058 -0.203 -0.117 -0.176 -0.156 -0.129 C -0.195 -0.081 -0.21 -0.018 -0.198 0.042 L 0 0 Z M 28.95 0.502 L 29.146 0.549 C 29.16 0.49 29.147 0.427 29.109 0.379 C 29.072 0.33 29.015 0.302 28.953 0.301 L 28.95 0.502 Z M 26.782 8.698 C 26.756 8.807 26.823 8.916 26.931 8.942 C 27.04 8.967 27.148 8.901 27.174 8.792 L 26.978 8.745 L 26.782 8.698 Z M 26.978 8.745 L 26.776 8.739 C 26.769 8.992 26.658 9.581 26.486 10.347 C 26.315 11.103 26.091 12.01 25.868 12.884 C 25.644 13.758 25.422 14.597 25.255 15.218 C 25.171 15.528 25.102 15.784 25.054 15.962 C 25.029 16.051 25.01 16.121 24.997 16.169 C 24.991 16.192 24.986 16.21 24.982 16.223 C 24.981 16.229 24.98 16.233 24.979 16.236 C 24.978 16.238 24.978 16.239 24.978 16.24 C 24.978 16.24 24.978 16.24 24.977 16.241 C 24.977 16.241 24.977 16.241 24.977 16.241 C 24.977 16.241 24.977 16.241 25.172 16.294 C 25.367 16.348 25.367 16.348 25.367 16.348 C 25.367 16.348 25.367 16.348 25.367 16.348 C 25.367 16.348 25.367 16.347 25.367 16.347 C 25.367 16.346 25.368 16.345 25.368 16.343 C 25.369 16.34 25.37 16.336 25.372 16.329 C 25.375 16.317 25.38 16.299 25.387 16.275 C 25.4 16.228 25.419 16.158 25.443 16.069 C 25.492 15.89 25.561 15.634 25.645 15.323 C 25.812 14.701 26.035 13.86 26.259 12.984 C 26.483 12.109 26.708 11.198 26.88 10.435 C 27.049 9.682 27.171 9.051 27.18 8.751 L 26.978 8.745 Z M 25.172 16.294 L 24.974 16.253 C 24.694 17.598 23.549 18.551 22.232 18.553 L 22.232 18.755 L 22.233 18.957 C 23.75 18.954 25.052 17.858 25.37 16.336 L 25.172 16.294 Z M 22.232 18.755 C 22.236 18.553 22.236 18.553 22.236 18.553 C 22.236 18.553 22.236 18.553 22.236 18.553 C 22.236 18.553 22.236 18.553 22.235 18.553 C 22.234 18.553 22.233 18.553 22.231 18.553 C 22.228 18.553 22.223 18.553 22.216 18.553 C 22.202 18.553 22.182 18.552 22.155 18.552 C 22.102 18.551 22.024 18.549 21.923 18.547 C 21.723 18.544 21.435 18.539 21.084 18.533 C 20.381 18.522 19.426 18.508 18.417 18.499 C 16.404 18.481 14.157 18.481 13.275 18.554 L 13.291 18.755 L 13.308 18.956 C 14.167 18.885 16.391 18.885 18.413 18.903 C 19.421 18.912 20.375 18.926 21.077 18.937 C 21.428 18.942 21.716 18.948 21.916 18.951 C 22.016 18.953 22.094 18.954 22.147 18.956 C 22.174 18.956 22.194 18.956 22.208 18.957 C 22.215 18.957 22.22 18.957 22.223 18.957 C 22.225 18.957 22.226 18.957 22.227 18.957 C 22.228 18.957 22.228 18.957 22.228 18.957 C 22.228 18.957 22.228 18.957 22.228 18.957 C 22.228 18.957 22.228 18.957 22.232 18.755 Z M 13.291 18.755 L 13.275 18.554 C 12.567 18.613 10.851 18.613 9.299 18.598 C 8.526 18.591 7.798 18.579 7.262 18.57 C 6.995 18.565 6.776 18.561 6.623 18.558 C 6.547 18.557 6.488 18.556 6.448 18.555 C 6.427 18.554 6.412 18.554 6.402 18.554 C 6.396 18.554 6.392 18.553 6.39 18.553 C 6.389 18.553 6.388 18.553 6.387 18.553 C 6.387 18.553 6.386 18.553 6.386 18.553 C 6.386 18.553 6.386 18.553 6.386 18.553 C 6.386 18.553 6.386 18.553 6.382 18.755 C 6.377 18.957 6.377 18.957 6.377 18.957 C 6.377 18.957 6.377 18.957 6.377 18.957 C 6.378 18.957 6.378 18.957 6.378 18.957 C 6.379 18.957 6.38 18.957 6.381 18.957 C 6.384 18.957 6.388 18.957 6.393 18.957 C 6.403 18.958 6.419 18.958 6.439 18.958 C 6.48 18.959 6.539 18.96 6.615 18.962 C 6.768 18.965 6.988 18.969 7.255 18.974 C 7.791 18.983 8.521 18.994 9.295 19.002 C 10.839 19.017 12.578 19.017 13.308 18.956 L 13.291 18.755 Z M 6.382 18.755 L 6.382 18.553 C 5.065 18.551 3.92 17.598 3.64 16.253 L 3.442 16.294 L 3.244 16.336 C 3.562 17.858 4.864 18.954 6.381 18.957 L 6.382 18.755 Z M 3.442 16.294 L 3.639 16.253 L 0.198 -0.042 L 0 0 L -0.198 0.042 L 3.244 16.336 L 3.442 16.294 Z M 0 0 L -0.004 0.202 L 28.946 0.704 L 28.95 0.502 L 28.953 0.301 L 0.004 -0.202 L 0 0 Z M 28.95 0.502 L 28.753 0.456 L 26.782 8.698 L 26.978 8.745 L 27.174 8.792 L 29.146 0.549 L 28.95 0.502 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.669,
    height: 3.612,
    viewBox: "0 0 0.669 3.612",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.957,
      top: 22.762,
      width: 0.669,
      height: 3.612,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.199 -0.037 C 0.178 -0.146 0.073 -0.219 -0.037 -0.199 C -0.146 -0.178 -0.219 -0.073 -0.199 0.037 L 0 0 L 0.199 -0.037 Z M 0.471 3.648 C 0.491 3.758 0.596 3.83 0.706 3.81 C 0.816 3.79 0.888 3.684 0.868 3.575 L 0.669 3.612 L 0.471 3.648 Z M 0 0 L -0.199 0.037 L 0.471 3.648 L 0.669 3.612 L 0.868 3.575 L 0.199 -0.037 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.057,
    height: 0.904,
    viewBox: "0 0 0.057 0.904",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.386,
      top: 45.364,
      width: 0.057,
      height: 0.904,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.23 0 C 0.23 -0.112 0.14 -0.202 0.028 -0.202 C -0.083 -0.202 -0.174 -0.112 -0.174 0 L 0.028 0 L 0.23 0 Z M -0.174 0.904 C -0.174 1.015 -0.083 1.106 0.028 1.106 C 0.14 1.106 0.23 1.015 0.23 0.904 L 0.028 0.904 L -0.174 0.904 Z M 0.028 0 L -0.174 0 L -0.174 0.904 L 0.028 0.904 L 0.23 0.904 L 0.23 0 L 0.028 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.279,
    height: 1.825,
    viewBox: "0 0 1.279 1.825",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.424,
      top: 66.148,
      width: 1.279,
      height: 1.825,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.165 -0.116 C 0.101 -0.207 -0.025 -0.229 -0.116 -0.165 C -0.207 -0.101 -0.229 0.025 -0.165 0.116 L 0 0 L 0.165 -0.116 Z M 1.114 1.941 C 1.178 2.032 1.304 2.054 1.395 1.99 C 1.486 1.926 1.509 1.8 1.445 1.709 L 1.279 1.825 L 1.114 1.941 Z M 0 0 L -0.165 0.116 L 1.114 1.941 L 1.279 1.825 L 1.445 1.709 L 0.165 -0.116 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.607,
    height: 0.390,
    viewBox: "0 0 2.607 0.390",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.526,
      top: 88.085,
      width: 2.607,
      height: 0.39,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.097 -0.177 C -0.001 -0.231 -0.123 -0.195 -0.177 -0.097 C -0.231 0.001 -0.195 0.123 -0.097 0.177 L 0 0 L 0.097 -0.177 Z M 2.677 0.383 C 2.781 0.344 2.835 0.228 2.796 0.124 C 2.757 0.019 2.641 -0.034 2.536 0.005 L 2.607 0.194 L 2.677 0.383 Z M 0 0 L -0.097 0.177 C 0.758 0.646 1.765 0.721 2.677 0.383 L 2.607 0.194 L 2.536 0.005 C 1.735 0.302 0.85 0.236 0.097 -0.177 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.134,
      top: 99.783,
      width: 95.259,
      height: 98.609,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 95.259,
      height: 98.609,
      borderRadius: "50%",
      backgroundColor: "rgb(225,255,234)",
      boxShadow: "inset 0 0 0 0.577px rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 598.769,
      top: 46.957,
      width: 86.186,
      height: 90.558,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 86.186,
      height: 89.217,
      borderRadius: "50%",
      backgroundColor: "var(--w)",
      boxShadow: "inset 0 0 0 0.577px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.474,
      top: 23.478,
      width: 65.774,
      height: 67.08,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61.333,
    height: 47.547,
    viewBox: "0 0 61.333 47.547",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 61.333,
      height: 47.547,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 59.913 26.608 L 36.947 2.707 C 33.479 -0.902 27.855 -0.902 24.386 2.707 L 1.302 26.731 C 0.467 27.601 -0.001 28.777 0 30.002 L 0 30.002 L 30.667 47.547 L 61.333 30.002 L 61.333 30.002 C 61.29 28.726 60.782 27.514 59.913 26.608 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 59.913 26.608 L 60.194 26.339 L 60.194 26.338 L 59.913 26.608 Z M 36.947 2.707 L 37.228 2.438 L 37.228 2.438 L 36.947 2.707 Z M 24.386 2.707 L 24.105 2.438 L 24.105 2.438 L 24.386 2.707 Z M 1.302 26.731 L 1.021 26.462 L 1.021 26.462 L 1.302 26.731 Z M 0 30.002 M 0 30.002 M 30.667 47.547 L 30.473 47.885 C 30.593 47.953 30.74 47.953 30.86 47.885 L 30.667 47.547 Z M 61.333 30.002 M 61.333 30.002 M 59.913 26.608 L 60.194 26.338 L 37.228 2.438 L 36.947 2.707 L 36.666 2.977 L 59.632 26.878 L 59.913 26.608 Z M 36.947 2.707 L 37.228 2.438 C 33.606 -1.332 27.727 -1.332 24.105 2.438 L 24.386 2.707 L 24.667 2.977 C 27.982 -0.473 33.351 -0.473 36.666 2.977 L 36.947 2.707 Z M 24.386 2.707 L 24.105 2.438 L 1.021 26.462 L 1.302 26.731 L 1.582 27.001 L 24.667 2.977 L 24.386 2.707 Z M 1.302 26.731 L 1.021 26.462 C 0.116 27.405 -0.39 28.678 -0.389 30.002 L 0 30.002 L 0.389 30.002 C 0.389 28.875 0.819 27.796 1.583 27.001 L 1.302 26.731 Z M 0 30.002 M 0 30.002 L -0.193 30.34 L 30.473 47.885 L 30.667 47.547 L 30.86 47.209 L 0.193 29.664 L 0 30.002 Z M 30.667 47.547 L 30.86 47.885 L 61.527 30.34 L 61.333 30.002 L 61.14 29.664 L 30.473 47.209 L 30.667 47.547 Z M 61.333 30.002 M 61.333 30.002 L 61.722 29.989 C 61.675 28.619 61.131 27.315 60.194 26.339 L 59.913 26.608 L 59.632 26.878 C 60.434 27.713 60.904 28.833 60.944 30.015 L 61.333 30.002 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.199,
      top: 2.933,
      width: 42.485,
      height: 44.214,
      borderRadius: 7.138672351837158,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.389px rgb(27,27,27), 0 0 0 0.389px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.745,
      top: 5.106,
      width: 47.843,
      height: 49.79,
      borderRadius: 7.138672351837158,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.745,
      top: 5.106,
      width: 47.843,
      height: 49.79,
      borderRadius: 7.138672351837158,
      boxShadow: "inset 0 0 0 0.389px rgb(27,27,27), 0 0 0 0.389px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.485,
      top: 15.178,
      width: 36.364,
      height: 4.709,
      borderRadius: 0.7465763092041016,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.389px rgb(27,27,27), 0 0 0 0.389px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.485,
      top: 23.584,
      width: 24.825,
      height: 4.709,
      borderRadius: 0.7465763092041016,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.389px rgb(27,27,27), 0 0 0 0.389px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 24.154,
    height: 32.985,
    viewBox: "0 0 24.154 32.985",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 30.002,
      width: 24.154,
      height: 32.985,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 25.501 C -0.003 28.242 0.934 30.894 2.645 32.985 L 24.154 13.819 L 0 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.193 -0.338 C 0.073 -0.407 -0.075 -0.407 -0.195 -0.337 C -0.315 -0.267 -0.389 -0.139 -0.389 0 L 0 0 Z M 0 25.501 L 0.389 25.502 L 0.389 25.501 L 0 25.501 Z M 2.645 32.985 L 2.344 33.232 C 2.411 33.314 2.509 33.365 2.615 33.373 C 2.72 33.382 2.825 33.347 2.904 33.276 L 2.645 32.985 Z M 24.154 13.819 L 24.413 14.11 C 24.507 14.026 24.554 13.903 24.541 13.778 C 24.528 13.654 24.456 13.543 24.347 13.481 L 24.154 13.819 Z M 0 0 L -0.389 0 L -0.389 25.501 L 0 25.501 L 0.389 25.501 L 0.389 0 L 0 0 Z M 0 25.501 L -0.389 25.501 C -0.393 28.33 0.575 31.07 2.344 33.232 L 2.645 32.985 L 2.947 32.739 C 1.294 30.718 0.386 28.153 0.389 25.502 L 0 25.501 Z M 2.645 32.985 L 2.904 33.276 L 24.413 14.11 L 24.154 13.819 L 23.895 13.528 L 2.386 32.694 L 2.645 32.985 Z M 24.154 13.819 L 24.347 13.481 L 0.193 -0.338 L 0 0 L -0.193 0.338 L 23.961 14.157 L 24.154 13.819 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.154,
    height: 32.985,
    viewBox: "0 0 24.154 32.985",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.179,
      top: 30.002,
      width: 24.154,
      height: 32.985,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.154 0 L 0 13.819 L 21.509 32.985 C 23.22 30.894 24.157 28.242 24.154 25.501 L 24.154 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 24.154 0 L 24.543 0 C 24.543 -0.139 24.47 -0.267 24.349 -0.337 C 24.229 -0.407 24.081 -0.407 23.961 -0.338 L 24.154 0 Z M 0 13.819 L -0.193 13.481 C -0.302 13.543 -0.374 13.654 -0.387 13.778 C -0.4 13.903 -0.353 14.026 -0.259 14.11 L 0 13.819 Z M 21.509 32.985 L 21.25 33.276 C 21.329 33.347 21.433 33.382 21.539 33.373 C 21.645 33.365 21.743 33.314 21.81 33.232 L 21.509 32.985 Z M 24.154 25.501 L 23.765 25.501 L 23.765 25.502 L 24.154 25.501 Z M 24.154 0 L 23.961 -0.338 L -0.193 13.481 L 0 13.819 L 0.193 14.157 L 24.347 0.338 L 24.154 0 Z M 0 13.819 L -0.259 14.11 L 21.25 33.276 L 21.509 32.985 L 21.768 32.694 L 0.259 13.528 L 0 13.819 Z M 21.509 32.985 L 21.81 33.232 C 23.579 31.07 24.547 28.33 24.543 25.501 L 24.154 25.501 L 23.765 25.502 C 23.768 28.153 22.86 30.718 21.207 32.739 L 21.509 32.985 Z M 24.154 25.501 L 24.543 25.501 L 24.543 0 L 24.154 0 L 23.765 0 L 23.765 25.501 L 24.154 25.501 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 56.043,
    height: 27.432,
    viewBox: "0 0 56.043 27.432",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.645,
      top: 39.647,
      width: 56.043,
      height: 27.432,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.534 4.173 L 31.239 1.238 C 29.39 -0.413 26.652 -0.413 24.803 1.238 L 21.509 4.173 L 0 23.34 C 2.04 25.841 5.079 27.432 8.478 27.432 L 47.564 27.432 C 50.964 27.432 54.002 25.841 56.043 23.34 L 34.534 4.173 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 34.534 4.173 L 34.793 3.883 L 34.793 3.883 L 34.534 4.173 Z M 31.239 1.238 L 30.98 1.528 L 30.98 1.529 L 31.239 1.238 Z M 24.803 1.238 L 25.062 1.529 L 25.063 1.528 L 24.803 1.238 Z M 21.509 4.173 L 21.25 3.883 L 21.25 3.883 L 21.509 4.173 Z M 0 23.34 L -0.259 23.049 C -0.415 23.188 -0.434 23.424 -0.302 23.586 L 0 23.34 Z M 56.043 23.34 L 56.344 23.586 C 56.476 23.424 56.457 23.188 56.302 23.049 L 56.043 23.34 Z M 34.534 4.173 L 34.793 3.883 L 31.499 0.947 L 31.239 1.238 L 30.98 1.529 L 34.275 4.464 L 34.534 4.173 Z M 31.239 1.238 L 31.499 0.947 C 29.502 -0.835 26.541 -0.835 24.544 0.947 L 24.803 1.238 L 25.063 1.528 C 26.764 0.01 29.279 0.01 30.98 1.528 L 31.239 1.238 Z M 24.803 1.238 L 24.544 0.947 L 21.25 3.883 L 21.509 4.173 L 21.768 4.464 L 25.062 1.529 L 24.803 1.238 Z M 21.509 4.173 L 21.25 3.883 L -0.259 23.049 L 0 23.34 L 0.259 23.63 L 21.768 4.464 L 21.509 4.173 Z M 0 23.34 L -0.302 23.586 C 1.807 26.171 4.953 27.822 8.478 27.822 L 8.478 27.432 L 8.478 27.043 C 5.204 27.043 2.274 25.511 0.302 23.094 L 0 23.34 Z M 8.478 27.432 L 8.478 27.822 L 47.564 27.822 L 47.564 27.432 L 47.564 27.043 L 8.478 27.043 L 8.478 27.432 Z M 47.564 27.432 L 47.564 27.822 C 51.089 27.822 54.236 26.171 56.344 23.586 L 56.043 23.34 L 55.741 23.094 C 53.769 25.511 50.838 27.043 47.564 27.043 L 47.564 27.432 Z M 56.043 23.34 L 56.302 23.049 L 34.793 3.883 L 34.534 4.173 L 34.275 4.464 L 55.784 23.63 L 56.043 23.34 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 59.009,
      top: 44.389,
      width: 4.576,
      height: 1.103,
      borderRadius: 0.5407169461250305,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.389px rgb(27,27,27), 0 0 0 0.389px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 59.009,
      top: 48.802,
      width: 6.765,
      height: 1.103,
      borderRadius: 0.5407169461250305,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.389px rgb(27,27,27), 0 0 0 0.389px rgb(27,27,27)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 827.843,
      top: 282.913,
      width: 81.559,
      height: 85.696,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.559,
      height: 84.427,
      borderRadius: "50%",
      backgroundColor: "var(--w)",
      boxShadow: "inset 0 0 0 0.546px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.805,
      top: 22.218,
      width: 62.242,
      height: 63.478,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.040,
    height: 44.994,
    viewBox: "0 0 58.040 44.994",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58.04,
      height: 44.994,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.696 25.18 L 34.963 2.562 C 31.681 -0.854 26.359 -0.854 23.077 2.562 L 1.232 25.296 C 0.442 26.119 0 27.232 0 28.391 L 0 28.391 L 29.02 44.994 L 58.04 28.391 L 58.04 28.391 C 57.999 27.184 57.519 26.037 56.696 25.18 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 56.696 25.18 L 56.962 24.924 L 56.962 24.924 L 56.696 25.18 Z M 34.963 2.562 L 35.229 2.307 L 35.229 2.307 L 34.963 2.562 Z M 23.077 2.562 L 22.811 2.307 L 22.811 2.307 L 23.077 2.562 Z M 1.232 25.296 L 0.966 25.041 L 0.966 25.041 L 1.232 25.296 Z M 0 28.391 M 0 28.391 M 29.02 44.994 L 28.837 45.314 C 28.95 45.379 29.09 45.379 29.203 45.314 L 29.02 44.994 Z M 58.04 28.391 M 58.04 28.391 M 56.696 25.18 L 56.962 24.924 L 35.229 2.307 L 34.963 2.562 L 34.698 2.817 L 56.431 25.435 L 56.696 25.18 Z M 34.963 2.562 L 35.229 2.307 C 31.802 -1.26 26.238 -1.26 22.811 2.307 L 23.077 2.562 L 23.342 2.817 C 26.48 -0.448 31.56 -0.448 34.698 2.817 L 34.963 2.562 Z M 23.077 2.562 L 22.811 2.307 L 0.966 25.041 L 1.232 25.296 L 1.498 25.552 L 23.342 2.817 L 23.077 2.562 Z M 1.232 25.296 L 0.966 25.041 C 0.109 25.934 -0.369 27.138 -0.368 28.391 L 0 28.391 L 0.368 28.391 C 0.368 27.325 0.775 26.304 1.498 25.551 L 1.232 25.296 Z M 0 28.391 M 0 28.391 L -0.183 28.711 L 28.837 45.314 L 29.02 44.994 L 29.203 44.674 L 0.183 28.071 L 0 28.391 Z M 29.02 44.994 L 29.203 45.314 L 58.223 28.711 L 58.04 28.391 L 57.857 28.071 L 28.837 44.674 L 29.02 44.994 Z M 58.04 28.391 M 58.04 28.391 L 58.408 28.378 C 58.364 27.082 57.849 25.848 56.962 24.924 L 56.696 25.18 L 56.43 25.435 C 57.189 26.225 57.634 27.285 57.672 28.404 L 58.04 28.391 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.651,
      top: 2.775,
      width: 40.204,
      height: 41.84,
      borderRadius: 6.755384922027588,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.368px rgb(27,27,27), 0 0 0 0.368px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.383,
      top: 4.832,
      width: 45.274,
      height: 47.117,
      borderRadius: 6.755384922027588,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.383,
      top: 4.832,
      width: 45.274,
      height: 47.117,
      borderRadius: 6.755384922027588,
      boxShadow: "inset 0 0 0 0.368px rgb(27,27,27), 0 0 0 0.368px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.814,
      top: 14.363,
      width: 34.412,
      height: 4.456,
      borderRadius: 0.7064914107322693,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.368px rgb(27,27,27), 0 0 0 0.368px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.814,
      top: 22.317,
      width: 23.492,
      height: 4.456,
      borderRadius: 0.7064914107322693,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.368px rgb(27,27,27), 0 0 0 0.368px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 22.857,
    height: 31.214,
    viewBox: "0 0 22.857 31.214",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 28.391,
      width: 22.857,
      height: 31.214,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 24.132 C -0.003 26.725 0.884 29.235 2.503 31.214 L 22.857 13.077 L 0 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.183 -0.32 C 0.069 -0.385 -0.071 -0.385 -0.185 -0.319 C -0.299 -0.253 -0.368 -0.131 -0.368 0 L 0 0 Z M 0 24.132 L 0.369 24.132 L 0.369 24.132 L 0 24.132 Z M 2.503 31.214 L 2.218 31.448 C 2.282 31.525 2.374 31.574 2.474 31.582 C 2.574 31.589 2.673 31.556 2.748 31.489 L 2.503 31.214 Z M 22.857 13.077 L 23.102 13.352 C 23.191 13.273 23.236 13.157 23.224 13.039 C 23.211 12.921 23.143 12.816 23.04 12.757 L 22.857 13.077 Z M 0 0 L -0.368 0 L -0.368 24.132 L 0 24.132 L 0.369 24.132 L 0.369 0 L 0 0 Z M 0 24.132 L -0.368 24.132 C -0.372 26.809 0.544 29.402 2.218 31.448 L 2.503 31.214 L 2.788 30.981 C 1.224 29.069 0.366 26.642 0.369 24.132 L 0 24.132 Z M 2.503 31.214 L 2.748 31.489 L 23.102 13.352 L 22.857 13.077 L 22.612 12.802 L 2.258 30.939 L 2.503 31.214 Z M 22.857 13.077 L 23.04 12.757 L 0.183 -0.32 L 0 0 L -0.183 0.32 L 22.674 13.397 L 22.857 13.077 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.857,
    height: 31.214,
    viewBox: "0 0 22.857 31.214",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.183,
      top: 28.391,
      width: 22.857,
      height: 31.214,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.857 0 L 0 13.077 L 20.354 31.214 C 21.973 29.235 22.86 26.725 22.857 24.132 L 22.857 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22.857 0 L 23.226 0 C 23.226 -0.131 23.156 -0.253 23.042 -0.319 C 22.928 -0.385 22.788 -0.385 22.674 -0.32 L 22.857 0 Z M 0 13.077 L -0.183 12.757 C -0.286 12.816 -0.354 12.921 -0.367 13.039 C -0.379 13.157 -0.334 13.273 -0.245 13.352 L 0 13.077 Z M 20.354 31.214 L 20.109 31.489 C 20.184 31.556 20.283 31.589 20.383 31.582 C 20.483 31.574 20.575 31.525 20.639 31.448 L 20.354 31.214 Z M 22.857 24.132 L 22.489 24.132 L 22.489 24.132 L 22.857 24.132 Z M 22.857 0 L 22.674 -0.32 L -0.183 12.757 L 0 13.077 L 0.183 13.397 L 23.04 0.32 L 22.857 0 Z M 0 13.077 L -0.245 13.352 L 20.109 31.489 L 20.354 31.214 L 20.599 30.939 L 0.245 12.802 L 0 13.077 Z M 20.354 31.214 L 20.639 31.448 C 22.313 29.402 23.229 26.809 23.226 24.132 L 22.857 24.132 L 22.489 24.132 C 22.492 26.642 21.633 29.069 20.069 30.981 L 20.354 31.214 Z M 22.857 24.132 L 23.226 24.132 L 23.226 0 L 22.857 0 L 22.489 0 L 22.489 24.132 L 22.857 24.132 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 53.034,
    height: 25.959,
    viewBox: "0 0 53.034 25.959",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.503,
      top: 37.519,
      width: 53.034,
      height: 25.959,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.68 3.949 L 29.562 1.171 C 27.812 -0.39 25.221 -0.39 23.472 1.171 L 20.354 3.949 L 0 22.087 C 1.931 24.453 4.806 25.959 8.023 25.959 L 45.011 25.959 C 48.227 25.959 51.103 24.453 53.034 22.087 L 32.68 3.949 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 32.68 3.949 L 32.925 3.674 L 32.925 3.674 L 32.68 3.949 Z M 29.562 1.171 L 29.317 1.446 L 29.317 1.446 L 29.562 1.171 Z M 23.472 1.171 L 23.717 1.446 L 23.717 1.446 L 23.472 1.171 Z M 20.354 3.949 L 20.109 3.674 L 20.109 3.674 L 20.354 3.949 Z M 0 22.087 L -0.245 21.811 C -0.392 21.943 -0.41 22.167 -0.286 22.319 L 0 22.087 Z M 53.034 22.087 L 53.319 22.319 C 53.444 22.167 53.426 21.943 53.279 21.811 L 53.034 22.087 Z M 32.68 3.949 L 32.925 3.674 L 29.807 0.896 L 29.562 1.171 L 29.317 1.446 L 32.435 4.224 L 32.68 3.949 Z M 29.562 1.171 L 29.808 0.896 C 27.918 -0.79 25.116 -0.79 23.226 0.896 L 23.472 1.171 L 23.717 1.446 C 25.327 0.009 27.707 0.009 29.317 1.446 L 29.562 1.171 Z M 23.472 1.171 L 23.226 0.896 L 20.109 3.674 L 20.354 3.949 L 20.599 4.224 L 23.717 1.446 L 23.472 1.171 Z M 20.354 3.949 L 20.109 3.674 L -0.245 21.811 L 0 22.087 L 0.245 22.362 L 20.599 4.224 L 20.354 3.949 Z M 0 22.087 L -0.286 22.319 C 1.71 24.765 4.687 26.328 8.023 26.328 L 8.023 25.959 L 8.023 25.591 C 4.925 25.591 2.152 24.141 0.286 21.854 L 0 22.087 Z M 8.023 25.959 L 8.023 26.328 L 45.011 26.328 L 45.011 25.959 L 45.011 25.591 L 8.023 25.591 L 8.023 25.959 Z M 45.011 25.959 L 45.011 26.328 C 48.346 26.328 51.324 24.765 53.319 22.319 L 53.034 22.087 L 52.748 21.854 C 50.882 24.141 48.109 25.591 45.011 25.591 L 45.011 25.959 Z M 53.034 22.087 L 53.279 21.811 L 32.925 3.674 L 32.68 3.949 L 32.435 4.224 L 52.788 22.362 L 53.034 22.087 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 55.84,
      top: 42.005,
      width: 4.33,
      height: 1.044,
      borderRadius: 0.5116849541664124,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.368px rgb(27,27,27), 0 0 0 0.368px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 55.84,
      top: 46.182,
      width: 6.402,
      height: 1.044,
      borderRadius: 0.5116849541664124,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.368px rgb(27,27,27), 0 0 0 0.368px rgb(27,27,27)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.103,
      top: 109.174,
      width: 87.028,
      height: 94.142,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.245,
    height: 2.286,
    viewBox: "0 0 2.245 2.286",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.527,
      top: 18.667,
      width: 2.245,
      height: 2.286,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.144 2.145 C -0.222 2.225 -0.221 2.352 -0.141 2.431 C -0.062 2.509 0.066 2.508 0.144 2.428 L 0 2.286 L -0.144 2.145 Z M 2.389 0.141 C 2.467 0.062 2.466 -0.066 2.386 -0.144 C 2.307 -0.222 2.179 -0.221 2.101 -0.141 L 2.245 0 L 2.389 0.141 Z M 0 2.286 L 0.144 2.428 L 2.389 0.141 L 2.245 0 L 2.101 -0.141 L -0.144 2.145 L 0 2.286 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.881,
    height: 5.831,
    viewBox: "0 0 8.881 5.831",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.744,
      top: 77.209,
      width: 8.881,
      height: 5.831,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.027 0.14 C 9.104 0.059 9.101 -0.069 9.02 -0.146 C 8.94 -0.223 8.812 -0.22 8.735 -0.14 L 8.881 0 L 9.027 0.14 Z M -0.069 5.642 C -0.174 5.68 -0.228 5.796 -0.19 5.901 C -0.151 6.005 -0.035 6.059 0.069 6.021 L 0 5.831 L -0.069 5.642 Z M 8.881 0 L 8.735 -0.14 C 6.258 2.451 3.248 4.427 -0.069 5.642 L 0 5.831 L 0.069 6.021 C 3.446 4.785 6.508 2.774 9.027 0.14 L 8.881 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44.217,
      top: 17.549,
      width: 19.977,
      height: 21.216,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.977,
    height: 21.216,
    viewBox: "0 0 19.977 21.216",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.977,
      height: 21.216,
      color: "rgb(50,52,66)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.73 20.114 C 20.83 13.067 6.586 10.862 7.645 7.87 C 8.705 4.878 9.769 1.508 6.611 0.165 C 3.453 -1.177 1.13 6.106 1.13 6.106 L 0 11.961 L 1.96 16.46 L 19.977 21.216",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 6.842,
    height: 2.700,
    viewBox: "0 0 6.842 2.700",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.506,
      top: 5.646,
      width: 6.842,
      height: 2.7,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.303 C 0 1.303 3.677 -1.218 6.842 0.754 L 6.459 2.371 L 0.983 2.7 L 0 1.303 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.303 L -0.114 1.137 C -0.159 1.167 -0.189 1.214 -0.199 1.267 C -0.208 1.321 -0.196 1.375 -0.165 1.419 L 0 1.303 Z M 6.842 0.754 L 7.038 0.8 C 7.058 0.716 7.022 0.628 6.949 0.582 L 6.842 0.754 Z M 6.459 2.371 L 6.471 2.573 C 6.56 2.568 6.635 2.505 6.655 2.418 L 6.459 2.371 Z M 0.983 2.7 L 0.818 2.816 C 0.858 2.874 0.925 2.906 0.995 2.902 L 0.983 2.7 Z M 0 1.303 C 0.114 1.47 0.114 1.47 0.114 1.47 C 0.114 1.47 0.114 1.47 0.114 1.47 C 0.114 1.47 0.114 1.47 0.114 1.47 C 0.115 1.469 0.115 1.469 0.116 1.469 C 0.117 1.468 0.12 1.466 0.123 1.464 C 0.129 1.46 0.139 1.453 0.152 1.445 C 0.178 1.428 0.218 1.403 0.269 1.371 C 0.373 1.308 0.525 1.22 0.717 1.119 C 1.103 0.918 1.649 0.67 2.291 0.483 C 3.577 0.107 5.221 -0.019 6.735 0.925 L 6.842 0.754 L 6.949 0.582 C 5.298 -0.446 3.521 -0.297 2.177 0.095 C 1.504 0.292 0.933 0.551 0.531 0.761 C 0.329 0.866 0.169 0.959 0.059 1.026 C 0.004 1.06 -0.039 1.087 -0.068 1.106 C -0.082 1.116 -0.094 1.123 -0.101 1.128 C -0.105 1.131 -0.108 1.133 -0.111 1.134 C -0.112 1.135 -0.112 1.135 -0.113 1.136 C -0.113 1.136 -0.114 1.136 -0.114 1.136 C -0.114 1.136 -0.114 1.137 -0.114 1.137 C -0.114 1.137 -0.114 1.137 0 1.303 Z M 6.842 0.754 L 6.645 0.707 L 6.262 2.325 L 6.459 2.371 L 6.655 2.418 L 7.038 0.8 L 6.842 0.754 Z M 6.459 2.371 L 6.447 2.17 L 0.971 2.499 L 0.983 2.7 L 0.995 2.902 L 6.471 2.573 L 6.459 2.371 Z M 0.983 2.7 L 1.148 2.584 L 0.165 1.187 L 0 1.303 L -0.165 1.419 L 0.818 2.816 L 0.983 2.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 57.367,
    height: 48.636,
    viewBox: "0 0 57.367 48.636",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.78,
      top: 26.852,
      width: 57.367,
      height: 48.636,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.25 45.18 C 1.485 41.972 -10.458 -0.128 29.578 0 C 69.614 0.129 54.615 48.636 54.615 48.636 L 2.25 45.18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.78,
      top: 26.852,
      width: 57.367,
      height: 48.636,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57.366973876953125,
      height: 48.636138916015625,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.507,
      top: -7.32,
      width: 30.96,
      height: 33.397,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.597,
      height: 15.684,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.62,
      top: 1.995,
      width: 15.357,
      height: 11.694,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.62,
      top: 1.995,
      width: 15.357,
      height: 11.694,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.356651306152344,
      height: 11.693597793579102,
      clipPath: "ellipse(7.678px 5.847px at 7.678px 5.847px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6.242,
      top: 0.715,
      width: 18.935,
      height: 9.556,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.62,
      top: 1.995,
      width: 15.357,
      height: 11.694,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1.879,
    height: 9.885,
    viewBox: "0 0 1.879 9.885",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.081,
      top: 23.512,
      width: 1.879,
      height: 9.885,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.209 0 C 1.147 2.542 0 9.885 0 9.885 L 1.879 4.674 L 1.209 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.209 0 L 1.409 -0.029 C 1.394 -0.133 1.302 -0.208 1.197 -0.202 C 1.092 -0.195 1.01 -0.11 1.007 -0.005 L 1.209 0 Z M 0 9.885 L -0.199 9.853 C -0.216 9.956 -0.151 10.054 -0.05 10.08 C 0.051 10.106 0.155 10.051 0.19 9.953 L 0 9.885 Z M 1.879 4.674 L 2.069 4.743 C 2.08 4.712 2.083 4.679 2.079 4.646 L 1.879 4.674 Z M 1.209 0 L 1.007 -0.005 C 0.977 1.253 0.676 3.712 0.381 5.868 C 0.234 6.944 0.089 7.94 -0.019 8.668 C -0.074 9.032 -0.119 9.328 -0.15 9.534 C -0.166 9.636 -0.178 9.716 -0.187 9.771 C -0.191 9.798 -0.194 9.818 -0.196 9.832 C -0.197 9.839 -0.198 9.845 -0.199 9.848 C -0.199 9.85 -0.199 9.851 -0.199 9.852 C -0.199 9.853 -0.199 9.853 -0.199 9.853 C -0.199 9.853 -0.199 9.853 -0.199 9.853 C -0.199 9.853 -0.199 9.853 0 9.885 C 0.199 9.916 0.199 9.916 0.2 9.916 C 0.2 9.916 0.2 9.915 0.2 9.915 C 0.2 9.915 0.2 9.915 0.2 9.914 C 0.2 9.913 0.2 9.912 0.2 9.91 C 0.201 9.907 0.202 9.901 0.203 9.894 C 0.205 9.88 0.208 9.86 0.212 9.832 C 0.221 9.778 0.233 9.698 0.249 9.595 C 0.281 9.389 0.326 9.092 0.38 8.727 C 0.489 7.999 0.634 7.001 0.781 5.923 C 1.076 3.773 1.38 1.29 1.411 0.005 L 1.209 0 Z M 0 9.885 L 0.19 9.953 L 2.069 4.743 L 1.879 4.674 L 1.689 4.606 L -0.19 9.816 L 0 9.885 Z M 1.879 4.674 L 2.079 4.646 L 1.409 -0.029 L 1.209 0 L 1.009 0.029 L 1.679 4.703 L 1.879 4.674 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 57.367,
    height: 48.636,
    viewBox: "0 0 57.367 48.636",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.78,
      top: 26.852,
      width: 57.367,
      height: 48.636,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.25 45.18 L 2.054 45.227 C 2.074 45.313 2.148 45.375 2.237 45.381 L 2.25 45.18 Z M 54.615 48.636 L 54.602 48.838 C 54.695 48.844 54.78 48.785 54.808 48.696 L 54.615 48.636 Z M 2.25 45.18 L 2.446 45.133 C 2.062 43.52 -1.102 32.235 0.813 21.374 C 1.769 15.948 3.99 10.645 8.444 6.706 C 12.897 2.767 19.604 0.17 29.578 0.202 L 29.578 0 L 29.579 -0.202 C 19.534 -0.234 12.721 2.383 8.177 6.403 C 3.634 10.421 1.382 15.82 0.415 21.304 C -1.517 32.262 1.673 43.631 2.054 45.227 L 2.25 45.18 Z M 29.578 0 L 29.578 0.202 C 39.543 0.234 46.054 3.275 50.232 7.791 C 54.415 12.312 56.284 18.339 56.909 24.387 C 57.534 30.433 56.913 36.481 56.134 41.021 C 55.745 43.29 55.316 45.18 54.985 46.503 C 54.82 47.164 54.679 47.683 54.579 48.037 C 54.529 48.213 54.49 48.349 54.463 48.44 C 54.45 48.485 54.439 48.52 54.432 48.542 C 54.429 48.554 54.426 48.563 54.425 48.568 C 54.424 48.571 54.423 48.573 54.423 48.575 C 54.422 48.575 54.422 48.576 54.422 48.576 C 54.422 48.576 54.422 48.576 54.615 48.636 C 54.808 48.696 54.808 48.696 54.808 48.695 C 54.808 48.695 54.808 48.694 54.809 48.693 C 54.809 48.692 54.81 48.689 54.811 48.686 C 54.813 48.68 54.815 48.671 54.819 48.659 C 54.826 48.636 54.837 48.601 54.85 48.554 C 54.878 48.462 54.918 48.325 54.968 48.146 C 55.069 47.789 55.211 47.266 55.377 46.601 C 55.71 45.27 56.141 43.37 56.532 41.089 C 57.314 36.53 57.941 30.442 57.311 24.346 C 56.681 18.25 54.793 12.126 50.529 7.517 C 46.259 2.902 39.631 -0.169 29.579 -0.202 L 29.578 0 Z M 54.615 48.636 L 54.628 48.435 L 2.263 44.978 L 2.25 45.18 L 2.237 45.381 L 54.602 48.838 L 54.615 48.636 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.341,
    height: 10.569,
    viewBox: "0 0 11.341 10.569",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.028,
      top: 26.162,
      width: 11.341,
      height: 10.569,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.341 6.398 C 11.139 11.693 1.963 13.578 0 2.07 C 0 2.07 5.603 -1.149 5.695 0.442 C 5.99 5.519 11.341 6.398 11.341 6.398 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11.341 6.398 L 11.543 6.406 C 11.547 6.304 11.475 6.215 11.374 6.199 L 11.341 6.398 Z M 0 2.07 L -0.101 1.895 C -0.174 1.937 -0.213 2.021 -0.199 2.104 L 0 2.07 Z M 5.695 0.442 L 5.897 0.43 L 5.897 0.43 L 5.695 0.442 Z M 11.341 6.398 L 11.14 6.391 C 11.043 8.909 8.814 10.628 6.355 10.335 C 3.914 10.044 1.172 7.742 0.199 2.036 L 0 2.07 L -0.199 2.104 C 0.791 7.906 3.619 10.416 6.307 10.736 C 8.978 11.054 11.437 9.182 11.543 6.406 L 11.341 6.398 Z M 0 2.07 C 0.101 2.245 0.101 2.245 0.101 2.245 C 0.101 2.245 0.101 2.245 0.101 2.245 C 0.101 2.245 0.101 2.245 0.101 2.245 C 0.102 2.244 0.103 2.244 0.104 2.243 C 0.107 2.242 0.111 2.239 0.116 2.236 C 0.126 2.23 0.142 2.222 0.162 2.21 C 0.203 2.187 0.263 2.154 0.339 2.112 C 0.491 2.027 0.709 1.908 0.971 1.771 C 1.495 1.495 2.193 1.145 2.892 0.845 C 3.596 0.543 4.285 0.299 4.795 0.225 C 5.054 0.187 5.237 0.198 5.349 0.243 C 5.401 0.263 5.432 0.289 5.452 0.316 C 5.472 0.343 5.489 0.385 5.493 0.453 L 5.695 0.442 L 5.897 0.43 C 5.889 0.299 5.852 0.18 5.779 0.079 C 5.707 -0.021 5.608 -0.089 5.498 -0.133 C 5.286 -0.217 5.017 -0.216 4.737 -0.175 C 4.171 -0.093 3.442 0.17 2.733 0.474 C 2.02 0.78 1.312 1.135 0.783 1.413 C 0.518 1.552 0.298 1.673 0.143 1.758 C 0.066 1.801 0.005 1.835 -0.036 1.859 C -0.057 1.87 -0.073 1.879 -0.084 1.885 C -0.089 1.889 -0.093 1.891 -0.096 1.893 C -0.098 1.893 -0.099 1.894 -0.099 1.894 C -0.1 1.895 -0.1 1.895 -0.1 1.895 C -0.1 1.895 -0.1 1.895 -0.101 1.895 C -0.101 1.895 -0.101 1.895 0 2.07 Z M 5.695 0.442 L 5.493 0.453 C 5.646 3.075 7.109 4.617 8.522 5.495 C 9.227 5.934 9.922 6.208 10.439 6.374 C 10.698 6.457 10.914 6.512 11.065 6.547 C 11.141 6.565 11.201 6.577 11.242 6.585 C 11.263 6.589 11.279 6.592 11.29 6.594 C 11.296 6.595 11.3 6.596 11.303 6.597 C 11.305 6.597 11.306 6.597 11.307 6.597 C 11.307 6.597 11.308 6.597 11.308 6.597 C 11.308 6.597 11.308 6.597 11.308 6.597 C 11.309 6.597 11.309 6.597 11.341 6.398 C 11.374 6.199 11.374 6.199 11.374 6.199 C 11.374 6.199 11.374 6.199 11.374 6.199 C 11.374 6.199 11.374 6.199 11.374 6.199 C 11.373 6.199 11.373 6.199 11.372 6.199 C 11.37 6.198 11.366 6.198 11.362 6.197 C 11.353 6.195 11.339 6.193 11.32 6.189 C 11.283 6.182 11.227 6.17 11.156 6.154 C 11.014 6.121 10.809 6.068 10.562 5.989 C 10.067 5.831 9.405 5.569 8.735 5.152 C 7.399 4.322 6.039 2.885 5.897 0.43 L 5.695 0.442 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.776,
    height: 10.446,
    viewBox: "0 0 11.776 10.446",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.321,
      top: 26.173,
      width: 11.776,
      height: 10.446,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.388 C 0.202 11.683 8.99 13.21 11.776 2.166 C 11.776 2.166 5.739 -1.16 5.646 0.431 C 5.351 5.508 0 6.388 0 6.388 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.388 L -0.033 6.188 C -0.133 6.205 -0.206 6.294 -0.202 6.395 L 0 6.388 Z M 11.776 2.166 L 11.972 2.216 C 11.994 2.127 11.954 2.034 11.873 1.989 L 11.776 2.166 Z M 5.646 0.431 L 5.848 0.443 L 5.848 0.443 L 5.646 0.431 Z M 0 6.388 L -0.202 6.395 C -0.096 9.172 2.268 10.955 4.945 10.604 C 7.628 10.253 10.567 7.784 11.972 2.216 L 11.776 2.166 L 11.58 2.117 C 10.199 7.593 7.351 9.882 4.893 10.204 C 2.429 10.526 0.298 8.898 0.202 6.38 L 0 6.388 Z M 11.776 2.166 C 11.873 1.989 11.873 1.989 11.873 1.989 C 11.873 1.989 11.873 1.989 11.873 1.989 C 11.873 1.989 11.872 1.989 11.872 1.989 C 11.871 1.988 11.87 1.988 11.869 1.987 C 11.866 1.985 11.861 1.983 11.855 1.98 C 11.844 1.973 11.827 1.964 11.804 1.952 C 11.76 1.928 11.694 1.892 11.611 1.848 C 11.445 1.76 11.207 1.635 10.922 1.491 C 10.353 1.203 9.59 0.835 8.823 0.516 C 8.061 0.198 7.278 -0.077 6.674 -0.169 C 6.375 -0.214 6.091 -0.22 5.869 -0.142 C 5.754 -0.101 5.649 -0.036 5.571 0.064 C 5.493 0.164 5.453 0.286 5.445 0.419 L 5.646 0.431 L 5.848 0.443 C 5.852 0.377 5.87 0.338 5.89 0.313 C 5.91 0.286 5.944 0.26 6.003 0.239 C 6.13 0.195 6.333 0.188 6.613 0.231 C 7.166 0.315 7.91 0.573 8.668 0.888 C 9.422 1.202 10.175 1.566 10.74 1.852 C 11.022 1.994 11.257 2.117 11.422 2.205 C 11.504 2.248 11.568 2.283 11.612 2.307 C 11.634 2.319 11.65 2.328 11.662 2.334 C 11.667 2.337 11.672 2.339 11.674 2.341 C 11.676 2.342 11.677 2.342 11.677 2.343 C 11.678 2.343 11.678 2.343 11.678 2.343 C 11.678 2.343 11.678 2.343 11.678 2.343 C 11.678 2.343 11.678 2.343 11.776 2.166 Z M 5.646 0.431 L 5.445 0.419 C 5.302 2.875 3.942 4.311 2.606 5.142 C 1.936 5.558 1.274 5.82 0.779 5.979 C 0.532 6.058 0.327 6.11 0.185 6.143 C 0.114 6.16 0.059 6.171 0.021 6.178 C 0.003 6.182 -0.011 6.185 -0.02 6.186 C -0.025 6.187 -0.028 6.188 -0.03 6.188 C -0.031 6.188 -0.032 6.188 -0.032 6.188 C -0.033 6.188 -0.033 6.188 -0.033 6.188 C -0.033 6.188 -0.033 6.188 -0.033 6.188 C -0.033 6.188 -0.033 6.188 0 6.388 C 0.033 6.587 0.033 6.587 0.033 6.587 C 0.033 6.587 0.033 6.587 0.033 6.587 C 0.034 6.587 0.034 6.587 0.034 6.587 C 0.035 6.586 0.037 6.586 0.038 6.586 C 0.041 6.585 0.045 6.585 0.051 6.584 C 0.062 6.582 0.078 6.579 0.099 6.575 C 0.14 6.567 0.2 6.554 0.276 6.537 C 0.428 6.502 0.643 6.446 0.902 6.363 C 1.42 6.198 2.114 5.923 2.819 5.485 C 4.233 4.606 5.696 3.065 5.848 0.443 L 5.646 0.431 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.641,
    height: 33.680,
    viewBox: "0 0 46.641 33.680",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.606,
      top: 45.659,
      width: 46.641,
      height: 33.68,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.088 33.68 L 2.553 33.68 L 0.022 4.779 C -0.207 2.161 1.36 0 3.525 0 L 43.116 0 C 45.282 0 46.848 2.161 46.619 4.779 L 44.088 33.68 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.606,
      top: 45.659,
      width: 46.641,
      height: 33.68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 46.641422271728516,
      height: 33.68003463745117,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 57.762,
    height: 21.355,
    viewBox: "0 0 57.762 21.355",
    fill: "none",
    style: {
      position: "absolute",
      left: -4.837,
      top: 14.477,
      width: 57.762,
      height: 21.355,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.491 C 8.886 -3.081 23.149 11.35 30.694 15.276 C 38.24 19.203 44.587 -2.77 54.9 0.294 C 65.214 3.358 44.336 19.747 44.336 19.747 L 17.221 21.355",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 46.641,
    height: 33.680,
    viewBox: "0 0 46.641 33.680",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.606,
      top: 45.659,
      width: 46.641,
      height: 33.68,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.088 33.68 L 44.088 33.882 C 44.193 33.882 44.28 33.802 44.29 33.698 L 44.088 33.68 Z M 2.553 33.68 L 2.352 33.698 C 2.361 33.802 2.448 33.882 2.553 33.882 L 2.553 33.68 Z M 0.022 4.779 L 0.223 4.761 L 0.223 4.761 L 0.022 4.779 Z M 46.619 4.779 L 46.418 4.761 L 46.418 4.761 L 46.619 4.779 Z M 44.088 33.68 L 44.088 33.478 L 2.553 33.478 L 2.553 33.68 L 2.553 33.882 L 44.088 33.882 L 44.088 33.68 Z M 2.553 33.68 L 2.754 33.662 L 0.223 4.761 L 0.022 4.779 L -0.179 4.797 L 2.352 33.698 L 2.553 33.68 Z M 0.022 4.779 L 0.223 4.761 C 0 2.215 1.52 0.202 3.525 0.202 L 3.525 0 L 3.525 -0.202 C 1.199 -0.202 -0.414 2.106 -0.179 4.797 L 0.022 4.779 Z M 3.525 0 L 3.525 0.202 L 43.116 0.202 L 43.116 0 L 43.116 -0.202 L 3.525 -0.202 L 3.525 0 Z M 43.116 0 L 43.116 0.202 C 45.122 0.202 46.641 2.215 46.418 4.761 L 46.619 4.779 L 46.82 4.797 C 47.056 2.106 45.442 -0.202 43.116 -0.202 L 43.116 0 Z M 46.619 4.779 L 46.418 4.761 L 43.887 33.662 L 44.088 33.68 L 44.29 33.698 L 46.82 4.797 L 46.619 4.779 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.389,
    height: 4.744,
    viewBox: "0 0 5.389 4.744",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.535,
      top: 58.154,
      width: 5.389,
      height: 4.744,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.379 2.586 C 5.258 3.84 4.039 4.769 2.651 4.743 C 1.262 4.717 0.079 3.743 0.004 2.485 C -0.077 1.128 1.144 -0.029 2.738 0.001 C 4.333 0.03 5.511 1.233 5.379 2.586 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.379 2.586 L 5.178 2.566 L 5.178 2.566 L 5.379 2.586 Z M 0.004 2.485 L 0.205 2.473 L 0.205 2.473 L 0.004 2.485 Z M 5.379 2.586 L 5.178 2.566 C 5.069 3.693 3.962 4.566 2.655 4.542 L 2.651 4.743 L 2.647 4.945 C 4.117 4.973 5.446 3.987 5.58 2.605 L 5.379 2.586 Z M 2.651 4.743 L 2.655 4.542 C 1.347 4.517 0.273 3.603 0.205 2.473 L 0.004 2.485 L -0.198 2.497 C -0.115 3.882 1.177 4.918 2.647 4.945 L 2.651 4.743 Z M 0.004 2.485 L 0.205 2.473 C 0.133 1.257 1.233 0.174 2.735 0.202 L 2.738 0.001 L 2.742 -0.201 C 1.055 -0.233 -0.287 0.999 -0.198 2.497 L 0.004 2.485 Z M 2.738 0.001 L 2.735 0.202 C 4.237 0.231 5.296 1.354 5.178 2.566 L 5.379 2.586 L 5.58 2.605 C 5.725 1.111 4.429 -0.17 2.742 -0.201 L 2.738 0.001 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.668,
    height: 9.707,
    viewBox: "0 0 9.668 9.707",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.462,
      top: 83.905,
      width: 9.668,
      height: 9.707,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.637 0.434 L 8.661 0 C 8.661 0 14.023 6.793 0 9.707 L 5.637 0.434 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.637 0.434 L 5.608 0.234 C 5.548 0.243 5.495 0.278 5.464 0.329 L 5.637 0.434 Z M 8.661 0 L 8.82 -0.125 C 8.775 -0.182 8.704 -0.21 8.633 -0.2 L 8.661 0 Z M 0 9.707 L -0.173 9.602 C -0.214 9.671 -0.211 9.757 -0.165 9.823 C -0.119 9.889 -0.038 9.921 0.041 9.904 L 0 9.707 Z M 5.637 0.434 L 5.665 0.634 L 8.69 0.2 L 8.661 0 L 8.633 -0.2 L 5.608 0.234 L 5.637 0.434 Z M 8.661 0 C 8.503 0.125 8.503 0.125 8.503 0.125 C 8.503 0.125 8.503 0.125 8.503 0.125 C 8.503 0.125 8.503 0.125 8.503 0.125 C 8.503 0.126 8.504 0.127 8.505 0.128 C 8.507 0.131 8.51 0.135 8.515 0.141 C 8.523 0.152 8.537 0.17 8.553 0.194 C 8.587 0.241 8.636 0.312 8.693 0.404 C 8.807 0.588 8.957 0.855 9.094 1.184 C 9.368 1.844 9.587 2.742 9.391 3.721 C 9.004 5.658 6.952 8.056 -0.041 9.509 L 0 9.707 L 0.041 9.904 C 7.072 8.444 9.35 5.989 9.787 3.8 C 10.004 2.717 9.759 1.734 9.466 1.029 C 9.32 0.676 9.159 0.39 9.036 0.191 C 8.974 0.091 8.921 0.014 8.883 -0.04 C 8.864 -0.067 8.848 -0.087 8.838 -0.102 C 8.832 -0.109 8.828 -0.114 8.825 -0.118 C 8.824 -0.12 8.822 -0.122 8.821 -0.123 C 8.821 -0.124 8.821 -0.124 8.82 -0.124 C 8.82 -0.125 8.82 -0.125 8.82 -0.125 C 8.82 -0.125 8.82 -0.125 8.661 0 Z M 0 9.707 L 0.173 9.812 L 5.809 0.539 L 5.637 0.434 L 5.464 0.329 L -0.173 9.602 L 0 9.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.172,
    height: 10.323,
    viewBox: "0 0 9.172 10.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.462,
      top: 83.289,
      width: 9.172,
      height: 10.323,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.577 0.206 C 4.187 -0.005 6.422 -0.082 7.592 0.11 C 11.513 0.754 7.823 8.748 0 10.323 C 0 10.323 5.191 3.166 1.577 0.206 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.577 0.206 L 1.561 0.005 C 1.479 0.012 1.409 0.068 1.384 0.146 C 1.36 0.225 1.385 0.31 1.449 0.363 L 1.577 0.206 Z M 7.592 0.11 L 7.624 -0.089 L 7.624 -0.089 L 7.592 0.11 Z M 0 10.323 L -0.151 10.19 C -0.209 10.255 -0.218 10.349 -0.175 10.424 C -0.132 10.499 -0.045 10.538 0.04 10.521 L 0 10.323 Z M 1.577 0.206 L 1.593 0.408 C 4.208 0.196 6.418 0.122 7.559 0.309 L 7.592 0.11 L 7.624 -0.089 C 6.426 -0.286 4.166 -0.206 1.561 0.005 L 1.577 0.206 Z M 7.592 0.11 L 7.559 0.309 C 8.013 0.384 8.34 0.561 8.563 0.805 C 8.787 1.05 8.921 1.377 8.959 1.775 C 9.036 2.578 8.722 3.642 8.029 4.761 C 6.646 6.992 3.815 9.349 -0.04 10.125 L 0 10.323 L 0.04 10.521 C 4.009 9.722 6.934 7.295 8.372 4.974 C 9.089 3.817 9.45 2.663 9.361 1.737 C 9.316 1.27 9.156 0.855 8.861 0.533 C 8.566 0.21 8.151 -0.003 7.624 -0.089 L 7.592 0.11 Z M 0 10.323 L 0.151 10.457 C 0.158 10.449 0.163 10.442 0.163 10.442 C 0.164 10.442 0.164 10.441 0.164 10.441 C 0.164 10.441 0.164 10.441 0.165 10.44 C 0.165 10.439 0.166 10.438 0.168 10.436 C 0.17 10.432 0.174 10.427 0.179 10.42 C 0.189 10.406 0.204 10.385 0.223 10.358 C 0.261 10.303 0.316 10.224 0.384 10.122 C 0.52 9.918 0.711 9.624 0.928 9.262 C 1.362 8.539 1.903 7.542 2.332 6.448 C 2.759 5.357 3.079 4.156 3.057 3.032 C 3.035 1.901 2.665 0.836 1.705 0.05 L 1.577 0.206 L 1.449 0.363 C 2.296 1.056 2.633 1.996 2.653 3.04 C 2.674 4.089 2.374 5.233 1.956 6.301 C 1.538 7.366 1.008 8.343 0.582 9.055 C 0.368 9.41 0.182 9.698 0.048 9.897 C -0.018 9.997 -0.072 10.074 -0.108 10.126 C -0.126 10.152 -0.14 10.172 -0.15 10.185 C -0.154 10.192 -0.158 10.197 -0.16 10.2 C -0.161 10.202 -0.162 10.203 -0.163 10.204 C -0.163 10.204 -0.163 10.204 -0.163 10.204 C -0.163 10.204 -0.163 10.204 -0.163 10.204 C -0.163 10.204 -0.158 10.197 -0.151 10.19 L 0 10.323 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.908,
    height: 10.647,
    viewBox: "0 0 21.908 10.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.41,
      top: 83.495,
      width: 21.908,
      height: 10.647,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.798 1.957 C 4.798 1.957 13.944 0.541 20.629 0 C 24.243 2.959 19.052 10.117 19.052 10.117 C 18.555 10.217 18.053 10.29 17.548 10.334 C 8.708 11.104 1.146 10.312 0.123 9.485 C -0.9 8.657 4.798 1.957 4.798 1.957 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.798 1.957 L 4.767 1.757 C 4.719 1.764 4.676 1.789 4.644 1.826 L 4.798 1.957 Z M 20.629 0 L 20.757 -0.156 C 20.717 -0.189 20.665 -0.205 20.613 -0.201 L 20.629 0 Z M 19.052 10.117 L 19.092 10.315 C 19.143 10.304 19.189 10.275 19.218 10.231 L 19.052 10.117 Z M 17.548 10.334 L 17.566 10.535 L 17.566 10.535 L 17.548 10.334 Z M 4.798 1.957 C 4.829 2.156 4.829 2.156 4.829 2.156 C 4.829 2.156 4.829 2.156 4.829 2.156 C 4.83 2.156 4.83 2.156 4.831 2.156 C 4.832 2.156 4.833 2.155 4.835 2.155 C 4.84 2.154 4.846 2.153 4.855 2.152 C 4.873 2.149 4.899 2.145 4.933 2.14 C 5.001 2.13 5.103 2.114 5.234 2.094 C 5.497 2.055 5.88 1.997 6.361 1.927 C 7.322 1.786 8.673 1.592 10.233 1.381 C 13.355 0.96 17.308 0.471 20.645 0.201 L 20.629 0 L 20.613 -0.201 C 17.265 0.069 13.303 0.559 10.179 0.981 C 8.618 1.192 7.265 1.386 6.302 1.527 C 5.821 1.598 5.437 1.655 5.174 1.695 C 5.042 1.715 4.941 1.73 4.872 1.741 C 4.837 1.746 4.811 1.75 4.794 1.753 C 4.785 1.754 4.778 1.755 4.774 1.756 C 4.772 1.756 4.77 1.757 4.769 1.757 C 4.768 1.757 4.768 1.757 4.768 1.757 C 4.767 1.757 4.767 1.757 4.767 1.757 C 4.767 1.757 4.767 1.757 4.798 1.957 Z M 20.629 0 L 20.501 0.156 C 21.348 0.85 21.685 1.79 21.705 2.833 C 21.726 3.883 21.426 5.026 21.008 6.094 C 20.171 8.229 18.887 10.001 18.886 10.002 L 19.052 10.117 L 19.218 10.231 C 19.217 10.233 20.528 8.426 21.384 6.242 C 21.811 5.15 22.131 3.95 22.109 2.825 C 22.087 1.694 21.717 0.63 20.757 -0.156 L 20.629 0 Z M 19.052 10.117 L 19.012 9.919 C 18.522 10.018 18.028 10.089 17.531 10.133 L 17.548 10.334 L 17.566 10.535 C 18.078 10.49 18.588 10.417 19.092 10.315 L 19.052 10.117 Z M 17.548 10.334 L 17.531 10.133 C 13.121 10.517 9.031 10.511 5.917 10.307 C 4.36 10.205 3.051 10.053 2.07 9.876 C 1.579 9.788 1.174 9.693 0.862 9.597 C 0.544 9.499 0.346 9.405 0.25 9.328 L 0.123 9.485 L -0.004 9.642 C 0.156 9.771 0.418 9.883 0.743 9.983 C 1.076 10.086 1.498 10.183 1.998 10.273 C 2.999 10.454 4.324 10.607 5.891 10.71 C 9.025 10.915 13.136 10.921 17.566 10.535 L 17.548 10.334 Z M 0.123 9.485 L 0.25 9.328 C 0.22 9.304 0.171 9.22 0.227 8.967 C 0.279 8.731 0.408 8.42 0.601 8.053 C 0.984 7.322 1.593 6.417 2.24 5.529 C 2.886 4.644 3.564 3.783 4.081 3.143 C 4.339 2.824 4.557 2.559 4.71 2.375 C 4.787 2.283 4.848 2.211 4.889 2.162 C 4.909 2.138 4.925 2.119 4.936 2.106 C 4.941 2.1 4.945 2.095 4.948 2.092 C 4.949 2.09 4.95 2.089 4.951 2.089 C 4.951 2.088 4.951 2.088 4.952 2.088 C 4.952 2.088 4.952 2.087 4.952 2.087 C 4.952 2.087 4.952 2.087 4.798 1.957 C 4.644 1.826 4.644 1.826 4.644 1.826 C 4.644 1.826 4.644 1.826 4.644 1.826 C 4.644 1.826 4.643 1.827 4.643 1.827 C 4.642 1.828 4.641 1.829 4.64 1.831 C 4.637 1.834 4.633 1.839 4.628 1.845 C 4.617 1.858 4.601 1.877 4.58 1.902 C 4.538 1.952 4.477 2.024 4.4 2.117 C 4.246 2.302 4.026 2.568 3.767 2.89 C 3.247 3.532 2.565 4.398 1.914 5.291 C 1.264 6.183 0.641 7.107 0.243 7.866 C 0.045 8.243 -0.103 8.591 -0.167 8.88 C -0.227 9.152 -0.23 9.459 -0.004 9.642 L 0.123 9.485 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.980,
    height: 12.472,
    viewBox: "0 0 9.980 12.472",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.98,
      top: 80.583,
      width: 9.98,
      height: 12.472,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.282 0 C 5.908 3.075 8.928 5.21 8.928 5.21 C 10.638 7.504 9.96 9.532 9.028 10.874 C 8.262 11.96 7.009 12.559 5.713 12.461 C 3.811 12.327 1.903 12.141 0 11.908 C 0.687 8.631 1.577 3.493 1.282 0 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.282 0 L 1.393 -0.168 C 1.329 -0.211 1.245 -0.213 1.179 -0.174 C 1.112 -0.134 1.074 -0.06 1.08 0.017 L 1.282 0 Z M 8.928 5.21 L 9.09 5.09 C 9.078 5.072 9.062 5.058 9.045 5.045 L 8.928 5.21 Z M 9.028 10.874 L 9.193 10.991 L 9.194 10.989 L 9.028 10.874 Z M 5.713 12.461 L 5.728 12.26 L 5.727 12.26 L 5.713 12.461 Z M 0 11.908 L -0.198 11.867 C -0.209 11.922 -0.197 11.98 -0.164 12.026 C -0.131 12.072 -0.081 12.102 -0.025 12.109 L 0 11.908 Z M 1.282 0 L 1.17 0.168 C 3.482 1.705 5.393 3.007 6.726 3.925 C 7.392 4.383 7.914 4.746 8.269 4.994 C 8.446 5.118 8.582 5.213 8.674 5.278 C 8.719 5.31 8.754 5.334 8.777 5.35 C 8.789 5.359 8.797 5.365 8.803 5.369 C 8.806 5.371 8.808 5.373 8.81 5.374 C 8.811 5.374 8.811 5.374 8.811 5.375 C 8.812 5.375 8.812 5.375 8.812 5.375 C 8.812 5.375 8.812 5.375 8.812 5.375 C 8.812 5.375 8.812 5.375 8.928 5.21 C 9.045 5.045 9.045 5.045 9.045 5.045 C 9.045 5.045 9.045 5.045 9.045 5.045 C 9.045 5.045 9.045 5.045 9.044 5.045 C 9.044 5.045 9.044 5.044 9.043 5.044 C 9.041 5.043 9.039 5.041 9.036 5.039 C 9.03 5.035 9.021 5.029 9.01 5.02 C 8.986 5.004 8.952 4.979 8.906 4.947 C 8.814 4.883 8.678 4.787 8.5 4.663 C 8.144 4.415 7.622 4.051 6.955 3.592 C 5.62 2.673 3.708 1.37 1.393 -0.168 L 1.282 0 Z M 8.928 5.21 L 8.767 5.331 C 9.595 6.442 9.836 7.475 9.767 8.384 C 9.699 9.298 9.315 10.106 8.862 10.759 L 9.028 10.874 L 9.194 10.989 C 9.673 10.299 10.094 9.423 10.17 8.414 C 10.246 7.401 9.972 6.273 9.09 5.09 L 8.928 5.21 Z M 9.028 10.874 L 8.863 10.758 C 8.136 11.787 6.951 12.353 5.728 12.26 L 5.713 12.461 L 5.698 12.663 C 7.066 12.766 8.387 12.132 9.193 10.991 L 9.028 10.874 Z M 5.713 12.461 L 5.727 12.26 C 3.829 12.125 1.924 11.94 0.025 11.708 L 0 11.908 L -0.025 12.109 C 1.882 12.342 3.793 12.528 5.699 12.663 L 5.713 12.461 Z M 0 11.908 L 0.198 11.95 C 0.884 8.675 1.781 3.51 1.483 -0.017 L 1.282 0 L 1.08 0.017 C 1.373 3.477 0.49 8.588 -0.198 11.867 L 0 11.908 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 49.320,
    height: 34.008,
    viewBox: "0 0 49.320 34.008",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 58.484,
      width: 49.32,
      height: 34.008,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.337 1.304 C 6.832 -4.952 35.331 12.84 49.261 22.1 C 49.557 25.593 48.667 30.731 47.98 34.008 C 19.254 30.492 -8.31 16.119 2.337 1.304 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 49.320,
    height: 34.008,
    viewBox: "0 0 49.320 34.008",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 58.484,
      width: 49.32,
      height: 34.008,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.337 1.304 L 2.501 1.422 L 2.501 1.422 L 2.337 1.304 Z M 49.261 22.1 L 49.463 22.083 C 49.457 22.021 49.424 21.966 49.373 21.932 L 49.261 22.1 Z M 47.98 34.008 L 47.955 34.209 C 48.059 34.221 48.156 34.152 48.177 34.05 L 47.98 34.008 Z M 2.337 1.304 L 2.501 1.422 C 3.015 0.706 3.884 0.314 5.088 0.223 C 6.292 0.131 7.803 0.343 9.554 0.807 C 13.055 1.734 17.459 3.653 22.169 6.063 C 31.586 10.881 42.186 17.639 49.15 22.268 L 49.261 22.1 L 49.373 21.932 C 42.406 17.301 31.791 10.532 22.353 5.704 C 17.635 3.29 13.201 1.355 9.658 0.417 C 7.887 -0.052 6.326 -0.276 5.057 -0.18 C 3.787 -0.083 2.782 0.338 2.173 1.186 L 2.337 1.304 Z M 49.261 22.1 L 49.06 22.117 C 49.353 25.577 48.47 30.688 47.782 33.967 L 47.98 34.008 L 48.177 34.05 C 48.864 30.775 49.761 25.61 49.463 22.083 L 49.261 22.1 Z M 47.98 34.008 L 48.004 33.808 C 33.661 32.052 19.621 27.587 10.503 21.723 C 5.942 18.791 2.635 15.522 1.122 12.088 C -0.383 8.671 -0.121 5.07 2.501 1.422 L 2.337 1.304 L 2.173 1.186 C -0.529 4.945 -0.813 8.697 0.753 12.251 C 2.311 15.789 5.694 19.111 10.285 22.063 C 19.469 27.969 33.573 32.448 47.955 34.209 L 47.98 34.008 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.796,
      top: 8.599,
      width: 15.147,
      height: 22.07,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.796,
      top: 8.599,
      width: 15.147,
      height: 22.07,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.14685344696045,
      height: 22.069503784179688,
      clipPath: "ellipse(7.573px 11.035px at 7.573px 11.035px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.882,
      top: 10.485,
      width: 7.296,
      height: 7.887,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.370,
    height: 2.630,
    viewBox: "0 0 1.370 2.630",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1.000,0.029,-0.027,1.000,0.382,1.843)",
      transformOrigin: "0 0",
      width: 1.37,
      height: 2.63,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.685 0 L 0.685 0 C 1.063 0 1.37 0.317 1.37 0.709 L 1.37 1.921 C 1.37 2.109 1.298 2.289 1.17 2.422 C 1.041 2.555 0.867 2.63 0.685 2.63 L 0.685 2.63 C 0.307 2.63 0 2.312 0 1.921 L 0 0.709 C 0 0.317 0.307 0 0.685 0 L 0.685 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.370,
    height: 2.630,
    viewBox: "0 0 1.370 2.630",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1.000,0.029,-0.027,1.000,5.653,1.773)",
      transformOrigin: "0 0",
      width: 1.37,
      height: 2.63,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.685 0 L 0.685 0 C 1.063 0 1.37 0.317 1.37 0.709 L 1.37 1.921 C 1.37 2.312 1.063 2.63 0.685 2.63 L 0.685 2.63 C 0.307 2.63 0 2.312 0 1.921 L 0 0.709 C 0 0.317 0.307 0 0.685 0 L 0.685 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.048,
    height: 3.487,
    viewBox: "0 0 1.048 3.487",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.683,
      top: 3.306,
      width: 1.048,
      height: 3.487,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.216 0.052 C 1.244 -0.04 1.193 -0.138 1.101 -0.167 C 1.008 -0.196 0.91 -0.145 0.881 -0.052 L 1.048 0 L 1.216 0.052 Z M 1.029 1.651 L 1.006 1.824 C 1.081 1.834 1.153 1.796 1.186 1.728 C 1.219 1.661 1.206 1.58 1.153 1.527 L 1.029 1.651 Z M 0.556 3.599 C 0.618 3.673 0.729 3.684 0.803 3.622 C 0.877 3.56 0.888 3.449 0.826 3.375 L 0.691 3.487 L 0.556 3.599 Z M 1.048 0 L 0.881 -0.052 C 0.677 0.603 0.666 1.044 0.717 1.332 C 0.743 1.477 0.783 1.581 0.821 1.653 C 0.84 1.689 0.858 1.716 0.873 1.736 C 0.88 1.746 0.887 1.754 0.892 1.761 C 0.895 1.764 0.898 1.766 0.9 1.769 C 0.901 1.77 0.902 1.771 0.903 1.772 C 0.903 1.772 0.903 1.773 0.904 1.773 C 0.904 1.773 0.904 1.773 0.904 1.774 C 0.905 1.774 0.905 1.774 0.905 1.774 C 0.905 1.774 0.905 1.774 1.029 1.651 C 1.153 1.527 1.153 1.527 1.154 1.527 C 1.154 1.527 1.154 1.527 1.154 1.527 C 1.154 1.528 1.154 1.528 1.154 1.528 C 1.155 1.528 1.155 1.528 1.155 1.529 C 1.156 1.529 1.156 1.53 1.156 1.53 C 1.157 1.531 1.158 1.531 1.158 1.531 C 1.158 1.531 1.156 1.53 1.154 1.527 C 1.15 1.521 1.142 1.509 1.131 1.49 C 1.111 1.451 1.082 1.381 1.062 1.271 C 1.024 1.052 1.023 0.669 1.216 0.052 L 1.048 0 Z M 1.029 1.651 L 1.052 1.477 C 0.521 1.406 0.149 1.473 -0.045 1.709 C -0.239 1.947 -0.183 2.27 -0.092 2.524 C 0.005 2.792 0.169 3.062 0.304 3.26 C 0.372 3.36 0.435 3.444 0.48 3.503 C 0.503 3.533 0.522 3.557 0.535 3.573 C 0.542 3.581 0.547 3.587 0.55 3.592 C 0.552 3.594 0.554 3.596 0.555 3.597 C 0.555 3.598 0.555 3.598 0.556 3.598 C 0.556 3.599 0.556 3.599 0.556 3.599 C 0.556 3.599 0.556 3.599 0.556 3.599 C 0.556 3.599 0.556 3.599 0.691 3.487 C 0.826 3.375 0.826 3.375 0.826 3.375 C 0.826 3.375 0.826 3.375 0.826 3.375 C 0.826 3.375 0.826 3.375 0.826 3.375 C 0.825 3.375 0.825 3.374 0.825 3.374 C 0.824 3.373 0.823 3.372 0.822 3.37 C 0.819 3.366 0.814 3.361 0.808 3.354 C 0.797 3.339 0.78 3.317 0.758 3.29 C 0.716 3.235 0.657 3.156 0.593 3.062 C 0.464 2.873 0.319 2.631 0.238 2.405 C 0.152 2.165 0.161 2.012 0.227 1.931 C 0.293 1.849 0.488 1.756 1.006 1.824 L 1.029 1.651 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.012,
    height: 0.651,
    viewBox: "0 0 1.012 0.651",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.612,
      top: 7.236,
      width: 1.012,
      height: 0.651,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.178 0.056 C 1.209 -0.036 1.159 -0.135 1.068 -0.166 C 0.976 -0.197 0.877 -0.147 0.846 -0.056 L 1.012 0 L 1.178 0.056 Z M 0.025 0.468 C -0.071 0.455 -0.16 0.521 -0.173 0.617 C -0.187 0.713 -0.121 0.801 -0.025 0.815 L 0 0.642 L 0.025 0.468 Z M 1.012 0 L 0.846 -0.056 C 0.725 0.304 0.379 0.519 0.025 0.468 L 0 0.642 L -0.025 0.815 C 0.505 0.891 1.006 0.569 1.178 0.056 L 1.012 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.553,
    height: 1.071,
    viewBox: "0 0 1.553 1.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.14,
      width: 1.553,
      height: 1.071,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.941 0.038 C -0.468 0.421 -0.104 1.225 0.791 1.045 C 1.687 0.865 1.861 -0.213 0.941 0.038 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.533,
    height: 1.057,
    viewBox: "0 0 1.533 1.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.763,
      top: 0,
      width: 1.533,
      height: 1.057,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.579 0.056 C 1.966 0.52 1.667 1.244 0.782 1.012 C -0.102 0.781 -0.326 -0.248 0.579 0.056 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.796,
      top: 8.599,
      width: 15.147,
      height: 22.07,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.202px rgb(27,27,27), 0 0 0 0.202px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 4.933,
    height: 6.439,
    viewBox: "0 0 4.933 6.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.028,
      top: 17.714,
      width: 4.933,
      height: 6.439,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.321 0.665 C -0.05 -1.455 -1.005 1.932 1.005 4.713 C 2.512 6.799 4.189 6.524 4.933 6.256",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.232 0.846 C 4.333 0.895 4.454 0.853 4.502 0.753 C 4.551 0.652 4.509 0.532 4.409 0.483 L 4.321 0.665 L 4.232 0.846 Z M 1.005 4.713 L 0.841 4.831 L 0.841 4.831 L 1.005 4.713 Z M 5.001 6.446 C 5.106 6.408 5.161 6.292 5.123 6.188 C 5.085 6.083 4.969 6.028 4.864 6.066 L 4.933 6.256 L 5.001 6.446 Z M 4.321 0.665 L 4.409 0.483 C 3.298 -0.056 2.38 -0.257 1.657 -0.189 C 0.925 -0.121 0.398 0.224 0.095 0.75 C -0.203 1.269 -0.269 1.939 -0.138 2.646 C -0.007 3.355 0.324 4.115 0.841 4.831 L 1.005 4.713 L 1.168 4.595 C 0.681 3.921 0.378 3.215 0.259 2.573 C 0.14 1.928 0.209 1.363 0.445 0.952 C 0.676 0.549 1.081 0.27 1.695 0.213 C 2.317 0.155 3.158 0.325 4.232 0.846 L 4.321 0.665 Z M 1.005 4.713 L 0.841 4.831 C 1.62 5.909 2.456 6.393 3.21 6.564 C 3.96 6.734 4.606 6.588 5.001 6.446 L 4.933 6.256 L 4.864 6.066 C 4.515 6.192 3.951 6.317 3.299 6.17 C 2.653 6.024 1.897 5.603 1.168 4.595 L 1.005 4.713 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.554,
    height: 6.439,
    viewBox: "0 0 4.554 6.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.373,
      top: 17.714,
      width: 4.554,
      height: 6.439,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.233 0.665 C 4.604 -1.455 5.559 1.932 3.549 4.713 C 2.26 6.496 0.848 6.554 0 6.366",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.145 0.483 C 0.045 0.532 0.003 0.652 0.052 0.753 C 0.1 0.853 0.221 0.895 0.321 0.846 L 0.233 0.665 L 0.145 0.483 Z M 3.549 4.713 L 3.713 4.831 L 3.713 4.831 L 3.549 4.713 Z M 0.044 6.168 C -0.065 6.144 -0.173 6.213 -0.197 6.322 C -0.221 6.431 -0.153 6.539 -0.044 6.563 L 0 6.366 L 0.044 6.168 Z M 0.233 0.665 L 0.321 0.846 C 1.396 0.325 2.237 0.155 2.859 0.213 C 3.473 0.27 3.878 0.549 4.109 0.952 C 4.345 1.363 4.414 1.928 4.295 2.573 C 4.176 3.215 3.873 3.921 3.385 4.595 L 3.549 4.713 L 3.713 4.831 C 4.23 4.115 4.561 3.355 4.692 2.646 C 4.823 1.939 4.757 1.269 4.459 0.75 C 4.156 0.224 3.629 -0.121 2.897 -0.189 C 2.174 -0.257 1.256 -0.056 0.145 0.483 L 0.233 0.665 Z M 3.549 4.713 L 3.385 4.595 C 2.762 5.458 2.119 5.889 1.543 6.088 C 0.966 6.287 0.44 6.257 0.044 6.168 L 0 6.366 L -0.044 6.563 C 0.407 6.663 1.012 6.698 1.675 6.47 C 2.34 6.24 3.048 5.752 3.713 4.831 L 3.549 4.713 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.660,
    height: 13.046,
    viewBox: "0 0 16.660 13.046",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.604,
      top: 7.687,
      width: 16.66,
      height: 13.046,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.542 5.462 C 5.412 14.335 0.363 12.97 0.363 12.97 C 0.363 12.97 -2.576 -0.15 8.275 0.001 C 19.127 0.153 16.339 11.946 16.339 11.946 C 16.339 11.946 7.748 12.136 6.542 5.462 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.542 5.462 L 6.741 5.426 C 6.723 5.328 6.636 5.257 6.537 5.26 C 6.437 5.263 6.354 5.337 6.342 5.436 L 6.542 5.462 Z M 0.363 12.97 L 0.166 13.014 C 0.182 13.087 0.238 13.145 0.31 13.165 L 0.363 12.97 Z M 16.339 11.946 L 16.343 12.148 C 16.435 12.146 16.514 12.082 16.535 11.993 L 16.339 11.946 Z M 6.542 5.462 L 6.342 5.436 C 5.781 9.836 4.258 11.641 2.932 12.366 C 2.264 12.731 1.631 12.833 1.165 12.843 C 0.932 12.848 0.741 12.83 0.61 12.811 C 0.545 12.802 0.495 12.793 0.461 12.786 C 0.445 12.782 0.432 12.779 0.425 12.777 C 0.421 12.776 0.418 12.776 0.417 12.775 C 0.416 12.775 0.415 12.775 0.415 12.775 C 0.415 12.775 0.415 12.775 0.415 12.775 C 0.415 12.775 0.415 12.775 0.415 12.775 C 0.415 12.775 0.416 12.775 0.363 12.97 C 0.31 13.165 0.31 13.165 0.31 13.165 C 0.311 13.165 0.311 13.165 0.311 13.165 C 0.311 13.165 0.312 13.165 0.312 13.165 C 0.313 13.166 0.315 13.166 0.316 13.167 C 0.32 13.167 0.324 13.169 0.33 13.17 C 0.341 13.173 0.358 13.176 0.378 13.181 C 0.42 13.189 0.479 13.201 0.553 13.211 C 0.703 13.233 0.916 13.252 1.174 13.247 C 1.69 13.235 2.39 13.123 3.125 12.721 C 4.606 11.91 6.173 9.961 6.742 5.487 L 6.542 5.462 Z M 0.363 12.97 C 0.56 12.926 0.56 12.926 0.56 12.926 C 0.56 12.926 0.56 12.926 0.56 12.926 C 0.56 12.925 0.56 12.925 0.559 12.924 C 0.559 12.923 0.559 12.921 0.558 12.918 C 0.557 12.912 0.555 12.903 0.552 12.891 C 0.547 12.867 0.54 12.831 0.531 12.784 C 0.512 12.69 0.486 12.551 0.457 12.374 C 0.398 12.019 0.327 11.513 0.274 10.905 C 0.169 9.688 0.142 8.072 0.448 6.467 C 0.754 4.86 1.391 3.279 2.601 2.109 C 3.807 0.943 5.603 0.166 8.273 0.203 L 8.275 0.001 L 8.278 -0.201 C 5.522 -0.239 3.616 0.566 2.321 1.818 C 1.03 3.066 0.367 4.736 0.051 6.391 C -0.264 8.046 -0.235 9.702 -0.128 10.94 C -0.075 11.56 -0.001 12.077 0.058 12.439 C 0.088 12.621 0.115 12.764 0.134 12.862 C 0.144 12.911 0.152 12.948 0.157 12.974 C 0.16 12.987 0.162 12.997 0.163 13.003 C 0.164 13.007 0.165 13.009 0.165 13.011 C 0.165 13.012 0.165 13.013 0.166 13.013 C 0.166 13.013 0.166 13.014 0.166 13.014 C 0.166 13.014 0.166 13.014 0.363 12.97 Z M 8.275 0.001 L 8.273 0.203 C 10.947 0.241 12.757 0.994 13.979 2.082 C 15.203 3.173 15.856 4.618 16.179 6.074 C 16.503 7.531 16.494 8.988 16.403 10.084 C 16.358 10.632 16.292 11.087 16.238 11.405 C 16.211 11.564 16.187 11.689 16.169 11.773 C 16.161 11.815 16.154 11.847 16.149 11.869 C 16.147 11.879 16.145 11.887 16.144 11.892 C 16.143 11.895 16.143 11.897 16.142 11.898 C 16.142 11.899 16.142 11.899 16.142 11.899 C 16.142 11.9 16.142 11.9 16.142 11.9 C 16.142 11.9 16.142 11.9 16.339 11.946 C 16.535 11.993 16.535 11.992 16.535 11.992 C 16.535 11.992 16.535 11.992 16.535 11.992 C 16.535 11.991 16.536 11.991 16.536 11.99 C 16.536 11.988 16.537 11.986 16.537 11.983 C 16.539 11.977 16.541 11.968 16.543 11.956 C 16.549 11.933 16.556 11.899 16.565 11.854 C 16.583 11.766 16.608 11.637 16.636 11.473 C 16.692 11.146 16.759 10.678 16.806 10.118 C 16.899 8.998 16.909 7.497 16.573 5.987 C 16.238 4.476 15.553 2.944 14.248 1.781 C 12.94 0.615 11.029 -0.162 8.278 -0.201 L 8.275 0.001 Z M 16.339 11.946 C 16.334 11.744 16.334 11.744 16.334 11.744 C 16.334 11.744 16.334 11.744 16.334 11.744 C 16.334 11.744 16.334 11.744 16.333 11.744 C 16.332 11.744 16.331 11.744 16.329 11.744 C 16.325 11.744 16.32 11.744 16.312 11.745 C 16.297 11.745 16.273 11.745 16.243 11.745 C 16.181 11.744 16.09 11.743 15.974 11.739 C 15.741 11.732 15.405 11.713 14.999 11.671 C 14.184 11.585 13.089 11.403 11.958 11.016 C 9.695 10.241 7.325 8.662 6.741 5.426 L 6.542 5.462 L 6.343 5.498 C 6.965 8.936 9.493 10.599 11.827 11.398 C 12.995 11.797 14.122 11.985 14.956 12.072 C 15.374 12.116 15.719 12.135 15.96 12.143 C 16.081 12.147 16.176 12.148 16.241 12.149 C 16.274 12.149 16.299 12.149 16.316 12.148 C 16.324 12.148 16.331 12.148 16.336 12.148 C 16.338 12.148 16.34 12.148 16.341 12.148 C 16.341 12.148 16.342 12.148 16.342 12.148 C 16.343 12.148 16.343 12.148 16.343 12.148 C 16.343 12.148 16.343 12.148 16.339 11.946 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.668,
    height: 9.707,
    viewBox: "0 0 9.668 9.707",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.898,
      top: 83.905,
      width: 9.668,
      height: 9.707,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.032 0.434 L 1.007 0 C 1.007 0 -4.355 6.793 9.668 9.707 L 4.032 0.434 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.032 0.434 L 4.204 0.329 C 4.173 0.278 4.12 0.243 4.06 0.234 L 4.032 0.434 Z M 1.007 0 L 1.036 -0.2 C 0.964 -0.21 0.893 -0.182 0.848 -0.125 L 1.007 0 Z M 9.668 9.707 L 9.627 9.904 C 9.706 9.921 9.787 9.889 9.833 9.823 C 9.88 9.757 9.882 9.671 9.841 9.602 L 9.668 9.707 Z M 4.032 0.434 L 4.06 0.234 L 1.036 -0.2 L 1.007 0 L 0.978 0.2 L 4.003 0.634 L 4.032 0.434 Z M 1.007 0 C 0.848 -0.125 0.848 -0.125 0.848 -0.125 C 0.848 -0.125 0.848 -0.125 0.848 -0.124 C 0.848 -0.124 0.847 -0.124 0.847 -0.123 C 0.846 -0.122 0.845 -0.12 0.843 -0.118 C 0.84 -0.114 0.836 -0.109 0.831 -0.102 C 0.82 -0.087 0.805 -0.067 0.786 -0.04 C 0.748 0.014 0.695 0.091 0.633 0.191 C 0.509 0.39 0.349 0.676 0.202 1.029 C -0.091 1.734 -0.336 2.717 -0.119 3.8 C 0.318 5.989 2.597 8.444 9.627 9.904 L 9.668 9.707 L 9.709 9.509 C 2.716 8.056 0.664 5.658 0.277 3.721 C 0.081 2.742 0.3 1.844 0.575 1.184 C 0.711 0.855 0.861 0.588 0.975 0.404 C 1.033 0.312 1.081 0.241 1.115 0.194 C 1.132 0.17 1.145 0.152 1.153 0.141 C 1.158 0.135 1.161 0.131 1.163 0.128 C 1.164 0.127 1.165 0.126 1.165 0.125 C 1.165 0.125 1.166 0.125 1.166 0.125 C 1.166 0.125 1.166 0.125 1.166 0.125 C 1.166 0.125 1.165 0.125 1.007 0 Z M 9.668 9.707 L 9.841 9.602 L 4.204 0.329 L 4.032 0.434 L 3.859 0.539 L 9.496 9.812 L 9.668 9.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.172,
    height: 10.323,
    viewBox: "0 0 9.172 10.323",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.394,
      top: 83.289,
      width: 9.172,
      height: 10.323,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.595 0.206 C 4.985 -0.005 2.75 -0.082 1.581 0.11 C -2.341 0.754 1.349 8.748 9.172 10.323 C 9.172 10.323 3.982 3.166 7.595 0.206 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.595 0.206 L 7.723 0.363 C 7.787 0.31 7.813 0.225 7.788 0.146 C 7.764 0.068 7.694 0.012 7.612 0.005 L 7.595 0.206 Z M 1.581 0.11 L 1.548 -0.089 L 1.548 -0.089 L 1.581 0.11 Z M 9.172 10.323 L 9.133 10.521 C 9.221 10.539 9.31 10.496 9.352 10.416 C 9.393 10.337 9.377 10.239 9.312 10.177 L 9.172 10.323 Z M 7.595 0.206 L 7.612 0.005 C 5.006 -0.206 2.746 -0.286 1.548 -0.089 L 1.581 0.11 L 1.614 0.309 C 2.754 0.122 4.964 0.196 7.579 0.408 L 7.595 0.206 Z M 1.581 0.11 L 1.548 -0.089 C 1.021 -0.003 0.606 0.21 0.311 0.533 C 0.017 0.855 -0.144 1.27 -0.189 1.737 C -0.278 2.663 0.084 3.817 0.801 4.974 C 2.239 7.295 5.164 9.722 9.133 10.521 L 9.172 10.323 L 9.212 10.125 C 5.358 9.349 2.526 6.992 1.144 4.761 C 0.451 3.642 0.136 2.578 0.213 1.775 C 0.252 1.377 0.385 1.05 0.609 0.805 C 0.833 0.561 1.16 0.384 1.614 0.309 L 1.581 0.11 Z M 9.172 10.323 L 9.312 10.177 C 9.324 10.19 9.336 10.204 9.336 10.204 C 9.336 10.204 9.336 10.204 9.336 10.204 C 9.336 10.204 9.335 10.204 9.335 10.204 C 9.335 10.203 9.334 10.202 9.333 10.2 C 9.33 10.197 9.327 10.192 9.322 10.185 C 9.313 10.172 9.299 10.152 9.28 10.126 C 9.244 10.074 9.191 9.997 9.124 9.897 C 8.991 9.698 8.804 9.41 8.591 9.055 C 8.164 8.343 7.634 7.366 7.217 6.301 C 6.798 5.233 6.498 4.089 6.519 3.04 C 6.54 1.996 6.876 1.056 7.723 0.363 L 7.595 0.206 L 7.467 0.05 C 6.507 0.836 6.138 1.901 6.115 3.032 C 6.093 4.156 6.413 5.357 6.841 6.448 C 7.269 7.542 7.811 8.539 8.245 9.262 C 8.462 9.624 8.652 9.918 8.789 10.122 C 8.857 10.224 8.912 10.303 8.949 10.358 C 8.968 10.385 8.983 10.406 8.993 10.42 C 8.998 10.427 9.002 10.432 9.005 10.436 C 9.006 10.438 9.007 10.439 9.008 10.44 C 9.008 10.441 9.008 10.441 9.009 10.441 C 9.009 10.441 9.009 10.442 9.009 10.442 C 9.009 10.442 9.021 10.456 9.033 10.469 L 9.172 10.323 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.908,
    height: 10.647,
    viewBox: "0 0 21.908 10.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.71,
      top: 83.495,
      width: 21.908,
      height: 10.647,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.11 1.957 C 17.11 1.957 7.965 0.541 1.279 0 C -2.335 2.959 2.856 10.117 2.856 10.117 C 3.353 10.217 3.855 10.29 4.36 10.334 C 13.2 11.104 20.763 10.312 21.785 9.485 C 22.808 8.657 17.11 1.957 17.11 1.957 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.11 1.957 L 17.264 1.826 C 17.233 1.789 17.189 1.764 17.141 1.757 L 17.11 1.957 Z M 1.279 0 L 1.296 -0.201 C 1.243 -0.205 1.192 -0.189 1.151 -0.156 L 1.279 0 Z M 2.856 10.117 L 2.693 10.235 C 2.723 10.276 2.767 10.305 2.816 10.315 L 2.856 10.117 Z M 4.36 10.334 L 4.342 10.535 L 4.342 10.535 L 4.36 10.334 Z M 17.11 1.957 C 17.141 1.757 17.141 1.757 17.141 1.757 C 17.141 1.757 17.141 1.757 17.141 1.757 C 17.14 1.757 17.14 1.757 17.139 1.757 C 17.138 1.757 17.137 1.756 17.134 1.756 C 17.13 1.755 17.123 1.754 17.115 1.753 C 17.097 1.75 17.071 1.746 17.036 1.741 C 16.968 1.73 16.866 1.715 16.734 1.695 C 16.471 1.655 16.087 1.598 15.606 1.527 C 14.644 1.386 13.291 1.192 11.729 0.981 C 8.606 0.559 4.644 0.069 1.296 -0.201 L 1.279 0 L 1.263 0.201 C 4.6 0.471 8.554 0.96 11.675 1.381 C 13.235 1.592 14.586 1.786 15.547 1.927 C 16.028 1.997 16.411 2.055 16.674 2.094 C 16.805 2.114 16.907 2.13 16.975 2.14 C 17.01 2.145 17.036 2.149 17.053 2.152 C 17.062 2.153 17.068 2.154 17.073 2.155 C 17.075 2.155 17.077 2.156 17.078 2.156 C 17.078 2.156 17.079 2.156 17.079 2.156 C 17.079 2.156 17.079 2.156 17.079 2.156 C 17.079 2.156 17.079 2.156 17.11 1.957 Z M 1.279 0 L 1.151 -0.156 C 0.191 0.63 -0.178 1.694 -0.201 2.825 C -0.223 3.95 0.097 5.15 0.525 6.242 C 0.953 7.335 1.495 8.333 1.928 9.056 C 2.145 9.418 2.336 9.712 2.472 9.916 C 2.541 10.018 2.595 10.097 2.633 10.151 C 2.652 10.178 2.667 10.199 2.677 10.213 C 2.682 10.22 2.686 10.226 2.689 10.229 C 2.69 10.231 2.691 10.233 2.692 10.234 C 2.692 10.234 2.692 10.235 2.692 10.235 C 2.693 10.235 2.693 10.235 2.693 10.235 L 2.856 10.117 L 3.02 9.998 C 3.02 9.998 3.02 9.998 3.02 9.998 C 3.019 9.998 3.019 9.998 3.019 9.997 C 3.018 9.997 3.018 9.995 3.016 9.994 C 3.014 9.991 3.011 9.986 3.006 9.979 C 2.997 9.966 2.983 9.946 2.964 9.92 C 2.928 9.868 2.875 9.791 2.808 9.691 C 2.675 9.492 2.488 9.204 2.275 8.848 C 1.848 8.137 1.318 7.16 0.901 6.094 C 0.482 5.026 0.182 3.883 0.203 2.833 C 0.224 1.79 0.56 0.85 1.407 0.156 L 1.279 0 Z M 2.856 10.117 L 2.816 10.315 C 3.321 10.417 3.83 10.49 4.342 10.535 L 4.36 10.334 L 4.378 10.133 C 3.88 10.089 3.386 10.018 2.896 9.919 L 2.856 10.117 Z M 4.36 10.334 L 4.342 10.535 C 8.773 10.921 12.884 10.915 16.017 10.71 C 17.584 10.607 18.909 10.454 19.91 10.273 C 20.41 10.183 20.833 10.086 21.165 9.983 C 21.491 9.883 21.753 9.771 21.912 9.642 L 21.785 9.485 L 21.658 9.328 C 21.562 9.405 21.364 9.499 21.046 9.597 C 20.735 9.693 20.329 9.788 19.839 9.876 C 18.857 10.053 17.548 10.205 15.991 10.307 C 12.878 10.511 8.787 10.517 4.377 10.133 L 4.36 10.334 Z M 21.785 9.485 L 21.912 9.642 C 22.138 9.459 22.135 9.152 22.075 8.88 C 22.012 8.591 21.863 8.243 21.665 7.866 C 21.268 7.107 20.644 6.183 19.995 5.291 C 19.344 4.398 18.661 3.532 18.142 2.89 C 17.882 2.568 17.663 2.302 17.508 2.117 C 17.431 2.024 17.37 1.952 17.328 1.902 C 17.308 1.877 17.292 1.858 17.281 1.845 C 17.275 1.839 17.271 1.834 17.268 1.831 C 17.267 1.829 17.266 1.828 17.265 1.827 C 17.265 1.827 17.265 1.826 17.264 1.826 C 17.264 1.826 17.264 1.826 17.264 1.826 C 17.264 1.826 17.264 1.826 17.11 1.957 C 16.956 2.087 16.956 2.087 16.956 2.087 C 16.957 2.087 16.957 2.088 16.957 2.088 C 16.957 2.088 16.957 2.088 16.957 2.089 C 16.958 2.089 16.959 2.09 16.96 2.092 C 16.963 2.095 16.967 2.1 16.972 2.106 C 16.983 2.119 16.999 2.138 17.02 2.162 C 17.061 2.211 17.121 2.283 17.198 2.375 C 17.351 2.559 17.569 2.824 17.828 3.143 C 18.345 3.783 19.023 4.644 19.668 5.529 C 20.315 6.417 20.924 7.322 21.308 8.053 C 21.5 8.42 21.629 8.731 21.681 8.967 C 21.737 9.22 21.688 9.304 21.658 9.328 L 21.785 9.485 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.980,
    height: 12.472,
    viewBox: "0 0 9.980 12.472",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.068,
      top: 80.583,
      width: 9.98,
      height: 12.472,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.699 0 C 4.072 3.075 1.052 5.21 1.052 5.21 C -0.658 7.504 0.021 9.532 0.952 10.874 C 1.719 11.96 2.972 12.559 4.267 12.461 C 6.17 12.327 8.078 12.141 9.98 11.908 C 9.293 8.631 8.403 3.493 8.699 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.068,
      top: 80.583,
      width: 9.98,
      height: 12.472,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.980388641357422,
      height: 12.471653938293457,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.387,
    height: 14.684,
    viewBox: "0 0 14.387 14.684",
    fill: "none",
    style: {
      position: "absolute",
      left: -2.156,
      top: -0.021,
      width: 14.387,
      height: 14.684,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.782 3.905 C 3.371 8.268 6.988 12.973 10.276 11.433 C 13.565 9.893 8.721 0.672 10.855 0.022 C 12.989 -0.629 14.387 13.58 14.387 13.58 C 14.387 13.58 13.482 14 12.66 14.342 C 11.838 14.684 4.193 14.684 4.193 14.684 L 0 8.197 L 0.822 2.727 L 4.908 4.89",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 9.980,
    height: 12.472,
    viewBox: "0 0 9.980 12.472",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.068,
      top: 80.583,
      width: 9.98,
      height: 12.472,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.699 0 L 8.9 0.017 C 8.906 -0.06 8.868 -0.134 8.802 -0.174 C 8.735 -0.213 8.652 -0.211 8.587 -0.168 L 8.699 0 Z M 1.052 5.21 L 0.935 5.045 C 0.918 5.058 0.903 5.072 0.89 5.09 L 1.052 5.21 Z M 0.952 10.874 L 0.786 10.989 L 0.787 10.991 L 0.952 10.874 Z M 4.267 12.461 L 4.253 12.26 L 4.252 12.26 L 4.267 12.461 Z M 9.98 11.908 L 10.005 12.109 C 10.061 12.102 10.112 12.072 10.145 12.026 C 10.177 11.98 10.19 11.922 10.178 11.867 L 9.98 11.908 Z M 8.699 0 L 8.587 -0.168 C 6.273 1.37 4.36 2.673 3.026 3.592 C 2.359 4.051 1.836 4.415 1.48 4.663 C 1.303 4.787 1.166 4.883 1.075 4.947 C 1.029 4.979 0.994 5.004 0.971 5.02 C 0.959 5.029 0.95 5.035 0.944 5.039 C 0.941 5.041 0.939 5.043 0.938 5.044 C 0.937 5.044 0.936 5.045 0.936 5.045 C 0.936 5.045 0.936 5.045 0.936 5.045 C 0.935 5.045 0.935 5.045 0.935 5.045 C 0.935 5.045 0.935 5.045 1.052 5.21 C 1.168 5.375 1.168 5.375 1.168 5.375 C 1.168 5.375 1.169 5.375 1.169 5.375 C 1.169 5.375 1.169 5.375 1.169 5.375 C 1.169 5.374 1.17 5.374 1.171 5.374 C 1.172 5.373 1.174 5.371 1.177 5.369 C 1.183 5.365 1.192 5.359 1.203 5.35 C 1.226 5.334 1.261 5.31 1.307 5.278 C 1.398 5.213 1.534 5.118 1.712 4.994 C 2.067 4.746 2.589 4.383 3.255 3.925 C 4.587 3.007 6.498 1.705 8.811 0.168 L 8.699 0 Z M 1.052 5.21 L 0.89 5.09 C 0.008 6.273 -0.266 7.401 -0.19 8.414 C -0.114 9.423 0.308 10.299 0.786 10.989 L 0.952 10.874 L 1.118 10.759 C 0.665 10.106 0.282 9.298 0.213 8.384 C 0.144 7.475 0.386 6.442 1.214 5.331 L 1.052 5.21 Z M 0.952 10.874 L 0.787 10.991 C 1.594 12.132 2.914 12.766 4.283 12.663 L 4.267 12.461 L 4.252 12.26 C 3.029 12.353 1.844 11.787 1.117 10.758 L 0.952 10.874 Z M 4.267 12.461 L 4.282 12.663 C 6.187 12.528 8.099 12.342 10.005 12.109 L 9.98 11.908 L 9.956 11.708 C 8.056 11.94 6.152 12.125 4.253 12.26 L 4.267 12.461 Z M 9.98 11.908 L 10.178 11.867 C 9.491 8.588 8.607 3.477 8.9 0.017 L 8.699 0 L 8.498 -0.017 C 8.199 3.51 9.096 8.675 9.783 11.95 L 9.98 11.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 49.320,
    height: 34.008,
    viewBox: "0 0 49.320 34.008",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.709,
      top: 58.484,
      width: 49.32,
      height: 34.008,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.983 1.304 C 42.488 -4.952 13.989 12.84 0.058 22.1 C -0.237 25.593 0.653 30.731 1.34 34.008 C 30.065 30.492 57.629 16.119 46.983 1.304 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.709,
      top: 58.484,
      width: 49.32,
      height: 34.008,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 49.31969451904297,
      height: 34.008113861083984,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -3.158,
      top: -8.711,
      width: 56.321,
      height: 45.041,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.507,
    height: 26.857,
    viewBox: "0 0 29.507 26.857",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.814,
      top: 0,
      width: 29.507,
      height: 26.857,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.42 C 5.666 15.104 18.124 7.638 21.819 9.701 C 25.514 11.764 29.504 14.81 27.531 22.338 C 25.558 29.866 28.356 25.715 28.356 25.715 L 29.507 8.711 L 15.151 0 L 0 14.42 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.913,
    height: 18.067,
    viewBox: "0 0 8.913 18.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 26.975,
      width: 8.913,
      height: 18.067,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.558 0 C 5.474 5.353 8.913 17.394 8.913 17.394 L 2.068 18.067 L 0 1.473",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.756 0.04 C 6.778 -0.069 6.708 -0.176 6.598 -0.198 C 6.489 -0.22 6.383 -0.149 6.36 -0.04 L 6.558 0 L 6.756 0.04 Z M 8.913 17.394 L 8.932 17.595 C 8.992 17.589 9.046 17.557 9.08 17.508 C 9.113 17.458 9.123 17.397 9.107 17.339 L 8.913 17.394 Z M 2.068 18.067 L 1.867 18.091 C 1.881 18.2 1.978 18.278 2.087 18.267 L 2.068 18.067 Z M 0.2 1.448 C 0.187 1.337 0.086 1.259 -0.025 1.272 C -0.136 1.286 -0.214 1.387 -0.2 1.498 L 0 1.473 L 0.2 1.448 Z M 6.558 0 L 6.36 -0.04 C 6.084 1.327 6.097 3.107 6.268 4.994 C 6.438 6.885 6.768 8.9 7.131 10.744 C 7.494 12.588 7.891 14.264 8.197 15.479 C 8.35 16.086 8.48 16.579 8.572 16.919 C 8.618 17.09 8.655 17.222 8.68 17.312 C 8.692 17.357 8.702 17.391 8.708 17.415 C 8.712 17.426 8.714 17.435 8.716 17.441 C 8.717 17.444 8.717 17.446 8.718 17.447 C 8.718 17.448 8.718 17.449 8.718 17.449 C 8.718 17.449 8.718 17.45 8.718 17.45 C 8.718 17.45 8.718 17.45 8.913 17.394 C 9.107 17.339 9.107 17.339 9.107 17.339 C 9.107 17.339 9.107 17.339 9.107 17.338 C 9.107 17.338 9.106 17.338 9.106 17.337 C 9.106 17.336 9.105 17.333 9.104 17.331 C 9.103 17.325 9.1 17.316 9.097 17.305 C 9.091 17.282 9.081 17.248 9.069 17.204 C 9.044 17.115 9.008 16.983 8.962 16.814 C 8.87 16.475 8.741 15.985 8.588 15.38 C 8.283 14.17 7.888 12.501 7.527 10.666 C 7.166 8.83 6.839 6.83 6.67 4.958 C 6.501 3.082 6.491 1.349 6.756 0.04 L 6.558 0 Z M 8.913 17.394 L 8.893 17.193 L 2.048 17.866 L 2.068 18.067 L 2.087 18.267 L 8.932 17.595 L 8.913 17.394 Z M 2.068 18.067 L 2.268 18.042 L 0.2 1.448 L 0 1.473 L -0.2 1.498 L 1.867 18.091 L 2.068 18.067 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 49.320,
    height: 34.008,
    viewBox: "0 0 49.320 34.008",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.709,
      top: 58.484,
      width: 49.32,
      height: 34.008,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.983 1.304 L 46.819 1.422 L 46.819 1.422 L 46.983 1.304 Z M 0.058 22.1 L -0.054 21.932 C -0.105 21.966 -0.138 22.021 -0.143 22.083 L 0.058 22.1 Z M 1.34 34.008 L 1.142 34.05 C 1.164 34.152 1.26 34.221 1.364 34.209 L 1.34 34.008 Z M 46.983 1.304 L 47.147 1.186 C 46.537 0.338 45.533 -0.083 44.263 -0.18 C 42.994 -0.276 41.432 -0.052 39.662 0.417 C 36.119 1.355 31.685 3.29 26.967 5.704 C 17.529 10.532 6.913 17.301 -0.054 21.932 L 0.058 22.1 L 0.17 22.268 C 7.134 17.639 17.734 10.881 27.151 6.063 C 31.861 3.653 36.265 1.734 39.765 0.807 C 41.516 0.343 43.028 0.131 44.232 0.223 C 45.435 0.314 46.305 0.706 46.819 1.422 L 46.983 1.304 Z M 0.058 22.1 L -0.143 22.083 C -0.441 25.61 0.456 30.775 1.142 34.05 L 1.34 34.008 L 1.538 33.967 C 0.85 30.688 -0.033 25.577 0.259 22.117 L 0.058 22.1 Z M 1.34 34.008 L 1.364 34.209 C 15.747 32.448 29.851 27.969 39.035 22.063 C 43.625 19.111 47.008 15.789 48.567 12.251 C 50.133 8.697 49.848 4.945 47.147 1.186 L 46.983 1.304 L 46.819 1.422 C 49.441 5.07 49.703 8.671 48.197 12.088 C 46.685 15.522 43.377 18.791 38.817 21.723 C 29.699 27.587 15.659 32.052 1.315 33.808 L 1.34 34.008 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.567,
      top: 36.868,
      width: 1.333,
      height: 1.387,
      borderRadius: "50%",
      backgroundColor: "rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.567,
      top: 40.883,
      width: 1.333,
      height: 1.387,
      borderRadius: "50%",
      backgroundColor: "rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 0.414,
    height: 1.731,
    viewBox: "0 0 0.414 1.731",
    fill: "none",
    style: {
      position: "absolute",
      left: 45.17,
      top: 10.358,
      width: 0.414,
      height: 1.731,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.206 0.011 C 0.212 -0.101 0.127 -0.196 0.015 -0.202 C -0.096 -0.208 -0.191 -0.122 -0.197 -0.011 L 0.005 0 L 0.206 0.011 Z M 0.239 1.831 C 0.295 1.928 0.418 1.961 0.515 1.906 C 0.611 1.85 0.645 1.727 0.589 1.63 L 0.414 1.731 L 0.239 1.831 Z M 0.005 0 L -0.197 -0.011 C -0.232 0.634 -0.08 1.275 0.239 1.831 L 0.414 1.731 L 0.589 1.63 C 0.309 1.142 0.176 0.578 0.206 0.011 L 0.005 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.550,
    height: 2.736,
    viewBox: "0 0 3.550 2.736",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.44,
      top: 56.89,
      width: 3.55,
      height: 2.736,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 -0.14 C 0.069 -0.22 -0.059 -0.223 -0.14 -0.146 C -0.22 -0.069 -0.223 0.059 -0.146 0.14 L 0 0 L 0.146 -0.14 Z M 3.453 2.913 C 3.55 2.967 3.673 2.932 3.727 2.834 C 3.781 2.736 3.746 2.614 3.648 2.56 L 3.55 2.736 L 3.453 2.913 Z M 0 0 L -0.146 0.14 C 0.913 1.244 2.126 2.179 3.453 2.913 L 3.55 2.736 L 3.648 2.56 C 2.358 1.846 1.177 0.936 0.146 -0.14 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.710,
    height: 1.292,
    viewBox: "0 0 2.710 1.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 58.105,
      top: 75.835,
      width: 2.71,
      height: 1.292,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.797 0.182 C 2.898 0.134 2.94 0.014 2.892 -0.087 C 2.844 -0.188 2.724 -0.23 2.623 -0.182 L 2.71 0 L 2.797 0.182 Z M -0.087 1.11 C -0.188 1.158 -0.23 1.278 -0.182 1.379 C -0.134 1.479 -0.014 1.522 0.087 1.474 L 0 1.292 L -0.087 1.11 Z M 2.71 0 L 2.623 -0.182 L -0.087 1.11 L 0 1.292 L 0.087 1.474 L 2.797 0.182 L 2.71 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.182,
    height: 13.086,
    viewBox: "0 0 18.182 13.086",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.947,0.322,-0.303,0.953,36.152,0)",
      transformOrigin: "0 0",
      width: 18.182,
      height: 13.086,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.735 12.974 C 4.765 13.836 7.566 9.518 6.37 8.126 C 6.37 8.126 9.789 9.597 12.198 7.461 C 20.369 8.59 19.829 -2.168 12.662 0.91 C 8.931 -1.289 4.778 0.883 4.959 3.344 C 2.152 0.686 -3.312 10.405 2.735 12.974 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.735 12.974 L 2.656 13.159 L 2.656 13.159 L 2.735 12.974 Z M 6.37 8.126 L 6.45 7.94 C 6.363 7.903 6.263 7.93 6.207 8.006 C 6.151 8.082 6.155 8.186 6.217 8.257 L 6.37 8.126 Z M 12.198 7.461 L 12.226 7.261 C 12.167 7.253 12.108 7.27 12.064 7.31 L 12.198 7.461 Z M 12.662 0.91 L 12.559 1.084 C 12.615 1.117 12.682 1.121 12.742 1.096 L 12.662 0.91 Z M 4.959 3.344 L 4.82 3.491 C 4.881 3.548 4.97 3.562 5.046 3.527 C 5.121 3.491 5.167 3.413 5.161 3.329 L 4.959 3.344 Z M 2.735 12.974 L 2.656 13.159 C 3.242 13.408 3.867 13.274 4.428 12.951 C 4.99 12.627 5.513 12.101 5.927 11.511 C 6.342 10.921 6.656 10.253 6.789 9.634 C 6.921 9.023 6.883 8.413 6.523 7.994 L 6.37 8.126 L 6.217 8.257 C 6.455 8.535 6.515 8.987 6.394 9.549 C 6.275 10.105 5.987 10.723 5.597 11.279 C 5.206 11.835 4.724 12.314 4.226 12.601 C 3.729 12.887 3.242 12.97 2.814 12.788 L 2.735 12.974 Z M 6.37 8.126 C 6.29 8.311 6.29 8.311 6.29 8.311 C 6.29 8.311 6.29 8.311 6.29 8.311 C 6.291 8.311 6.291 8.311 6.291 8.312 C 6.292 8.312 6.292 8.312 6.294 8.313 C 6.296 8.313 6.298 8.315 6.302 8.316 C 6.309 8.319 6.32 8.324 6.334 8.329 C 6.361 8.34 6.401 8.355 6.452 8.374 C 6.554 8.412 6.701 8.462 6.885 8.516 C 7.253 8.623 7.769 8.744 8.363 8.795 C 9.549 8.899 11.071 8.731 12.332 7.612 L 12.198 7.461 L 12.064 7.31 C 10.916 8.327 9.523 8.491 8.398 8.393 C 7.836 8.344 7.347 8.23 6.998 8.128 C 6.824 8.077 6.685 8.03 6.591 7.995 C 6.544 7.978 6.508 7.964 6.484 7.954 C 6.472 7.949 6.463 7.946 6.457 7.943 C 6.454 7.942 6.452 7.941 6.451 7.941 C 6.45 7.94 6.45 7.94 6.45 7.94 C 6.449 7.94 6.449 7.94 6.449 7.94 C 6.449 7.94 6.449 7.94 6.449 7.94 C 6.449 7.94 6.45 7.94 6.37 8.126 Z M 12.198 7.461 L 12.17 7.661 C 14.257 7.949 15.815 7.481 16.853 6.637 C 17.889 5.796 18.389 4.594 18.384 3.454 C 18.379 2.314 17.868 1.221 16.866 0.621 C 15.863 0.019 14.413 -0.061 12.582 0.725 L 12.662 0.91 L 12.742 1.096 C 14.495 0.343 15.8 0.453 16.659 0.967 C 17.519 1.483 17.976 2.431 17.98 3.455 C 17.985 4.479 17.536 5.562 16.598 6.324 C 15.664 7.084 14.225 7.537 12.226 7.261 L 12.198 7.461 Z M 12.662 0.91 L 12.764 0.736 C 10.844 -0.396 8.808 -0.406 7.27 0.191 C 5.747 0.783 4.658 2.002 4.758 3.359 L 4.959 3.344 L 5.161 3.329 C 5.079 2.225 5.976 1.127 7.417 0.568 C 8.843 0.013 10.749 0.017 12.559 1.084 L 12.662 0.91 Z M 4.959 3.344 L 5.098 3.198 C 4.709 2.83 4.265 2.669 3.802 2.688 C 3.345 2.706 2.887 2.898 2.46 3.202 C 1.607 3.808 0.83 4.89 0.339 6.124 C -0.152 7.36 -0.366 8.776 -0.06 10.058 C 0.249 11.35 1.084 12.492 2.656 13.159 L 2.735 12.974 L 2.814 12.788 C 1.362 12.171 0.613 11.134 0.333 9.964 C 0.051 8.785 0.245 7.456 0.715 6.273 C 1.185 5.089 1.922 4.08 2.694 3.531 C 3.079 3.257 3.462 3.106 3.818 3.091 C 4.167 3.077 4.507 3.194 4.82 3.491 L 4.959 3.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 599,
      top: 289,
      width: 86,
      height: 86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 86,
      height: 86,
      borderRadius: "50%",
      backgroundColor: "var(--w)",
      boxShadow: "inset 0 0 0 0.566px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 18.105,
      width: 82.605,
      height: 61.402,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.047,
    height: 30.776,
    viewBox: "0 0 16.047 30.776",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.42,
      top: 3.494,
      width: 16.047,
      height: 30.776,
      color: "rgb(25,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.047 30.776 L 15.846 30.775 C 15.846 30.775 15.148 10.651 0 0 C 0 0 14.397 8.182 16.047 30.776 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.619,
    height: 12.672,
    viewBox: "0 0 23.619 12.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 51.498,
      top: 20.212,
      width: 23.619,
      height: 12.672,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.619 0.213 C 23.619 0.213 8.556 -2.572 0 11.98 L 0.667 12.672 C 0.667 12.672 16.724 12.737 23.619 0.213 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 51.498,
      top: 20.212,
      width: 23.619,
      height: 12.672,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.61857032775879,
      height: 12.672353744506836,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.440,
    height: 16.923,
    viewBox: "0 0 22.440 16.923",
    fill: "none",
    style: {
      position: "absolute",
      left: -1.685,
      top: 6.683,
      width: 22.44,
      height: 16.923,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.096 1.277 C 8.733 -0.302 17.942 12.878 15.805 2.53 C 13.667 -7.818 22.44 16.923 22.44 16.923 L 0 5.729",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 23.619,
    height: 12.672,
    viewBox: "0 0 23.619 12.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 51.498,
      top: 20.212,
      width: 23.619,
      height: 12.672,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.619 0.213 L 23.767 0.295 C 23.794 0.248 23.795 0.19 23.772 0.141 C 23.749 0.092 23.703 0.057 23.649 0.047 L 23.619 0.213 Z M 0 11.98 L -0.146 11.894 C -0.185 11.96 -0.175 12.043 -0.122 12.098 L 0 11.98 Z M 0.667 12.672 L 0.545 12.79 C 0.577 12.823 0.621 12.842 0.666 12.842 L 0.667 12.672 Z M 23.619 0.213 C 23.649 0.047 23.649 0.047 23.649 0.047 C 23.649 0.047 23.649 0.046 23.648 0.046 C 23.648 0.046 23.647 0.046 23.646 0.046 C 23.644 0.046 23.641 0.045 23.637 0.044 C 23.629 0.043 23.618 0.041 23.603 0.039 C 23.573 0.034 23.53 0.026 23.472 0.018 C 23.358 0.001 23.19 -0.022 22.973 -0.046 C 22.54 -0.095 21.914 -0.147 21.135 -0.164 C 19.578 -0.198 17.414 -0.091 14.979 0.474 C 10.107 1.606 4.159 4.571 -0.146 11.894 L 0 11.98 L 0.146 12.066 C 4.396 4.837 10.258 1.919 15.056 0.805 C 17.457 0.248 19.593 0.142 21.128 0.175 C 21.895 0.192 22.512 0.244 22.936 0.291 C 23.148 0.315 23.312 0.337 23.422 0.354 C 23.477 0.362 23.519 0.369 23.547 0.373 C 23.561 0.376 23.571 0.377 23.578 0.379 C 23.582 0.379 23.584 0.38 23.586 0.38 C 23.586 0.38 23.587 0.38 23.587 0.38 C 23.588 0.38 23.588 0.38 23.588 0.38 C 23.588 0.38 23.588 0.38 23.619 0.213 Z M 0 11.98 L -0.122 12.098 L 0.545 12.79 L 0.667 12.672 L 0.789 12.555 L 0.122 11.863 L 0 11.98 Z M 0.667 12.672 C 0.666 12.842 0.667 12.842 0.667 12.842 C 0.667 12.842 0.667 12.842 0.667 12.842 C 0.668 12.842 0.669 12.842 0.67 12.842 C 0.672 12.842 0.675 12.842 0.679 12.842 C 0.687 12.842 0.699 12.842 0.715 12.842 C 0.746 12.842 0.792 12.841 0.853 12.84 C 0.974 12.837 1.151 12.832 1.379 12.82 C 1.835 12.797 2.493 12.751 3.304 12.655 C 4.925 12.465 7.158 12.08 9.609 11.301 C 14.509 9.744 20.292 6.609 23.767 0.295 L 23.619 0.213 L 23.47 0.132 C 20.051 6.342 14.359 9.436 9.506 10.978 C 7.081 11.748 4.869 12.13 3.264 12.318 C 2.462 12.413 1.811 12.459 1.362 12.481 C 1.138 12.492 0.963 12.498 0.846 12.5 C 0.787 12.502 0.742 12.502 0.712 12.502 C 0.697 12.503 0.686 12.503 0.678 12.503 C 0.675 12.503 0.672 12.503 0.67 12.503 C 0.669 12.503 0.669 12.503 0.668 12.503 C 0.668 12.503 0.668 12.503 0.668 12.503 C 0.668 12.503 0.668 12.503 0.667 12.672 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.024,
    height: 11.386,
    viewBox: "0 0 22.024 11.386",
    fill: "none",
    style: {
      position: "absolute",
      left: 51.498,
      top: 21.047,
      width: 22.024,
      height: 11.386,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.024 0 C 20.183 0.379 17.929 1.26 15.577 2.373 L 15.577 2.373 C 15.586 2.379 17.603 3.605 19.95 3.616 C 17.593 3.867 15.077 2.615 15.075 2.614 C 12.411 3.904 9.652 5.464 7.245 6.909 C 7.323 6.955 9.918 8.497 12.948 8.492 C 10.147 8.808 7.185 7.505 6.661 7.261 C 2.961 9.506 0.231 11.386 0.231 11.386 L 0 11.146 C 0 11.146 4.891 7.757 10.432 4.705 C 10.405 4.138 10.445 2.816 11.204 1.423 C 10.536 2.976 10.745 4.19 10.815 4.495 C 14.783 2.333 19.031 0.385 22.024 0 Z M 15.546 2.388 L 15.162 2.572 C 15.29 2.51 15.418 2.448 15.546 2.388 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.561,
    height: 30.370,
    viewBox: "0 0 20.561 30.370",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.99,
      top: 0.169,
      width: 20.561,
      height: 30.37,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.557 0 C 20.557 0 0.322 5.985 0 30.37 L 0 30.37 C 0 30.37 20.85 20.686 20.557 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52.99,
      top: 0.169,
      width: 20.561,
      height: 30.37,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.56051254272461,
      height: 30.369861602783203,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.067,
    height: 38.300,
    viewBox: "0 0 34.067 38.300",
    fill: "none",
    style: {
      position: "absolute",
      left: -12.121,
      top: -2.781,
      width: 34.067,
      height: 38.3,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.67 5.775 C 25.281 16.497 9.049 31.616 27.598 21.067 C 46.146 10.517 18.912 38.297 18.912 38.297 C 18.912 38.297 -0.41 38.429 0.007 36.796 C 0.423 35.163 4.155 6.074 4.155 6.074 L 11.757 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 20.561,
    height: 30.370,
    viewBox: "0 0 20.561 30.370",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.99,
      top: 0.169,
      width: 20.561,
      height: 30.37,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.557 0 L 20.727 -0.002 C 20.726 -0.056 20.701 -0.105 20.658 -0.137 C 20.615 -0.168 20.56 -0.178 20.509 -0.163 L 20.557 0 Z M 0 30.37 M 0 30.37 M 20.557 0 C 20.509 -0.163 20.509 -0.163 20.509 -0.163 C 20.509 -0.163 20.508 -0.162 20.508 -0.162 C 20.507 -0.162 20.506 -0.162 20.505 -0.161 C 20.502 -0.161 20.498 -0.159 20.493 -0.158 C 20.483 -0.155 20.468 -0.15 20.448 -0.144 C 20.409 -0.132 20.351 -0.113 20.276 -0.088 C 20.126 -0.037 19.906 0.04 19.627 0.146 C 19.068 0.359 18.272 0.69 17.315 1.164 C 15.403 2.111 12.85 3.63 10.287 5.914 C 5.157 10.486 -0.008 18.122 -0.17 30.368 L 0 30.37 L 0.17 30.372 C 0.33 18.233 5.444 10.684 10.512 6.167 C 13.048 3.907 15.574 2.405 17.466 1.468 C 18.412 1 19.198 0.673 19.748 0.463 C 20.023 0.359 20.238 0.283 20.384 0.234 C 20.457 0.21 20.513 0.192 20.55 0.18 C 20.569 0.174 20.583 0.17 20.592 0.167 C 20.597 0.165 20.6 0.164 20.603 0.164 C 20.604 0.163 20.605 0.163 20.605 0.163 C 20.605 0.163 20.605 0.163 20.606 0.163 C 20.606 0.163 20.606 0.163 20.557 0 Z M 0 30.37 M 0 30.37 C 0.071 30.524 0.072 30.524 0.072 30.524 C 0.072 30.524 0.072 30.523 0.073 30.523 C 0.073 30.523 0.074 30.522 0.076 30.522 C 0.078 30.521 0.082 30.519 0.088 30.516 C 0.098 30.511 0.113 30.504 0.133 30.494 C 0.173 30.475 0.233 30.446 0.31 30.408 C 0.464 30.331 0.689 30.216 0.975 30.063 C 1.548 29.756 2.365 29.295 3.344 28.677 C 5.301 27.441 7.908 25.578 10.506 23.064 C 15.702 18.038 20.874 10.403 20.727 -0.002 L 20.557 0 L 20.388 0.002 C 20.533 10.283 15.426 17.833 10.27 22.82 C 7.693 25.314 5.105 27.164 3.163 28.39 C 2.191 29.003 1.382 29.46 0.815 29.764 C 0.532 29.915 0.31 30.029 0.158 30.104 C 0.083 30.142 0.025 30.17 -0.014 30.188 C -0.033 30.198 -0.048 30.205 -0.057 30.209 C -0.062 30.212 -0.066 30.213 -0.068 30.214 C -0.069 30.215 -0.07 30.215 -0.071 30.216 C -0.071 30.216 -0.071 30.216 -0.071 30.216 C -0.071 30.216 -0.071 30.216 0 30.37 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.050,
    height: 28.710,
    viewBox: "0 0 19.050 28.710",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.99,
      top: 1.993,
      width: 19.05,
      height: 28.71,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.857 7.199 C 12.867 7.2 16.171 7.509 19.032 6.026 C 16.343 7.856 12.42 7.833 12.413 7.833 C 10.069 11.209 7.796 14.998 5.872 18.413 C 6.115 18.433 10.274 18.744 13.899 16.835 C 10.713 19.032 6.212 19.227 5.405 19.244 C 2.464 24.524 0.447 28.71 0.447 28.71 L 0 28.545 C 0 28.545 3.598 21.018 8.219 13.514 C 7.794 12.793 6.926 11.049 6.884 8.753 C 7.148 11.198 8.242 12.644 8.539 12.997 C 11.865 7.653 15.678 2.41 19.05 0 C 17.074 1.667 14.945 4.251 12.857 7.199 L 12.857 7.199 Z M 12.489 7.725 C 12.603 7.56 12.717 7.397 12.832 7.235 L 12.489 7.725 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.943,
    height: 24.952,
    viewBox: "0 0 8.943 24.952",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.827,
      top: 7.886,
      width: 8.943,
      height: 24.952,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.226 0 C 7.226 0 -4.387 8.616 1.831 24.931 L 2.797 24.952 C 2.797 24.952 12.869 13.711 7.226 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.827,
      top: 7.886,
      width: 8.943,
      height: 24.952,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.943312644958496,
      height: 24.95195960998535,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37.102,
    height: 34.409,
    viewBox: "0 0 37.102 34.409",
    fill: "none",
    style: {
      position: "absolute",
      left: -29.876,
      top: -4.981,
      width: 37.102,
      height: 34.409,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.102 4.981 C 33.234 15.612 18.253 6.802 32.778 22.48 C 43.2 33.728 13.882 34.409 13.882 34.409 C 13.882 34.409 -1.258 22.34 0.084 21.33 C 1.427 20.32 22.465 0 22.465 0 L 32.175 0.054",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 8.943,
    height: 24.952,
    viewBox: "0 0 8.943 24.952",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.827,
      top: 7.886,
      width: 8.943,
      height: 24.952,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.226 0 L 7.383 -0.065 C 7.363 -0.113 7.322 -0.15 7.272 -0.164 C 7.221 -0.178 7.167 -0.168 7.125 -0.136 L 7.226 0 Z M 1.831 24.931 L 1.672 24.992 C 1.697 25.056 1.758 25.099 1.827 25.101 L 1.831 24.931 Z M 2.797 24.952 L 2.793 25.122 C 2.842 25.123 2.89 25.102 2.923 25.065 L 2.797 24.952 Z M 7.226 0 C 7.125 -0.136 7.125 -0.136 7.125 -0.136 C 7.125 -0.136 7.125 -0.136 7.124 -0.136 C 7.124 -0.135 7.123 -0.135 7.122 -0.134 C 7.121 -0.133 7.118 -0.131 7.115 -0.129 C 7.11 -0.125 7.101 -0.118 7.089 -0.109 C 7.067 -0.092 7.034 -0.066 6.991 -0.032 C 6.906 0.037 6.782 0.139 6.628 0.274 C 6.318 0.545 5.885 0.949 5.385 1.485 C 4.385 2.557 3.117 4.157 2.046 6.27 C -0.1 10.503 -1.455 16.785 1.672 24.992 L 1.831 24.931 L 1.989 24.871 C -1.101 16.761 0.242 10.578 2.348 6.424 C 3.403 4.344 4.65 2.771 5.633 1.717 C 6.124 1.19 6.55 0.794 6.851 0.53 C 7.002 0.398 7.122 0.299 7.204 0.233 C 7.245 0.2 7.276 0.176 7.297 0.16 C 7.307 0.152 7.315 0.146 7.32 0.142 C 7.323 0.14 7.325 0.138 7.326 0.137 C 7.327 0.137 7.327 0.137 7.327 0.136 C 7.327 0.136 7.327 0.136 7.327 0.136 C 7.327 0.136 7.327 0.136 7.226 0 Z M 1.831 24.931 L 1.827 25.101 L 2.793 25.122 L 2.797 24.952 L 2.8 24.782 L 1.834 24.761 L 1.831 24.931 Z M 2.797 24.952 C 2.923 25.065 2.923 25.065 2.923 25.065 C 2.923 25.065 2.923 25.065 2.924 25.065 C 2.924 25.064 2.924 25.063 2.925 25.063 C 2.927 25.061 2.928 25.059 2.931 25.056 C 2.936 25.05 2.944 25.042 2.953 25.031 C 2.973 25.008 3.001 24.975 3.038 24.932 C 3.111 24.845 3.218 24.716 3.351 24.548 C 3.618 24.21 3.992 23.714 4.423 23.076 C 5.284 21.801 6.373 19.957 7.285 17.681 C 9.109 13.129 10.226 6.844 7.383 -0.065 L 7.226 0 L 7.069 0.065 C 9.869 6.868 8.772 13.058 6.97 17.555 C 6.069 19.803 4.993 21.626 4.142 22.886 C 3.716 23.517 3.347 24.006 3.085 24.337 C 2.954 24.502 2.85 24.628 2.779 24.713 C 2.743 24.755 2.716 24.787 2.697 24.808 C 2.688 24.818 2.681 24.826 2.677 24.831 C 2.674 24.834 2.673 24.836 2.672 24.837 C 2.671 24.838 2.671 24.838 2.67 24.838 C 2.67 24.839 2.67 24.839 2.67 24.839 C 2.67 24.839 2.67 24.839 2.797 24.952 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.200,
    height: 23.378,
    viewBox: "0 0 7.200 23.378",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.928,
      top: 9.446,
      width: 7.2,
      height: 23.378,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.886 15.278 C 1.971 15.257 4.815 14.524 6.703 12.391 C 5.198 14.595 2.301 15.752 1.802 15.939 C 1.276 20.129 1.064 23.378 1.064 23.378 L 0.73 23.371 C 0.73 23.371 1.091 17.534 2.125 11.479 C 1.658 11.096 0.633 10.132 0 8.613 C 0.817 10.182 1.911 10.894 2.198 11.061 C 2.957 6.741 4.061 2.376 5.623 0 C 4.775 1.563 4.068 3.771 3.484 6.212 L 3.484 6.212 C 3.501 6.208 5.729 5.657 7.2 4.018 C 5.934 5.845 3.385 6.727 3.362 6.735 L 3.362 6.735 C 2.724 9.52 2.241 12.564 1.886 15.278 Z M 3.381 6.652 C 3.413 6.514 3.445 6.376 3.478 6.239 L 3.381 6.652 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.916,
    height: 15.504,
    viewBox: "0 0 8.916 15.504",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.81,
      top: 18.049,
      width: 8.916,
      height: 15.504,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.299 0 C 0.299 0 -2.388 8.953 8.355 15.504 L 8.906 15.16 C 8.906 15.16 9.561 5.352 0.299 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44.81,
      top: 18.049,
      width: 8.916,
      height: 15.504,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.916452407836914,
      height: 15.504429817199707,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.040,
    height: 19.340,
    viewBox: "0 0 17.040 19.340",
    fill: "none",
    style: {
      position: "absolute",
      left: -6.344,
      top: -0.407,
      width: 17.04,
      height: 19.34,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.665 0 C 8.407 11.597 11.699 8.388 16.268 15.896 C 20.838 23.403 3.612 16.298 3.612 16.298 L 0 10.817",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 8.916,
    height: 15.504,
    viewBox: "0 0 8.916 15.504",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.81,
      top: 18.049,
      width: 8.916,
      height: 15.504,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.299 0 L 0.383 -0.147 C 0.339 -0.173 0.284 -0.177 0.236 -0.158 C 0.188 -0.139 0.151 -0.098 0.136 -0.049 L 0.299 0 Z M 8.355 15.504 L 8.267 15.649 C 8.322 15.683 8.391 15.682 8.445 15.648 L 8.355 15.504 Z M 8.906 15.16 L 8.996 15.303 C 9.043 15.275 9.072 15.225 9.076 15.171 L 8.906 15.16 Z M 0.299 0 C 0.136 -0.049 0.136 -0.049 0.136 -0.048 C 0.136 -0.048 0.136 -0.048 0.136 -0.048 C 0.136 -0.048 0.135 -0.047 0.135 -0.046 C 0.135 -0.045 0.134 -0.043 0.134 -0.041 C 0.132 -0.036 0.13 -0.029 0.128 -0.019 C 0.123 -0.001 0.115 0.026 0.106 0.06 C 0.089 0.13 0.065 0.232 0.038 0.364 C -0.016 0.627 -0.08 1.008 -0.122 1.486 C -0.208 2.442 -0.208 3.783 0.132 5.332 C 0.814 8.434 2.856 12.35 8.267 15.649 L 8.355 15.504 L 8.443 15.36 C 3.111 12.108 1.125 8.271 0.464 5.259 C 0.133 3.75 0.133 2.444 0.216 1.516 C 0.257 1.052 0.319 0.683 0.37 0.431 C 0.396 0.305 0.419 0.209 0.436 0.144 C 0.444 0.112 0.45 0.087 0.455 0.071 C 0.457 0.063 0.459 0.057 0.46 0.054 C 0.46 0.052 0.461 0.05 0.461 0.05 C 0.461 0.049 0.461 0.049 0.461 0.049 C 0.461 0.049 0.461 0.049 0.461 0.049 C 0.461 0.049 0.461 0.049 0.299 0 Z M 8.355 15.504 L 8.445 15.648 L 8.996 15.303 L 8.906 15.16 L 8.816 15.016 L 8.265 15.361 L 8.355 15.504 Z M 8.906 15.16 C 9.076 15.171 9.076 15.171 9.076 15.171 C 9.076 15.17 9.076 15.17 9.076 15.17 C 9.076 15.17 9.076 15.169 9.076 15.168 C 9.076 15.167 9.076 15.165 9.076 15.162 C 9.077 15.157 9.077 15.15 9.078 15.14 C 9.079 15.12 9.08 15.091 9.081 15.054 C 9.084 14.979 9.086 14.869 9.086 14.728 C 9.086 14.445 9.075 14.036 9.033 13.529 C 8.949 12.516 8.739 11.11 8.238 9.535 C 7.234 6.383 5.059 2.555 0.383 -0.147 L 0.299 0 L 0.214 0.147 C 4.801 2.797 6.93 6.548 7.914 9.638 C 8.407 11.184 8.612 12.564 8.695 13.557 C 8.736 14.054 8.747 14.453 8.747 14.728 C 8.747 14.865 8.744 14.971 8.742 15.042 C 8.741 15.078 8.739 15.105 8.738 15.123 C 8.738 15.131 8.738 15.138 8.737 15.142 C 8.737 15.145 8.737 15.146 8.737 15.147 C 8.737 15.148 8.737 15.148 8.737 15.148 C 8.737 15.148 8.737 15.148 8.737 15.148 C 8.737 15.148 8.737 15.148 8.906 15.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.835,
    height: 14.474,
    viewBox: "0 0 7.835 14.474",
    fill: "none",
    style: {
      position: "absolute",
      left: 45.52,
      top: 19.08,
      width: 7.835,
      height: 14.474,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.942 10.05 C 6.509 12.515 7.835 14.354 7.835 14.354 L 7.645 14.474 C 7.645 14.474 5.253 11.176 3.141 7.513 C 2.273 7.435 1.432 7.172 0.674 6.743 C 1.83 7.292 2.761 7.274 2.996 7.259 C 1.501 4.638 0.18 1.864 0 0 C 0.218 1.16 0.804 2.618 1.562 4.156 L 1.562 4.156 C 1.575 4.141 2.575 3.023 2.671 1.596 C 2.773 3.054 1.735 4.471 1.726 4.484 C 2.607 6.23 3.687 8.057 4.696 9.66 C 4.736 9.614 6.004 8.169 6.115 6.319 C 6.25 8.069 5.139 9.764 4.942 10.05 Z M 1.613 4.259 C 1.617 4.268 1.621 4.276 1.625 4.284 L 1.583 4.199 C 1.593 4.219 1.603 4.239 1.613 4.259 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.575,
    height: 15.112,
    viewBox: "0 0 15.575 15.112",
    fill: "none",
    style: {
      position: "absolute",
      left: 42.722,
      top: 30.389,
      width: 15.575,
      height: 15.112,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.575 3.774 L 15.575 3.774 L 10.444 1.887 L 5.313 0 L 5.313 0 C 5.75 1.306 5.314 2.45 4.09 3.13 C 1.412 4.615 -1.772 7.722 1.187 11.338 L 6.318 13.225 L 11.449 15.112 C 16.031 14.269 15.593 9.83 14.5 6.958 C 14.001 5.645 14.403 4.488 15.575 3.774 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.722,
      top: 30.389,
      width: 15.575,
      height: 15.112,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.57457160949707,
      height: 15.111502647399902,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.099,
    height: 20.639,
    viewBox: "0 0 24.099 20.639",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.873,
      top: 0.902,
      width: 24.099,
      height: 20.639,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.1 0 C 5.027 0.596 21.632 16.562 5.414 12.037 C -10.805 7.511 14.586 20.231 14.586 20.231 L 17.058 20.639 L 24.099 14.335 L 20.464 5.325 L 17.996 2.657 L 22.1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 15.575,
    height: 15.112,
    viewBox: "0 0 15.575 15.112",
    fill: "none",
    style: {
      position: "absolute",
      left: 42.722,
      top: 30.389,
      width: 15.575,
      height: 15.112,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.575 3.774 M 15.575 3.774 M 10.444 1.887 L 10.502 1.728 L 10.502 1.728 L 10.444 1.887 Z M 5.313 0 M 5.313 0 M 4.09 3.13 L 4.007 2.981 L 4.007 2.981 L 4.09 3.13 Z M 1.187 11.338 L 1.056 11.445 C 1.075 11.469 1.1 11.487 1.129 11.497 L 1.187 11.338 Z M 6.318 13.225 L 6.26 13.384 L 6.26 13.384 L 6.318 13.225 Z M 11.449 15.112 L 11.391 15.271 C 11.419 15.281 11.45 15.284 11.48 15.278 L 11.449 15.112 Z M 14.5 6.958 L 14.342 7.018 L 14.342 7.018 L 14.5 6.958 Z M 15.575 3.774 M 15.575 3.774 L 15.633 3.615 L 10.502 1.728 L 10.444 1.887 L 10.385 2.046 L 15.516 3.933 L 15.575 3.774 Z M 10.444 1.887 L 10.502 1.728 L 5.371 -0.159 L 5.313 0 L 5.254 0.159 L 10.385 2.046 L 10.444 1.887 Z M 5.313 0 M 5.313 0 L 5.152 0.054 C 5.36 0.676 5.357 1.247 5.166 1.738 C 4.976 2.23 4.591 2.657 4.007 2.981 L 4.09 3.13 L 4.172 3.278 C 4.813 2.923 5.259 2.439 5.483 1.861 C 5.707 1.284 5.702 0.63 5.474 -0.054 L 5.313 0 Z M 4.09 3.13 L 4.007 2.981 C 2.656 3.731 1.158 4.899 0.375 6.354 C -0.018 7.085 -0.233 7.892 -0.153 8.754 C -0.074 9.617 0.299 10.52 1.056 11.445 L 1.187 11.338 L 1.319 11.23 C 0.596 10.348 0.257 9.507 0.185 8.723 C 0.112 7.939 0.306 7.199 0.674 6.515 C 1.413 5.142 2.846 4.013 4.172 3.278 L 4.09 3.13 Z M 1.187 11.338 L 1.129 11.497 L 6.26 13.384 L 6.318 13.225 L 6.377 13.065 L 1.246 11.178 L 1.187 11.338 Z M 6.318 13.225 L 6.26 13.384 L 11.391 15.271 L 11.449 15.112 L 11.508 14.952 L 6.377 13.065 L 6.318 13.225 Z M 11.449 15.112 L 11.48 15.278 C 12.653 15.063 13.517 14.614 14.132 14.007 C 14.746 13.399 15.1 12.643 15.269 11.83 C 15.605 10.211 15.21 8.347 14.659 6.898 L 14.5 6.958 L 14.342 7.018 C 14.883 8.441 15.254 10.233 14.936 11.761 C 14.778 12.522 14.451 13.214 13.893 13.765 C 13.335 14.317 12.537 14.739 11.419 14.945 L 11.449 15.112 Z M 14.5 6.958 L 14.659 6.898 C 14.421 6.271 14.402 5.695 14.571 5.196 C 14.741 4.697 15.105 4.259 15.663 3.919 L 15.575 3.774 L 15.486 3.629 C 14.872 4.003 14.449 4.5 14.25 5.087 C 14.05 5.673 14.08 6.332 14.342 7.018 L 14.5 6.958 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.838,
    height: 0.561,
    viewBox: "0 0 0.838 0.561",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.209,
      top: 15.454,
      width: 0.838,
      height: 0.561,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.932 0.141 C 1.01 0.089 1.031 -0.016 0.979 -0.094 C 0.927 -0.172 0.821 -0.193 0.744 -0.141 L 0.838 0 L 0.932 0.141 Z M -0.094 0.419 C -0.172 0.472 -0.193 0.577 -0.141 0.655 C -0.089 0.733 0.016 0.754 0.094 0.702 L 0 0.561 L -0.094 0.419 Z M 0.838 0 L 0.744 -0.141 L -0.094 0.419 L 0 0.561 L 0.094 0.702 L 0.932 0.141 L 0.838 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 43.570,
    height: 30.367,
    viewBox: "0 0 43.570 30.367",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.035,
      top: 21.406,
      width: 43.57,
      height: 30.367,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.785 5.644 L 18.743 1.438 C 18.091 0.536 17.046 0.001 15.933 0 L 3.387 0 C 1.516 0 0 1.524 0 3.405 L 0 30.367 L 43.57 30.367 L 43.57 9.049 C 43.57 7.168 42.054 5.644 40.184 5.644 L 21.785 5.644 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.785 5.644 L 21.648 5.744 C 21.68 5.788 21.731 5.814 21.785 5.814 L 21.785 5.644 Z M 18.743 1.438 L 18.605 1.538 L 18.605 1.538 L 18.743 1.438 Z M 15.933 0 L 15.933 -0.17 L 15.933 -0.17 L 15.933 0 Z M 0 30.367 L -0.17 30.367 C -0.17 30.461 -0.094 30.537 0 30.537 L 0 30.367 Z M 43.57 30.367 L 43.57 30.537 C 43.664 30.537 43.74 30.461 43.74 30.367 L 43.57 30.367 Z M 40.184 5.644 L 40.184 5.474 L 40.184 5.474 L 40.184 5.644 Z M 21.785 5.644 L 21.923 5.545 L 18.88 1.339 L 18.743 1.438 L 18.605 1.538 L 21.648 5.744 L 21.785 5.644 Z M 18.743 1.438 L 18.88 1.339 C 18.197 0.392 17.101 -0.169 15.933 -0.17 L 15.933 0 L 15.933 0.17 C 16.992 0.171 17.985 0.679 18.605 1.538 L 18.743 1.438 Z M 15.933 0 L 15.933 -0.17 L 3.387 -0.17 L 3.387 0 L 3.387 0.17 L 15.933 0.17 L 15.933 0 Z M 3.387 0 L 3.387 -0.17 C 1.422 -0.17 -0.17 1.431 -0.17 3.405 L 0 3.405 L 0.17 3.405 C 0.17 1.617 1.611 0.17 3.387 0.17 L 3.387 0 Z M 0 3.405 L -0.17 3.405 L -0.17 30.367 L 0 30.367 L 0.17 30.367 L 0.17 3.405 L 0 3.405 Z M 0 30.367 L 0 30.537 L 43.57 30.537 L 43.57 30.367 L 43.57 30.198 L 0 30.198 L 0 30.367 Z M 43.57 30.367 L 43.74 30.367 L 43.74 9.049 L 43.57 9.049 L 43.401 9.049 L 43.401 30.367 L 43.57 30.367 Z M 43.57 9.049 L 43.74 9.049 C 43.74 7.075 42.149 5.474 40.184 5.474 L 40.184 5.644 L 40.184 5.814 C 41.959 5.814 43.401 7.261 43.401 9.049 L 43.57 9.049 Z M 40.184 5.644 L 40.184 5.474 L 21.785 5.474 L 21.785 5.644 L 21.785 5.814 L 40.184 5.814 L 40.184 5.644 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.681,
      top: 28.053,
      width: 37.59,
      height: 9.202,
      borderRadius: 1.6613850593566895,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 43.570,
    height: 30.367,
    viewBox: "0 0 43.570 30.367",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.035,
      top: 30.669,
      width: 43.57,
      height: 30.367,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.765 0 L 40.805 0 C 42.332 0 43.57 1.238 43.57 2.765 L 43.57 26.588 C 43.57 28.675 41.878 30.367 39.791 30.367 L 3.779 30.367 C 1.692 30.367 0 28.675 0 26.588 L 0 2.765 C 0 1.238 1.238 0 2.765 0 L 2.765 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 43.570,
    height: 30.367,
    viewBox: "0 0 43.570 30.367",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.035,
      top: 30.669,
      width: 43.57,
      height: 30.367,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.765 -0.17 C 2.671 -0.17 2.595 -0.094 2.595 0 C 2.595 0.094 2.671 0.17 2.765 0.17 L 2.765 0 L 2.765 -0.17 Z M 43.57 26.588 L 43.4 26.588 L 43.57 26.588 Z M 3.779 30.367 L 3.779 30.537 L 3.779 30.537 L 3.779 30.367 Z M 0 26.588 L 0.17 26.588 L 0 26.588 Z M 0 2.765 L 0.17 2.765 L 0 2.765 Z M 2.765 0.17 C 2.859 0.17 2.935 0.094 2.935 0 C 2.935 -0.094 2.859 -0.17 2.765 -0.17 L 2.765 0 L 2.765 0.17 Z M 2.765 0 L 2.765 0.17 L 40.805 0.17 L 40.805 0 L 40.805 -0.17 L 2.765 -0.17 L 2.765 0 Z M 40.805 0 L 40.805 0.17 C 42.239 0.17 43.4 1.332 43.4 2.765 L 43.57 2.765 L 43.74 2.765 C 43.74 1.144 42.426 -0.17 40.805 -0.17 L 40.805 0 Z M 43.57 2.765 L 43.4 2.765 L 43.4 26.588 L 43.57 26.588 L 43.74 26.588 L 43.74 2.765 L 43.57 2.765 Z M 43.57 26.588 L 43.4 26.588 C 43.4 28.582 41.784 30.198 39.791 30.198 L 39.791 30.367 L 39.791 30.537 C 41.972 30.537 43.74 28.769 43.74 26.588 L 43.57 26.588 Z M 39.791 30.367 L 39.791 30.198 L 3.779 30.198 L 3.779 30.367 L 3.779 30.537 L 39.791 30.537 L 39.791 30.367 Z M 3.779 30.367 L 3.779 30.198 C 1.786 30.198 0.17 28.582 0.17 26.588 L 0 26.588 L -0.17 26.588 C -0.17 28.769 1.598 30.537 3.779 30.537 L 3.779 30.367 Z M 0 26.588 L 0.17 26.588 L 0.17 2.765 L 0 2.765 L -0.17 2.765 L -0.17 26.588 L 0 26.588 Z M 0 2.765 L 0.17 2.765 C 0.17 1.332 1.332 0.17 2.765 0.17 L 2.765 0 L 2.765 -0.17 C 1.144 -0.17 -0.17 1.144 -0.17 2.765 L 0 2.765 Z M 2.765 0 L 2.765 -0.17 L 2.765 -0.17 L 2.765 0 L 2.765 0.17 L 2.765 0.17 L 2.765 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.721,
    height: 27.452,
    viewBox: "0 0 8.721 27.452",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.785,
      top: 0,
      width: 8.721,
      height: 27.452,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.361 0 L 4.361 0 C 1.952 0 0 1.963 0 4.384 L 0 27.452 L 8.721 27.452 L 8.721 4.384 C 8.721 1.963 6.769 0 4.361 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.785,
      top: 0,
      width: 8.721,
      height: 27.452,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.721129417419434,
      height: 27.4515380859375,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 23.029,
    height: 42.094,
    viewBox: "0 0 23.029 42.094",
    fill: "none",
    style: {
      position: "absolute",
      left: -7.455,
      top: -8.328,
      width: 23.029,
      height: 42.094,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8.456 C 23.029 3.742 17.447 42.094 17.447 42.094 L 23.029 3.742 L 16.176 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 8.721,
    height: 27.452,
    viewBox: "0 0 8.721 27.452",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.785,
      top: 0,
      width: 8.721,
      height: 27.452,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 27.452 L -0.17 27.452 C -0.17 27.545 -0.094 27.621 0 27.621 L 0 27.452 Z M 8.721 27.452 L 8.721 27.621 C 8.815 27.621 8.891 27.545 8.891 27.452 L 8.721 27.452 Z M 4.361 0 L 4.361 -0.17 L 4.361 -0.17 L 4.361 0 L 4.361 0.17 L 4.361 0.17 L 4.361 0 Z M 4.361 0 L 4.361 -0.17 C 1.858 -0.17 -0.17 1.87 -0.17 4.384 L 0 4.384 L 0.17 4.384 C 0.17 2.056 2.047 0.17 4.361 0.17 L 4.361 0 Z M 0 4.384 L -0.17 4.384 L -0.17 27.452 L 0 27.452 L 0.17 27.452 L 0.17 4.384 L 0 4.384 Z M 0 27.452 L 0 27.621 L 8.721 27.621 L 8.721 27.452 L 8.721 27.282 L 0 27.282 L 0 27.452 Z M 8.721 27.452 L 8.891 27.452 L 8.891 4.384 L 8.721 4.384 L 8.551 4.384 L 8.551 27.452 L 8.721 27.452 Z M 8.721 4.384 L 8.891 4.384 C 8.891 1.87 6.863 -0.17 4.361 -0.17 L 4.361 0 L 4.361 0.17 C 6.674 0.17 8.551 2.056 8.551 4.384 L 8.721 4.384 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 48.575,
    height: 60.966,
    viewBox: "0 0 48.575 60.966",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.145,
      top: 0,
      width: 48.575,
      height: 60.966,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.214 0 L 11.955 0 L 11.955 0 L 0 0 C 2.408 0 4.361 1.963 4.361 4.384 L 4.361 7.632 L 4.361 7.632 L 4.361 60.966 L 48.575 60.966 L 48.575 4.384 C 48.575 1.963 46.622 0 44.214 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.145,
      top: 0,
      width: 48.575,
      height: 60.966,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48.57471466064453,
      height: 60.965614318847656,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 57.535,
    height: 39.598,
    viewBox: "0 0 57.535 39.598",
    fill: "none",
    style: {
      position: "absolute",
      left: -2.433,
      top: 32.678,
      width: 57.535,
      height: 39.598,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 51.008 0 C 54.123 35.856 5.273 24.631 5.273 24.631 L 0 36.48 L 56.139 39.598 L 57.535 10.316",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 48.575,
    height: 60.966,
    viewBox: "0 0 48.575 60.966",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.145,
      top: 0,
      width: 48.575,
      height: 60.966,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.955 0 L 11.785 0 C 11.785 0.094 11.861 0.17 11.955 0.17 L 11.955 0 Z M 11.955 0 L 12.125 0 C 12.125 -0.094 12.049 -0.17 11.955 -0.17 L 11.955 0 Z M 0 -0.17 C -0.094 -0.17 -0.17 -0.094 -0.17 0 C -0.17 0.094 -0.094 0.17 0 0.17 L 0 0 L 0 -0.17 Z M 4.361 7.632 L 4.191 7.632 C 4.191 7.726 4.267 7.802 4.361 7.802 L 4.361 7.632 Z M 4.361 7.632 L 4.53 7.632 C 4.53 7.538 4.454 7.462 4.361 7.462 L 4.361 7.632 Z M 4.361 60.966 L 4.191 60.966 C 4.191 61.059 4.267 61.135 4.361 61.135 L 4.361 60.966 Z M 48.575 60.966 L 48.575 61.135 C 48.668 61.135 48.744 61.059 48.744 60.966 L 48.575 60.966 Z M 44.214 0 L 44.214 -0.17 L 11.955 -0.17 L 11.955 0 L 11.955 0.17 L 44.214 0.17 L 44.214 0 Z M 11.955 0 L 12.125 0 L 12.125 0 L 11.955 0 L 11.785 0 L 11.785 0 L 11.955 0 Z M 11.955 0 L 11.955 -0.17 L 0 -0.17 L 0 0 L 0 0.17 L 11.955 0.17 L 11.955 0 Z M 0 0 L 0 0.17 C 2.314 0.17 4.191 2.056 4.191 4.384 L 4.361 4.384 L 4.53 4.384 C 4.53 1.87 2.503 -0.17 0 -0.17 L 0 0 Z M 4.361 4.384 L 4.191 4.384 L 4.191 7.632 L 4.361 7.632 L 4.53 7.632 L 4.53 4.384 L 4.361 4.384 Z M 4.361 7.632 L 4.361 7.802 L 4.361 7.802 L 4.361 7.632 L 4.361 7.462 L 4.361 7.462 L 4.361 7.632 Z M 4.361 7.632 L 4.191 7.632 L 4.191 60.966 L 4.361 60.966 L 4.53 60.966 L 4.53 7.632 L 4.361 7.632 Z M 4.361 60.966 L 4.361 61.135 L 48.575 61.135 L 48.575 60.966 L 48.575 60.796 L 4.361 60.796 L 4.361 60.966 Z M 48.575 60.966 L 48.744 60.966 L 48.744 4.384 L 48.575 4.384 L 48.405 4.384 L 48.405 60.966 L 48.575 60.966 Z M 48.575 4.384 L 48.744 4.384 C 48.744 1.87 46.717 -0.17 44.214 -0.17 L 44.214 0 L 44.214 0.17 C 46.528 0.17 48.405 2.056 48.405 4.384 L 48.575 4.384 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.873,
      top: 16.642,
      width: 35.822,
      height: 6.683,
      opacity: 0.73,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.647,
    height: 6.683,
    viewBox: "0 0 6.647 6.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.647,
      height: 6.683,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.341 C 0 1.496 1.488 0 3.324 0 C 5.159 0 6.647 1.496 6.647 3.341 C 6.647 5.187 5.159 6.683 3.324 6.683 C 1.488 6.683 0 5.187 0 3.341 Z M 1.858 3.952 C 2.105 4.542 2.684 4.925 3.324 4.921 C 4.194 4.919 4.898 4.212 4.895 3.341 C 4.895 2.702 4.509 2.125 3.918 1.881 C 3.327 1.637 2.646 1.774 2.195 2.227 C 1.744 2.681 1.611 3.362 1.858 3.952 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.324 4.921 L 3.323 4.752 L 3.323 4.752 L 3.324 4.921 Z M 1.858 3.952 L 2.015 3.886 L 2.015 3.886 L 1.858 3.952 Z M 4.895 3.341 L 4.726 3.341 L 4.726 3.342 L 4.895 3.341 Z M 3.918 1.881 L 3.983 1.724 L 3.983 1.724 L 3.918 1.881 Z M 2.195 2.227 L 2.075 2.108 L 2.075 2.108 L 2.195 2.227 Z M 3.324 0 L 3.324 -0.17 C 1.393 -0.17 -0.17 1.403 -0.17 3.341 L 0 3.341 L 0.17 3.341 C 0.17 1.589 1.583 0.17 3.324 0.17 L 3.324 0 Z M 6.647 3.341 L 6.817 3.341 C 6.817 1.403 5.254 -0.17 3.324 -0.17 L 3.324 0 L 3.324 0.17 C 5.065 0.17 6.478 1.589 6.478 3.341 L 6.647 3.341 Z M 3.324 6.683 L 3.324 6.853 C 5.254 6.853 6.817 5.28 6.817 3.341 L 6.647 3.341 L 6.478 3.341 C 6.478 5.094 5.065 6.513 3.324 6.513 L 3.324 6.683 Z M 0 3.341 L -0.17 3.341 C -0.17 5.28 1.393 6.853 3.324 6.853 L 3.324 6.683 L 3.324 6.513 C 1.583 6.513 0.17 5.094 0.17 3.341 L 0 3.341 Z M 3.324 4.921 L 3.323 4.752 C 2.752 4.755 2.235 4.413 2.015 3.886 L 1.858 3.952 L 1.701 4.018 C 1.975 4.671 2.616 5.095 3.325 5.091 L 3.324 4.921 Z M 4.895 3.341 L 4.726 3.342 C 4.728 4.118 4.1 4.75 3.323 4.752 L 3.324 4.921 L 3.324 5.091 C 4.288 5.089 5.068 4.305 5.065 3.341 L 4.895 3.341 Z M 3.918 1.881 L 3.853 2.038 C 4.381 2.256 4.726 2.77 4.726 3.341 L 4.895 3.341 L 5.065 3.341 C 5.065 2.633 4.638 1.994 3.983 1.724 L 3.918 1.881 Z M 2.195 2.227 L 2.315 2.347 C 2.718 1.942 3.325 1.82 3.853 2.038 L 3.918 1.881 L 3.983 1.724 C 3.328 1.454 2.574 1.605 2.075 2.108 L 2.195 2.227 Z M 1.858 3.952 L 2.015 3.886 C 1.794 3.36 1.913 2.752 2.315 2.347 L 2.195 2.227 L 2.075 2.108 C 1.575 2.61 1.428 3.364 1.701 4.018 L 1.858 3.952 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.217,
      top: 1.014,
      width: 27.605,
      height: 1.864,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.217,
      top: 3.833,
      width: 10.092,
      height: 1.836,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.419,
      top: 3.833,
      width: 10.092,
      height: 1.836,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.873,
      top: 41.047,
      width: 35.822,
      height: 6.683,
      opacity: 0.73,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.647,
    height: 6.683,
    viewBox: "0 0 6.647 6.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.647,
      height: 6.683,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.341 C 0 1.496 1.488 0 3.324 0 C 5.159 0 6.647 1.496 6.647 3.341 C 6.647 5.187 5.159 6.683 3.324 6.683 C 1.488 6.683 0 5.187 0 3.341 Z M 1.858 3.952 C 2.105 4.542 2.684 4.925 3.324 4.921 C 4.194 4.919 4.898 4.212 4.895 3.341 C 4.895 2.702 4.509 2.125 3.918 1.881 C 3.327 1.637 2.646 1.774 2.195 2.227 C 1.744 2.681 1.611 3.362 1.858 3.952 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.324 4.921 L 3.323 4.752 L 3.323 4.752 L 3.324 4.921 Z M 1.858 3.952 L 1.701 4.018 L 1.701 4.018 L 1.858 3.952 Z M 4.895 3.341 L 4.726 3.341 L 4.726 3.342 L 4.895 3.341 Z M 3.918 1.881 L 3.853 2.038 L 3.853 2.038 L 3.918 1.881 Z M 2.195 2.227 L 2.315 2.347 L 2.315 2.347 L 2.195 2.227 Z M 3.324 0 L 3.324 -0.17 C 1.393 -0.17 -0.17 1.403 -0.17 3.341 L 0 3.341 L 0.17 3.341 C 0.17 1.589 1.583 0.17 3.324 0.17 L 3.324 0 Z M 6.647 3.341 L 6.817 3.341 C 6.817 1.403 5.254 -0.17 3.324 -0.17 L 3.324 0 L 3.324 0.17 C 5.065 0.17 6.478 1.589 6.478 3.341 L 6.647 3.341 Z M 3.324 6.683 L 3.324 6.853 C 5.254 6.853 6.817 5.28 6.817 3.341 L 6.647 3.341 L 6.478 3.341 C 6.478 5.094 5.065 6.513 3.324 6.513 L 3.324 6.683 Z M 0 3.341 L -0.17 3.341 C -0.17 5.28 1.393 6.853 3.324 6.853 L 3.324 6.683 L 3.324 6.513 C 1.583 6.513 0.17 5.094 0.17 3.341 L 0 3.341 Z M 3.324 4.921 L 3.323 4.752 C 2.752 4.755 2.235 4.413 2.015 3.886 L 1.858 3.952 L 1.701 4.018 C 1.975 4.671 2.616 5.095 3.325 5.091 L 3.324 4.921 Z M 4.895 3.341 L 4.726 3.342 C 4.728 4.118 4.1 4.75 3.323 4.752 L 3.324 4.921 L 3.324 5.091 C 4.288 5.089 5.068 4.305 5.065 3.341 L 4.895 3.341 Z M 3.918 1.881 L 3.853 2.038 C 4.381 2.256 4.726 2.77 4.726 3.341 L 4.895 3.341 L 5.065 3.341 C 5.065 2.633 4.638 1.994 3.983 1.724 L 3.918 1.881 Z M 2.195 2.227 L 2.315 2.347 C 2.718 1.942 3.325 1.82 3.853 2.038 L 3.918 1.881 L 3.983 1.724 C 3.328 1.454 2.574 1.605 2.075 2.108 L 2.195 2.227 Z M 1.858 3.952 L 2.015 3.886 C 1.794 3.36 1.913 2.752 2.315 2.347 L 2.195 2.227 L 2.075 2.108 C 1.575 2.61 1.428 3.364 1.701 4.018 L 1.858 3.952 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.217,
      top: 1.014,
      width: 27.605,
      height: 1.864,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.217,
      top: 3.833,
      width: 10.092,
      height: 1.836,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.419,
      top: 3.833,
      width: 10.092,
      height: 1.836,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.871,
      top: 6.849,
      width: 9.825,
      height: 1.903,
      borderRadius: 0.5422846674919128,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.536,
      top: 10.61,
      width: 16.496,
      height: 1.087,
      borderRadius: 0.5422846674919128,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 6.647,
    height: 6.683,
    viewBox: "0 0 6.647 6.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.873,
      top: 28.845,
      width: 6.647,
      height: 6.683,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.341 C 0 1.496 1.488 0 3.324 0 C 5.159 0 6.647 1.496 6.647 3.341 C 6.647 5.187 5.159 6.683 3.324 6.683 C 1.488 6.683 0 5.187 0 3.341 Z M 1.858 3.952 C 2.105 4.542 2.684 4.925 3.324 4.921 C 4.194 4.919 4.898 4.212 4.895 3.341 C 4.895 2.701 4.509 2.125 3.918 1.881 C 3.327 1.637 2.646 1.773 2.195 2.227 C 1.744 2.681 1.611 3.362 1.858 3.952 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.324 4.921 L 3.323 4.751 L 3.323 4.751 L 3.324 4.921 Z M 1.858 3.952 L 1.701 4.017 L 1.701 4.017 L 1.858 3.952 Z M 4.895 3.341 L 4.726 3.341 L 4.726 3.342 L 4.895 3.341 Z M 3.918 1.881 L 3.983 1.724 L 3.983 1.724 L 3.918 1.881 Z M 2.195 2.227 L 2.075 2.107 L 2.075 2.107 L 2.195 2.227 Z M 3.324 0 L 3.324 -0.17 C 1.393 -0.17 -0.17 1.403 -0.17 3.341 L 0 3.341 L 0.17 3.341 C 0.17 1.589 1.583 0.17 3.324 0.17 L 3.324 0 Z M 6.647 3.341 L 6.817 3.341 C 6.817 1.403 5.254 -0.17 3.324 -0.17 L 3.324 0 L 3.324 0.17 C 5.065 0.17 6.478 1.589 6.478 3.341 L 6.647 3.341 Z M 3.324 6.683 L 3.324 6.853 C 5.254 6.853 6.817 5.28 6.817 3.341 L 6.647 3.341 L 6.478 3.341 C 6.478 5.094 5.065 6.513 3.324 6.513 L 3.324 6.683 Z M 0 3.341 L -0.17 3.341 C -0.17 5.28 1.393 6.853 3.324 6.853 L 3.324 6.683 L 3.324 6.513 C 1.583 6.513 0.17 5.094 0.17 3.341 L 0 3.341 Z M 3.324 4.921 L 3.323 4.751 C 2.752 4.755 2.235 4.413 2.015 3.886 L 1.858 3.952 L 1.701 4.017 C 1.975 4.671 2.616 5.095 3.325 5.091 L 3.324 4.921 Z M 4.895 3.341 L 4.726 3.342 C 4.728 4.118 4.1 4.749 3.323 4.751 L 3.324 4.921 L 3.324 5.091 C 4.288 5.088 5.068 4.305 5.065 3.341 L 4.895 3.341 Z M 3.918 1.881 L 3.853 2.038 C 4.381 2.255 4.726 2.77 4.726 3.341 L 4.895 3.341 L 5.065 3.341 C 5.065 2.633 4.638 1.994 3.983 1.724 L 3.918 1.881 Z M 2.195 2.227 L 2.315 2.347 C 2.718 1.942 3.325 1.82 3.853 2.038 L 3.918 1.881 L 3.983 1.724 C 3.328 1.454 2.574 1.605 2.075 2.107 L 2.195 2.227 Z M 1.858 3.952 L 2.015 3.886 C 1.794 3.359 1.913 2.752 2.315 2.347 L 2.195 2.227 L 2.075 2.107 C 1.575 2.61 1.428 3.364 1.701 4.017 L 1.858 3.952 Z",
    fill: "rgb(27,27,27)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.09,
      top: 29.859,
      width: 27.605,
      height: 1.864,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.09,
      top: 32.678,
      width: 10.092,
      height: 1.836,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.292,
      top: 32.678,
      width: 10.092,
      height: 1.836,
      borderRadius: 0.9156272411346436,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1.163,
    height: 0.935,
    viewBox: "0 0 1.163 0.935",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.732,
      top: 5.839,
      width: 1.163,
      height: 0.935,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.269 0.132 C 1.343 0.074 1.354 -0.033 1.295 -0.106 C 1.237 -0.179 1.13 -0.191 1.057 -0.132 L 1.163 0 L 1.269 0.132 Z M -0.106 0.803 C -0.179 0.862 -0.191 0.969 -0.132 1.042 C -0.074 1.115 0.033 1.126 0.106 1.068 L 0 0.935 L -0.106 0.803 Z M 1.163 0 L 1.057 -0.132 L -0.106 0.803 L 0 0.935 L 0.106 1.068 L 1.269 0.132 L 1.163 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.61,
      top: 35.101,
      width: 5.126,
      height: 11.289,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.61,
      top: 35.101,
      width: 5.126,
      height: 11.289,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.125865459442139,
      height: 11.28914737701416,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.238,
    height: 11.175,
    viewBox: "0 0 11.238 11.175",
    fill: "none",
    style: {
      position: "absolute",
      left: -3.772,
      top: 1.423,
      width: 11.238,
      height: 11.175,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.946 0.294 C 8.6 4.235 4.329 1.1 4.212 3.882 C 4.095 6.663 8.219 7.151 10.516 6.663 C 12.813 6.176 8.897 11.175 8.897 11.175 L 0 8.528 L 2.106 0 L 5.909 0.176",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.61,
      top: 35.101,
      width: 5.126,
      height: 11.289,
      boxShadow: "inset 0 0 0 0.170px rgb(27,27,27), 0 0 0 0.170px rgb(27,27,27)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 8.993,
    height: 18.215,
    viewBox: "0 0 8.993 18.215",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.676,
      top: 43.188,
      width: 8.993,
      height: 18.215,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.497 18.215 L 4.497 18.215 C 1.972 18.215 -0.057 16.126 0.001 13.589 L 0.316 0 L 8.678 0 L 8.992 13.589 C 9.051 16.126 7.021 18.215 4.497 18.215 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.676,
      top: 43.188,
      width: 8.993,
      height: 18.215,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.993271827697754,
      height: 18.214813232421875,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.701,
    height: 25.762,
    viewBox: "0 0 16.701 25.762",
    fill: "none",
    style: {
      position: "absolute",
      left: -1.993,
      top: -1.899,
      width: 16.701,
      height: 25.762,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.276 0 C 10.912 20.927 4.952 17.164 0.974 17.699 C -3.004 18.233 6.49 24.703 6.49 24.703 L 15.366 25.762 L 16.701 9.175 L 11.973 2.67",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 8.993,
    height: 18.215,
    viewBox: "0 0 8.993 18.215",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.676,
      top: 43.188,
      width: 8.993,
      height: 18.215,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.497 18.215 M 0.001 13.589 L -0.168 13.585 L -0.168 13.585 L 0.001 13.589 Z M 0.316 0 L 0.316 -0.17 C 0.223 -0.17 0.148 -0.096 0.146 -0.004 L 0.316 0 Z M 8.678 0 L 8.847 -0.004 C 8.845 -0.096 8.77 -0.17 8.678 -0.17 L 8.678 0 Z M 8.992 13.589 L 8.822 13.593 L 8.822 13.593 L 8.992 13.589 Z M 4.497 18.215 M 4.497 18.215 L 4.497 18.045 C 2.068 18.045 0.114 16.036 0.171 13.593 L 0.001 13.589 L -0.168 13.585 C -0.229 16.217 1.876 18.385 4.497 18.385 L 4.497 18.215 Z M 0.001 13.589 L 0.171 13.593 L 0.485 0.004 L 0.316 0 L 0.146 -0.004 L -0.168 13.585 L 0.001 13.589 Z M 0.316 0 L 0.316 0.17 L 8.678 0.17 L 8.678 0 L 8.678 -0.17 L 0.316 -0.17 L 0.316 0 Z M 8.678 0 L 8.508 0.004 L 8.822 13.593 L 8.992 13.589 L 9.162 13.585 L 8.847 -0.004 L 8.678 0 Z M 8.992 13.589 L 8.822 13.593 C 8.879 16.036 6.925 18.045 4.497 18.045 L 4.497 18.215 L 4.497 18.385 C 7.117 18.385 9.223 16.217 9.162 13.585 L 8.992 13.589 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.141,
    height: 28.291,
    viewBox: "0 0 28.141 28.291",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.587,
      width: 28.141,
      height: 28.291,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.145 C 0 6.333 6.299 0 14.07 0 C 21.841 0 28.141 6.333 28.141 14.145 C 28.141 21.958 21.841 28.291 14.07 28.291 C 6.299 28.291 0 21.958 0 14.145 Z M 3.757 14.145 C 3.757 19.872 8.374 24.514 14.071 24.514 C 19.767 24.514 24.384 19.872 24.384 14.145 C 24.384 8.419 19.767 3.777 14.071 3.777 C 8.374 3.777 3.757 8.419 3.757 14.145 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.141,
    height: 28.291,
    viewBox: "0 0 28.141 28.291",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10.587,
      width: 28.141,
      height: 28.291,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.07 0 L 14.07 -0.17 C 6.205 -0.17 -0.17 6.24 -0.17 14.145 L 0 14.145 L 0.17 14.145 C 0.17 6.426 6.394 0.17 14.07 0.17 L 14.07 0 Z M 0 14.145 L -0.17 14.145 C -0.17 22.051 6.205 28.461 14.07 28.461 L 14.07 28.291 L 14.07 28.121 C 6.394 28.121 0.17 21.865 0.17 14.145 L 0 14.145 Z M 14.07 28.291 L 14.07 28.461 C 21.936 28.461 28.311 22.051 28.311 14.145 L 28.141 14.145 L 27.971 14.145 C 27.971 21.865 21.747 28.121 14.07 28.121 L 14.07 28.291 Z M 28.141 14.145 L 28.311 14.145 C 28.311 6.24 21.936 -0.17 14.07 -0.17 L 14.07 0 L 14.07 0.17 C 21.747 0.17 27.971 6.426 27.971 14.145 L 28.141 14.145 Z M 14.071 24.514 L 14.071 24.344 C 8.469 24.344 3.927 19.779 3.927 14.145 L 3.757 14.145 L 3.587 14.145 C 3.587 19.965 8.28 24.684 14.071 24.684 L 14.071 24.514 Z M 3.757 14.145 L 3.927 14.145 C 3.927 8.512 8.469 3.946 14.071 3.946 L 14.071 3.777 L 14.071 3.607 C 8.28 3.607 3.587 8.326 3.587 14.145 L 3.757 14.145 Z M 14.071 3.777 L 14.071 3.946 C 19.672 3.946 24.215 8.512 24.215 14.145 L 24.384 14.145 L 24.554 14.145 C 24.554 8.326 19.861 3.607 14.071 3.607 L 14.071 3.777 Z M 24.384 14.145 L 24.215 14.145 C 24.215 19.779 19.672 24.344 14.071 24.344 L 14.071 24.514 L 14.071 24.684 C 19.861 24.684 24.554 19.965 24.554 14.145 L 24.384 14.145 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.101,
    height: 1.596,
    viewBox: "0 0 2.101 1.596",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.016,
      top: 14.038,
      width: 2.101,
      height: 1.596,
      color: "rgb(27,27,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.225 0.116 C 2.289 0.047 2.286 -0.06 2.217 -0.124 C 2.149 -0.188 2.041 -0.184 1.977 -0.116 L 2.101 0 L 2.225 0.116 Z M -0.078 1.445 C -0.162 1.488 -0.194 1.591 -0.151 1.674 C -0.107 1.757 -0.005 1.789 0.078 1.746 L 0 1.596 L -0.078 1.445 Z M 2.101 0 L 1.977 -0.116 C 1.385 0.517 0.69 1.045 -0.078 1.445 L 0 1.596 L 0.078 1.746 C 0.881 1.328 1.607 0.777 2.225 0.116 L 2.101 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
      fontSize: 40,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Why is the business in a position to address this?")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160,
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
      fontWeight: 300,
      fontSize: 16,
      lineHeight: "32px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 16
    }
  }, "We believe"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, " by building our own-house capability to surface requested documents from the Credit Assessment team and introduce that ability to self-serve and upload support documents within the Broker Portal...\r"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 16
    }
  }, "Will Achieve"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, " a major step in our strategic goals in building efficiencies the application process in reducing the number of reworks and increasing the likelihood of cleaner application submissions. Whilst also minimising our portal dependencies on third party providers and operation run-costs for the business.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 380,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1028,
      height: 380,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.55)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 144,
      width: 828.642,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      alignSelf: "stretch",
      backgroundColor: "rgb(29,79,61)",
      borderRadius: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 797.243,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "Current solution is "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 16
    }
  }, "costly ($1.12M per year)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, ", where a third-party application is used to support the capability for Brokers to upload and provide information."), " ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      alignSelf: "stretch",
      backgroundColor: "rgb(29,79,61)",
      borderRadius: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 804.642,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Our highest call driver to our in-bound Broker Support Offices is regarding Advised Outstanding Documents, with sub-tracking in Salesforce suggesting 75% of those calls are around reasoning, and providing more clarity around the requests,"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 39,
      display: "flex",
      flexDirection: "row",
      gap: 22,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12.073394775390625,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3.450px 12.073px -1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8.62385368347168,
      padding: "8px 20.697px 8px 20.697px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "52.237px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "🤝"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, " Reduce run-cost to Porta"), "l")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12.073394775390625,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3.450px 12.073px -1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8.62385368347168,
      padding: "8px 20.697px 8px 20.697px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "52.237px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "🤝"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, " Reduce"), " in-bound call volumes")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 274,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1028,
      height: 274,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.55)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 144,
      width: 828.642,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      alignSelf: "stretch",
      backgroundColor: "rgb(29,79,61)",
      borderRadius: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 797.243,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Application Average Handling Time of 8 days\nAverage Application Rework time of 2.7x times. \nHighest call enquires with Advise on Outstanding Actions (42% overall calls)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 39,
      display: "flex",
      flexDirection: "row",
      gap: 22,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12.073394775390625,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3.450px 12.073px -1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8.62385368347168,
      padding: "8px 20.697px 8px 20.697px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "52.237px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uD83E\uDD1D Cleaner submit-to-settle")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12.073394775390625,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3.450px 12.073px -1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8.62385368347168,
      padding: "8px 20.697px 8px 20.697px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "52.237px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uD83E\uDD1D Reduce our Application AHT")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 285,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1028,
      height: 285,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.55)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 144,
      width: 828.642,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 106,
    height: 4,
    viewBox: "0 -2 106 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,0,3)",
      transformOrigin: "0 0",
      width: 106,
      height: 4,
      color: "rgb(29,79,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -2 L 0 0 L 106 0 L 106 -2 L 106 -4 L 0 -4 L 0 -2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 797.243,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "As a tracking metric, the broker is measured by:", "\n", "• ", "(APU) Active Portal Users", "\n", "• ", "(ABO) Active Brokerage Offices", "\n", "• ", "Comparison with feature-engagement vs. internal team engagement"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 39,
      display: "flex",
      flexDirection: "row",
      gap: 22,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12.073394775390625,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3.450px 12.073px -1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8.62385368347168,
      padding: "8px 20.697px 8px 20.697px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "52.237px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "🤝"), " Adoption of", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, " self-serve capabilitie"), "s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12.073394775390625,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3.450px 12.073px -1px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "row",
      gap: 8.62385368347168,
      padding: "8px 20.697px 8px 20.697px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "52.237px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, "🤝"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, " Increase"), " portal engagement"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
      fontSize: 40,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Steps we got to our solution")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 360,
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
  }, "Alignment and universal understanding"), /*#__PURE__*/React.createElement("span", {
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
  }, "The purpose of this was to align the product team with the \u2028key stakeholders on the purpose, our OKRs that\u2019s been set as part of business\u2019s strategy, the early agreed scope (Primary and secondary goals) but more importantly, the customer problem statements we generated on as a group.")), /*#__PURE__*/React.createElement("span", {
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
  }, "• ", "To protect the product team and avoid any mis-aligned expectations.", "\n", "• ", "Direct engagement with stakeholders to hear their perspectives as well as ‘spark’ any conversations between stakeholders has not happened yet i.e. actions they need to be given to unblock the product team", "\n", "• ", "Adequate confidence for design and engineering to start using the group-generated expectations as a basis for Explore", "\n", "• ", "Capture their perception of the solution how they envision it by journey mapping exercise"), /*#__PURE__*/React.createElement("span", {
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
  }, "Intent: Voice of the stakeholder, Shared understanding for product, Build product confidence and relieve any ambiguity")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 260.593,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1028,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-54b04856c8a00695",
    style: {
      position: "relative",
      width: 494.603,
      height: 260.593,
      borderRadius: 20,
      boxShadow: "inset 0 0 0 12px rgb(255,255,255)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-99f07285008a43fe",
    style: {
      position: "relative",
      width: 523,
      height: 255,
      borderRadius: 20,
      boxShadow: "inset 0 0 0 12px rgb(255,255,255)",
      flexShrink: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
      fontSize: 40,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cross team collaboration that will reduce \u2028application rework")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 597,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a29d6333d3217049",
    style: {
      position: "relative",
      height: 120,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7a67691d3d8a825c-27c54917",
    style: {
      position: "relative",
      height: 145,
      borderRadius: 4,
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
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Ideation workshop"), /*#__PURE__*/React.createElement("span", {
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
  }, "Based on our framing, I facilitated an  ideation session to provide an opportunity for working group present their own take on how the solution can be fitted into the Broker experience.", "\n", "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Design participants"), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Stakeholders"), "\n", "• ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Product team"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 158,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ed6d2d35118fccea",
    style: {
      position: "relative",
      width: 308,
      height: 296,
      flexShrink: 0
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
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Reviewing real-application data"), /*#__PURE__*/React.createElement("span", {
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
  }, "Understand how current application data is populated for Brokers to see. ", "\n", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Is this content comprehendible and what formatting is used in it by Credit and Broker Support Teams"), "?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7f123b5229a767c4-dbdbf08b",
    style: {
      position: "relative",
      height: 174,
      borderRadius: 20,
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
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Credit team and SME collaboration"), /*#__PURE__*/React.createElement("span", {
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
  }, "Facilitating conversations with Credit teams and BSO teams to assist in defining the practical examples that would represent real life applications.", "\n", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Uncovering the limitations of PEGA system around document classifications (document headings) and how they can be formatted to be more understandable.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
      fontSize: 40,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Validating our proposed solution")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 635,
      display: "flex",
      flexDirection: "row",
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
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2a6372ba931654fa-8b2fdd39",
    style: {
      position: "relative",
      height: 240,
      borderRadius: 10,
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
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Design Sparring"), /*#__PURE__*/React.createElement("span", {
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
  }, "• ", "Weekly designs sparring/huddle sessions for design critique", "\n", "• ", "Weekly stakeholder engagement sessions for feedback and considerations", "\n", "• ", "Async sparring and working group ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 158,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ebbbe75a3ba6f7ca-3382ea8f",
    style: {
      position: "relative",
      height: 240,
      borderRadius: 10,
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
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Research planning"), /*#__PURE__*/React.createElement("span", {
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
  }, "• ", "Consolidating our hypothesis/assumptions register", "\n", "• ", "Articulating and documenting our Learning Goals", "\n", "• ", "Engagement in recruiting brokerages and participants", "\n", "• ", "Building a prototype tied to our usability acceptance criteria's"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 213,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 317.923,
      height: 213,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.753,
      top: 146.556,
      width: 155.477,
      height: 65.14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f0967ec381df0025",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 155.477,
      height: 65.14,
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 142.967,
      top: 6.791,
      width: 6.344,
      height: 6.344,
      borderRadius: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9d733837a4a5bdcc",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 317.845,
      height: 141.06,
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 162.322,
      top: 145.457,
      width: 155.601,
      height: 67.543,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7f70294e4066c6ba",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 155.601,
      height: 67.543,
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 142.709,
      top: 5.271,
      width: 5.757,
      height: 5.757,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 142.303,
      top: 13.866,
      width: 7.217,
      height: 7.217,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 122.925,
      top: 15.325,
      width: 5.757,
      height: 5.757,
      borderRadius: 10
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 252.244,
      top: 10.35,
      width: 54.088,
      height: 33.053,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 42.236,
      top: 0,
      width: 11.852,
      height: 11.852,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 37.369,
      top: 20.974,
      width: 11.852,
      height: 11.852,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 0,
      top: 21.201,
      width: 11.852,
      height: 11.852,
      borderRadius: 10
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "Moderated sessions"), /*#__PURE__*/React.createElement("span", {
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
  }, "• ", "Booking and facilitating testing sessions with 8 x session", "\n", "• ", "Recruiting based of brokerages with highest call volumes matched to Outstanding Doc queries (State managers to help with recommendations)", "\n", "• ", "Mix of participants per session to pin-point direct users (brokers, support staff, off-shore support staff and ops managers)", "\n", "• ", "2 Interactive Figma Prototypes"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1028,
      display: "flex",
      flexDirection: "column",
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
      fontSize: 40,
      lineHeight: "62px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "How our findings informed our design recommendations to improve the experience"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 84,
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
      gap: 34,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 457.89,
      height: 370,
      overflow: "hidden",
      boxShadow: "0px 4px 24px 0px rgba(0,0,0,0.05)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fdbdcb4c4bdac69f",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 338.655,
      height: 282.11
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-64caca22fa759e9a",
    style: {
      position: "absolute",
      left: 110.016,
      top: 148.123,
      width: 347.874,
      height: 221.877
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 90.915,
      height: 79.771,
      transform: "matrix(0.722,0.692,0.692,-0.722,24.585,304.043)",
      transformOrigin: "0 0"
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    style: {
      transform: "scale(0.334, 1.115)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "21.967px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Focused based experience")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 74,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-60b6b5f86005309f-afc92ae8",
    style: {
      position: "relative",
      width: 519,
      height: 368,
      boxShadow: "0 0 0 31px rgb(255,255,255), 0px 4px 14px 0px rgba(0,0,0,0.05)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9a2ea2029adfb5ec-02e2a293",
    style: {
      position: "relative",
      width: 519,
      height: 287,
      boxShadow: "0 0 0 31px rgb(255,255,255), 0px 4px 14px 0px rgba(0,0,0,0.05)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 551,
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "21.967px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Being upfront with the request but giving flexibility for Brokerages to give that extra bit of context - let\u2019s get it right altogether"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 610,
      height: 348.571,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1a05cca19bf23cbc-15404fab",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 610,
      height: 348.571,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 556.648,
      top: 224.56,
      width: 27.96,
      height: 27.96,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 556.648,
      top: 183.892,
      width: 27.96,
      height: 27.96,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 561.732,
      top: 140.682,
      width: 27.96,
      height: 27.96,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a0f9d87902973f3b",
    style: {
      position: "absolute",
      left: 561.732,
      top: 49.178,
      width: 27.96,
      height: 27.96,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 566.815,
      top: 272.854,
      width: 27.96,
      height: 20.334,
      borderRadius: 10,
      backgroundColor: "rgb(36,36,36)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.399999976158142,
      color: "rgb(21,23,28)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Working with the credit team and presenting those finding to them sparking exercises to tie/map primary actions to each document classification"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 206,
      top: 12176,
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
  }, "Using pre-defined measures and seeing if our assumptions were correct"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: "25.820px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Numbers are based off a 15% pilot - 222 brokerages across NSW, QLD, VIC* ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Comparison data from Q3 March-May")), /*#__PURE__*/React.createElement(Badge, {
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
      flexGrow: 1
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
  }, "Increase volume of Clean Applications up +27% [56] ")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 27,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
  }, "Overall call volumes down -12%. Call volumes down -25% related enquiries\u2028Advised Outstanding Documents ")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 27,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
  }, "Increase Broker Portal Active Seats increased by 331 (New registered active users)"))))), /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "relative",
      width: 165,
      height: 36,
      flexShrink: 0
    },
    label: "Active monitoring",
    size: "m",
    kind: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: "25.820px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Continuous data collection on most enquired request types to measure and inform the quality of broker notes and apply modular upload/clarify options"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Alexandria, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: "25.820px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Move away from NextGen Apply Online saving the business $1.12M per year in license renewal")));
}

// Globals for scripts loaded after this file.
window.Arrow = Arrow;
window.Arrow2 = Arrow2;
window.Arrow3 = Arrow3;
window.IconDefault16Tick = IconDefault16Tick;
window.AssetsCheck = AssetsCheck;
window.Badge = Badge;
window.Badge2 = Badge2;
window.IconDefault24Accounts = IconDefault24Accounts;
window.ButtonV11 = ButtonV11;
window.IconStatus16Success2 = IconStatus16Success2;
window.Spinner = Spinner;
window.ContextualNavItemInactive = ContextualNavItemInactive;
window.CtaButton = CtaButton;
window.IconDefault24ExternalLink = IconDefault24ExternalLink;
window.IconDefault32AccountReports = IconDefault32AccountReports;
window.IconDefault32Accounts = IconDefault32Accounts;
window.IconDefault32Dashboard = IconDefault32Dashboard;
window.IconDefault32DocPDF = IconDefault32DocPDF;
window.IconDefault32ManagePeople = IconDefault32ManagePeople;
window.IconDefault32Upload = IconDefault32Upload;
window.IconStatus16Success = IconStatus16Success;
window.IconStatus24Success = IconStatus24Success;
window.Logo = Logo;
window.MqIcon = MqIcon;
window.Notifications = Notifications;
window.Pin24 = Pin24;
window.IconDefault16ChevronDown = IconDefault16ChevronDown;
window.SmallButtonV11 = SmallButtonV11;
window.Macquarie = Macquarie;