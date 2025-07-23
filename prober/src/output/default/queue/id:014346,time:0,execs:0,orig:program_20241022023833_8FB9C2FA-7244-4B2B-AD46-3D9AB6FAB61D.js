function f0(a1, a2) {
    return a1;
}
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let v13 = 0; v13 < 100; v13++) {
    function f14() {
    }
    const o19 = {
        toString(a16, a17) {
            a17.toString = f14;
            for (let v18 = 0; v18 < 10; v18++) {
            }
            return a16;
        },
    };
    o19.toString(o19, f14);
    o19.toString(o19, o19);
    for (let v22 = 0; v22 < 5; v22++) {
    }
}
gc();
