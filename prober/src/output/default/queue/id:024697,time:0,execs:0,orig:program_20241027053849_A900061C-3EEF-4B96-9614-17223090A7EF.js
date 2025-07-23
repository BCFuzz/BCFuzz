class C1 {
    static ["Us8"];
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v13 = new Int32Array(209);
        const v14 = [209,209];
        function f15() {
            const o16 = {
            };
            const v17 = o16.constructor;
            v17.freeze(o16);
            v17.assign(o16, a9);
            return a4;
        }
        const v21 = [f15];
        Reflect.apply(v14.toSorted, v13, v21);
    }
    const v24 = new F7(a6, C1);
    const v25 = v24.constructor;
    try { new v25(C1); } catch (e) {}
}
new F2();
gc();
