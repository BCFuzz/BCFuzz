for (let i4 = 10, i5 = 10; -13369 < i5; i5--) {
}
const v12 = `
    for (let v13 = 0; v13 < 5; v13++) {
    }
    const v14 = [];
    const o21 = {
        set d(a16) {
            try { a16.toString(); } catch (e) {}
        },
        toString(a19) {
            Object.defineProperty(v14, "length", { configurable: true, enumerable: true, get: gc });
            return a19;
        },
    };
    o21.d = o21;
    Uint8Array();
    new Int32Array(1000);
    new Int32Array(10);
    const v29 = /\u{12345}/myvis;
    const v30 = \`
        function F31(a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
            this.constructor;
        }
        new F31();
        new F31();
    \`;
    eval(v30);
    function F41(a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        ("NEGATIVE_INFINITY").constructor;
    }
    try { F41.bind(v29); } catch (e) {}
`;
const v48 = [v12];
Reflect.apply(("Fe").replaceAll, Date, v48);
gc();
