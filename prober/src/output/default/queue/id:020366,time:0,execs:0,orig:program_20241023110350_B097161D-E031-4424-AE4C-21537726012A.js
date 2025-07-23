const v0 = [];
const v1 = `
    const v2 = v0.length;
    v2 > v2;
    /\u{12345}/myvis;
`;
class C5 {
    static set b(a7) {
    }
}
fullGC();
const v10 = new C5();
C5.b = v10;
eval(v1);
gc();
