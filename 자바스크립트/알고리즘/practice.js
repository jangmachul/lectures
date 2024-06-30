// function linearsearch (arr , value) {
//     for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === value) return i
        
//     }
//     return -1
// }

// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(linearsearch(arr,5))


function linearsearch(arr , value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    } return -1
}
const arr = [1,2,3,4,5,6,7,8,9]
console.log(linearsearch(arr,9))

console.log(arr.indexOf(5));

function binary (arr , value) {
    let start = 0;
    let end = arr.length-1
    let mid
    while(start<=end){
        mid = parseInt((start+end)/2)
        if(value === arr[mid]){
            return mid;
        } else {
            if(value < arr[mid]){
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }
    return -1
}
console.log(binary(arr, 4))


function binary2 (arr, value) {
    let start = 0;
    let end = arr.length-1
    let mid
    while(start<=end){
        mid = parseInt((start+end)/2)
        if(mid === value){
            return mid
        } else {
            if (value < arr[mid]){
                end = mid - 1
            } else {
                start = mid +1
            }
        }
    }
    return -1 
}

function binary3 (arr , value){
    let start = 0;
    let end = arr.length - 1
    let mid
    while(start <= end) {
        mid = parseInt((start+end)/2)
        if(value === mid){
            return mid;
        } else {
            if(value < arr[mid]){
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    } return -1
}

function binary4 ( arr , value ) {
    let start = 0;
    let end = arr.length
    let mid
    while(start <= end) {
        mid = parseInt((start+end)/2)
            if(value === mid) {
                return mid
            } else {
                if (value < arr[mid]){
                    end = mid - 1
                } else {
                    start = mid + 1
                }
            }
    } return -1
}

function binary5 (arr , value) {
    let start = 0;
    let end = arr.length
    let mid
    while(start <= end){
        mid = ((start +end) /2)
        if (value === mid){
            return mid
        } else {
            if (value <arr[mid]){
                end = mid -1
            } else {
                start = mid +1
            }
        }
    } return -1
}

function binary6 ( arr , value) {
    let start = 0;
    let end = arr.length;
    let mid
    while(start<=end){
        mid = parseint((start+end)/2)
        if(value === mid) {
            return mid
        } else {
            if(value < arr[mid]){
                end = mid - 1
            } else {
                start = mid+ 1
            }
        }
    } return - 1
}