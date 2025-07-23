const v1 = Symbol.match;
for (let v2 = 0; v2 < 10; v2++) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = Reflect.construct(Date, [Reflect,Reflect,Reflect,Reflect,Reflect], Map);
        try { v12.get(v1); } catch (e) {}
    }
    const v14 = new F3();
    const v15 = v14.constructor;
    new v15(v1, v15);
}
gc();
