function f0() {
    const v1 = /(?<!a)/mdygu;
    v1.lastIndex = v1;
    ("exec").replace(v1);
}
const v5 = new WeakMap();
v5[Symbol.toPrimitive] = f0;
const v8 = [v5];
for (let v9 = 0; v9 < 10; v9++) {
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13, a14) {
            return f12;
        }
        const t14 = f12.constructor;
        t14(v8);
    }
    const v17 = new F10();
    const t18 = v17.constructor;
    new t18();
}
gc();
