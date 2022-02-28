package com.irbe7.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.irbe7.test.exception.ResourceNotFoundException;
import com.irbe7.test.model.Student;
import com.irbe7.test.repository.StudentRepository;

@RestController
@RequestMapping("/api/")
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	//@GetMapping("/students")
	@RequestMapping(value = "/students", method = RequestMethod.GET)
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}

	
	@PostMapping(path = "/students")
	public Student add(@RequestBody Student student) {
	    Student student1 = this.studentRepository.save(student);
	    
	    return student1;
	}
	
	//@GetMapping("/students/{id}")
	@RequestMapping(value = "/students/{id}", method = RequestMethod.GET)
	public Student getStudentsById(@PathVariable Long id) {
		
		Student student = studentRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
		return student;
	}
	
	
	//@PutMapping("/students/{id}")
	@RequestMapping(value = "/students/{id}", method = RequestMethod.PUT)
	public Student updateStudent(@PathVariable Long id, @RequestBody Student studentDetails){
		Student student = studentRepository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
		student.setFirstName(studentDetails.getFirstName());
		student.setLastName(studentDetails.getLastName());
		student.setEmail(studentDetails.getEmail());
		Student updatedStudent = studentRepository.save(student);
		return updatedStudent;
	}
	
	
	//@DeleteMapping("/students/{id}")
	@RequestMapping(value = "/students/{id}", method = RequestMethod.DELETE)
	public void deleteStudent(@PathVariable Long id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
		studentRepository.delete(student);
	}	
}	
