let v1 = /O\[\]\{\}\(\)\%\^\ /i;
function f2() {
    let v4 = --v1 ^ v1;
    v4--;
    return (v4 << v4) + -63881;
}
const v10 = new Uint32Array(4046);
v10.reduce(f2);
f2();
const v15 = new Int8Array(255);
for (const v16 in v15) {
}
gc();
