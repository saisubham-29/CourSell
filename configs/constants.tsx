import { IsIPAD } from "@/app/themes/app.constant";
import { onBoardingSlidesTypes } from "./global";
import { Image } from "react-native"; 
//@ts-ignore
import {One,Two,Three} from "@/assets/onboarding/1.png,2.png,3.png";
import { verticalScale,scale } from "react-native-size-matters"; 

export const onBoardingSlides: onBoardingSlidesTypes[] = [
    {
      color: "#40E0D0",
      title: "Explore",
      image: (
        <Image
          source={One}
          style={{
            width: IsIPAD ? verticalScale(285) : verticalScale(320),
            height: IsIPAD ? verticalScale(345) : verticalScale(330),
          }}
        />
      ),
      secondTitle: "Our Community",
      subtitle:"Find the perfect course to enhance your career prospects and skill set",
    },
    {
      color: "#A7F893",
      title: "Set Your",
      image: (
        <Image
          source={Two}
          style={{
            width: IsIPAD ? scale(285) : scale(320),
            height: IsIPAD ? verticalScale(345) : verticalScale(330),
          }}
        />
      ),
      secondTitle: "Own Goal",
      subtitle:
        "Personalize your study plan with flexible timelines that suit you best",
    },
    {
      color: "#FFC0CB",
      image: (
        <Image
          source={Three}
          style={{
            width: IsIPAD ? scale(285) : scale(320),
            height: IsIPAD ? verticalScale(345) : verticalScale(330),
          }}
        />
      ),
      title: "Complete full",
      secondTitle: "Course",
      subtitle: "Achieve certification by completing courses with dedicated effort",
    },
  ];
  


