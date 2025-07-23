const v2 = new Uint16Array();
function f3(a4) {
    return 2192;
}
function f6() {
    return f3;
}
function f7(a8) {
    return v2;
}
Object.defineProperty(WeakSet, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f6, set: f7 });
const v11 = new WeakSet();
const v12 = v11.constructor;
function f14() {
    return delete v2[v12];
}
Uint32Array[Symbol.toPrimitive] = f14;
function f17() {
    return "undefined";
}
Uint32Array.valueOf = f17;
const o19 = {
};
function f20() {
    return f17;
}
function f21(a22) {
    return v12;
}
Object.defineProperty(o19, "defineProperty", { enumerable: true, get: f20, set: f21 });
let v24 = new Proxy(Uint32Array, o19);
v24.valueOf = f17;
++v24;
gc();
