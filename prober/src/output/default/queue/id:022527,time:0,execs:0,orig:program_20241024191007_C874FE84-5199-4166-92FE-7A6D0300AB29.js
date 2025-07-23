class C0 {
}
const v1 = new C0();
class C2 {
}
const v3 = new C2();
const v4 = new C2();
class C5 extends C2 {
    o(a7, a8, a9, a10) {
        const v13 = new Uint8Array(v3, a7, C5);
        v13.lastChunkHandling = a10;
        v13.setFromBase64("-2147483647", v13);
    }
}
const v15 = new C5();
try { v15.o(v1, v4, v3, v1); } catch (e) {}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();
