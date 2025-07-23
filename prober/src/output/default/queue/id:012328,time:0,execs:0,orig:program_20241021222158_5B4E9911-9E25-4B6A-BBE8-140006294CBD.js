function f1(a2, a3, a4, a5) {
    return -3.0;
}
for (let v6 = 0; v6 < 250; v6++) {
    v6++;
    const v9 = new WeakSet();
    v9.add(f1).has(-3.0);
    v6--;
}
gc();
