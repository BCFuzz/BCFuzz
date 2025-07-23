function f0() {
    const o1 = {
    };
    o1[Symbol.toPrimitive] = f0;
    return o1;
}
const v4 = f0();
function f5() {
    return v4;
}
class C6 extends f5 {
}
const v7 = new C6();
let [,,...v10] = [3.7806476943374997e+307,0.4839845827563761];
class C11 {
}
const v12 = new C11();
function f13(a14, a15) {
    return v10 >= v7 ? v10 : v7;
}
Object.defineProperty(v12, "constructor", { writable: true, configurable: true, enumerable: true, value: f13 });
try { v12.constructor(); } catch (e) {}
gc();
