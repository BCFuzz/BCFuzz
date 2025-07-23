for (let v0 = 0; v0 < 5; v0++) {
    function f1(a2) {
        a2.caller;
        return a2;
    }
    f1(f1);
}
class C5 {
    static {
        for (let v7 = 0; v7 < 5; v7++) {
            const t10 = this.__proto__;
            t10[0] = v7;
        }
    }
}
gc();
