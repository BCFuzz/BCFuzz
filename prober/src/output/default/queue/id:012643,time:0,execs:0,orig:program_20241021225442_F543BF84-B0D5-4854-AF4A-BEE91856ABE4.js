function f0(a1) {
    const o3 = {
        get a() {
            return f0;
        },
    };
    return o3;
}
const v4 = f0(f0);
const v5 = f0(f0);
v4[Symbol.asyncIterator] = BigInt64Array;
let v10 = new WeakMap();
function f11() {
    for (let i = 0; i < 5; i++) {
        v5.a = v5;
    }
    return ++v10;
}
v10.toString = f11;
const v14 = ["14",v10];
try { v14.slice(v14); } catch (e) {}
gc();
