const v3 = new BigUint64Array();
const v4 = /(\p{General_Category=Decimal_Number})/dyisu;
function f6(a7) {
    v3["copyWithin"](2733, 1024, a7);
    return v4;
}
Uint8ClampedArray.toString = f6;
Date.constructor = f6;
const v11 = Date.constructor;
try { v11(Uint8ClampedArray); } catch (e) {}
gc();
