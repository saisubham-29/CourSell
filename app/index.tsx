import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { Redirect } from 'expo-router';

export default function index() {
    const [loggedInUser,setLoggedInuser]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const subscription= async()=>{
            const token=await SecureStore.getItem("acessToken");
            setLoggedInuser(token?true:false);}; subscription();
            setLoading(false);
        },[]);
  return (
   <>
            {
                loading ? (<></>)
                : (<Redirect href={!loggedInUser ? ("/(routes)/Onboarding"):"/(tabs)" } />)
            }
        </>
  )
} 