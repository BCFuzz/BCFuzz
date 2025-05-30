import scipy.stats


fuzzilli_jsc = [1, 1, 3, 2, 2]
bcfuzz_fuzzilli_jsc = [2, 4, 4, 4, 3]
die_jsc = [1, 2, 3, 2, 3]
bcfuzz_die_jsc = [3, 5, 4, 4, 2]

fuzzilli_v8 = [1, 0, 0, 1, 1]
bcfuzz_fuzzilli_v8 = [1, 1, 1, 1, 1]
die_v8 = [0, 0, 0, 0, 1]
bcfuzz_die_v8 = [1, 0, 1, 0, 2]

fuzzilli_hermes = [1, 0, 2, 2, 0]
bcfuzz_fuzzilli_hermes = [2, 1, 4, 3, 3]
die_hermes = [4, 3, 3, 4, 3]
bcfuzz_die_hermes = [5, 6, 4, 5, 5]

fuzzilli_jerry = [5, 4, 4, 5, 4]
bcfuzz_fuzzilli_jerry = [5, 8, 6, 8, 6]
die_jerry = [2, 2, 2, 2, 2]
bcfuzz_die_jerry = [3, 3, 2, 4, 4]


list_name=["fuzzilli_jsc","bcfuzz_fuzzilli_jsc","die_jsc","bcfuzz_die_jsc","fuzzilli_v8","bcfuzz_fuzzilli_v8","die_v8","bcfuzz_die_v8","fuzzilli_hermes","bcfuzz_fuzzilli_hermes","die_hermes","bcfuzz_die_hermes","fuzzilli_jerry","bcfuzz_fuzzilli_jerry","die_jerry","bcfuzz_die_jerry"]
list_list = [fuzzilli_jsc,bcfuzz_fuzzilli_jsc,die_jsc,bcfuzz_die_jsc,fuzzilli_v8,bcfuzz_fuzzilli_v8,die_v8,bcfuzz_die_v8,fuzzilli_hermes,bcfuzz_fuzzilli_hermes,die_hermes,bcfuzz_die_hermes,fuzzilli_jerry,bcfuzz_fuzzilli_jerry,die_jerry,bcfuzz_die_jerry]


for i in range(len(list_list)):
    current_list = list_list[i]
    current_value = round(sum(current_list)/len(current_list), 2) # average value
    print(list_name[i], ": ", current_value)

print("=============p-value==============")
print("fuzzilli_jsc:")
print(scipy.stats.mannwhitneyu(fuzzilli_jsc, bcfuzz_fuzzilli_jsc, False,'less'))
print("")

print("die_jsc:")
print(scipy.stats.mannwhitneyu(die_jsc, bcfuzz_die_jsc, False,'less'))
print("")


print("fuzzilli_v8:")
print(scipy.stats.mannwhitneyu(fuzzilli_v8, bcfuzz_fuzzilli_v8, False,'less'))
print("")

print("die_v8:")
print(scipy.stats.mannwhitneyu(die_v8, bcfuzz_die_v8, False,'less'))
print("")



print("fuzzilli_hermes:")
print(scipy.stats.mannwhitneyu(fuzzilli_hermes, bcfuzz_fuzzilli_hermes, False,'less'))
print("")

print("die_hermes:")
print(scipy.stats.mannwhitneyu(die_hermes, bcfuzz_die_hermes, False,'less'))
print("")



print("fuzzilli_jerry:")
print(scipy.stats.mannwhitneyu(fuzzilli_jerry, bcfuzz_fuzzilli_jerry, False,'less'))
print("")

print("die_jerry:")
print(scipy.stats.mannwhitneyu(die_jerry, bcfuzz_die_jerry, False,'less'))
print("")