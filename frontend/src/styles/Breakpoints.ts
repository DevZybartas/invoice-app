interface Size {
  mobile: string;
  tablet: string;
  desktop: string;
  Ldesktop: string;
}

const size: Size = {
  mobile: "767.99px", // for small screen mobile
  tablet: "991.99px", // for mobile screen
  desktop: "1199.99px", // for tablets
  Ldesktop: "1399.99px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
  Ldesktop: `(max-width: ${size.desktop})`,
};
