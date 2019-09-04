export class BudgetEntry {

    private label:string;

    private amount:number;

    private createdAt: Date;

    private category : string;

    private id: number;

    constructor(id, infos = null){
        this.id = id;
        if(infos){
            this.setInfo(infos);
        }
    }

    public setInfo(infos){
        this.label = infos.label;
        this.amount = infos.amount;
        this.createdAt = infos.createdAt;
        this.category = infos.category;
    }

    public getId() : number{
        return this.id;
    }

    public getLabel():string {
        return this.label;
    }

    public getAmount():number{
        return this.amount;
    }

    public getCategory():string{
        return this.category;
    }

    public getCreatedAt():Date{
        return this.createdAt;
    }

}
