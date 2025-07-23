for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 25; v10++) {
    function f11(a12, a13, a14) {
        const o15 = {
        };
        const v16 = o15.constructor;
        try { v16.getPrototypeOf(a14); } catch (e) {}
        return v16;
    }
    for (let v18 = 0; v18 < 5; v18++) {
        f11();
    }
}
gc();
