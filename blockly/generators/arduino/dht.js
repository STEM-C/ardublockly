'use strict';

goog.provide('Blockly.Arduino.dht');

goog.require('Blockly.Arduino');

//@CASMM
//dht sensor third party libary, github repo: https://github.com/adafruit/DHT-sensor-library

Blockly.Arduino.sensor_set_dht_pin = function (block) {
    var dropdown_pin = block.getFieldValue('dht_pin');
    Blockly.Arduino.addInclude('dht', '#include <DHT.h>');
  
    Blockly.Arduino.addDeclaration(
      'dht',
      `DHT dht(${parseInt(dropdown_pin)}, DHT11);`
    );
  
    Blockly.Arduino.addSetup('dht', 'dht.begin();', true);
  
    return '';
};
  
Blockly.Arduino.sensor_read_dht_humidity = function (block) {
    var code = 'dht.readHumidity()';
  
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  
Blockly.Arduino.sensor_read_dht_temperature = function (block) {
    var code = 'dht.readTemperature(true)';
  
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};