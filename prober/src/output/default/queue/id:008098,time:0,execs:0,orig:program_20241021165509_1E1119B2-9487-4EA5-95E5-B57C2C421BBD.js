function f1() {
    (Float64Array >>> -12).indexOf(/r[xyz]\p{Nd}s(?:foo)*/isu);
    return -12;
}
const v6 = [-44525,10];
try { v6.flatMap(f1); } catch (e) {}
gc();
