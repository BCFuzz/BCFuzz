function f1() {
    const t1 = "undefined";
    t1.__proto__ = arguments;
    return arguments;
}
f1();
const v6 = new BigUint64Array(586);
for (const v7 of v6) {
}
gc();
