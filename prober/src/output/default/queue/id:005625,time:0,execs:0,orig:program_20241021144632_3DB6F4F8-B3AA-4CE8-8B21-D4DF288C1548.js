const v2 = new Int16Array();
const v3 = v2.constructor;
const v4 = new v3(2147483648);
try { v4.reduce(Int16Array, 2147483648, v3, 2147483648, v4); } catch (e) {}
gc();
