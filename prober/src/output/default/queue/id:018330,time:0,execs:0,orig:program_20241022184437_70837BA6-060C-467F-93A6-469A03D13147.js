const v2 = new BigInt64Array();
const v4 = new BigInt64Array();
const v6 = new BigUint64Array(v2);
const v8 = v4["toSorted"]();
let v9;
try { v9 = v2.sort(v8); } catch (e) {}
v6.fill(4294967297n, 10, v9);
gc();
