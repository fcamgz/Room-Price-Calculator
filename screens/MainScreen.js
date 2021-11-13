import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const MainScreen = () => {
    const [sizeOfRoom, setSizeOfRoom] = React.useState(null);
    const [flooringPrice, setFlooringPrice] = React.useState(null);
    const [installationPrice, setInstallationPrice] = React.useState(null);
    const [square, setSquare] = React.useState(false);
    const [flooringCost, setFlooringCost] = React.useState(null);
    const [installationCost, setInstallationCost] = React.useState(null);
    const [taxCost, setTaxCost] = React.useState(null);
    const [totalCost, setTotalCost] = React.useState(null);

    calculateFlooring = (flooringPrice, size) => {
        var total = flooringPrice * size;
        setFlooringCost(total);
        return total;
    }

    calculateInstallationCost = (size, installationCost) => {
        var total = size * installationCost;
        setInstallationCost(total);
        return total;
    }

    calculateTax = (totalCost) => {
        var total = totalCost * 0.13;
        setTaxCost(total);
        return total;
    }

    calculateTotalCost = (flooringPrice, size, installationCost) => {
        var flooringCost = calculateFlooring(flooringPrice, size);
        var installationCost = calculateInstallationCost(size, installationCost);
        var totalCost = flooringCost + installationCost;
        setTotalCost(totalCost);
        calculateTax(totalCost);
        return totalCost;
    }

    return(
        <View style={{margin: 30}}>
            <Text style={{fontSize:24,fontWeight:'700', marginBottom: 20}}>Fill Below For Calculation</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                    <TextInput
                        style={styles.input} 
                        placeholder='Size of the room'
                        value={sizeOfRoom}
                        onChangeText={setSizeOfRoom}
                        keyboardType="numeric" 
                        />
                </View>
                <View style={{flex: 1}}>
                    <Text style={{marginTop: 10, fontSize: 16}}>Selected Type</Text>
                    <Button
                        onPress={() => setSquare(!square)}
                        title={square ? 'm2' : 'sqft'}
                    />
                </View>
            </View>
            <TextInput
                style={styles.input} 
                placeholder='Flooring price'
                value={flooringPrice}
                onChangeText={setFlooringPrice}
                keyboardType="numeric"  
                />
            <TextInput 
                style={styles.input} 
                placeholder='Installation price'
                value={installationPrice}
                onChangeText={setInstallationPrice}
                keyboardType="numeric"  
                />
            <Button
                onPress={() => calculateTotalCost(flooringPrice, sizeOfRoom, installationPrice)}
                title='Calculate'
            />
            <View style={{margin: 20}}>
                <Text style={{fontSize:16,fontWeight:'700'}}>{flooringCost ? `Flooring Cost: $${flooringCost}` : ''}</Text>
                <Text style={{fontSize:16,fontWeight:'700'}}>{installationCost ? `Installation Cost: $${installationCost}` : ''}</Text>
                <Text style={{fontSize:16,fontWeight:'700'}}>{totalCost ? `Total Cost: $${totalCost}` : ''}</Text>
                <Text style={{fontSize:16,fontWeight:'700'}}>{taxCost ? `Tax: $${taxCost}` : ''}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        fontSize:16,
        fontWeight:'700',
        borderWidth: 2
    },
});

export default MainScreen;