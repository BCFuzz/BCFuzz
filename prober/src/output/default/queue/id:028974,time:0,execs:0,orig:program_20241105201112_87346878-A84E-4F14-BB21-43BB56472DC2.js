for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        class C5 {
            #c;
        }
        new C5();
        new C5();
        ([-2,257,4,2,-7011,28973,-9007199254740991,-65535]).find(edenGC);
    }
    new F1();
}
const v14 = createGlobalObject();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    class C20 extends a17.constructor {
    }
    const v21 = new C20();
    Object.defineProperty(v14.__proto__, 16, { configurable: true, enumerable: true, value: v21 });
}
new F15(Array);
gc();
