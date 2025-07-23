const v0 = [2.0,-3.0,1.0615370708321216e+308,1000.0,-3.0489406317438035e+307,1000000.0,463.32949039660934];
const v2 = new Float32Array(v0, v0);
const v5 = `
    switch ("n") {
        case 4096:
            break;
        case v2:
            break;
        case v0:
            break;
    }
    /\u{12345}/myvis;
`;
eval(v5);
gc();
