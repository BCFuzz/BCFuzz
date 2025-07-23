const o0 = {
};
class C1 {
    constructor(a3) {
        a3.length = 4294967296;
    }
}
new C1(o0);
try { new Int16Array(o0); } catch (e) {}
for (let i10 = 0, i11 = 10; i10 < i11;) {
    i11--;
}
gc();
