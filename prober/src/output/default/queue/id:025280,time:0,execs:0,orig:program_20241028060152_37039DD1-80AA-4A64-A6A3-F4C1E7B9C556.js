const v1 = new Uint16Array();
const v2 = v1.sort(Uint16Array);
for (let v3 = 0; v3 < 5; v3++) {
    v1["p" + v3] = v3;
}
for (const v6 in v1) {
    delete v1[v6];
}
v1.valueOf = v2;
gc();
