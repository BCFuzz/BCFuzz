const v0 = `
    function f1(a2, a3) {
        'use strict';
        return f1;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
