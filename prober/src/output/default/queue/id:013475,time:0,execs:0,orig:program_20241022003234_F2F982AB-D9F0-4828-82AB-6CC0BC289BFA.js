class C1 extends WeakMap {
}
const v2 = new C1();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F5();
    const v8 = v7.g;
    for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
        createGlobalObject.hasOwnProperty(v2);
        const v22 = createGlobalObject().Atomics;
        try { v22.or(v8, createGlobalObject, v22); } catch (e) {}
        for (let v24 = 0; v24 < 10; v24++) {
        }
    }
}
new F3();
new F3();
gc();
