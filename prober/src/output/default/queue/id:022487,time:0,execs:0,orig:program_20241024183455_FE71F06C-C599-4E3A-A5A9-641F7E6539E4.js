for (let i2 = -3, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    const v11 = /a\nW/vgi;
    function f12(a13, a14, a15, a16) {
        return a13;
    }
    f12(v11);
`;
try { eval(v10); } catch (e) {}
gc();
