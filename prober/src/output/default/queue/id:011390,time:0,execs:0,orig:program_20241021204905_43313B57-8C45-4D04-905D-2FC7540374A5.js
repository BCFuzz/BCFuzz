function f1(a2, a3, a4, a5) {
    for (let v6 = 0; v6 < 100; v6++) {
        const v8 = new WeakSet(a4);
        const v9 = v8.add(v8);
        let v10;
        try { v10 = v9.has(a2); } catch (e) {}
        !v10;
    }
    return f1;
}
f1(f1);
f1(-767897696n);
gc();
