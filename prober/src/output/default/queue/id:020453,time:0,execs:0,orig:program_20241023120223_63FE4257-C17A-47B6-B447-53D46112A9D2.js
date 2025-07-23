class C0 {
}
function f1(a2) {
    const v4 = [-256,1,53291];
    try { v4.findIndex(); } catch (e) {}
    v4.pop();
    v4[2] &= 1881;
}
C0[Symbol.toPrimitive] = f1;
const o10 = {
};
for (let v11 = 0; v11 < 100; v11++) {
    o10[C0] **= v11;
}
gc();
