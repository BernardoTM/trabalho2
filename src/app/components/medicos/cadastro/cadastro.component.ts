import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { Medico } from './../medico.model';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  medico: Medico = {
    crm: '',
    cpf: '',
    nome: '',
    especialidade: '',
    email: '',
    duracao: 30,
  }

   // formulario: FormGroup | undefined;
  

  constructor(/*private forBuilder: FormBuilder,*/
    private cadastroService: CadastroService,
    private router: Router) { 

    }

  ngOnInit(): void {
    /*this.formulario = this.forBuilder.group({
     // nome:["",[Validators.required]]
    })*/
  }

  cadastra(): void{
    if(this.medico.nome == ''){
      this.cadastroService.showMessage('O Nome é um campo obrigatorio');
    }else if(this.medico.crm == '') {
      this.cadastroService.showMessage('O CRM é um campo obrigatorio');
    }else if(this.medico.cpf == '') {
      this.cadastroService.showMessage('O CPF é um campo obrigatorio');
    }else if(this.medico.especialidade == '') {
      this.cadastroService.showMessage('O Especialidade é um campo obrigatorio');
    }else if(this.medico.email == '') {
      this.cadastroService.showMessage('O E-mail é um campo obrigatorio');
    }else if(!this.medico.duracao) {
      this.cadastroService.showMessage('A Duração da Consulta é um campo obrigatorio');
    }else if(this.medico.duracao <=20) {
      this.cadastroService.showMessage('A Consulta deve ter no minimo 20 minutos');
    }else{
      this.cadastroService.create(this.medico).subscribe(() =>{
        this.cadastroService.showMessage('Cadastro efetuado')
        this.router.navigate(['/medicos'])
      })
    }

  }

  cancel(): void{
    this.router.navigate(['/medicos'])
  }

}
