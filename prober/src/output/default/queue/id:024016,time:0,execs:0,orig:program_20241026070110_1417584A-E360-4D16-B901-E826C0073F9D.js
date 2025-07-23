function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v18 = createGlobalObject().Atomics.load(v3, i7);
        function f19(a20, a21, a22, a23) {
            const o24 = {
                "b": v18,
            };
        }
        f19();
    }
    return v3;
}
f0();
f0();
gc();
