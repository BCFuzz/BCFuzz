function f2() {
    const v4 = new Uint8ClampedArray();
    const v7 = ~v4;
    const v8 = v7 + 1945625087;
    const v9 = Math.trunc(v7);
    function f10(a11) {
        const o12 = {
            73: v9,
            [v8]: a11,
            [8]: 458.9821175924046,
        };
        return f2;
    }
    f10();
    f10(f10);
    return f10();
}
f2.call();
f2();
f2();
f2();
gc();
