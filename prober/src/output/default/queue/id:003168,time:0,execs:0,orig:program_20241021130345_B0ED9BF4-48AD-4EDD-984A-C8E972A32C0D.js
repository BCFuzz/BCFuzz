class C2 {
    ["o"] = -10.961324873774288;
}
const v3 = new C2();
const v4 = new C2();
const v5 = new C2();
function f6(a7, a8, a9, a10) {
    const o12 = {
        get f() {
            return this;
        },
        ...a9,
    };
    return o12;
}
f6(v3, v4, "o");
f6(v4, v3, f6(C2, v3, v5));
gc();
