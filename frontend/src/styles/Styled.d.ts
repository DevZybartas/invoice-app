// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple01: "#7C5DFA";
      purpleHover02: "#9277FF";
      darkBlue03: "#1E2139";
      blue04: "#252945";
      lightBlue05: "#DFE3FA";
      greyBlue06: "#888EB0";
      violetBlue07: "#7E88C3";
      veryDarkBlue08: "#0C0E16";
      red09: "#EC5757";
      redHover10: "#9277FF";
      lightBg11: "#F8F8FB";
      black12: "#141625";
      white: "#FFFFFF";
      grey: "#979797";
    };
    fonts: {};
    paddings: {
      mobile: "1.375rem";
      pageTop: "30px";
    };
    margins: {
      pageTop: "30px";
    };
  }
}
