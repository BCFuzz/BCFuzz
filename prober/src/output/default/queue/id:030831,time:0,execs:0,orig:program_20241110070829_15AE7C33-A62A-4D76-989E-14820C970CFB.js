class C1 {
    static p(a3, a4) {
        a4--;
        const v7 = [C1];
        v7.fill(a4).push(v7);
        Reflect.apply(("find").includes, a4, v7);
    }
}
C1.p("find");
gc();
