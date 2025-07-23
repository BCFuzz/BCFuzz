async function f0(a1, a2, a3, a4) {
    let v5;
    try { v5 = a1(a4); } catch (e) {}
    return v5;
}
f0(f0, f0, f0, f0);
gc();
