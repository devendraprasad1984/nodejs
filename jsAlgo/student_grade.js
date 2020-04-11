// Sample Input 0
//
// 4
// 73
// 67
// 38
// 33
// Sample Output 0
//
// 75
// 67
// 40
// 33
// Explanation 0
//
// image
//
// Student  received a , and the next multiple of  from  is . Since , the student's grade is rounded to .
// Student  received a , and the next multiple of  from  is . Since , the grade will not be modified and the student's final grade is .
// Student  received a , and the next multiple of  from  is . Since , the student's grade will be rounded to .
// Student  received a grade below , so the grade will not be modified and the student's final grade is .

function gradingStudent(grades) {
    let res = [];
    let bm=38;
    for (let i = 0; i < grades.length; i++) {
        let g = grades[i];
        let multval = g;
        //get next multiple of 5
        if(g>=bm){
            for (let j = 1; j < 5; j++) {
                multval = g+j;
                if (multval % 5 === 0) break
            }
        }
        if (multval - g < 3 && g>=bm)
            res.push(multval)
        else
            res.push(g);
    }
    return res;
}

let grades = [73, 67, 38, 33];
res = gradingStudent(grades);
console.log(res)


