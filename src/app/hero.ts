export interface Hero {
    name: string;
}
  
export const HEROES = [
    {name: 'Dr. IQ'},
    {name: 'Magneta'},
    {name: 'Bombasto'}
];

export class Citizen{
    name: string;
    constructor(){
        this.name = "Something goes here";
    }
}

export interface Citizen{
    firstName: string;
    lastName: String;
    age: number;
}

export const CITIZENS = [
    {firstName: 'Zelalem', lastName: 'Gebremariam', age: 35},
    {firstName: 'Natan', lastName: 'Mekuria', age: 2},
    {firstName: 'Mekuria', lastName: 'Donom', age: 65},
    {firstName: 'Tigist', lastName: 'Geta', age: 33}
]
  