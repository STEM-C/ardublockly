'use strict'

goog.provide('Blockly.Blocks.dht');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//@CASMM
//dht sensor third party libary, github repo: https://github.com/adafruit/DHT-sensor-library
Blockly.Blocks.sensor_set_dht_pin = {
    init: function () {
      this.appendDummyInput()
        .appendField('set DHT Temperature and Humidity Sensor Pin# to')
        .appendField(
          new Blockly.FieldDropdown([
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9'],
            ['10', '10'],
            ['11', '11'],
            ['12', '12'],
            ['13', '13'],
          ]),
          'dht_pin'
        );
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('https://learn.adafruit.com/dht');
    },
};
  
Blockly.Blocks.sensor_read_dht_humidity = {
    init: function () {
      this.appendDummyInput().appendField('Humidity');
      this.setInputsInline(false);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('https://learn.adafruit.com/dht');
    },
    getBlockType: function () {
      return Blockly.Types.DECIMAL;
    },
};
  
Blockly.Blocks.sensor_read_dht_temperature = {
    init: function () {
      this.appendDummyInput().appendField('Temperature');
      this.setInputsInline(false);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('https://learn.adafruit.com/dht');
    },
    getBlockType: function () {
      return Blockly.Types.DECIMAL;
    },
};