function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const v6 = [586003.9365868429,-1.0,48.92413070200587,2.220446049250313e-16,-982.5835837891182,-3.0,209.46001834861568,-531.2345478104589,-2.2250738585072014e-308,-Infinity];
const v8 = new FinalizationRegistry(FinalizationRegistry);
v8.register(v5);
v8.register(v6);
gc();
