class C0 {
}
const v1 = new C0();
const v4 = new Uint32Array(1003);
for (const v5 in v4) {
    for (let v6 = 0; v6 < 5; v6++) {
        v1[v5 + v6] = v6;
    }
}
gc();
