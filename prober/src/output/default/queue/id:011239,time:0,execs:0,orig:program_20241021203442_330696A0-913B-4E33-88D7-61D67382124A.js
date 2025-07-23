function f0() {
    const o1 = {
        __proto__: f0,
        ...f0,
    };
    return f0;
}
f0();
for (let v3 = 0; v3 < 100; v3++) {
    function f5(a6, a7) {
        const o8 = {
            __proto__: a6,
        };
        Float32Array.from(o8);
        return f5;
    }
    f5(f5(Date));
}
gc();
