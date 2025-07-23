function f0() {
    const v3 = !-4294967295 && -4294967295;
    v3 >> v3;
    return f0;
}
for (let v5 = 0; v5 < 10; v5++) {
    f0();
}
gc();
