const o21 = {
    toString(a3, a4) {
        for (let v5 = 0; v5 < 10; v5++) {
            function f7(a8, a9, a10, a11) {
                const o12 = {
                };
                const v13 = o12.constructor;
                try { v13.create(10, 2352); } catch (e) {}
                const v15 = v13.defineProperties;
                try { v15.call(); } catch (e) {}
                const v17 = v13(2.2250738585072014e-308);
                try { v17.toString(this); } catch (e) {}
            }
            f7();
            f7();
        }
        return a4;
    },
};
o21.toString();
gc();
