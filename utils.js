import {NativeModules, NativeEventEmitter} from 'react-native';

const {TestBridge} = NativeModules;
const testBridgeEmmiter = new NativeEventEmitter(TestBridge);

const Bridge = {
  show: (rest, count, interval) => TestBridge.show(rest, count, interval),
  statusChange: callback =>
    testBridgeEmmiter.addListener('StatusChanged', callback),
};

export default Bridge;
