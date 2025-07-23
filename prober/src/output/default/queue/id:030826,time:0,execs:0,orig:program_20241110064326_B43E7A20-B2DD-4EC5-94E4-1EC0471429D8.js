class C1 {
    constructor(a3) {
        let v4;
        try { v4 = a3("resolve", a3); } catch (e) {}
        const v6 = ["resolve",v4];
        Reflect.apply(("resolve").localeCompare, "resolve", v6);
    }
}
new C1(C1);
for (let i12 = 0, i13 = 10; i13; i13--) {
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
for (let i32 = -3, i33 = 10; 8 < i33; i33--) {
}
gc();
