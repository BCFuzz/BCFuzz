function f1(a2) {
    const o12 = {
        n(a4, a5, a6) {
            try { a4("add"); } catch (e) {}
            const v8 = this;
            const v9 = v8.Intl;
            v9.numeric = a4;
            const v10 = v9.RelativeTimeFormat;
            new v10(v10, v9);
            return a2;
        },
    };
    const v13 = o12.n;
    v13(v13);
    return v13;
}
try { f1(); } catch (e) {}
gc();
