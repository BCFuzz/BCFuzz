const v2 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v4 = new Uint16Array(v2);
const v5 = new Uint32Array();
const o11 = {
    n(a7, a8, a9) {
        try { v5.set(v4); } catch (e) {}
        return v2;
    },
};
const v12 = o11.n;
v12.call().transferToFixedLength();
v12();
gc();
