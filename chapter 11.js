//11.3 Types of Searching

//Unordered linear search
function unorderedLinearSearch (array, item) {
    //will return either array index where item is located or -1 for not found
    var i, length = array.length;
    for (i=0; i<length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}

//Ordered linear search
function orderedLinearSearch (array, item) {
    //will return either array index where item is located or -1 for not found
    var i, length = array.length;
    for (i=0; i<length; i++) {
        if (array[i] === item) {
            return i;
        } else if (array[i] > item) {
            //just improved the not found senario
            //running time is almost same as of previous algo
            return -1;
        }
    }
    return -1;
}

//Binary search iterative version
function binarySearchIterative (array, item) {
    var low = 0, mid,
        high = array.length - 1;
    while (low <= high) {
        mid = low + Math.floor((high-low)/2);
        if (array[mid] === item) {
            return mid;
        } else if (array[mid] < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

//Binary search recursive version
function binarySearchRecursive (array, item, low, high) {
    var mid;
    low = (low === undefined) ? 0 : low;
    high = (high === undefined) ? (array.length - 1) : high;
    if (low > high) {
        return -1;
    }
    mid = low + Math.floor((high-low)/2);       
    if (array[mid] === item) {
        return mid;
    } else if (array[mid] < item) {
        binarySearchRecursive(array, item, mid + 1, high);
    } else {
        binarySearchRecursive(array, item, low, mid - 1);
    }
}

//Problem-1 Given an array of n numbers containing repetition of some numbers. Check whether there are repeated elements or not.
//Same problem is given in sorting (chapter 10) as problem-1

//Problem-4 Can we improve the complexity of problem-1 solution? Assume that array have all +ve numbers and all numbers are from rangle [0, n-1]
function checkDuplicatesInArrayWithAsssumptionOfValues (array) {
    var i, length = array.length;
    for (i=0; i<length-1; i++) {
        if (array[Math.abs(array[i])] < 0) {
            return true;
        } else {
            array[array[i]] = -array[array[i]];
        }
    }
    return false;
}

//Problem-5 Given an array with n numbers. Give an algorithm for finding the element which appears maximum number of times in array?
//Same problem is given in sorting (chapter 10) as problem-3 but with different statement.

//Problem-8 For Problem-5 solution, can we improve the time complexity? Assume that array have all numbers are from rangle [0, n-1]
function maxRepetitionsWithAsssumptionOfValues (array) {
    var i=0, max=0, maxIndex=0,
        length = array.length;
    for (i=0; i<length; i++) {
        array[array[i]%length] += length;
    }
    for (i=0; i<length; i++) {
        if (array[i]/n > max) {
            max = array[i]/n;
            maxIndex = i;
        }
    }
    return i;
}

//Problem-9 Given the array of n numbers, give an algorithm to find first element in the array which is repeated.
//Brute-force method
function firstRepeatBruteForce (array) {
    var i, j, length = array.length;
    for (i=0; i<length-1; i++) {
        for (j=i+1; j<length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
        }
    }
}

//Problem-10 For Problem-9, can we use sorting technique?
//No, as sorting will not maintain the sequence.

//Problem-11 For Problem-9, can we use hashing technique?
//Yes, but simple hashing technique will not work.

//Problem-13 Finding the missing number: We are given an array of n-1 size and have numbers from 1 to n.
//There are no duplicates in the list. One of the number is missing. Give an algo to find that missing number.
//Brute-force method
function findMissingNumberBruteForse (array, limit) {
    var i, j, found,
        length = array.length;
    if (limit === undefined) {
        limit = getMax(array);
    }
    for (i=1; i<=limit; i++) {
        found = false;
        for (j=0; j<length; j++) {
            if (array[j] === i) {
                found = true;
            }
        }
        if (!found) {
            return i;
        }
    }
    return -1;
}

//Problem-14 For Problem-13, can we use sorting technique?
function findMissingNumberUsingSorting (array, limit) {
    var i, length = array.length;
    if (limit === undefined) {
        limit = getMax(array);
    }
    //We are using bucket sort as it have very less complexity and suitable for the given condition
    bucketSort(array, limit+1);
    for (i=0; i<length; i++) {
        if (array[i] !== i+1) {
            return i+1;
        }
    }
    return -1;
}

//Problem-16 For Problem-13, can we improve the complexity?
function improvedFindMissingNumber (array, limit) {
    var i, numb, sum = 0,
        length = array.length;
    if (limit === undefined) {
        limit = getMax(array);
    }
    // Sum of 1 to n numbers are n*(n+1)/2
    for (i=0; i<length; i++) {
        sum += array[i];
    }
    numb = (limit*(limit+1))/2 - sum;
    return numb || -1;
}

//Problem-17 In Problem-13, if the sum of the numbers goes beyond maximum allowed integers, then there can be integer
//overflow and may not get correct answer. How can we solve the problem?
//Sol: There is no integer in javascript but just number. However the solution of XOR is the anwser and still work here.
function findMissingNumberUsingXOR (array, limit) {
    var i, X, Y,
        length = array.length;
    if (limit === undefined) {
        limit = getMax(array);
    }
    for (i=0; i<length; i++) {
        X ^= array[i];
    }
    for (i=1; i<=limit; i++) {
        Y ^= i;
    }
    return X^Y;
}

//Problem-18 Find the number occuring odd number of times. Given an array of positive integers, all numbers occurs even
//numbers of times except one number which occure odd number of times. Find the number in O(n) time and constant space.
function findNumberOccurOddTimesUsingXOR (array) {
    var i, X, length = array.length;
    for (i=0; i<length; i++) {
        X ^= array[i];
    }
    return X;
}

//Problem-19 Find the two repeating elements in a given array: Given an array with n+2 elements, all elements of the array
//are in range 1 to n and also only once except two numbers which occurs twice. Find those two numbers.
function printRepeatedElementsUsingBruteForce (array, n) {
    var i, j;
    for (i=0; i<n+1; i++) {
        for (j=i+1; j<n+2; j++) {
            if (array[i] === array[j]) {
                console.log(array[i]);
            }
        }
    }
}

//Problem-20 For the Problem-19, can we improve the time complexity using sorting
function printRepeatedElementsUsingSorting (array, n) {
    var i;
    bucketSort(array, n+2);
    for (i=0; i<n+1; i++) {
        if (array[i] === array[i+1]) {
            console.log(array[i]);
            i++;
        }
    }
}

//Problem-21 For the Problem-19, can we improve the time complexity using counting
function printRepeatedElementUsingCounting (array, n) {
    var i, count = [];
    for (i=0; i<n; i++) {
        count[i] = 0;
    }
    for (i=0; i<n+2; i++) {
        count[array[i]]++;
        if (count[array[i]] === 2) {
            console.log(array[i]);
        }
    }
}

//Problem-22 For the Problem-19, can we improve the time complexity using XOR operation
function printRepeatedElementsUsingXOR (array, n) {
    var i, right_most, X = 0, Y = 0, XOR = array[0];
    for (i=1; i<n+2; i++) {
        XOR ^= array[i];    //Compute XOR of all elements in array
    }
    for (i=1; i<=n; i++) {
        XOR ^= i;           //Compute XOR of all elements from 1 to n
    }
    right_most = XOR & ~(XOR-1);    //Get the rightmost set bit in right_most

    //Now divide elements in two sets by comparing rightmost set
    for (i=0; i<n+2; i++) {
        if (array[i] & right_most) {
            X ^= array[i];  //XOR of first set in array
        } else {
            Y ^= array[i];  //XOR of second set in array
        }
    }

    for (i=1; i<=n; i++) {
        if (i & right_most) {
            X ^= i;         //XOR of first set in array and {1,2,..,n}
        } else {
            Y ^= i;         //XOR of second set in array and {1,2,..,n}
        }
    }
    console.log(X, Y);
}

//Problem-23 For the Problem-19, is there yet another way of solving the problem
function printRepeatedElementsUsingSP (array, n) {
    var i, D, S = 0, P = 1; //Dfor difference, S for sum and P for product
    for (i=0; i<n+2; i++) {
        S += array[i];
        P *= array[i];
    }
    S = S - (n*(n+1)/2);
    P = P/Fact(n);
    D = Math.sqrt(S*S - 4*P);

    console.log((S-D)/2, (S+D)/2);
}