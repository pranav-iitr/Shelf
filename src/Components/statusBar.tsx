import {View, Text} from 'react-native';
import React from 'react';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import Locationicon from '../icons/LocationIcon';
const binarySearch = (arr: Array<any>, x: Int32) => {
  let start = 0;
  let end = arr.length - 1;
  // bianry search to find the postion of elemnt insertion
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }
  return start;
};

const getLengthOfStatusBar = (arr: Array<any>, x: Int32) => {
  let currentPos = binarySearch(arr, x);
  let unitLength = 100 / (arr.length - 1);
  let currentLength = (currentPos - 1) * unitLength;
  let prestionLength =
    ((x - arr[currentPos - 1]) / (arr[currentPos] - arr[currentPos - 1])) *
    unitLength;
  return isNaN(currentLength + prestionLength) ? 0 : currentLength + prestionLength ;
};

const StatusBar = ({arr, x = 22}: any) => {
  let tempArr = arr.map((item: any) =>
    parseInt(item.ts.split(':')[1]) > 30
      ? 1 + parseInt(item.ts.split(':')[0])
      : parseInt(item.ts.split(':')[0]),
  );
  console.log(getLengthOfStatusBar([0, 8, 16, 24], x))
  return (
    <View
      style={{
        marginTop: 40,
        // backgroundColor: 'red',
        flexDirection: 'row',
        gap: 20,
        width: '80%',
      }}>
      <View style={{justifyContent: 'space-between'}}>
        {arr.map((item, id) => {
          return (
            <View>
              <Text style={{fontWeight: '400', fontSize: 18, color: '#000'}}>
                {item.ts}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={{height: 280}}>
        <View
          style={{
            backgroundColor: '#0373F3',
            width: 2,
            height: `${getLengthOfStatusBar([0, 8, 16, 24], x)}%`,
          }}></View>
        <View
          style={{
            backgroundColor: '#C4C4C4',
            width: 2,
            height: `${100 - getLengthOfStatusBar([0, 8, 16, 24], x)}%`,
          }}></View>
        <View
          style={{
            height: 280,
            marginTop: -280,
            marginLeft: -12.5,
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          {tempArr.map((item, id) => {
            console.log(tempArr);
            return (
              <View style={{}}>
                {item <= x ? (
                  <>
                    <Locationicon />
                  </>
                ) : (
                  <View
                    style={{
                      height: 26,
                      width: 26,
                      borderRadius: 13,
                      borderColor: '#C4C4C4',
                      borderWidth: 2,
                      backgroundColor: '#ffffff',
                    }}></View>
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        {arr.map((item, id) => {
          return (
            <View
              style={{
                marginTop: id == 0 ? -12 : 0,
                marginBottom: id == arr.length - 1 ? -12 : 0,
              }}>
              <Text style={{fontWeight: '600', fontSize: 18, color: '#000'}}>
                {item.location}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 16, color: '#B1B1B1'}}>
                {item.task}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={{justifyContent: 'space-between', marginLeft: 40}}>
        {arr.map((item, id) => {
          return (
            <View
              style={{
                width: 43,
                height: 43,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                marginTop: id == 0 ? -12 : 0,
                marginBottom: id == arr.length - 1 ? -12 : 0,
              }}>
              {item.icon}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default StatusBar;
