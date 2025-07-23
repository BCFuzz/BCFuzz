const v0 = /a\Sc/mdiu;
for (let v1 = 0; v1 < 5; v1++) {
    const v3 = new WeakMap();
    const v4 = v3.set(v3);
    v4.delete(v3);
    v4.get(v0);
}
gc();
