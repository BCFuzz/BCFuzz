const v0 = `
    async function f1(a2, a3, a4) {
        'use strict';
        return a4;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
