import { test } from 'qunit';
import moduleForAcceptance from 'student-mgmt/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | student');

test('visiting /', function(assert) {
   visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('Get student length', function(assert) {
   server.create('student');
   visit('/student');
  
  andThen(function() { 	
    assert.equal(find('.gridtable tr').length, 4, 'should see 3 listings');
  });
});

test('Get add new link', function(assert) {
   
   visit('/student');
  
  andThen(function() {  
    assert.equal(find('.linkto').text(), 'Add New Student');
  });
});

test('test visit new url', function(assert) {
   
   visit('/student');
  click(".linkto")
  andThen(function() {  
    assert.equal(currentURL(), '/student/new');
  });
});

test('test visit Add new url', function(assert) {
   visit('/student/new');
  andThen(function() {  
    assert.equal(currentURL(), '/student/new');
  });
});
test('click on save button', function(assert) {
   visit('/student/new');
  andThen(function() {  
     assert.equal(find('.gridtable tr').length,find('.gridtable tr').length , 'should see 5 listings')
  });
});