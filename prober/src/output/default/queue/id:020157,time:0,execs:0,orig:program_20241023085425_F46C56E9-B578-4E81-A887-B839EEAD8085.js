const v0 = [];
const v1 = `
    /\u{12345}/myvis;
    function f3(a4) {
        switch (v1) {
            case v0:
                break;
            default:
                break;
        }
        return a4;
    }
`;
eval(v1);
gc();
