function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 10; v5++) {
        const v7 = new WeakSet(a3);
        const v8 = v7.add(v7);
        v8.delete(v8);
        v8.has(a1);
    }
    return f0;
}
f0(f0);
gc();
