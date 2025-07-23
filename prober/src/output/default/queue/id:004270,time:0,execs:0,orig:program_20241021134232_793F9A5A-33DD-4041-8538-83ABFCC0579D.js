function f2() {
    for (let v3 = 0; v3 < 10; v3++) {
        const v6 = new Map();
        new WeakMap(v6);
    }
    const o8 = {
    };
    return o8;
}
const v9 = f2();
const v10 = f2();
f2();
const v13 = new WeakMap();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = [1073741824,-26526];
    const o19 = {
    };
    const v21 = new Proxy(v18, o19);
    v21.with().every(f2);
}
new F14(v9, v10);
new F14();
v13[105] &&= -41309;
gc();
