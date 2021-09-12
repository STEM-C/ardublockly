'use strict';

goog.provide('Blockly.Arduino.comment');

goog.require('Blockly.Arduino');

/**
 * inline comment
 * @param {*} a 
 * @returns 
 */
Blockly.Arduino['insert_comment'] = function(a) {
    var b;
    var x;
    if (0 == a.itemCount_) return "// \n";
    if (1 == a.itemCount_) {
        x = (Blockly.Arduino.valueToCode(a, "ADD0", Blockly.Arduino.ORDER_UNARY_POSTFIX) || '');
        x = x.slice(0,-1);
        x = x.substring(1);
        return "// " + x + "\n";
    }
    var c;
    b = [];
    for (var d = 0; d < a.itemCount_; d++){
        c = Blockly.Arduino.valueToCode(a, "ADD" + d, Blockly.Arduino.ORDER_NONE);
        c = c.slice(0,-1);
        c = c.substring(1);
        b[d] = "" == c ? '' : "// " + c + "\n";
        }
    b = b.join("");
    return b;
};

/**
 * block comment
 * @param {*} a 
 * @returns 
 */
Blockly.Arduino['block_comment'] = function(a) {
    var b = Blockly.Arduino.statementToCode(a, 'comment');
    return "/* " + a.getFieldValue("comment_input") + "\n" + b + "*/\n";
};
