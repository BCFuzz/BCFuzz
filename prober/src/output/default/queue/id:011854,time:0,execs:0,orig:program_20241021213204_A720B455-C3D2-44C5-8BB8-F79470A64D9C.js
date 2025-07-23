for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let v10 = 0; v10 < 10; v10++) {
        function f11(a12, a13, a14) {
            const o15 = {
                "b": a13,
            };
            return o15;
        }
        const v16 = f11();
        for (let v17 = 0; v17 < 10; v17++) {
            f11(v16, v17, v17);
        }
        delete v16.b;
    }
}
gc();
