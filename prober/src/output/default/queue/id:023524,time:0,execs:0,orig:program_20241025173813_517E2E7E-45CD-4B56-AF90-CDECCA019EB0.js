for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v11 = new Uint32Array();
v11.buffer.transferToFixedLength();
const o19 = {
    n(a15, a16, a17) {
        try { this.copyWithin(); } catch (e) {}
        return a16;
    },
};
o19.n.apply(v11);
gc();
