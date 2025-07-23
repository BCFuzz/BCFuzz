const v0 = `
    for (let v1 = 0; v1 < 5; v1++) {
        function F2() {
            if (!new.target) { throw 'must be called with new'; }
            for (let v4 = 0; v4 < 25; v4++) {
                const v5 = /[\d-z]/mis;
                v5.test(v5);
            }
        }
        new F2();
    }
`;
eval(v0);
gc();
