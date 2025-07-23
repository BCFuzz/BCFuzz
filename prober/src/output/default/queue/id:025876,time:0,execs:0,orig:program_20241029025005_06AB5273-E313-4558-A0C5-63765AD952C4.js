let v0 = `
    for (let i = 0; i < 5; i++) {
        function F1(a3, a4) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
`;
v0 += v0;
eval(v0);
gc();
