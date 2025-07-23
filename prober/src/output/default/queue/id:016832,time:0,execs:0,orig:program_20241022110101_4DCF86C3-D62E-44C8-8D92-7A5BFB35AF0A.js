this.constructor.seal(this);
this.constructor.freeze(this);
const v6 = `
    for (let v7 = 0; v7 < 5; v7++) {
        function f8(a9, a10) {
            return v6;
        }
    }
`;
eval(v6);
gc();
