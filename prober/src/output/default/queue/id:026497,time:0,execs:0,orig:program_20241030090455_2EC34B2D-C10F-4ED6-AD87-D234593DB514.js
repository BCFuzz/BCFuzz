class C0 {
}
const v1 = new C0();
const v2 = -v1;
const v3 = [];
v3.push(v2);
const v5 = v3.toLocaleString(v2);
const o18 = {
    n(a7, a8, a9) {
        const v10 = this;
        const v12 = v10.Intl.DateTimeFormat;
        function f13(a14) {
            return v5;
        }
        v12[Symbol.toPrimitive] = f13;
        v12.timeZone = v12;
        v12(a8, v12);
        return v3;
    },
};
const v19 = o18.n;
try { v19(v19, v19, o18, v1); } catch (e) {}
gc();
