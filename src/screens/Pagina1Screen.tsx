import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any>{
    id: number;
    nombre: string;
};


export const Pagina1Screen = ( {navigation}: Props) => {


    return (
        <View style = { styles.globalMargin}>
            <Text>Pagina1Screen</Text>

            <Button
                title="Ir pagina 2"
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />
        </View>
    )
}
