const v1 = new Uint16Array(Uint16Array, Uint16Array);
const v2 = new Uint16Array(v1, v1);
for (let v3 = 0; v3 < 10; v3++) {
    v2["p" + v3] = v3;
}
for (const v6 in v2) {
    v1[v6];
}
gc();
