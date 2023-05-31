import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
   const { palette } = useTheme();
   const dark = palette.neutral.dark;
   const main = palette.neutral.main;
   const medium = palette.neutral.medium;

   return (
       <WidgetWrapper>
           <FlexBetween>
               <Typography color={dark} variant="h5" fontWeight="500">
                  Sponsored
               </Typography>
               <Typography color={medium}> Create Ad </Typography>
            </FlexBetween>
            <img 
              width="100%"
              height="auto"
              alt="advert"
              src="http://localhost:3001/assets/info4.jpeg"
              style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main}>Best Cosmetics</Typography>
                <Typography color={medium}> best_cosmetics.com </Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your path to a stunning beauty and a healthy exfoliating skin. Made with 
                100% natural ingredients to give you an immaculate and shining beauty.
            </Typography>
       </WidgetWrapper>
   )
}

export default AdvertWidget;