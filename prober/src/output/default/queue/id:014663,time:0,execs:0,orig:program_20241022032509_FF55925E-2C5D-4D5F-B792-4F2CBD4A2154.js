const v2 = [[1886898873,1886898873,1886898873,1886898873]];
function f3() {
    return 1886898873;
}
const o4 = {
    "has": f3,
};
const v6 = new Proxy(v2, o4);
v6.indexOf();
gc();
