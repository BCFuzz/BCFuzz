NaN | NaN;
new WeakSet();
-1.7976931348623157e+308 >>> -1.7976931348623157e+308;
for (let v6 = 0; v6 < 5; v6++) {
    class C8 {
    }
    const v9 = new C8();
    const v10 = v9?.constructor;
    try { v10(NaN, Symbol); } catch (e) {}
    class C12 extends C8 {
    }
    C12.g = C12;
    const v13 = new C12();
    v13.constructor.prototype;
    delete v9[Symbol()];
    for (let v18 = 0; v18 < 100; v18++) {
    }
}
gc();
