const v0 = /\b/yi;
const v3 = `
    class C4 extends 1073741823n {
    }
    /\u{12345}/myvis;
`;
const v6 = v3.split(v0);
try { v6.flatMap(eval); } catch (e) {}
for (let i10 = -3, i11 = 10; i11--, i10 < i11;) {
}
gc();
