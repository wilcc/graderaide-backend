const {
  Grade,
  Term,
  Course,
  Student,
} = require('./main.js')

describe('Grade', () => {
  it(`returns an object`, () => {
    const grade1 = Grade();
    expect(typeof grade1).toBe('object');
  })

  it(`has an assignment property set to the first value passed in`, () => {
    const grade1 = Grade('BS Paint');
    const grade2 = Grade('Graderaide');
    expect(grade1.assignment).toBe('BS Paint')
    expect(grade2.assignment).toBe('Graderaide')
  })

  it(`has a score property set to the second value passed in`, () => {
    const grade1 = Grade('BS Paint', 80);
    const grade2 = Grade('Graderaide', 91);
    expect(grade1.score).toBe(80)
    expect(grade2.score).toBe(91)
  })
})

describe('Term', () => {
  it(`returns an object`, () => {
    const term1 = Term();
    expect(typeof term1).toBe('object');
  })

  it(`has an hours property set to the first value passed in`, () => {
    const term1 = Term(300);
    const term2 = Term(350);
    expect(term1.hours).toBe(300)
    expect(term2.hours).toBe(350)
  })

  it(`has a grades property that begins as an empty array`, () => {
    const term1 = Term();
    expect(term1.grades).toEqual([])
  })
})

describe('term.addGrade', () => {
  it(`adds the given grade to its grades array`, () => {
    const term = Term();
    const grade1 = {
      assignment: 'Be Spectacular',
      score: 110,
    }

    const grade2 = {
      assignment: 'Be Horrible',
      score: 0,
    }

    const assignment1 = 'Be Spectacular';
    const score1 = 110;

    const assignment2 = 'Be Horrible';
    const score2 = 0;

    term.addGrade(assignment1, score1)
    term.addGrade(assignment2, score2)
    expect(term.grades).toEqual([grade1, grade2])
  });
})

describe('Course', () => {
  it(`returns an object`, () => {
    const course1 = Course();
    expect(typeof course1).toBe('object');
  })

  it(`has an name property set to the first value passed in`, () => {
    const course1 = Course('Python');
    const course2 = Course('WDI');
    expect(course1.name).toBe('Python')
    expect(course2.name).toBe('WDI')
  })

  it(`has a terms property that begins as an empty array`, () => {
    const course1 = Course();
    expect(course1.terms).toEqual([])
  })
})

describe('course.addTerm', () => {
  it(`adds a term with the given hours to its terms array`, () => {
    const course = Course();
    const term1 = {
      hours: 700,
      grades: [],
    }

    const term2 = {
      hours: 900,
      grades: [],
    }

    course.addTerm(700)
    course.addTerm(900)
    expect(course.terms[0].hours).toBe(700)
    expect(course.terms[1].hours).toBe(900)
    expect(course.terms[0].grades).toEqual([])
    expect(course.terms[1].grades).toEqual([])
  });
})

describe('Student', () => {
  it(`returns an object`, () => {
    const student1 = Student();
    expect(typeof student1).toBe('object');
  })

  it(`has a name property set to the first value passed in`, () => {
    const student1 = Student('Colin');
    const student2 = Student('Mesuara');
    expect(student1.name).toBe('Colin')
    expect(student2.name).toBe('Mesuara')
  })

  it(`has a course property set to the second value passed in`, () => {
    const student1 = Student('Colin', 'WDI');
    const student2 = Student('Mesuara', 'Python');
    expect(student1.course).toBe('WDI')
    expect(student2.course).toBe('Python')
  })

  it(`has a term property set to the third value passed in`, () => {
    const student1 = Student('Colin', 'WDI', 1);
    const student2 = Student('Mesuara', 'Python', 3);
    expect(student1.term).toBe(1)
    expect(student2.term).toBe(3)
  })

  it(`the term property is set to 1 by default`, () => {
    const student1 = Student('Colin', 'WDI');
    const student2 = Student('Mesuara', 'Python');
    expect(student1.term).toBe(1)
    expect(student2.term).toBe(1)
  })

  it(`has a courses property that's set to an empty array`, () => {
    const student1 = Student();
    const student2 = Student();
    expect(student1.courses).toEqual([])
    expect(student2.courses).toEqual([])
  })
})

describe('student.addCourse', () => {
  it(`adds a course with the given name to the student's course list`, () => {
    const course1 = {
      name: 'WDI',
      terms: [],
    }

    const course2 = {
      name: 'Python',
      terms: [],
    }

    const student = Student();

    student.addCourse('WDI');
    student.addCourse('Python');

    expect(student.courses[0].name).toBe('WDI');
    expect(student.courses[1].name).toBe('Python');
    expect(student.courses[0].terms).toEqual([]);
    expect(student.courses[1].terms).toEqual([]);
  })
})

describe('student.getAverage', () => {
  it(`given a course name and term index, finds the mean average of all the grades in that student's course's term.`, () => {
    const student1 = Student();
    student1.courses = [
        {
          name: 'WDI',
          terms: [
            {
              grades: [{score: 50}, {score: 70}, {score: 100}, {score: 20}]
            },
            {
              grades: [{score: 40}, {score: 60}, {score: 90}, {score: 10}]
            }
          ],
        },
        {
          name: 'Python',
          terms: [
            {
              grades: [{score: 55}, {score: 75}, {score: 105}, {score: 25}]
            },
            {
              grades: [{score: 45}, {score: 65}, {score: 95}, {score: 15}]
            }
          ],
        },
      ]

    const student2 = Student();
    student2.courses = [
        {
          name: 'UI',
          terms: [
            {
              grades: [{score: 60}, {score: 80}, {score: 110}, {score: 30}]
            },
            {
              grades: [{score: 50}, {score: 70}, {score: 100}, {score: 20}]
            }
          ],
        },
        {
          name: 'COBOL',
          terms: [
            {
              grades: [{score: 65}, {score: 85}, {score: 115}, {score: 35}]
            },
            {
              grades: [{score: 55}, {score: 75}, {score: 105}, {score: 25}]
            }
          ],
        },
      ]

    expect(student1.getAverage('WDI', 0)).toBe(60);
    expect(student1.getAverage('WDI', 1)).toBe(50);
    expect(student1.getAverage('Python', 1)).toBe(55);
    expect(student2.getAverage('COBOL', 1)).toBe(65);
  })

  it(`given a course name BUT NO TERM, finds the mean average of all the grades in that student's course's current term (don't forget to adjust for 0-based counting!).`, () => {
    const student1 = Student();
    student1.term = 1;
    student1.courses = [
        {
          name: 'WDI',
          terms: [
            {
              grades: [{score: 50}, {score: 70}, {score: 100}, {score: 20}]
            },
            {
              grades: [{score: 40}, {score: 60}, {score: 90}, {score: 10}]
            }
          ],
        },
        {
          name: 'Python',
          terms: [
            {
              grades: [{score: 55}, {score: 75}, {score: 105}, {score: 25}]
            },
            {
              grades: [{score: 45}, {score: 65}, {score: 95}, {score: 15}]
            }
          ],
        },
      ]

    const student2 = Student();
    student2.term = 2;
    student2.courses = [
        {
          name: 'UI',
          terms: [
            {
              grades: [{score: 60}, {score: 80}, {score: 110}, {score: 30}]
            },
            {
              grades: [{score: 50}, {score: 70}, {score: 100}, {score: 20}]
            }
          ],
        },
        {
          name: 'COBOL',
          terms: [
            {
              grades: [{score: 55}, {score: 75}, {score: 105}, {score: 25}]
            },
            {
              grades: [{score: 65}, {score: 85}, {score: 115}, {score: 35}]
            },
          ],
        },
      ]

    expect(student1.getAverage('WDI')).toBe(60);
    expect(student1.getAverage('Python')).toBe(65);
    expect(student2.getAverage('COBOL')).toBe(75);
  })
  it(`given NO PARAMETERS, finds the mean average of all the grades in that student's current course's current term.`, () => {
    const student1 = Student();
    student1.term = 1;
    student1.course = 'Python';
    student1.courses = [
        {
          name: 'WDI',
          terms: [
            {
              grades: [{score: 50}, {score: 70}, {score: 100}, {score: 20}]
            },
            {
              grades: [{score: 40}, {score: 60}, {score: 90}, {score: 10}]
            }
          ],
        },
        {
          name: 'Python',
          terms: [
            {
              grades: [{score: 55}, {score: 75}, {score: 105}, {score: 25}]
            },
            {
              grades: [{score: 45}, {score: 65}, {score: 95}, {score: 15}]
            }
          ],
        },
      ]

    const student2 = Student();
    student2.term = 2;
    student2.course = 'COBOL';
    student2.courses = [
        {
          name: 'UI',
          terms: [
            {
              grades: [{score: 60}, {score: 80}, {score: 110}, {score: 30}]
            },
            {
              grades: [{score: 50}, {score: 70}, {score: 100}, {score: 20}]
            }
          ],
        },
        {
          name: 'COBOL',
          terms: [
            {
              grades: [{score: 55}, {score: 75}, {score: 105}, {score: 25}]
            },
            {
              grades: [{score: 65}, {score: 85}, {score: 115}, {score: 35}]
            },
          ],
        },
      ]

    expect(student1.getAverage()).toBe(65);
    expect(student2.getAverage()).toBe(75);
  })
})
