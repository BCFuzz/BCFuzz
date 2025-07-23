function f1() {
    return f1;
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3(f1, F3, f1);
const v9 = v8.constructor;
const v11 = ("-13")[undefined];
function f12(a13, a14) {
    const v15 = a14.constructor;
    v15.prototype = v15;
    new v15(undefined, v15);
    return f1;
}
f12(v11, v8);
Object.defineProperty(v9, 0, { enumerable: true, get: f1, set: f12 });
for (let v18 = 0; v18 < 5; v18++) {
    function f19() {
        return F3;
    }
    class C20 extends f19 {
    }
    const v21 = [16];
    const o22 = {
        __proto__: v21,
    };
    try { o22.flatMap(C20); } catch (e) {}
}
gc();
