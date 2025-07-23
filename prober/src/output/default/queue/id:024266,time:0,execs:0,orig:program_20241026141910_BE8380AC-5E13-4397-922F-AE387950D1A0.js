function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        let v18 = createGlobalObject().Atomics.load(v3, i7);
        v18++;
        function f20(a21, a22, a23, a24) {
            const o25 = {
                "b": v18,
            };
            return o25;
        }
    }
    return Int16Array;
}
f0();
f0();
gc();
