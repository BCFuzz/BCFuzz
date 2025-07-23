const o8 = {
    toString(a1, a2) {
        for (let v3 = 0; v3 < 10; v3++) {
            const o4 = {
            };
            const v6 = o4.constructor.create(a1);
            try { v6.toString(); } catch (e) {}
        }
        return a2;
    },
};
o8.toString(o8);
gc();
