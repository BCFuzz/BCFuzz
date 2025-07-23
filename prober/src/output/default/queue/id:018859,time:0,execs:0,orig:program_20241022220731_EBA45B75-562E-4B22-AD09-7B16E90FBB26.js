const v2 = new Uint8Array(255);
const v4 = new Uint16Array(255, 255, 255);
for (const v5 in v2) {
    const o6 = {
    };
    function f7(a8) {
        a8.b = a8;
        return a8;
    }
    o6.set = f7;
    const v10 = new Proxy(v4, o6);
    v10.h = v10;
}
gc();
