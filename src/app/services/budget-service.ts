import { Injectable } from '@angular/core';
import { BudgetEntry } from '../entity/budget-entry';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private budgetList:Array<BudgetEntry> = []

  constructor() { 
    //Ajout d'une ligne au tableau des dépenses
    let entry = new BudgetEntry(
      (new Date()).getTime(),
      {label: "Loyer",category: "Maison", amount: 700, createdAt : new Date()}
    );

    this.budgetList.push(entry);
  }

  public getBudgetList(): Array<BudgetEntry>{
    console.log(this.budgetList);
    return this.budgetList;
  }

  public addEntry(infos:BudgetEntry){
    this.budgetList.push(infos);
  }
}
