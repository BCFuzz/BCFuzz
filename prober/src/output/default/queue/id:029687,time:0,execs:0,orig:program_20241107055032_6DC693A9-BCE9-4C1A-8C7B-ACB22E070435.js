const v1 = new Int32Array(Int32Array, Int32Array);
const v5 = new Int8Array(4294967296);
function f6(a7) {
    for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
    }
    return v1;
}
Object.defineProperty(f6, Symbol.species, { enumerable: true, value: f6 });
v5.constructor = f6;
v5.subarray(1.7976931348623157e+308);
gc();
