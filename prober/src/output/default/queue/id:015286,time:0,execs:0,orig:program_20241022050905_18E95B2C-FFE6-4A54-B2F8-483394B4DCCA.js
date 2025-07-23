function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6, a7) {
        const o8 = {
            __proto__: this,
        };
        o8.parseInt(a6, 128);
        return 128;
    }
    const v10 = f3();
    const v11 = f3(v10, v10, v10, f3);
    f3(v11, F1, v11, this);
}
new F1();
const v14 = new F1();
const t15 = v14.constructor;
new t15();
new F1();
gc();
