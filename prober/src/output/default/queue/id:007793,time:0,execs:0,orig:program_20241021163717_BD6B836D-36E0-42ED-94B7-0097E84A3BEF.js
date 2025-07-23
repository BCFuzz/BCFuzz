class C0 {
    o(a2) {
        const v4 = new ArrayBuffer(C0, this);
        v4.transferToFixedLength();
        new Uint32Array(v4);
    }
}
const v8 = new C0();
try { v8.o(); } catch (e) {}
gc();
