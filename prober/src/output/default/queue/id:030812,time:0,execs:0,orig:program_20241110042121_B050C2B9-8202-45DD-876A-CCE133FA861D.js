function f1() {
    const v2 = `
        let v3 = 5;
        v3--;
    `;
    return v2;
}
const v6 = Symbol.toPrimitive;
for (let i9 = 0, i10 = 10;
    i9 < i10;
    (() => {
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        function F24(a26, a27, a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
            i10--;
            for (let i34 = -3, i35 = 10; 8 < i35; i35--) {
            }
        }
        new F24();
    })()) {
}
for (let i47 = 0, i48 = 65537; i47 < i48; i48--) {
}
for (let i57 = -3, i58 = 10; i57 < i58; i58--) {
}
Uint32Array[v6] = f1;
const v67 = `
    for (let v68 = 0; v68 < 5; v68++) {
    }
`;
const v69 = v67.split(8);
v69[1] = Uint32Array;
const v70 = [2.0,-4.0];
function f71(a72, a73, a74) {
    return v70;
}
const v75 = f71(runString, f1, v69);
function F76(a78, a79, a80, a81) {
    if (!new.target) { throw 'must be called with new'; }
    try { a81.constructor(v69); } catch (e) {}
}
Object.defineProperty(F76, "constructor", { enumerable: true, value: runString });
for (let i86 = 0, i87 = 10 + 10; i87--, i86 < i87;) {
}
new F76(v70, f71, v75, F76);
gc();
