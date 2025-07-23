async function f0(a1, a2, a3, a4) {
    return f0;
}
const v5 = f0(f0, f0, f0, f0);
v5.catch();
v5.finally(f0);
gc();
