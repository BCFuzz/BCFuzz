function f0(a1, a2, a3, a4) {
    function f5(a6) {
        const v7 = [f0,f0,f0,f0];
        Object.defineProperty(v7, 0, { configurable: true, get: a2 });
        const o14 = {
            n(a9, a10, a11) {
                const t6 = this.Float16Array;
                new t6(v7);
                return v7;
            },
        };
        const t11 = o14.n;
        t11();
        return a4;
    }
    Object.defineProperty(a3, Symbol.toPrimitive, { configurable: true, value: f5 });
    for (let i20 = 10, i21 = 10; i21; i21--) {
        const v28 = new SharedArrayBuffer();
        const v30 = new DataView(v28);
        try { v30.setInt16(a4); } catch (e) {}
    }
    return f5;
}
f0(f0, f0, f0, f0);
gc();
