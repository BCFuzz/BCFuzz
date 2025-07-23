function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
Symbol.iterator;
const v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F5(v4);
function f10() {
    return v9;
}
class C14 {
    constructor(a16) {
        try { ("-14").repeat(a16); } catch (e) {}
    }
}
function f18() {
}
Object.defineProperty(C14, "valueOf", { enumerable: true, get: f18 });
const v19 = new C14(C14);
v19[Symbol.toPrimitive] = f10;
new C14(v19);
class C23 extends C14 {
}
const v24 = new C23();
const v25 = ["12"];
const v26 = [667338.7639983259,v24,667338.7639983259];
function f27(a28) {
}
Object.defineProperty(v26, 6, { enumerable: true, set: f27 });
let [v30,v31] = [-1e-15,2.2250738585072014e-308,-5.0,1000.0];
try { v26.splice(v30, v30, v24, C23, v30, v25); } catch (e) {}
gc();
