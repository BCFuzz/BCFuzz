for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
const v21 = new Uint8Array(Uint8Array);
const v23 = v21.buffer.transferToFixedLength();
const o29 = {
    n(a25, a26, a27) {
        try { this.toSorted(); } catch (e) {}
        return v23;
    },
};
o29.n.apply(v21);
gc();
