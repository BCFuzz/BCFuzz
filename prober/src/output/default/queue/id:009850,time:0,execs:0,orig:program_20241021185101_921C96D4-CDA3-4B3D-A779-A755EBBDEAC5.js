function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Uint8Array(210);
for (const v6 of v5) {
    class C8 {
    }
    C8.string = v2;
    "string" in C8;
}
gc();
