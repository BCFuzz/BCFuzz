this.constructor.seal(this);
const v4 = `
    function f5() {
        return eval;
    }
`;
const v6 = v4.split();
try { v6.flatMap(eval); } catch (e) {}
gc();
