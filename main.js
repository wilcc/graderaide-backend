/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function(assignment,score){
  return{
    assignment,
    score,
  }
}
const Term = function(hours){
  return{
    hours,
    grades:[],
    addGrade: function(assignment,score){
      this.grades.push(Grade(assignment,score))
    }
  }
}
const Course = function(name){
  return{
    name,
    terms:[],
    addTerm: function(hours){
      this.terms.push(Term(hours))
    }
  }
}
const Student = function(name,course,term=1){
  return{
    name,
    course,
    term,
    courses:[],
    addCourse: function(name){
      this.courses.push(Course(name))
    },
    getAverage: function(course,term){
      let result = 0
      let courseNameCount = 0
      if(course === undefined && term === undefined){
        while(this.courses[courseNameCount].name !== this.course){
          courseNameCount++
        }
        let grades = this.courses[courseNameCount].terms[this.term-1].grades
        for(let i= 0;i<grades.length;i++){
          result +=grades[i].score

        }
        result= result/grades.length
      }

      else if(term === undefined){
      let courseNameCount = 0
      while(this.courses[courseNameCount].name !== course){
        courseNameCount++
      }

        let grades = this.courses[courseNameCount].terms[this.term-1].grades
        for(let i= 0;i<grades.length;i++){
          result +=grades[i].score

        }
        result= result/grades.length
        
        // result = result/this.courses[courseNameCount].terms.length
      }else{
      let courseNameCount = 0

        while(this.courses[courseNameCount].name !== course){
          courseNameCount++
        }
        let grades = this.courses[courseNameCount].terms[term].grades
        for(let i= 0;i<grades.length;i++){
          result +=grades[i].score

        }
        result= result/grades.length
      }
      return result
      }
      // console.log(this.course)
      // console.log('grade',this.courses[0].terms[0].grades[0].score)
      // // console.log('term1',this.courses[1])
      
      // // console.log('course Name',this.course)
      // return console.log(this.courses)
    }
  }
// }

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
