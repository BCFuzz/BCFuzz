function f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 250; v5++) {
        const v6 = ~v5;
        for (let v8 = 0; v8 < 5; v8++) {
        }
        const v9 = new WeakSet(a1);
        v9.add(v9, v6);
    }
    return a2;
}
f0();
f0();
gc();
