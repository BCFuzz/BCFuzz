function f0() {
    return f0;
}
function f1(a2, a3) {
    const o4 = {
    };
    const v5 = o4[4];
    (v5 >>> v5) * f0;
    return a3;
}
for (let i = 0; i < 10; i++) {
    f1(f0, f0);
}
gc();
