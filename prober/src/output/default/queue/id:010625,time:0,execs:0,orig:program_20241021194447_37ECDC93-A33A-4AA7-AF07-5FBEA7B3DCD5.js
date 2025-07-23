const o1 = {
};
function f2(a3, a4) {
    return o1;
}
const v5 = f2(f2, Float32Array);
const v6 = f2(v5, Float32Array);
function f7(a8) {
    return Float32Array;
}
v6.toString = f7;
try { Reflect.getOwnPropertyDescriptor(v5, o1); } catch (e) {}
gc();
