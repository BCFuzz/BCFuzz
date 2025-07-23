const v1 = new WeakSet();
for (let v2 = 0; v2 < 5; v2++) {
    const v3 = new WeakSet();
    v1.add(v3);
}
gc();
