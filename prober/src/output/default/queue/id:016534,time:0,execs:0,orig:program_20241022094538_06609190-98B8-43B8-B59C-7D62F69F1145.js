const v1 = new WeakMap();
class C2 extends WeakMap {
}
new C2();
const v4 = new C2();
v4.set(v1);
const v8 = new Uint16Array(2647);
v8[2483] = v8;
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const o15 = {
    "maxByteLength": 416,
};
const v17 = new SharedArrayBuffer(116, o15);
const v18 = new Float64Array(v17);
function f19(a20, a21) {
    return a21;
}
function f22() {
    return v8;
}
const v24 = Symbol.species;
const v26 = new Float64Array(2880);
for (const v27 in v26) {
}
f19[v24] = f22;
v18.constructor = f19;
v18.slice();
gc();
