function f0() {
    return f0;
}
function f2(a3, a4) {
    a3(f0, 512);
    const t4 = Math.ceil;
    return t4(a4);
}
for (let i = 0; i < 5; i++) {
    f2(f2, f2);
}
gc();
