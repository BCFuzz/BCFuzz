const v0 = [-2144127085,24447,12,8,4,268435456,-2,9007199254740992,268435456,2090499818];
const o15 = {
    n(a3, a4, a5) {
        function f6(a7) {
            return v0;
        }
        a4[Symbol.toPrimitive] = f6;
        const v10 = this;
        const v11 = v10.Intl;
        const t9 = v11.Locale;
        t9.firstDayOfWeek = a4;
        const v13 = v11.Locale;
        new v13("aWqBm", v13);
        return f6;
    },
};
const v16 = o15.n;
try { v16("aWqBm", v16); } catch (e) {}
gc();
