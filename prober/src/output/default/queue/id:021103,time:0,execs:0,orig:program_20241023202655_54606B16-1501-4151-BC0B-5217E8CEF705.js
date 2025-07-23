function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v3 = v2[2307];
const o13 = {
    n(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            const v9 = this;
            v9.Intl.RelativeTimeFormat.supportedLocalesOf(v8, v3);
        }
        return this;
    },
};
const v14 = o13.n;
v14(v14, f0, f0, v14);
gc();
