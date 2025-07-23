const v2 = new Int16Array(422);
for (const v3 of v2) {
    function f4() {
        const o5 = {
        };
        const o6 = {
        };
        o6.a = o5;
        o6.a = v3;
        return o6;
    }
    f4();
}
gc();
