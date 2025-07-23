function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4n;
}
class C4 extends F1 {
    set c(a6) {
        const v9 = new Int32Array(681);
        function f10(a11, a12, a13, a14) {
            ([1073741824,-4294967295,-1013382384,9223372036854775807,4096,23819,9007199254740990,-9007199254740992]).indexOf(a14);
            arguments.valueOf = f10;
            return F1;
        }
        v9.map(f10);
    }
}
new C4();
gc();
