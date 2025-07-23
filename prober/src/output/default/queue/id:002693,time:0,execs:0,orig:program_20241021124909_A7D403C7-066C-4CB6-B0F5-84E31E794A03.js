const v1 = [-6.796096456338203,-1.0,NaN,-3.0,-4.0];
v1[Symbol.toPrimitive] = v1;
const v4 = Array();
const v5 = [Array,Array,Array,Array,Array];
try { v5.splice(v4, v1); } catch (e) {}
gc();
