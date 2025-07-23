class C1 {
}
for (let v2 = 0; v2 < 5; v2++) {
    Reflect.deleteProperty(C1, "prototype");
}
gc();
