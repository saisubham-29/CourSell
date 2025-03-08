import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { onBoardingSlides } from '@/configs/constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Slider from '@/components/onboarding/slider';
export default function OnboardingScreen() {
    const [index, setIndex] = React.useState(0);
    const prev=onBoardingSlides[index-1];
    const next=onBoardingSlides[index+1];
  return ( 
    <GestureHandlerRootView style={{flex:1}}>
        <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev &&  Slide slide={prev} totalSlides={onBoardingSlides.length}}
        next={next &&  Slide slide={next } totalSlides={onBoardingSlides.length}}/>
        
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})