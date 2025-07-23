class C1 {
    static {
        const v4 = ["e","e"];
        Reflect.apply(("e").endsWith, this, v4);
    }
}
gc();
