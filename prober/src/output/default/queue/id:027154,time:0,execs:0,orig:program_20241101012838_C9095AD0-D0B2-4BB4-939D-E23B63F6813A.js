const v0 = `
    /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    RegExp.$3;
`;
v0.replace("function", v0);
gc();
