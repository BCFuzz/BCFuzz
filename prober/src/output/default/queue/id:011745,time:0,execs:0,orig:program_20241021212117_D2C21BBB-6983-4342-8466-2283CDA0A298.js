function f0(a1, a2, a3) {
    const v5 = new WeakSet();
    v5.toString.call();
}
for (let v8 = 0; v8 < 10; v8++) {
    f0(v8, v8, f0);
}
gc();
