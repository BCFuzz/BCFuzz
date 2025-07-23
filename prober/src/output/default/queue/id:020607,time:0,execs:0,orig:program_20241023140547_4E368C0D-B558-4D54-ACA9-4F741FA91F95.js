let v0 = 0.0;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    v0.g /= v0;
    return F1;
}
let v6 = new F1(f5, F1);
const v7 = new F1(F1, f5);
let v9 = Math.acos(v6);
let v10 = v7.__proto__;
({"a":v10,"c":v0,"h":v6,...v9} = v7);
const v12 = new Number();
const v14 = Symbol.toPrimitive;
Object.defineProperty(v12, v14, { writable: true, enumerable: true, value: f5 });
const o22 = {
    10: v12,
    toString(a16, a17, a18) {
        JSON["stringify"](this);
        return v14;
    },
};
try { o22.toString(Number); } catch (e) {}
gc();
