function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        Reflect.construct(F1, [Reflect,Reflect,Reflect,Reflect,Reflect,Reflect,Reflect,"constructor",Reflect]);
        return a6;
    }
    this.constructor = f5;
    try { this.constructor(); } catch (e) {}
}
new F1(F1, F1);
gc();
