import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Medico } from './../medico.model';

@Component({
  selector: 'app-mededico-delete',
  templateUrl: './mededico-delete.component.html',
  styleUrls: ['./mededico-delete.component.scss']
})
export class MededicoDeleteComponent implements OnInit {

  constructor(   
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute) {
    
     }

  ngOnInit(): void {

  }

  delete(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.cadastroService.delete(this.route.snapshot.paramMap.get('id')).subscribe(() => {
    this.cadastroService.showMessage("Medico excluido com sucesso!");
    this.router.navigate(["/medicos"]);
     });
  }

  cancel(): void {
    this.router.navigate(["/medicos"]);
  }

}
