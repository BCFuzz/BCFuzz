const v1 = new Float32Array();
let v2;
try { v2 = v1.some(); } catch (e) {}
for (let v3 = 0; v3 < 5; v3++) {
    let v6 = ++v2;
    const v7 = v6--;
    Math.log2(v6);
    Math.fround(v7);
    -1251 ^ v7;
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
for (let v21 = 0; v21 < 250; v21++) {
}
gc();
