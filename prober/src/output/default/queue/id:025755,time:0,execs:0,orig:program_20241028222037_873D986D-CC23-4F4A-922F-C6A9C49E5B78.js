const v2 = new Map();
const v3 = v2.has;
function f4(a5, a6) {
    class C8 extends Int8Array {
        constructor(a10, a11, a12) {
            super();
            try { this.subarray(); } catch (e) {}
        }
    }
    const v14 = new C8(a5, a6, a6);
    return v14;
}
v3.valueOf = f4;
const v16 = new Float64Array();
v16.subarray(4294967297, v3);
gc();
