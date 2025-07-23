const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.Locale;
        v8.numberingSystem = a4;
        new v8("aWqBm", v8);
        return a4;
    },
};
const v11 = o10.n;
try { v11("aWqBm", -206917531); } catch (e) {}
gc();
