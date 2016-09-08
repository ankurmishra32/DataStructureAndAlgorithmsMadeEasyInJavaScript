function swap (array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

//10.5 Bubble sort
function bubbleSort(array) {
    var i, pass, length = array.length;
    for (pass=length-1; pass>=0; pass--) {
        for (i=0; i<pass; i++) {
            if (array[i]>array[i+1]) {
                swap(array, i, i+1);
            }
        }
    }
}

// Above algorithm takes O(n^2) even in best case. We can improve it using an extra flag
// The only case where we can skip the remaining pass if array is already sorted. Best case O(n).
function bubbleSortImproved(array) {
    var i, pass, swapped = 1,
        length = array.length;
    for (pass=length-1; pass>=0 && swapped; pass--) {
        swapped = 0;
        for (i=0; i<pass; i++) {
            if (array[i]>array[i+1]) {
                swap(array, i, i+1);
                swapped = 1;
            }
        }
    }
}

//10.6 Selection sort
function selectionSort(array) {
    var i, pass, min,
        length = array.length;
    for (pass=0; pass<length-1; pass++) {
        min = pass;
        for (i=pass+1; i<length; i++) {
            if(array[i]<array[min]) {
                min = i;
            }
        }
        swap(array, min, pass);
    }
}