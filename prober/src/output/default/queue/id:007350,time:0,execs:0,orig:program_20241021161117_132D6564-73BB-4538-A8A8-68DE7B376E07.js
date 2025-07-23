class C1 {
    1364 = 0.0;
    1575483249 = 0.0;
    #g = 0.0;
}
class C2 {
}
class C3 extends C2 {
    constructor(a5, a6, a7) {
        super();
        for (let v8 = 0; v8 < 250; v8++) {
            Reflect.construct(C1, [this]);
        }
    }
}
new C3(C3, C1, C1);
gc();
