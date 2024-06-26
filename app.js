//------------------Q1--------------------------
class stack {
    constructor() {
        this.arr = [];
    }

    push(element) {
        this.arr.push(element);
    }

    pop() {
        if (this.is_empty() === 0) {
            return console.log("there is no element");
        }
        return this.arr.pop();
    }

    is_empty() {
        return this.arr.length === 0;
    }

    print() {
        if (!this.is_empty()) {
            for (let i = 0; i <= this.arr.length; i++) {
                console.log(this.arr[i]);
            }
        }
        else {
            return console.log("there is no element");
        }
    }

    push_arr(arr) {
        for (let i = 0; i <= arr.length; i++) {
            this.arr.push(arr[i]);
        }
        // return console.log(obj_arr);
    }

    revers_arr(arr, obj_arr) {

        for (let i = 0; i <= arr.length - 1; i++) {
            obj_arr.push(arr[i]);
        }

        for (let i = 0; i <= arr.length - 1; i++) {
            arr[i] = obj_arr.pop();
        }

        return arr;
    }


}


let test_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Q1- [" + test_arr + "]");

console.log(" ");

let test = new stack();

// test.push_arr(test_arr, test);

// test.print();

test.revers_arr(test_arr, test);

console.log("Q1- [" + test_arr + "]");

console.log(" ");

//------------------Q1--------------------------


//------------------Q2--------------------------
class stack2 {
    constructor() {
        this.arr = [];
        // this.obj2_arr = obj2_arr;
    }

    push(element) {
        this.arr.push(element);
    }

    is_empty() {
        return this.arr === 0;
    }

    pop() {
        if (this.arr.length === 0) {
            return console.log("there is no element");
        }
        test_2.push_arr(test_2, test_1);
        test_2.pop();
        test_1.push_arr(test_1, test_2);
        return test_1;
    }


    print() {
        // if (!this.is_empty() === 0) {
        for (let i = 0; i <= this.arr.length; i++) {
            console.log(this.arr[i]);
        }
        // }
        // else {
        //     return console.log("there is no element");
        // }
    }

    push_arr(obj1_arr, obj2_arr) {
        let swap_arr = [];

        let aa = obj2_arr.arr.length;

        for (let i = 0; i <= aa; i++) {
            swap_arr[i] = obj2_arr.pop();
        }

        // console.log("????????????????????" + swap_arr);

        for (let i = 0; i <= swap_arr.length - 1; i++) {
            obj1_arr.push(swap_arr[i]);
        }

        // console.log(obj1_arr.arr);
        // return console.log("............." + obj2_arr.arr);
    }



}

let test_arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let test_1 = new stack();

test_1.push_arr(test_arr2, test_1);

// test_1.print();

let test_2 = new stack2();

// test_2.push_arr(test_2, test_1);

// console.log(test_2);

// test_2.print();

test_2.pop();

// test_2.print();
//------------------Q2--------------------------

//------------------Q3--------------------------
let sum = function (arr) {
    if (arr.length < 1) {
        return 0;
    } else {
        return arr.pop() + sum(arr);
    }


}
// console.log(sum([2, 8, 5]));
//------------------Q3--------------------------

//------------------Q4--------------------------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the end of the list
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Add a node at the beginning of the list
    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a node with specific data
    delete(data) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        if (current.next === null) {
            console.log("Data not found in the list");
            return;
        }

        current.next = current.next.next;
    }

    // Print all nodes in the list
    print() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        while (current !== null) {
            // console.log(current.data);
            current = current.next;
        }
    }

    getValues() {
        let values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }
        return values;
    }
}


let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
// list.print();

// console.log("Deleting node with data 2");
// list.print();
// console.log(list.getValues().length);

let stack_list = new stack();

for (let i = 0; i <= list.getValues().length; i++) {
    stack_list.push(list.getValues);
}

console.log("ggg" + stack_list.print());

//------------------Q4--------------------------

//------------------Q5--------------------------

//------------------Q5--------------------------