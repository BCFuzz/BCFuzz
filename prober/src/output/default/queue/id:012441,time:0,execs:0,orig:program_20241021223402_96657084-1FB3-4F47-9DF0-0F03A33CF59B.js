function f0(a1, a2, a3, a4) {
    const v6 = makeMasquerader.apply(a4, a3, makeMasquerader);
    v6(v6);
    return makeMasquerader;
}
const v8 = f0();
f0(f0(f0, v8, f0, v8), v8, v8, f0);
gc();
