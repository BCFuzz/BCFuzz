function f0() {
    for (let v1 = 0; v1 < 10; v1++) {
        const v4 = new Map();
        const v5 = new WeakMap();
        v5.set(v4, v4);
    }
    return f0;
}
f0();
f0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = [1073741824,-26526];
    const o14 = {
    };
    const v16 = new Proxy(v13, o14);
    v16.with().every(f0);
}
const v19 = new F9();
const t19 = v19.constructor;
new t19();
gc();
