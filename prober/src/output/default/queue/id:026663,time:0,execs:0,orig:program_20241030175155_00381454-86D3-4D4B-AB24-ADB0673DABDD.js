function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
v2.toString = f0;
for (let i6 = 4, i7 = 10; i6 < i7; i7--) {
}
const v14 = `
    for (const v15 in v2) {
        const t11 = -551703437;
        t11[v15] = v15;
    }
`;
eval(v14);
gc();
