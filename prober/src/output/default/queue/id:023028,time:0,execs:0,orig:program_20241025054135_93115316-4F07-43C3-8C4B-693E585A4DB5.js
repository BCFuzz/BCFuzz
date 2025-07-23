let v0 = 7;
v0++;
const v2 = v0--;
const o3 = {
};
o3.firstDayOfWeek = v0;
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const t9 = v9.Intl.Locale;
        const v12 = new t9("aWqBm", o3);
        return v12;
    },
};
const t14 = o13.n;
t14(o3, "aWqBm", v2, v2, v2);
gc();
