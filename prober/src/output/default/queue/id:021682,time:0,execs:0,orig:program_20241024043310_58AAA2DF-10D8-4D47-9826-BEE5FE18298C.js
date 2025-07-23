class C0 {
}
let v1 = 10;
for (let i = 0; i < 250; i++) {
    let v2 = v1--;
    v2 **= v2;
    C0[v2] = v2;
}
gc();
