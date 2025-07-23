const v1 = new Int8Array();
const v2 = [NaN,3.0,-1.0,2.1939643207847546,1.7976931348623157e+308,-Infinity,0.7705446164125684];
v2.__proto__ = v1;
const v4 = new Uint16Array(v1, Int8Array);
try { v4.join(v2); } catch (e) {}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
gc();
