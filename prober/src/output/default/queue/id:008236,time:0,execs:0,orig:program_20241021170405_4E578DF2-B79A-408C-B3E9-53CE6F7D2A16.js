function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 100; v5++) {
        const v7 = new WeakSet();
        const v8 = v7.add(v7);
        let v9;
        try { v9 = v8.has(a1); } catch (e) {}
        !v9;
    }
    return a2;
}
f0(f0, f0, f0, f0);
f0();
gc();
