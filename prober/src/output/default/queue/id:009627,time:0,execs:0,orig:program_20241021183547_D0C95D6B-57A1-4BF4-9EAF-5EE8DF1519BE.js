function f0() {
    for (let v1 = 0; v1 < 10; v1++) {
        const v4 = new Map();
        v4.set(WeakMap);
        new WeakMap(v4);
    }
    return f0;
}
f0();
f0();
f0();
f0();
gc();
