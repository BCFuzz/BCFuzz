function f0(a1, a2) {
    async function* f3(a4, a5, a6) {
        return a6;
    }
    for (let v7 = 0; v7 < 5; v7++) {
        f3(a2, v7, a2);
    }
    return f0;
}
const v9 = f0(f0, f0);
gc();
f0(gc, v9);
gc();
