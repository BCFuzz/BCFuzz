const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v10 = 681 >>> (a4 | 0.0);
    const v11 = v10 / v10;
    const o18 = {
        n(a13, a14, a15) {
            for (let v16 = 0; v16 < 5; v16++) {
                const o17 = {
                };
                o17.__proto__ = this;
            }
        },
    };
    const v19 = o18.n;
    v19(v19, v19, o18, o18, o18);
    return v11;
}
v2.map(f3);
gc();
