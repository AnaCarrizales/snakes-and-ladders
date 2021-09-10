export default class Participant 
{
    constructor(name, lugar)
    {
        this.name = name;
        this.lugar = lugar;
    }

    getName()
    {
        return this.name;
    }

    getPlace()
    {
        return this.lugar;
    }

    setName(newName)
    {
        this.name = newName;
        return this.name;
    }

    setPlace(newLugar)
    {
        this.lugar = newLugar;
        return this.lugar;
    }

    actPlace(number)
    {
        this.lugar += number;
        return this.lugar;
    }
}