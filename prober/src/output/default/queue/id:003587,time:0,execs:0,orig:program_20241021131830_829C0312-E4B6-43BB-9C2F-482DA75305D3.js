const v1 = [-1.2671073635093923e+308];
function f2() {
    v1["indexOf"](-1.2671073635093923e+308);
    return "indexOf";
}
v1.toString = f2;
const v5 = [-1.2671073635093923e+308];
v5.slice(v5, v1);
gc();
