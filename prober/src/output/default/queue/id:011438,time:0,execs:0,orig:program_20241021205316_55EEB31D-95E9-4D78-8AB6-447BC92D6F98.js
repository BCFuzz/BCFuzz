const v2 = new Uint16Array(8);
v2.p9 = 8;
const v3 = new Uint16Array();
for (let v4 = 0; v4 < 10; v4++) {
    v3["p" + v4] = v4;
}
for (const v7 in v3) {
    v2[v7];
}
gc();
