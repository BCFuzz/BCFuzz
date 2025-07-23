const v1 = new Uint32Array(Uint32Array, Uint32Array);
const v2 = v1.buffer;
v2.transferToFixedLength();
const o9 = {
    n(a5, a6, a7) {
        try { this.fill(a6); } catch (e) {}
        return v1;
    },
};
const v11 = o9.n.apply(v1);
try { v11.lastIndexOf(v2); } catch (e) {}
gc();
