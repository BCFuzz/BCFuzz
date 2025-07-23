function f0() {
    return f0;
}
const v2 = Int8Array.of();
function f3(a4) {
    return v2;
}
v2.constructor = f3;
const v5 = v2.constructor;
const v7 = Symbol.species;
v5[v7] = f0;
const v8 = v5(v2, Int8Array, v7, v5);
try { v8.slice(v5); } catch (e) {}
gc();
