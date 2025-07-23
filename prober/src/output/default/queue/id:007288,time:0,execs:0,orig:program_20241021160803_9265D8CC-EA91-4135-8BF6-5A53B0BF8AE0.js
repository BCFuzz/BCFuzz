class C1 extends Map {
}
for (let v2 = 0; v2 < 5; v2++) {
    const v4 = new WeakSet();
    v4.add(v4).delete(C1);
}
gc();
