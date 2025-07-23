for (let v1 = 0; v1 < 10; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v11 = Reflect.construct(Date, [Reflect,Reflect,Reflect], Map);
        try { v11.get(75); } catch (e) {}
    }
    const v13 = new F2();
    const t7 = v13.constructor;
    new t7(F2, 75);
}
gc();
