import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: number;
  //cadastro: boolean = true; //FormGroup;
  generos: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
