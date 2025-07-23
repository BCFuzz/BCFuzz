class C0 {
    #o(a2) {
    }
}
const v3 = new C0();
for (let v4 = 0; v4 < 25; v4++) {
    class C5 extends C0 {
    }
    const v6 = new C5();
    const v7 = v6.constructor;
    const v8 = new v7(v7, v3, C0, v4);
    new v7();
    const v10 = new C5();
    const t13 = v10.constructor;
    new t13();
    const t15 = v10.constructor;
    new t15();
    const v15 = new C5();
    const t18 = v15.constructor;
    new t18(v8);
    const t20 = v15.constructor;
    new t20(v3, v3);
}
gc();
