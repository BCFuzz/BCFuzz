function f0(a1, a2) {
    return a1;
}
noFTL(f0);
for (let v5 = 0; v5 < 10; v5++) {
    f0(v5, noFTL);
}
gc();
