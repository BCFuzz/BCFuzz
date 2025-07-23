function f0(a1) {
    Symbol(a1) in makeMasquerader();
    for (let v7 = 0; v7 < 50; v7++) {
    }
    return f0;
}
const v10 = new Int32Array(3467);
v10.reduceRight(f0);
gc();
