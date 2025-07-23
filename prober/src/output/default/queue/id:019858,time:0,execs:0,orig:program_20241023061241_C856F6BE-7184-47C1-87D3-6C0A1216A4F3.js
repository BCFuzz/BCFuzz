function f1(a2, a3, a4, a5) {
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            const v14 = arguments.propertyIsEnumerable;
            try { new v14(arguments); } catch (e) {}
            return a3;
        }
        f12();
    }
    new F6();
    const v18 = new F6(a5, a4, a2, 638);
    const t12 = v18.constructor;
    new t12();
    const t14 = v18.constructor;
    new t14();
    new F6();
    return 638;
}
const v24 = f1();
f1(v24, v24, f1, v24);
for (let i27 = 10, i28 = 638; i28--, i28;) {
}
gc();
