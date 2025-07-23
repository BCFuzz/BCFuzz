for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    function* f11(a12, a13, a14, a15) {
        return v10;
    }
    f11(v10, f11, f11, f11);
`;
const v18 = eval(v10);
try { v18.throw(); } catch (e) {}
gc();
