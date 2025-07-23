async function* f0(a1, a2) {
    return a1;
}
const v3 = f0(f0, f0);
v3.return(v3);
gc();
