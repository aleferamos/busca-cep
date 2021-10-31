import { Component, OnInit } from '@angular/core';
import { buscarCepService } from 'src/app/shared/services/buscarCep.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  constructor(private buscarCepService:buscarCepService) {
    
  }

  ngOnInit(): void {
    
  }

  cepDigitado:string;

  tipoEndereco:string;
  enderecoNome:string;
  estado:string;
  bairro:string;
  cidade:string;
  ddd:string;
  enderecoCompleto:string;
  temCep:boolean;

  async buscarCep():Promise<void>{
    this.cepDigitado = !!this.cepDigitado ? this.cepDigitado : '';
    
   

    if(this.cepDigitado){
      this.temCep = true;
      
      const ceps = await this.buscarCepService.buscarCep(this.cepDigitado);

      
      this.tipoEndereco = ceps.address_type;
      this.enderecoNome = ceps.address_name;
      this.estado = ceps.state;
      this.bairro = ceps.district;
      this.cidade = ceps.city;
      this.ddd = ceps.ddd;
      this.enderecoCompleto = ceps.address;
    } else {
      this.temCep = false;
    }
    
  }

}
