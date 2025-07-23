class C1 {
}
const v2 = new C1();
const v3 = new C1();
function f4(a5, a6, a7) {
    const o9 = {
        get c() {
            with (v3) {
                a = 765638.1970902146;
            }
            return a5;
        },
        ...a6,
    };
    return o9;
}
f4(v2, f4(v2, 765638.1970902146, f4));
gc();
