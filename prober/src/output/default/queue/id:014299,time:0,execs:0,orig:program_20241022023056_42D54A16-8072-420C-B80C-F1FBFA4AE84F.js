for (let i2 = 0, i3 = 10;
    (() => {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            const v10 = typeof a9;
            function f12(a13, a14, a15, a16) {
                return 1n;
            }
            v10 === "object";
        }
        const v18 = new F6();
        const t9 = v18.constructor;
        new t9(1n, Int8Array);
        return i2 < i3;
    })();
    i3--) {
}
gc();
