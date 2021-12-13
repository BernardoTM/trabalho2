import { Component, OnInit } from '@angular/core';
import { Medico } from './../medico.model';
import { CadastroService } from './../cadastro.service'
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.scss']
})
export class MedicoReadComponent implements OnInit {

  medicos: Medico[] 
  displayedColumns = ['nome', 'crm', 'email', 'especialidade', 'duracao', 'action']
  constructor(private cadastroService: CadastroService) { 
    this.medicos = [];
  }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(medicos =>{
      this.medicos = medicos
    })
  }

}
