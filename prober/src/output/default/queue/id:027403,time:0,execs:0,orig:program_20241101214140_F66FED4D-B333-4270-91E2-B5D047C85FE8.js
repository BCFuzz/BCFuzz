function f0(a1) {
    const v3 = Symbol(a1);
    const v5 = makeMasquerader();
    v3 in v5;
    return v5;
}
const v9 = new Int32Array(3467);
v9.reduceRight(f0);
gc();
