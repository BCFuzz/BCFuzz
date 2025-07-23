for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        try { Reflect.get(); } catch (e) {}
        const v11 = Reflect.construct(Date, [Reflect,Reflect,Reflect,Reflect,Reflect], Map);
        try { v11.values(); } catch (e) {}
    }
    const v13 = new F1();
    const v14 = v13.constructor;
    new v14(v14, v13, F1, v14, v0);
}
gc();
