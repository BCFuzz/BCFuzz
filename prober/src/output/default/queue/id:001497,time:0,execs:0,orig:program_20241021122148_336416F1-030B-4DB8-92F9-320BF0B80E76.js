function f1(a2) {
    return 56640;
}
Object.defineProperty(Set, "toString", { configurable: true, enumerable: true, value: f1 });
const t4 = "POSITIVE_INFINITY";
delete t4[Set];
gc();
