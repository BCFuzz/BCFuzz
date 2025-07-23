function f0() {
    const o3 = {
        toString(a2) {
            return this;
        },
    };
    return o3;
}
const v4 = f0();
const v5 = f0();
const o7 = {
    ...v5,
};
const v10 = new Uint32Array(7);
const v13 = new BigInt64Array(3947);
v10.reverse(undefined, v4, ...v13, Uint32Array, ...v10);
gc();
