for (let v0 = 0; v0 < 25; v0++) {
    let v1 = 196.25100004624983;
    v1--;
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        try { a5.o(a6); } catch (e) {}
        const v13 = Reflect.construct(Date, [v1,v1,v1,v1], Map);
        try { v13.has(v1); } catch (e) {}
    }
    new F3(F3, F3, v0);
}
gc();
