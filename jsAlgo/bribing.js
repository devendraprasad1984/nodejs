// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.
// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
// void calc(vector<int> q)
// {
//     int ans = 0;
//     for (int i = q.size() - 1; i >= 0; i--) {
//     if (q[i] - (i + 1) > 2) {
//         cout << "Too chaotic" << endl;
//         return;
//     }
//     for (int j = max(0, q[i] - 2); j < i; j++)
//     if (q[j] > q[i]) ans++;
// }
//     cout << ans << endl;
// }

let q = [2,1,5,3,4]
// let q = [1,2,3,5,4,6,7,8]
let move = 0
for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
        console.log("too chaotic")
        break
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
        if (q[j] > q[i]) move++
    }
}
console.log('move', move)