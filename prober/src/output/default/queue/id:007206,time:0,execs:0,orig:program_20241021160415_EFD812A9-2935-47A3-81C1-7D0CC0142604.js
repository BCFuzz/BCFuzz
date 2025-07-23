class C0 {
}
function f1(a2) {
    0 < a2;
}
C0[Symbol.toPrimitive] = f1;
const o7 = {
};
for (let v8 = 0; v8 < 100; v8++) {
    o7[C0] **= v8;
}
gc();
