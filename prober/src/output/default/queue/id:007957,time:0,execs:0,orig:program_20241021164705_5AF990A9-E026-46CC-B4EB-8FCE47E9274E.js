function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 250; v5++) {
        for (let v7 = 0; v7 < 10; v7++) {
        }
        const v8 = new WeakSet(a4);
        v8.add(v8).has(a1);
    }
    return f0;
}
f0();
f0(f0);
gc();
