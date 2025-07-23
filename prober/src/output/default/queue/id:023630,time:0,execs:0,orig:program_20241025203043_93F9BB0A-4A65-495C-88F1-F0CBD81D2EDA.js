const o0 = {
};
function f1() {
    const o9 = {
        __proto__: o0,
        toString(a4, a5) {
            JSON["stringify"](o0);
        },
    };
    const o10 = {
        [o9]: -882679842,
    };
    return o10;
}
const v13 = new Uint32Array(4046);
v13.reduce(f1);
gc();
