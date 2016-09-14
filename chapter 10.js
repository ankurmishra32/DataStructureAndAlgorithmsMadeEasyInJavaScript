function swap (array, left, right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
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

//10.7 Insertion sort
function insertionSort(array) {
    var temp, pass, i,
        length = array.length;
    for (pass = 1; pass<length; pass++) {
        temp = array[pass];
        i = pass-1;
        while (array[i]>temp && i>=0) {
            array[i+1] = array[i];
            i--;
        }
        array[i+1] = temp;
    }
}

//10.8 Shell sort
function shellSort(array) {
    var temp, pass, gap, i,
        length = array.length;
    for (gap = Math.floor(length/2); gap>0; gap = Math.floor(gap/2)) {
        //Modified Insersion Sort
        for (pass = gap; pass<length; pass++) {
            temp = array[pass];
            i = pass-gap;
            while (array[i]>temp && i>=0) {
                array[i+gap] = array[i];
                i-=gap;
            }
            array[i+gap] = temp;
        }
    }
}

//Shell sort as per the Karumanchi book version
function shellSortByKarumanchi(array) {
    var i, j, h, v,
        length = array.length;
    for (h=1; h<length/9; h=3*h+1);
    for (; h>0; h=Math.floor(h/3)) {
        for (i=h+1; i<length; i++) {
            v=array[i];
            j=i;
            while (j>=h && array[j-h]>v) {
                array[j]=array[j-h];
                j-=h;
            }
            array[j]=v;
        }
    }
}

//10.9 Merge sort
function mergeSort(array, temp, left, right) {
    var mid;
    temp = (temp === undefined) ? [] : temp;
    left = (left === undefined) ? 0 : left;
    right = (right === undefined) ? (array.length - 1) : right;
    if (left < right) {
        mid = (left + right) / 2;
        mid = Math.floor(mid);
        mergeSort(array, temp, left, mid);
        mergeSort(array, temp, mid+1, right);
        merge(array, temp, left, mid+1, right);
    }
}

function merge(array, temp, left, mid, right) {
    var i,
        left_end = mid-1,
        temp_pos = left,
        size = right - left + 1;
    while ((left <= left_end) && (mid <= right)) {
        if (array[left] <= array[mid]) {
            temp[temp_pos++] = array[left++];
        } else {
            temp[temp_pos++] = array[mid++];
        }
    }
    while (left <= left_end) {
        temp[temp_pos++] = array[left++];
    }
    while (mid <= right) {
        temp[temp_pos++] = array[mid++];
    }
    for (i=0; i<=size; i++) {
        array[right] = temp[right];
        right--;
    }
}

//10.11 Quicksort
function quickSort(array, low, high) {
    var pivot;
    low = (low === undefined) ? 0 : low;
    high = (high === undefined) ? (array.length - 1) : high;
    if (high > low) {
        pivot = partition(array, low, high);
        quickSort(array, low, pivot-1);
        quickSort(array, pivot+1, high);
    }
}

function partition(array, low, high) {
    var left = low,
        right = high,
        pivot_item = array[low];
    while (left < right) {
        while (array[left] <= pivot_item) {
            left++;
        }
        while (array[right] > pivot_item) {
            right--;
        }
        if (left < right) {
            swap(array, left, right);
        }
    }
    array[low] = array[right];
    array[right] = pivot_item;
    return right;
}

//10.15 Counting sort
function countingSort(array, limit) {
    var i, max,
        temp = [],
        result = [],
        length = array.length;
    if (limit === undefined) {
        max = array[0];
        //complexity O(length)
        for (i=1; i<length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        limit = max + 1;
    }
    //complexity O(limit)
    for (i=0; i<limit; i++) {
        temp[i] = 0;
    }
    //complexity O(length)
    for (i=0; i<length; i++) {
        temp[array[i]]++;
    }
    //complexity O(limit)
    for (i=1; i<limit; i++) {
        temp[i] += temp[i-1];
    }
    //complexity O()
    for (i=length-1; i>=0; i--){
        result[temp[array[i]] - 1] = array[i];
        temp[array[i]]--;
    }
    return result;
}

//10.16 Bucket sort
function bucketSort(array, BUCKET) {
    var i, j, k, max,
        buckets = [],
        length = array.length;
    if (BUCKET === undefined) {
        max = array[0];
        //complexity O(length)
        for (i=1; i<length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        BUCKET = max + 1;
    }
    //complexity O(BUCKET)
    for (i=0; i<BUCKET; i++) {
        buckets[i] = 0;
    }
    //complexity O(length)
    for (i=0; i<length; i++) {
        buckets[array[i]]++;
    }
    for (i=0, j=0; j<BUCKET; j++) {
        for (k=buckets[j]; k>0; k--) {
            array[i++] = j;
        }
    }
}