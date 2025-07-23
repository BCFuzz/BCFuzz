function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 100; v5++) {
        const v7 = new WeakSet(a4);
        const v9 = v7.add(v7).has(a1);
        class C10 {
        }
        const v11 = !v9;
        v11 && v11;
    }
    return f0;
}
f0();
f0();
gc();
