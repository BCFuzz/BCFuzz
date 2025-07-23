const v2 = new Uint32Array();
const v3 = Reflect.construct(Uint32Array, v2);
function f5(a6, a7) {
    const o17 = {
        [a7]: a7,
        toString(a9, a10) {
            const v11 = this.__proto__;
            v11.toLocaleString(v11, a10, a9).constructor.fromCharCode("-1825203715")[0].toLocaleUpperCase();
            return a7;
        },
    };
    return o17;
}
f5(v3, f5());
gc();
