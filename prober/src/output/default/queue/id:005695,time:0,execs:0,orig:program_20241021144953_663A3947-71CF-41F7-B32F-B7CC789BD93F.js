function f0(a1, a2, a3, a4) {
    return f0;
}
function f5(a6, a7, a8, a9) {
    5n / 5n;
    for (let v12 = 0; v12 < 250; v12++) {
        v12++;
        const v15 = new WeakSet();
        try { v15.add(f0); } catch (e) {}
        v15.add(v15);
        v12--;
    }
    return f0;
}
const v19 = f5();
f5(f5, v19, v19, v19);
gc();
