import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medicos-crud',
  templateUrl: './medicos-crud.component.html',
  styleUrls: ['./medicos-crud.component.scss']
})
export class MedicosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCadastro(): void{
    this.router.navigate(['/cadastroMedico'])
  }

}
