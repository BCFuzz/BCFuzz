const v0 = /u?/y;
const v2 = [];
const v3 = v0.compile;
const v4 = Reflect.apply(v3, v0, v2);
const v7 = new Float32Array(v0, v3);
const v8 = new Float32Array(v7, v3, v4);
const v11 = `
    switch ("n") {
        case v4:
            v8[1172] = 251;
            break;
        case Float32Array:
            const o13 = {
            };
            const v15 = new ArrayBuffer(182, o13);
            DataView(v15);
            break;
        default:
            break;
        case 4096:
            break;
        case v7:
            break;
    }
    /\u{12345}/myvis;
`;
eval(v11);
gc();
