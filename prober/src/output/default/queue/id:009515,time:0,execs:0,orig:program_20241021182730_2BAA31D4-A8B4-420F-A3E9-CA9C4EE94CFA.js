const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
        function F2() {
            if (!new.target) { throw 'must be called with new'; }
            const t4 = this.__defineSetter__;
            t4(F2);
        }
        continue;
    }
`;
eval(v0);
gc();
