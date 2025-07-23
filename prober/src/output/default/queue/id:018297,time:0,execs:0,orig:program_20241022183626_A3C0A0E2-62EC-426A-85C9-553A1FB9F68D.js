function f0() {
    return f0;
}
function f1(a2, a3) {
    const v5 = new Float64Array();
    return v5;
}
const v7 = Symbol.species;
f0[v7] = f1;
function f8(a9, a10, a11) {
    const o23 = {
        [a11](a13, a14, a15) {
            const o18 = {
                "maxByteLength": 2147483647,
            };
            const v20 = new ArrayBuffer(1851, o18);
            const v22 = new Uint8ClampedArray(v20);
            v22.constructor = f0;
            return v22;
        },
    };
    return o23;
}
const v24 = f8();
v24.undefined(v24, f8, v7, f0).subarray();
gc();
