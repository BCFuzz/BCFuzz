class C0 {
    constructor(a2, a3, a4) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            Reflect.construct(Int16Array, arguments);
        }
        new F5(a2, C0);
    }
}
new C0(C0, C0, C0);
gc();
