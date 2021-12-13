import { Component, OnInit } from '@angular/core';
import { Anamnese } from './../medico-read/anamnese.model';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  anamnese: Anamnese ={
    idPaciente: 1,
    queixaPrincipal: '',
    historicoDoencaAtual: '',
    alergia: '',
    historicoFamiliar: '',
    habitosVida: ''
  }

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  ngOnInit(): void {}

  cadastralista(){
    if(this.anamnese.queixaPrincipal == '') {
      this.cadastroService.showMessage('A queicha é um campo obrigatorio');
    }else{
      this.cadastroService.createlista(this.anamnese).subscribe(() =>{
      this.cadastroService.showMessage('Triagem efetuado')
      this.router.navigate([''])
      })
    }

  }

  cancel(){
    this.router.navigate([''])
  }

}
