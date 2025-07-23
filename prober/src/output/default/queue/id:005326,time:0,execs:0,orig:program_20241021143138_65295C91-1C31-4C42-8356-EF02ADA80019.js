function f1() {
    return NaN;
}
class C2 {
    static {
        this.constructor = f1;
        this.constructor().toString();
        for (let v6 = 0; v6 < 250; v6++) {
        }
    }
}
gc();
