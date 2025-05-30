import scipy.stats

least_5_bcfuzz_fuzzilli = [845.0, 767.1, 724.1, 951.4, 737.3]
least_15_bcfuzz_fuzzilli = [1414.0, 1423.4, 1424.3, 1636.0, 1282.2]
least_25_bcfuzz_fuzzilli = [1961.4, 2015.7, 1994.8, 2176.7, 1735.0]
least_5_fuzzilli  = [96.1, 77.8, 85.9, 90.9, 101.8]
least_15_fuzzilli = [316.4, 333.3, 322.3, 315.3, 344.5]
least_25_fuzzilli = [642.3, 645.1, 623.4, 606.4, 659.1]
least_5_bcfuzz_die = [202.8, 86.6, 234.9, 149.0, 90.3]
least_15_bcfuzz_die = [421.0, 200.2, 436.9, 300.9, 221.1]
least_25_bcfuzz_die = [648.5, 318.7, 632.8, 448.3, 331.1]
least_5_die = [35.2, 18.5, 35.8, 24.1, 25.0]
least_15_die = [135.7, 96.8, 112.9, 145.5, 122.3]
least_25_die = [312.6, 216.7, 253.0, 303.6, 285.0]

list_name = ["least_5_bcfuzz_fuzzilli","least_15_bcfuzz_fuzzilli","least_25_bcfuzz_fuzzilli","least_5_fuzzilli","least_15_fuzzilli","least_25_fuzzilli","least_5_bcfuzz_die","least_15_bcfuzz_die","least_25_bcfuzz_die","least_5_die","least_15_die","least_25_die"]
list_list = [least_5_bcfuzz_fuzzilli,least_15_bcfuzz_fuzzilli,least_25_bcfuzz_fuzzilli,least_5_fuzzilli,least_15_fuzzilli,least_25_fuzzilli,least_5_bcfuzz_die,least_15_bcfuzz_die,least_25_bcfuzz_die,least_5_die,least_15_die,least_25_die]


for i in range(len(list_list)):
    current_list = list_list[i]
    current_value = round(sum(current_list)/len(current_list), 1) # average value
    print(list_name[i], ": ", current_value)



print("fuzzilli_5:")
print(scipy.stats.mannwhitneyu(least_5_fuzzilli, least_5_bcfuzz_fuzzilli, False,'less'))
print("")

print("fuzzilli_15:")
print(scipy.stats.mannwhitneyu(least_15_fuzzilli, least_15_bcfuzz_fuzzilli, False,'less'))
print("")

print("fuzzilli_25:")
print(scipy.stats.mannwhitneyu(least_25_fuzzilli, least_25_bcfuzz_fuzzilli, False,'less'))
print("")


print("die_5:")
print(scipy.stats.mannwhitneyu(least_5_die, least_5_bcfuzz_die, False,'less'))
print("")

print("die_15:")
print(scipy.stats.mannwhitneyu(least_15_die, least_15_bcfuzz_die, False,'less'))
print("")

print("die_25:")
print(scipy.stats.mannwhitneyu(least_25_die, least_25_bcfuzz_die, False,'less'))
print("")




