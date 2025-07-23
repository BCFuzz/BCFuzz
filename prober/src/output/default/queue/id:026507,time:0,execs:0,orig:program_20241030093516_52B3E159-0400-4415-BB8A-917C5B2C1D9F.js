for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = new BigUint64Array();
const v13 = v11.buffer;
v13.transferToFixedLength(v13, 4, BigUint64Array);
const o19 = {
    n(a16, a17, a18) {
        super[4] = this;
        return a18;
    },
};
o19.n.apply(v11);
gc();
