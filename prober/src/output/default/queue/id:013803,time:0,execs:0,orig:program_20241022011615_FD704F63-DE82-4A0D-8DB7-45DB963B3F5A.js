const v2 = new Uint16Array(4096, 4096);
const v4 = `
    switch ("n") {
        default:
            break;
        case 4096:
            break;
        case v2:
            break;
    }
    /\u{12345}/myvis;
`;
eval(v4);
gc();
