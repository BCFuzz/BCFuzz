let v0 = 11;
class C1 {
}
const v2 = `
    for (let v4 = 0; v4 < 5; v4++) {
        [-65536,256,-5687,-15,61362];
        [-10,56405,-891202428,9007199254740991,54043,2147483649];
        [-64636,-31820,536870887,-22205,13046,1024,33373,1073741824,630,-1981107183];
        d = -50716;
        C1.e = -50716;
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v10 = new F8();
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v10;
        }
        const v16 = new F12();
        const v17 = new F12();
        v16[true] = v17;
        for (let v18 = 0; v18 < 5; v18++) {
        }
        for (let v19 = 0; v19 < 5; v19++) {
        }
        "p" + v4;
    }
    let v22 = 61104;
    let v23 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C24 {
        static p(a26, a27, a28) {
            let v25 = this;
            [,v23,v22,v25] = a27;
        }
    }
    ++v0;
`;
eval(v2);
gc();
