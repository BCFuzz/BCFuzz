class C0 {
}
function f1(a2) {
    const v4 = [-256,1,53291];
    v4.pop();
    v4[2] &= 1881;
}
C0[Symbol.toPrimitive] = f1;
const o9 = {
};
for (let v10 = 0; v10 < 100; v10++) {
    o9[C0] **= v10;
}
gc();
