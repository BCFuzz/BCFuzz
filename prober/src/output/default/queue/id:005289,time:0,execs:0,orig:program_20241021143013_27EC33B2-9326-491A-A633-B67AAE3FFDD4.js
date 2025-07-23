function f1(a2, a3) {
    return 268435456 ^ 268435456;
}
Set[Symbol.toPrimitive] = f1;
const t4 = "POSITIVE_INFINITY";
delete t4[Set];
gc();
