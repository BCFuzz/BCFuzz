function f0(a1, a2, a3) {
    Date(a1);
    const v6 = [-Infinity,-691832.4173211381,1000000000000.0,NaN,-3.0,1000000000000.0,1000000000000.0,-3.0];
    try { v6.flat(); } catch (e) {}
}
f0();
for (let v9 = 0; v9 < 50; v9++) {
    f0();
}
gc();
