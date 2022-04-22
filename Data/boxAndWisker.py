import csv

# function to create lists from values
def pullToList(values, i):
    listy = []
    for x in range(0, len(values)):
        if values[x][i] != "":
            listy.append(float(values[x][i]))
    return listy
    
# function to create lists from values
def pullToListStr(values, i):
    listy = []
    for x in range(0, len(values)):
        if values[x][i] != "":
            listy.append(str(values[x][i]))
    return listy


def getDict(ein, val):
    newd = {}
    for e in range(len(val)):
        if ein[e] in newd.keys():
            newd[ein[e]].append(val[e])
        else:
            newd[ein[e]] = [val[e]]
    return newd
    
# importing the file to analyze and putting it in a list
file = "NTEE_OS_Housing_Master_OSTeam - Master.csv"
values = []
with open(file, "r") as filer:
    read = csv.reader(filer)
    for value in read:
        values.append(value)
values.pop(0)


# pulling and converting liability values
liabilities = pullToList(values, 364)

# pulling and converting asset values
assets = pullToList(values, 363)

# pulling and converting revenue values
revenues = pullToList(values, 345)

ein = pullToListStr(values, 2)

ein = [e.split('-')[0] for e in ein]

d = getDict(ein,assets)

for key,val in d.items():
    print(f'{key}: {val}')


