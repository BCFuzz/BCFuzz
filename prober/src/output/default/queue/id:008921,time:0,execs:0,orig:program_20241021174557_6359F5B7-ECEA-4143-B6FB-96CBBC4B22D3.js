function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        return Reflect.construct(F1, [Reflect,Reflect,Reflect,Reflect,Reflect], Float32Array);
    }
    this.constructor = f5;
    try { this.constructor(); } catch (e) {}
}
new F1();
gc();
