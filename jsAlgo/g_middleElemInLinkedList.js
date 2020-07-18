//(1) a "data" field which will store our data (string, number, etc.)
// (2) a "next" field which will be a reference to some other node
// https://en.wikipedia.org/wiki/Linked_list

//js class is created this way and is invoked with new keyword
function node(data,next){
    this.data=data;
    this.next=next
}
let n1=new node("ok now, linked list",null);
let n2=new node("hello",n1);
let n3=new node("dp",n2);
let n4=new node("prasad",n3);
let n5=new node("sharma",n4);
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null

//assign to head as an entry to linked list
let head=n5;
let fastPointer=head
let slowPointer=head

//loop through the linked list, by the time fastPointer reaches end, slow pointer will be in middle
//this is fastest solution as complexity is linear
while(fastPointer.next!==null && fastPointer.next.next!==null){
    fastPointer=fastPointer.next.next;
    slowPointer=slowPointer.next;
}
console.log('slow pointer',slowPointer);

//slow solution is also there. 1st iteration: count how many elements, 2nd: stop at total/2;
totalNodes=1;
cur=head;
while(cur.next!==null){
    cur=cur.next;
    totalNodes+=1;
}
middleNode=Math.round(totalNodes/2,0);
// console.log("total nodes",totalNodes,"middle node would be at",middleNode,"pointer is now at",cur);
//get actual node in second iteration
pCnt=1;
cur=head
while(cur.next!==null){
    if(pCnt==middleNode){
        console.log("middle node as data:",cur);
        break
    }
    cur=cur.next;
    pCnt+=1;
}




