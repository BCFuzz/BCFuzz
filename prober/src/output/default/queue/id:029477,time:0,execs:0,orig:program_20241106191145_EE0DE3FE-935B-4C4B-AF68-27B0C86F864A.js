class C1 {
    static p(a3, a4) {
        const v6 = [C1,C1,C1,C1,C1];
        Reflect.apply(("find").includes, a4, v6);
    }
}
C1.p(-16, ReferenceError.prototype);
gc();
