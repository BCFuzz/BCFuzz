const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v2 = v1.buffer;
v2.transferToFixedLength(v2, Float32Array);
const o9 = {
    n(a5, a6, a7) {
        this.sort();
        return a6;
    },
};
v1.__proto__ = [o9,o9 in o9];
o9.n.apply(v1);
gc();
