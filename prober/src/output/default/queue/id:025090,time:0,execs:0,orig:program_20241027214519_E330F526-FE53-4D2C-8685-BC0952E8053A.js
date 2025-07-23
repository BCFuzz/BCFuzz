for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
    const v10 = `
        class C11 {
            constructor(a13, a14) {
                super();
            }
        }
    `;
    const v15 = v10.split();
    const v16 = [2.0,-4.0];
    function f17(a18, a19, a20) {
        return a18;
    }
    const v21 = f17(v16, i2, v16);
    function F22(a24, a25, a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        try { a27.constructor(v15); } catch (e) {}
    }
    new F22(v16, f17, v21, F22);
}
for (let i32 = 0, i33 = 10; i33; i33--) {
}
gc();
