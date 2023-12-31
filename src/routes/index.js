import React, { useContext } from "react";
import { AuthContext } from '../contexts/auth';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {

    const { signed, loading } = useContext(AuthContext);

    if(loading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: StatusBar.currentHeight || 0}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    } else {
        return(
            signed ? <AppRoutes> </AppRoutes> : <AuthRoutes> </AuthRoutes>
        )
    }
}