function f3() {
    return "symbol";
}
const v6 = new Int32Array();
class C8 extends Int32Array {
    static ["getInt32"] = "symbol";
    static #g = v6;
    e = 221;
    #b = 4;
}
new C8();
new C8();
"symbol" >= "getInt32";
Symbol.iterator;
gc();
