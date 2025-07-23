const v2 = new Uint32Array(127);
const v5 = new Int32Array(127, 127, 7);
v5.minimumFractionDigits = 7;
for (let v6 = 0; v6 < 5; v6++) {
    v2.toLocaleString(v6, v5);
}
gc();
