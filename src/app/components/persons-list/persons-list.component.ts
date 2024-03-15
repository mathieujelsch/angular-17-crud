import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css'
})
export class PersonsListComponent implements OnInit{

  persons?: Person[];
  currentPerson: Person = {};
  currentIndex = -1;
  name = '';

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.retrievePersons();
  }

  retrievePersons(): void {
    this.personService.getAll()
      .subscribe({
        next: (data) => {
          this.persons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
