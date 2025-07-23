class C0 {
}
const v3 = new Uint16Array(3);
let v4;
try { v4 = v3.map(C0); } catch (e) {}
const v6 = new Int16Array(v3, 3, v4);
const v8 = new WeakMap(v4);
v8[[v6,v8[Symbol.split],[Int16Array,Int16Array,Int16Array]]];
gc();
