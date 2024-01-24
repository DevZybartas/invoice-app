//Styled components
import {
  BannerWrapper,
  FlexBox,
  BoxLeft,
  BoxRight,
  Box,
  BannerButton,
  PlusIcon,
  IconBox,
  ArrowDown,
} from "./Banner.styled";

import { HeadingSV, HeadingM, BodyText } from "../../../../styles/Headings";

const Banner = () => {
  return (
    <BannerWrapper>
      <FlexBox>
        <BoxLeft>
          <Box>
            <HeadingM>Invoices</HeadingM>
            <BodyText>7 Invoices</BodyText>
          </Box>
          <Box>
            <HeadingSV>Filter</HeadingSV>
            <ArrowDown src="/icon-arrow-down.svg" />
          </Box>
        </BoxLeft>
        <BoxRight>
          <BannerButton>
            <IconBox>
              <PlusIcon src="/icon-plus.svg" />
            </IconBox>
            <HeadingSV>New</HeadingSV>
          </BannerButton>
        </BoxRight>
      </FlexBox>
    </BannerWrapper>
  );
};

export default Banner;
