import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',

            //Solo para IOS
            headerBackTitle: 'Atras'
        })
    }, [])


    const navigator = useNavigation();
    
    return (
        <View style = { styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button
                title= "Ir pagina 3"
                onPress={ () => navigator.navigate('Pagina3Screen') }
            />
        </View>
    )
}
