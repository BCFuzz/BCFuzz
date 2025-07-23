async function f0(a1, a2) {
    gc();
    return a1;
}
f0(f0, f0);
gc();
