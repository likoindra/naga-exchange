import React from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const generateDummyData = length => {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.random() * 10000);
  }
  return data;
};

const DetailGraph = ({timeInterval}) => {
  const screenWidth = Dimensions.get('window').width;
  let data = [];

  switch (timeInterval) {
    case '24H':
      data = generateDummyData(24);
      break;
    case '1D':
      data = generateDummyData(7);
      break;
    case '1M':
      data = generateDummyData(30);
      break;
    case '1Y':
      data = generateDummyData(365);
      break;
    default:
      data = generateDummyData(24);
  }

  return (
    <View style={{flex: 1, width: '100%'}}>
      <LineChart
        data={{
          labels: Array.from({length: data.length}, (_, i) => i + 1), // Labels based on data length
          datasets: [
            {
              data,
            },
          ],
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2,
        }}
        bezier
      />
    </View>
  );
};

export default DetailGraph;
