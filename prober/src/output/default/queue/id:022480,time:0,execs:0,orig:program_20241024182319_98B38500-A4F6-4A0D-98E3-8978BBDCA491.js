const v1 = new Float64Array();
v1.buffer.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        let v8;
        try { v8 = this.set(this); } catch (e) {}
        return v8;
    },
};
o9.n.apply(v1);
gc();
