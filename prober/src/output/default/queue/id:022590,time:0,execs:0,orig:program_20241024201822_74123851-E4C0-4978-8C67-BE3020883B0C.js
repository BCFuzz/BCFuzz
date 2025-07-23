for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    return f10;
}
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F12();
const v18 = v17.constructor;
const v20 = ("-13")[undefined];
function f21(a22, a23) {
    const v24 = a23.constructor;
    v24.prototype = v24;
    new v24(v17, a22, F12, a23, undefined);
    return a23;
}
f21(v20, v17);
Object.defineProperty(v18, 0, { enumerable: true, get: f10, set: f21 });
function f28(a29) {
    function F30() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f32(a33) {
        class C34 {
        }
        const v35 = new C34();
        const o36 = {
        };
        const v38 = new Proxy(v35, o36);
        for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
        }
        for (let v49 = 0; v49 < 5; v49++) {
            const o50 = {
            };
            o50.constructor.keys(v38);
        }
        for (let v53 = 0; v53 < 1000; v53++) {
        }
        return BigInt64Array;
    }
    F30.valueOf = f32;
    F30 *= F30;
}
BigInt64Array.toString = f28;
class C54 extends BigInt64Array {
}
const v55 = new C54();
v55.slice(v55, BigInt64Array);
gc();
