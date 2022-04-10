import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DATA = [
    {
        title: 'Plain'
    },
    {
        title: 'Pineapple BBQ'
    },
    {
        title: 'Honey BBQ'
    },
    {
        title: 'Honey Garlic'
    },
];


const DATA1 = [
    {
        number: '6 Pieces',
        dot: ' ........................ ',
        prices: '7.99'
    },
    {
        number: '12 Pieces',
        dot: ' ........................ ',
        prices: '14.99'
    },
    {
        number: '24 Pieces',
        dot: ' ........................ ',
        prices: '27.99'
    },
];


const Wings = () => {
    return (
        <View style={styles.Maincontainer}>
            <View style={styles.Mainview}>
                <Image source={require('../assets/otp-left.png')}></Image>
            </View>
            <Text style={styles.TextWings}>Wings</Text>
            <View style={styles.RedView}></View>
            <View>
                <FlatList
                    horizontal={true}
                    //  numColumns={2}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ padding: wp(3), }}>
                                <Text style={styles.titletext}>{item.title}</Text>
                                <Text style={styles.titletext}>{item.title}</Text>
                                <Text style={styles.titletext}>{item.title}</Text>

                            </View>
                        )
                    }}
                />
            </View>
            <View>
                <Text style={styles.TextWings}>Wings</Text>
            </View>
            <View style={styles.WingsFLatlistView}>
                <View>
                    <FlatList
                        // horizontal={true}
                        //   numColumns={2}
                        data={DATA1}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.View1}>
                                    <Text style={styles.numbertext}>{item.number}</Text>
                                    <Text style={styles.numbertext}>{item.dot}</Text>
                                    <Text style={styles.pricestext}>{item.prices}</Text>

                                </View>
                            )
                        }}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.TextWings}>Tenders</Text>
            </View>
            <View style={styles.View2}>
                <View>
                    <FlatList
                        // horizontal={true}
                        //   numColumns={2}
                        data={DATA1}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ flexDirection: 'row', padding: wp(1), alignSelf: 'center', }}>
                                    <Text style={styles.numbertext}>{item.number}</Text>
                                    <Text style={styles.numbertext}>{item.dot}</Text>
                                    <Text style={styles.pricestext}>{item.prices}</Text>

                                </View>
                            )
                        }}
                    />
                </View>
            </View>

        </View>


    );

}
export default Wings;

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    Mainview: {
        width: wp('100%'),
        height: hp('10%'),
        justifyContent: 'center',
        marginLeft: wp(2)
    },
    TextWings: {

        fontWeight: 'bold',
        fontSize: 20,
        marginTop: hp(2),
        marginLeft: wp(2),
        color: 'black'
    },
    RedView: {
        height: 4,
        backgroundColor: '#ff0000',
        marginTop: hp(1),
        width: wp('90%'),
        alignSelf: 'center'
    },
    WingsFLatlistView: {
        width: wp('90%'),
        height: hp('18%'),
        backgroundColor: '#faf9f9',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: hp(2)
    },
    titletext: {
        fontSize: 16,
        marginVertical: hp(2)
        , color: 'black'
    },
    View1: {
        flexDirection: 'row',
        padding: wp(1),
        alignSelf: 'center',
    },
    numbertext: {
        fontSize: 16,
        marginVertical: hp(1),
        color: 'black'
    },
    pricestext: {
        fontSize: 16,
        marginVertical: hp(1),
        color: '#da2222'
    },
    View2: {
        width: wp('90%')
        , height: hp('18%'),
        backgroundColor: '#faf9f9',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: hp(2)
    }
});