import { CalculatorScreen } from './src/presentation/screens/CalculatorScreen';

import {
  StatusBar,
  Text,

  View,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <View >
      <StatusBar
        barStyle='light-content'
        backgroundColor="black"
      />
      <CalculatorScreen />
    </View>
  );
}


export default App;
