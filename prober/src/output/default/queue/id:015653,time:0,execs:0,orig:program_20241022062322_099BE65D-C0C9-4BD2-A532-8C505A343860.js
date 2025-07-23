function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function f5() {
    return f5;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(v4, "b", { enumerable: true, get: f5, set: f6 });
class C8 {
    constructor(a10, a11) {
        a11.b = v4;
    }
}
new C8(v4, v3);
new C8(v2, v4);
new C8(C8, v4);
for (let v15 = 0; v15 < 250; v15++) {
}
gc();
