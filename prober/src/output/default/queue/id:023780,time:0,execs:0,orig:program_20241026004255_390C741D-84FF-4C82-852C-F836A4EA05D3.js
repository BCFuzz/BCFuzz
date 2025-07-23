const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
const v2 = v1.sort();
v2.buffer.transferToFixedLength();
const o10 = {
    n(a6, a7, a8) {
        let v9;
        try { v9 = this.lastIndexOf(); } catch (e) {}
        return v9;
    },
};
o10.n.apply(v2);
gc();
