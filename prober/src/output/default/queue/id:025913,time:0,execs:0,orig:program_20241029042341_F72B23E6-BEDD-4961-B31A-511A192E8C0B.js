const v1 = [];
const v2 = 255 < v1;
const v3 = v2 ? 255 : v1;
const o4 = {
};
const v6 = new Proxy(v3, o4);
const o7 = {
    __proto__: v6,
};
const o18 = {
    toString(a9, a10) {
        class C12 {
            constructor(a14) {
                (o7 + "c") + a14;
            }
        }
        new C12(this);
        return v2;
    },
};
try { o18.toString(); } catch (e) {}
gc();
