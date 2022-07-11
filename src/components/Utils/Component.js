

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';

import {useState} from 'react'

const participants = [
  'NEMANIL',
  'NEMARID',
  'EXOMESECURE',
  'TELS-BV',
  'MINBOOST',
  'TETRAPOWER',
  'K-BIO',
  'CALRATNA',
  'EXOMEGAINUP',
  'EXOMEHARVESTER',
  'TRUSOIL',
];
const colors = [
  '#8feba1',
  '#46a0f0',
  '#8e7aff',
  '#928db0',
  '#d24df7',
  '#f74d9c',
  '#f7be4d',
  '#f7914d',
  '#f76c4d',
  '#d1bbb6',
  '#fc9a9a'
]
const result = Math.random().toString(36).substring(2,7);

const Selector = () => {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [winnerValue , setwinnerValue] = useState('')
const [winnerIndex, setwinnerIndex] = useState('')
const [started, setStarted] = useState(false)
const [cuponcode,setCoupon] = useState('')


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   constructor(props) {
//     super(props);

//     this.state = {
//       winnerValue: null,
//       winnerIndex: null,
//       started: false,
//       cuponcode: null,
//     };
//     this.child = null;
//   }

const buttonPress = () => {
    setStarted(true),
    setCoupon(result)
}

const wheelOptions = {
    rewards: participants,
    knobSize: 30,
    borderWidth: 5,
    borderColor: '#fff',
    innerRadius: 30,
    duration: 6000,
    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    knobSource: require('../assets/images/knob.png'),
    onRef: ref => (this.child = ref),
};

// ///////////////////////////////////////////////////////////////////////////////////

    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            setwinnerValue(value),
            setwinnerIndex(index)
            // this.setState({winnerValue: value, winnerIndex: index});
          }}
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={buttonPress}
                // console.log(result);
                // this.setState({cuponcode: result});
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}
        {winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              You win {participants[winnerIndex]}
            </Text>
            {/* <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.setState({cuponcode: null})
                //this.props.navigation.navigate('HomeScreen')
                //this.child._tryAgain();
              }}
              style={styles.tryAgainButton}> */}
              <View style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>Cupon Code: {cuponcode}</Text>
              </View>
            {/* </TouchableOpacity> */}
          </View>
        )}
      </View>
    );

}
export default Selector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C'
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});