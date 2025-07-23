function f1() {
    return NaN;
}
class C2 {
    static {
        this.constructor = f1;
        const v4 = this.constructor(f1);
        for (let v5 = 0; v5 < 5; v5++) {
        }
        v4.toString();
        for (let v7 = 0; v7 < 250; v7++) {
        }
    }
}
gc();
