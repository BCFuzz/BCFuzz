function f0(a1, a2) {
    const v3 = a2 + a1;
    const o4 = {
        [v3]: f0,
    };
    return o4;
}
f0(f0(f0, f0));
gc();
