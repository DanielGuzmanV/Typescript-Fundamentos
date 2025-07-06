// Ejemplo 1 de "LeetCode"
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single 
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Resolucion:
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val=== undefined ? 0 : val)
    this.next = (next=== undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const nodoInicial = new ListNode(0); // Nodo inicial que sera ficticio
  let current = nodoInicial; // Sera nuestro puntero para construir la nueva lista
  let carry = 0; 

  while(l1 !== null || l2 !== null || carry !== 0) {
    const x = l1 !== null ? l1.val : 0;
    const y = l2 !== null ? l2.val : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum/10); // Realiza una nueva llamada;
    const digit = sum % 10; // El digito actual

    current.next = new ListNode(digit); // Agregamos el nodo
    current = current.next;

    if(l1 !== null) l1 = l1.next;
    if(l2 !== null) l2 = l2.next;
  }

  return nodoInicial.next;

};

// Para poder probrar la funcion: addTwoNumbers

// 1.- Funcion para convertir un array en una lista enlazada
function arrayToList(array: number[]): ListNode | null {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for(let num of array) {
    current.next = new ListNode(num);
    current = current.next
  }
  return dummyHead.next;
}

// 2.- Funcion para convertir una lista enlazada a un array (para verificar el resultado)
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while(head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result
}

// 3.- Probamos la funcion addTwoNumbers
// Creamos las listas enlazadas
const l1 = arrayToList([2,4,3]);
const l2 = arrayToList([5,6,4]);

// Usamos la funcion de addTwoNumbers:
const result = addTwoNumbers(l1, l2);

// Mostramos el resultado
console.log(listToArray(result));






