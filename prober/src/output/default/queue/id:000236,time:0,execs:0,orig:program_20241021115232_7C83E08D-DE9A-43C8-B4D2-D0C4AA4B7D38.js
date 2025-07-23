function f0() {
    const o3 = {
        ...695.0735251898707,
        get a() {
            return f0;
        },
    };
    return o3;
}
const v4 = f0();
class C6 extends f0 {
    #f;
    constructor(a8, a9) {
        super();
        ("bigint").match(v4);
    }
}
new C6();
new C6(C6, f0);
gc();
