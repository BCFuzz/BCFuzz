const v2 = [[9007199254740992,9007199254740992,9007199254740992]];
function f3() {
    return 9007199254740992;
}
const o4 = {
    "has": f3,
};
const v6 = new Proxy(v2, o4);
v6.indexOf();
gc();
