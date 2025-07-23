class C0 {
}
const v1 = new C0();
const v3 = v1.constructor.constructor;
function f4() {
    return v1;
}
class C5 {
}
const v6 = new C5();
v6.toString = f4;
for (let i9 = 4, i10 = 10; i9 < i10; i10--) {
}
const v17 = `
    for (const v18 in v6) {
        v3[v18] = v18;
    }
`;
eval(v17);
gc();
