function f2(a3, a4) {
    const o5 = {
        ...a4,
        "c": a4,
    };
    return o5;
}
for (let v6 = 0; v6 < 10; v6++) {
    f2(-1e-15, 5.0);
}
gc();
