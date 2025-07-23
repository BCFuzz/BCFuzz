function f0() {
    const o10 = {
        n(a3, a4, a5) {
            const v6 = this;
            const t4 = v6.Intl.Locale;
            const v9 = new t4("aWqBm");
            return v9;
        },
    };
    const t9 = o10.n;
    const v13 = t9().getWeekInfo;
    v13(f0, v13);
    return "aWqBm";
}
try { f0(); } catch (e) {}
gc();
