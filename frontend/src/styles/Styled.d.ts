// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: "#7C5DFA";
    };
    fonts: {};
    paddings: {
      container: "15px";
      pageTop: "30px";
    };
    margins: {
      pageTop: "30px";
    };
  }
}
