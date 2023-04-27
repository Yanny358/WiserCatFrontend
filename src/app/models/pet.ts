export interface Pet {
    id: number
    code : string
    name: string
    petType: PetType
    petFurColor: PetFurColor
    petOriginCountry: PetOriginCountry
  }

export enum PetType {
    Cat = "Cat",
    Dog = "Dog",
    Horse = "Horse",
    Rabbit = "Rabbit",
    Parrot = "Parrot"

}

export enum PetFurColor { 
    Black = "Black",
    White = "White",
    Brown = "Brown",
    Yellow = "Yellow",
    Blue = "Blue",
}

export enum PetOriginCountry {
    Estonia = "Estonia",
    Latvia = "Latvia",
    Lithuania = "Lithuania",
    Finland = "Finland",
    Sweden = "Sweden",
    Norway = "Norway",
}