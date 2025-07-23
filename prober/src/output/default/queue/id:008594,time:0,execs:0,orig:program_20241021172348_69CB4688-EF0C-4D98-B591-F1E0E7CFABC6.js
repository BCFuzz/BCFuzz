for (let v1 = 0; v1 < 10; v1++) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = a6.toString;
        try { new v8(); } catch (e) {}
        function f10(a11) {
            const o15 = {
                toString(a13, a14) {
                    return f10;
                },
            };
            return this;
        }
        f10().Array;
    }
    const v18 = new F3(196.25100004624983, F3);
    const t16 = v18.constructor;
    new t16(6, 6);
}
gc();
