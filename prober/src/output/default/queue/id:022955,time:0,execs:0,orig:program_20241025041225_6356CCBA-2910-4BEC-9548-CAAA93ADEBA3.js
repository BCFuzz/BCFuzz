const v1 = new Uint8Array();
const o5 = {
    toString(a3, a4) {
        return v1;
    },
};
const v6 = o5.toString(o5, v1);
const v8 = RegExp();
class C9 {
    [v6] = v6;
}
const v10 = new C9();
const v11 = new C9();
JSON.stringify([v8,v10,[v11]]);
gc();
