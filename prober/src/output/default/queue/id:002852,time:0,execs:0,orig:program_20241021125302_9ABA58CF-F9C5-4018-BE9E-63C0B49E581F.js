class C1 {
}
const v2 = new C1();
const v5 = [v2.valueOf(C1, v2, "search", "search")];
Reflect.apply(("search").matchAll, v2, v5);
gc();
