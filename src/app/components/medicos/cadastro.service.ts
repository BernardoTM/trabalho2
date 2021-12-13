import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient} from '@angular/common/http';
import { Medico } from './medico.model';
import { Observable } from 'rxjs';
import { Anamnese } from './medico-read/anamnese.model';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://3c8f-170-239-218-52.ngrok.io"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(medico: Medico): Observable<Medico>{

      return this.http.post<Medico>(this.baseUrl + '/medico/', medico)
  }
  
  createlista(anamnse: Anamnese): Observable<Anamnese>{
    return this.http.post<Anamnese>(this.baseUrl + '/triagem/', anamnse)
 
  }

  read(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.baseUrl + '/medico/')
  }

  readeById(id_medico: string): Observable<Medico> {
    const url = `${this.baseUrl}/${id_medico}`;
    return this.http.get<Medico>(url);
  }

  delete(id_medico: any): Observable<any> {
    const url = `${this.baseUrl}/pessoa/${id_medico}`;
    return this.http.delete<any>(url);
  }

  
}
