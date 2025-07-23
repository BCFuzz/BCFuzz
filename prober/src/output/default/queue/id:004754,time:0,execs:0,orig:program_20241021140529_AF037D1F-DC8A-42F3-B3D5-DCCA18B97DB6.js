const v0 = `
    let v1 = -50716;
    for (let v2 = 0; v2 < 5; v2++) {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v9 = new F5();
        for (let v10 = 0; v10 < 5; v10++) {
        }
        let v11 = 0;
        for (let i = 0; i < 25; i++) {
            try {
            const t0 = false;
            t0();
            } catch (e) {}
            const o13 = {
            };
            function F14() {
                if (!new.target) { throw 'must be called with new'; }
            }
            v9[-2];
            v11++;
            v11 < 2;
        }
    }
    class C20 {
        static p(a22, a23, a24) {
            const o25 = {
            };
            const o26 = {
            };
            const o27 = {
            };
            const o28 = {
            };
        }
    }
    -(++v1);
`;
eval(v0);
const v33 = `
`;
gc();
