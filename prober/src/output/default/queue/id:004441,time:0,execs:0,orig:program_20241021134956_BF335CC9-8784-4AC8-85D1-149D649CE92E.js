const v1 = [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0];
const v3 = new Int32Array(9, 9);
for (const v5 of v1) {
    v3.copyWithin(0, v5, 9);
}
gc();
