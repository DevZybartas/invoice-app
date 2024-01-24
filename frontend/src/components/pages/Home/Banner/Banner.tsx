//Styled components
import {
  BannerWrapper,
  FlexBox,
  BoxLeft,
  BoxRight,
  Box,
} from "./Banner.styled";

const Banner = () => {
  return (
    <BannerWrapper>
      <FlexBox>
        <BoxLeft>
          <Box>Invoices 7 invoices</Box>
        </BoxLeft>
        <BoxRight></BoxRight>
      </FlexBox>
    </BannerWrapper>
  );
};

export default Banner;
