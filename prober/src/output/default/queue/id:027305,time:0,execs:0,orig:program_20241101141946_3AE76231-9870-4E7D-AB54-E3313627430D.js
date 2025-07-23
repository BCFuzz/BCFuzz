class C1 {
}
const v2 = new C1();
const v5 = new Uint32Array(1003);
for (const v6 in v5) {
    for (let v7 = 0; v7 < 5; v7++) {
        v2[v6 + "Ls"] = v7;
    }
}
gc();
