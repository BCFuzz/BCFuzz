function f0(a1, a2, a3) {
    const o4 = {
        "b": a2,
    };
    return o4;
}
const v5 = f0(f0, f0, f0);
for (let v6 = 0; v6 < 10; v6++) {
    f0();
}
delete v5.b;
gc();
