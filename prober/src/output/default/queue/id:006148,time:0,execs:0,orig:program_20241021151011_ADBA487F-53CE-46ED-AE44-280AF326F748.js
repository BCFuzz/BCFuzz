function f0() {
    return f0;
}
function f7(a8, a9, a10, a11) {
    for (let v13 = 0; v13 < 250; v13++) {
        v13++;
        const v16 = new WeakSet();
        const v17 = v16.add(v16);
        try { v17.has(a8); } catch (e) {}
    }
}
f7(f7, f7());
gc();
