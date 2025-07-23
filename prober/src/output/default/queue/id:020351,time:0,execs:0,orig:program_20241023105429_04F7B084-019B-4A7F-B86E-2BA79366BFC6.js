for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i = 0; i < 10; i++) {
    const o18 = {
        set b(a11) {
            for (let v12 = 0; v12 < 5; v12++) {
                v12.arguments;
                const v15 = 9 || v12;
                v12 & (v15 | v15);
            }
        },
    };
    o18.b = o18;
    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    }
}
gc();
