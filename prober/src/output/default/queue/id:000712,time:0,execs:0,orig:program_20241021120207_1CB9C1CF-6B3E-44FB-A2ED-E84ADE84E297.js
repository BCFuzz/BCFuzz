class C0 {
}
function f1() {
    delete C0[C0];
}
for (let v3 = 0; v3 < 5; v3++) {
}
let v5;
try {
const t0 = -22147;
v5 = t0(-22147, C0);
} catch (e) {}
class C7 {
    constructor(a9, a10) {
        a9?.[1858];
    }
    static 175 = "split";
}
C7[1858] = v5;
class C12 extends C7 {
}
new C12();
const v14 = new C12();
function f15() {
    return f1;
}
function f16(a17) {
    return a17;
}
Object.defineProperty(v14, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f15, set: f16 });
function f20() {
    return f16;
}
function f21(a22) {
    return a22;
}
Object.defineProperty(v14, "toString", { enumerable: true, get: f20, set: f21 });
class C23 extends C7 {
    [v14] = "split";
}
for (let v24 = 0; v24 < 500; v24++) {
    v24++;
    v24--;
}
gc();
