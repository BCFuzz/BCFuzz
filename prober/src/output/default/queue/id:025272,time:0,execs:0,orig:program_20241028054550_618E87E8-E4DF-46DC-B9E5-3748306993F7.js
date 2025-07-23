const v0 = [];
const v3 = new Uint8Array(3129);
for (const v4 in v3) {
    const v5 = v0.concat();
    const o6 = {
    };
    o6.c = v5;
    function f7() {
        delete o6.c;
        return arguments;
    }
    f7();
}
gc();
