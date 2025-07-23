class C0 {
    constructor(a2, a3) {
        let v4 = 963456498;
        const v5 = !v4;
        const v6 = --v4;
        v6 + (v6 | v5);
    }
}
for (let i = 0; i < 10; i++) {
    Reflect.construct(C0, [C0,C0,C0,C0]);
}
gc();
