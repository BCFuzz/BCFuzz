for (let v4 = 0; v4 < 10; v4++) {
    function f8() {
        return f8;
    }
    class C9 extends f8 {
    }
    const v10 = [16,16];
    function f11(a12, a13, a14, a15) {
        const o16 = {
            __proto__: v10,
        };
        try { o16.flatMap(C9); } catch (e) {}
        return v4;
    }
    f11(f11(8.384497002760863, v4, undefined, v10), 8.384497002760863, Symbol, undefined);
}
gc();
