function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Uint8Array(3129);
for (const v6 in v5) {
    function f7() {
        const o10 = {
            [v2]() {
            },
        };
        return arguments;
    }
    f7();
}
gc();
