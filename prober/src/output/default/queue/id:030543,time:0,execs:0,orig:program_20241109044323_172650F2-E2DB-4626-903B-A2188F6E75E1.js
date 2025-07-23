const o0 = {
};
for (let i3 = 0, i4 = 10;
    (() => {
        const v5 = i3 < i4;
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
        }
        let v8 = new F6();
        let v9 = eval;
        let v10 = 8;
        let v11 = "source";
        [v9,v10,v11] = v11;
        const v12 = `
            do {
                v8 = o0;
            } while (0 < 65536)
        `;
        const v16 = v12.split(v10);
        const v17 = [2.0,-4.0];
        function f18(a19, a20, a21) {
            return a19;
        }
        const v22 = f18(v5, v9, o0);
        function F23(a25, a26, a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            try { a28.constructor(v16); } catch (e) {}
        }
        new F23(v17, f18, v22, F23);
        return v5;
    })();
    i4--) {
}
for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
}
gc();
