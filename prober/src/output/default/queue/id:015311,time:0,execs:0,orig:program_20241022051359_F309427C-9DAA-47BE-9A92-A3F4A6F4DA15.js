function f0() {
    const o2 = {
    };
    o2[1623419380] = o2;
    return o2;
}
const v3 = f0();
const v5 = f0();
const v6 = f0();
function f7(a8, a9) {
    const o12 = {
        get e() {
        },
    };
    return o12;
}
const v13 = f7(v6, v5);
const v14 = f7();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    a19.e = a19;
}
new F15(v3, v5, v13);
new F15(v3, v3, v14, v3);
new F15(v6, v5, v13, v5);
class C24 extends f0 {
}
new C24();
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
    const o37 = {
    };
    new SharedArrayBuffer(2580);
}
const v41 = [C24,C24,C24,C24,C24];
class C43 extends Date {
}
new C43();
for (let i47 = 10, i48 = 10; -13369 < i48; i48--) {
}
class C55 {
}
const v57 = new Float32Array(v41);
for (let i60 = 0, i61 = v57; i60 < v41;) {
}
gc();
