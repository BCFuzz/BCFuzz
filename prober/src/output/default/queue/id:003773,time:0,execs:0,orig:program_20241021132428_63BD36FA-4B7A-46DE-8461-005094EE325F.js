function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = [-9223372036854775807,9007199254740992,-1598820101,15,-11,-1073741824,127,-16,-9223372036854775807,3];
function f3() {
    return f0;
}
function f4(a5) {
    return f4;
}
Object.defineProperty(v2, Symbol.toPrimitive, { enumerable: true, get: f3, set: f4 });
function f8(a9) {
    f3 * a9;
    return Symbol;
}
class C11 {
}
C11.constructor = f8;
const v12 = C11.constructor;
try { v12(v2); } catch (e) {}
gc();
