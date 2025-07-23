function f0() {
    const v1 = /(?<!a)/mdygu;
    v1.lastIndex = v1;
    return ("exec").replace(v1);
}
const v5 = new WeakMap();
v5[Symbol.toPrimitive] = f0;
const v8 = [v5];
for (let v9 = 0; v9 < 10; v9++) {
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13, a14) {
            return --a14;
        }
        f12(v8, v8);
        const t14 = f12.constructor;
        t14(v8);
    }
    new F10();
    const v20 = new F10();
    const v21 = v20.constructor;
    new v21(v21, v20, v5);
}
gc();
