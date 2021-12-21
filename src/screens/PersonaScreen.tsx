import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';


// interface RouterParams {
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({ route, navigation }:Props) => {

    // console.log(JSON.stringify(props, null, 3))


    // ******************************
    // Forma Sucia
    // ********************************

    // console.log(props.route)

    const params = route.params;

    // const params = route.params as RouterParams;


        useEffect(() => {

            navigation.setOptions({
                title: params.nombre
            })

        }, [])

    return (

        <View style={ styles.globalMargin }>
            <Text style={ styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>


    )
}
