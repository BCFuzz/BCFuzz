const v1 = new Int32Array(Int32Array);
const o2 = {
    __proto__: v1,
};
function f4(a5, a6, a7) {
    const o14 = {
        [undefined](a9, a10, a11) {
            const v13 = new Uint8ClampedArray(a7);
            return v13;
        },
    };
    return o14;
}
const v15 = f4();
const v16 = v15.undefined(v15, v15);
try { v16.set(o2); } catch (e) {}
gc();
