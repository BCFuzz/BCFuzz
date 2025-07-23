const v1 = Symbol.asyncIterator;
let v3 = new WeakMap();
function f4() {
    v1 in Symbol;
    const o6 = {
    };
    return o6;
}
v3.valueOf = f4;
function f7() {
    return ++v3;
}
v3.toString = f7;
const v10 = ["14",v3];
try { v10.slice(v10); } catch (e) {}
gc();
