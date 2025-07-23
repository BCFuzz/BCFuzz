function f0(a1, a2) {
    const t1 = Math.ceil.bind();
    Math.trunc(t1(a1, f0));
    return Math;
}
for (let i = 0; i < 250; i++) {
    f0(f0, f0);
}
gc();
