function f0(a1, a2, a3, a4) {
    const v6 = 5n * 5n;
    v6 | v6;
    for (let v8 = 0; v8 < 250; v8++) {
        let v9 = v8++;
        WeakSet.bind(v9--);
        const v13 = new WeakSet();
        v13.add(v13);
        v8--;
    }
    return 5n;
}
f0();
f0();
gc();
