function f0() {
    return f0;
}
for (let v1 = 0; v1 < 25; v1++) {
    let v2 = 196.25100004624983;
    const v3 = v2 & v2;
    v2--;
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        a9 >>> a9;
        try { this.constructor(f0, this, v1, F5); } catch (e) {}
        try { a8.constructor(); } catch (e) {}
        try { a7.o(); } catch (e) {}
        const v15 = Date.parse;
        try { new v15(f0, f0, v15, v15); } catch (e) {}
        Reflect.deleteProperty(this);
        try { Reflect.apply(F5, F5, a9); } catch (e) {}
        const v22 = Reflect.construct(Date, [v2,v2,v2,v2], Map);
        try { v22.entries(); } catch (e) {}
    }
    new F5(v3, v3, f0);
    new F5();
}
gc();
