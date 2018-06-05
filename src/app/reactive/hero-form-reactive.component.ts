/* tslint:disable: member-ordering forin */
import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls :['./css.css']
})
export class HeroFormReactiveComponent implements OnInit {
  
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  heroForm: FormGroup;
  
  ngOnInit(){
    this.validar();
  }

  public validar(): void{
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.email,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      
    });
  }
  get name() { return this.heroForm.get('name'); }

}
