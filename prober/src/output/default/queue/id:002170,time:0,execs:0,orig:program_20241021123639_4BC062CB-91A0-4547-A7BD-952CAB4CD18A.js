function f0() {
    return f0;
}
const v2 = Symbol.search;
function f3() {
    return f0;
}
class C4 extends f3 {
}
let v5;
try { v5 = C4.apply(f0, v2); } catch (e) {}
const v7 = [[f0,f0,f0,f0,f0]];
function f8(a9, a10, a11, a12) {
    const o13 = {
        __proto__: v7,
    };
    try { o13.flatMap(C4); } catch (e) {}
    return f3;
}
f8(f8(), v5, v5, v2);
gc();
