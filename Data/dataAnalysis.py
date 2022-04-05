# import statements

import csv
import statistics

import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# importing the file to analyze and putting it in a list
file = "NTEE_OS_Housing_Master_OSTeam - Master.csv"
values = []
with open(file, "r") as filer:
    read = csv.reader(filer)
    for value in read:
        values.append(value)
values.pop(0)

# pulling and converting liability values
liabilities = []
for x in range(0, len(values)):
    if values[x][364] != "":
        liabilities.append(float(values[x][364]))

# pulling and converting liability values
assets = []
for x in range(0, len(values)):
    if values[x][363] != "":
        assets.append(float(values[x][363]))
# pulling and converting revenue values
revenues = []
for x in range(0, len(values)):
    if values[x][343] != "":
        revenues.append(float(values[x][343]))

# finding median of assets and liabilities
medLiabilities = statistics.median(liabilities)


# running knn algorithm on assets vs. liabilities
landaNeigh = KNeighborsClassifier(n_neighbors=5)
landaSet = [[]]
landaSet.append(liabilities)
landaSet.append(assets)
landaNeigh.fit(assets, liabilities, multi_output=False)
landaNeigh.reshape(-1, 1)
# running knn on assets and revenues
landrNeigh = KNeighborsClassifier(n_neighbors=5, multi_output=False)
landrNeigh.fit(assets, revenues)
landrNeigh.reshape(-1, 1)
# comparing one np to the median in liabilities
# fig = px.scatter(x=landaNeigh[0], y=landaNeigh[1])
# fig.show()
