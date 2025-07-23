function f1(a2, a3, a4, a5) {
    for (let v6 = 0; v6 < 100; v6++) {
        const v8 = new WeakSet();
        const v9 = v8.add(v8);
        v9.delete(a2);
        let v11;
        try { v11 = v9.has(a2); } catch (e) {}
        !v11;
    }
    return a5;
}
f1(f1);
f1(-767897696n);
gc();
