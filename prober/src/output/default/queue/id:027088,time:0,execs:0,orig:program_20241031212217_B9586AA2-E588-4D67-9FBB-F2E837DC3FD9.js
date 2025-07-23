const v2 = new Uint8ClampedArray(129, 129, 129);
const v5 = new Int16Array();
const v6 = v5.sort();
const v7 = v6.buffer;
v7.transferToFixedLength(v7, v5, 12);
const o14 = {
    n(a10, a11, a12) {
        super[12 ^ 129] = v2;
        return a12;
    },
};
o14.n.apply(v6);
gc();
