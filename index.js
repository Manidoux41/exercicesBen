console.log('test')
// Ex3 : Ecrivez une fonction qui retourne la colonne (liste des éléments
//     de la colonne) d’un tableau d’entiers à 2 dimensions dont la somme
//     des éléments est la plus grande

def sum1(input):
    sum = 0
    for row in range (len(input)-1):
        for col in range(len(input[0])-1):
            sum = sum + input[row][col]

    return sum


print sum1([[1, 2],[3, 4],[5, 6]])