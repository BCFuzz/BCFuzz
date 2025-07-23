class C3 {
    #o(a5, a6) {
        const t2 = "function";
        t2[this] = a6;
        this.__proto__ = this;
        return "function";
    }
    static #f = "e";
    #p(a8) {
        return ++a8;
    }
    ["M5s"];
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f19() {
    return v13;
}
function f20(a21, a22, a23, a24) {
    const o33 = {
        "a": a22,
        [-551570237n](a26, a27, a28) {
            const v29 = delete a23?.b;
            a27[-7482n] = a23;
            v29.c = v13;
            const o30 = {
                "call": f19,
                "get": f19,
                "has": f19,
            };
            new Proxy("function", o30, Proxy);
            return 1073741823n;
        },
    };
    return o33;
}
f20("function", "function", v13, f20("function", "M5s", v15, v14));
f20("e", "function", v13, v13);
const v39 = new Int8Array(255);
for (const v40 in v39) {
    class C41 {
        constructor(a43) {
            ("4294967297").split(a43).includes(a43);
        }
    }
    new C41(C41);
    new C41(v40);
}
gc();
