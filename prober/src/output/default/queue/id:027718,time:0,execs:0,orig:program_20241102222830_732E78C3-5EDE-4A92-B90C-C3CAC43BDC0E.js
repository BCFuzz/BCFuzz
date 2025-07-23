const v0 = /\u{12345}OhEC/dys;
function f1(a2, a3) {
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    const v15 = [f1,f1,f1,f1];
    v15.getPrototypeOf = Symbol;
    const v18 = new Proxy([a2,a2,a2,a2,a2], v15);
    const o19 = {
        __proto__: v18,
    };
    for (const v20 in o19) {
    }
    return f1;
}
v0.toString = f1;
const v21 = v0.toString;
try { v21.call(); } catch (e) {}
gc();
