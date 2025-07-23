class C0 {
}
const v1 = new C0();
const v3 = new BigInt64Array(v1, C0, v1);
const v4 = `
    let v5 = -50716;
    for (let v6 = 0; v6 < 5; v6++) {
        [-65536,256,-5687,-15,61362];
        [-10,56405,-891202428,9007199254740991,54043,2147483649];
        [-64636,-31820,536870887,-22205,13046,1024,33373,1073741824,630,-1981107183];
        d = v5;
        C0.e = v5;
        function F10() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v12 = new F10();
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v12;
        }
        const v18 = new F14();
        const v19 = new F14();
        v18[true] = v19;
        for (let v20 = 0; v20 < 5; v20++) {
        }
        for (let v21 = 0; v21 < 5; v21++) {
        }
        "p" + v6;
    }
    let v24 = 61104;
    let v25 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C26 {
        static p(a28, a29, a30) {
            let v27 = this;
            [,v25,v24,v27] = a29;
            super.a = v1.g;
            a28.__proto__ = v24;
            delete v3.byteLength;
        }
    }
    ++v5;
`;
eval(v4);
gc();
