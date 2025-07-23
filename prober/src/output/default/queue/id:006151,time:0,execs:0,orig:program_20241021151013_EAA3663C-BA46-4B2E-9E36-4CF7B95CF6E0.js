for (let v0 = 0; v0 < 250; v0++) {
    v0++;
    const v3 = new WeakSet();
    const v4 = v3.add(v3);
    v4.has(v4);
    v0--;
}
gc();
