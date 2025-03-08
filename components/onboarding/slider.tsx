import { StyleSheet, Text, View } from 'react-native';
import React, { Children } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { Side } from './wave';
import { useVector,snapPoint } from 'react-native-redash';
interface SliderProps {
    index: number;
    setIndex: (value: number) => void;
    children: JSX.Element;
    prev: JSX.Element;
    next: JSX.Element;
}

export default function Slider({ index, children:current, prev, next, setIndex }: SliderProps) {
    const hasPrev = !!prev;
    const hasNext = !!next ;
    const zINdex= useSharedValue(0); 
    const activeSide = useSharedValue(Side.NONE); 
    const isTranstionLeft= useSharedValue(false);
    const isTranstionRight= useSharedValue(false);
    const isTranstion= useSharedValue(false);
    const left= useVector(); 
    return (
        <View style={styles.container}>
            <Text>Slider</Text>
        
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
