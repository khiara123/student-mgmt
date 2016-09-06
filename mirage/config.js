export default function () {
  let studentData = {
    data: [{
      type: 'students',
      id: 1,
      attributes: {
        rollnumber: 'A123',
        firstname: 'Ankit',
        lastname: 'Khaira'
      }
    }, {
      type: 'students',
      id: 2,
      attributes: {
        rollnumber: 'B123',
        firstname: 'Ankit',
        lastname: 'Khaira'
      }
    }, {
      type: 'students',
      id: 3,
      attributes: {
        rollnumber: 'c123',
        firstname: 'Ankit',
        lastname: 'Khaira'
      }
    }]
  };

  this.get('/students', function (db,request) {
     if(request.queryParams.id !== undefined) {
      console.log(request.queryParams.id,{data: studentData.data.findBy('id' ,1)});
      return {data: studentData.data.findBy('id' ,1)};
    } else {
       return studentData;
    }
   
  });

  this.post('/students',function(db, request) {
    studentData.data.pushObject(request)
  });

  this.del('/students/:id', function (db,request) {
    console.log('test');
  });
}

