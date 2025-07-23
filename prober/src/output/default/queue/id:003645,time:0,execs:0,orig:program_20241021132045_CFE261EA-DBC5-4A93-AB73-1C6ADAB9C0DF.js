function f3(a4) {
    a4--;
    const o18 = {
        "e": -1000.0,
        ...-251.26804947299536,
        "c": a4,
        "a": a4,
        "f": -1000.0,
        4: -1000.0,
        "b": a4,
        "c": 2.2250738585072014e-308,
        "f": -251.26804947299536,
        "b": a4,
        ...-251.26804947299536,
        set g(a7) {
            const v8 = new a7(this, a7, this);
            function F10(a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = undefined;
            }
            new F10(a4, a4, v8);
            new F10(2.2250738585072014e-308, 2.2250738585072014e-308, v8);
            new F10(v8, 2.2250738585072014e-308, a4);
        },
    };
    const v20 = Symbol.iterator;
    Symbol.for(v20.description);
    const o32 = {
        [v20]() {
            let v25 = 10;
            const o31 = {
                next() {
                    const v27 = v25--;
                    const v29 = v25 == 0;
                    const o30 = {
                        "done": v27,
                        "value": v29,
                    };
                    return o30;
                },
            };
            return o31;
        },
    };
    return o18;
}
f3(-251.26804947299536);
function F34(a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
}
gc();
