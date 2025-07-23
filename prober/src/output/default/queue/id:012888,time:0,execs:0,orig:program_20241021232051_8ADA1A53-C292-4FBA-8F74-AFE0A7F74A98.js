const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        const v18 = ([v0,v0,v0,v0]).values();
        for (let v19 = 0; v19 < 5; v19++) {
            break;
            var c = v18;
        }
    }
    new F1(v0, F1, v0, F1);
    /\u{12345}/myvis;
`;
eval(v0);
gc();
